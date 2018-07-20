const BatchRequestError = require('./BatchRequestError');

const MAX_BATCH_SIZE = 50;

const alwaysTrue = () => true;

module.exports = class MessengerBatchQueue {
  constructor(client, options = {}) {
    this._client = client;
    this._queue = [];
    this._delay = options.delay || 1000;
    this._shouldRetry = options.shouldRetry || alwaysTrue;
    this._retryTimes = options.retryTimes || 0;

    this._timeout = setTimeout(() => this.flush(), this._delay);
  }

  get queue() {
    return this._queue;
  }

  push(request) {
    const promise = new Promise((resolve, reject) => {
      this._queue.push({ request, resolve, reject });
    });

    if (this._queue.length >= MAX_BATCH_SIZE) {
      this.flush();
    }

    return promise;
  }

  async flush() {
    const items = this._queue.splice(0, MAX_BATCH_SIZE);

    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => this.flush(), this._delay);

    if (items.length < 1) return;

    try {
      const responses = await this._client.sendBatch(items.map(i => i.request));

      items.forEach(({ request, resolve, reject, retry = 0 }, i) => {
        const response = responses[i];
        const err = { response, request };
        if (response.code === 200) {
          resolve(JSON.parse(response.body));
        } else if (retry < this._retryTimes && this._shouldRetry(err)) {
          this._queue.push({ request, resolve, reject, retry: retry + 1 });
        } else {
          reject(new BatchRequestError(err));
        }
      });
    } catch (err) {
      items.forEach(({ request, resolve, reject, retry = 0 }) => {
        if (retry < this._retryTimes && this._shouldRetry(err)) {
          this._queue.push({ request, resolve, reject, retry: retry + 1 });
        } else {
          reject(err);
        }
      });
    }
  }

  stop() {
    clearTimeout(this._timeout);
  }
};
