const { MessengerBatch } = require('messaging-api-messenger');

const { isError613 } = require('../');
const MessengerBatchQueue = require('../MessengerBatchQueue');

const image = {
  attachment: {
    type: 'image',
    payload: {
      url:
        'https://cdn.free.com.tw/blog/wp-content/uploads/2014/08/Placekitten480-g.jpg',
    },
  },
};

let q;

function setup(options = {}) {
  const timeoutId = 'timeoutId';
  setTimeout.mockReturnValue(timeoutId);
  const client = {
    sendBatch: jest.fn(),
  };
  q = new MessengerBatchQueue(client, options);
  return {
    client,
    timeoutId,
  };
}

afterEach(() => {
  q.stop();
});

it('should push psid and messages to queue', () => {
  setup();

  q.push(MessengerBatch.sendMessage('1412611362105802', image));

  expect(q.queue).toHaveLength(1);
});

it('should flush when length >= 50', async () => {
  const { client } = setup();

  const responses = Array(50)
    .fill(0)
    .map(() => ({
      code: 200,
      body: '{"data": []}',
    }));

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  for (let i = 0; i < 49; i++) {
    // eslint-disable-next-line no-await-in-loop
    q.push(MessengerBatch.sendText('1412611362105802', 'hello'));
  }

  q.push(MessengerBatch.sendMessage('1412611362105802', image));

  expect(client.sendBatch).toHaveBeenCalledTimes(1);
  expect(client.sendBatch.mock.calls[0][0]).toHaveLength(50);

  expect(client.sendBatch.mock.calls[0][0][49]).toEqual({
    body: {
      message: {
        attachment: {
          payload: {
            url:
              'https://cdn.free.com.tw/blog/wp-content/uploads/2014/08/Placekitten480-g.jpg',
          },
          type: 'image',
        },
      },
      messaging_type: 'UPDATE',
      recipient: { id: '1412611362105802' },
    },
    method: 'POST',
    relative_url: 'me/messages',
  });

  expect(q.queue).toHaveLength(0);
});

it('should flush with 1000 timeout', async () => {
  const { client } = setup();

  const responses = [
    {
      code: 200,
      body: '{"data": []}',
    },
  ];

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  q.push(MessengerBatch.sendMessage('1412611362105802', image));

  expect(q.queue).toHaveLength(1);

  const fn = setTimeout.mock.calls[0][0];

  await fn();

  expect(client.sendBatch).toHaveBeenCalledTimes(1);
  expect(client.sendBatch.mock.calls[0][0]).toEqual([
    {
      body: {
        message: {
          attachment: {
            payload: {
              url:
                'https://cdn.free.com.tw/blog/wp-content/uploads/2014/08/Placekitten480-g.jpg',
            },
            type: 'image',
          },
        },
        messaging_type: 'UPDATE',
        recipient: { id: '1412611362105802' },
      },
      method: 'POST',
      relative_url: 'me/messages',
    },
  ]);
});

it('should not send batch when with empty array', async () => {
  const { client } = setup();

  const responses = [
    {
      code: 200,
      body: '{"data": []}',
    },
  ];

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  const fn = setTimeout.mock.calls[0][0];

  await fn();

  expect(client.sendBatch).not.toBeCalled();
});

it('should reset timeout when flush', async () => {
  const { client, timeoutId } = setup();

  const responses = Array(50)
    .fill(0)
    .map(() => ({
      code: 200,
      body: '{"data": []}',
    }));

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  for (let i = 0; i < 49; i++) {
    // eslint-disable-next-line no-await-in-loop
    q.push(MessengerBatch.sendText('1412611362105802', 'hello'));
  }

  q.push(MessengerBatch.sendMessage('1412611362105802', image));

  expect(clearTimeout).toHaveBeenCalledTimes(1);
  expect(clearTimeout).toHaveBeenLastCalledWith(timeoutId);
  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

it('should throw request and response', async () => {
  const { client } = setup();

  const responses = [
    {
      code: 400,
      body:
        '{"error": {"message": "(#100) Param recipient[id] must be a valid ID string (e.g., \\"123\\")"} }',
    },
  ];

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  let error;

  q.push(MessengerBatch.sendMessage('1412611362105802', image)).catch(err => {
    error = err;
  });

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  const fn = setTimeout.mock.calls[0][0];

  await fn();

  expect(error).toBeDefined();
  expect(error.request).toEqual({
    body: {
      message: {
        attachment: {
          payload: {
            url:
              'https://cdn.free.com.tw/blog/wp-content/uploads/2014/08/Placekitten480-g.jpg',
          },
          type: 'image',
        },
      },
      messaging_type: 'UPDATE',
      recipient: { id: '1412611362105802' },
    },
    method: 'POST',
    relative_url: 'me/messages',
  });
  expect(error.response).toEqual({
    body:
      '{"error": {"message": "(#100) Param recipient[id] must be a valid ID string (e.g., \\"123\\")"} }',
    code: 400,
  });
});

it('should support delay option', async () => {
  const { client } = setup({ delay: 500 });

  const responses = [
    {
      code: 200,
      body: '{"data": []}',
    },
  ];

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
});

it('should support retryTimes option', async () => {
  const { client } = setup({ retryTimes: 3 });

  const responses = [
    {
      code: 400,
      body:
        '{"error": {"message": "(#100) Param recipient[id] must be a valid ID string (e.g., \\"123\\")"} }',
    },
  ];

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  let error;

  q.push(MessengerBatch.sendMessage('1412611362105802', image)).catch(err => {
    error = err;
  });

  const fn = setTimeout.mock.calls[0][0];

  await fn();
  expect(error).not.toBeDefined();

  await fn();
  expect(error).not.toBeDefined();

  await fn();
  expect(error).not.toBeDefined();

  await fn();
  expect(error).toBeDefined();
});

it('should support shouldRetry option', async () => {
  const { client } = setup({
    retryTimes: 1,
    shouldRetry: isError613,
  });

  const responses = [
    {
      code: 400,
      body:
        '{"error": {"message": "(#100) Param recipient[id] must be a valid ID string (e.g., \\"123\\")"} }',
    },
    {
      code: 400,
      body:
        '{"error": {"message": "(#613) Calls to this api have exceeded the rate limit."} }',
    },
  ];

  client.sendBatch.mockReturnValue(Promise.resolve(responses));

  let error1;
  const request1 = MessengerBatch.sendMessage('1412611362105802', image);

  q.push(request1).catch(err => {
    error1 = err;
  });

  let error2;
  const request2 = MessengerBatch.sendMessage('1412611362105802', image);

  q.push(request2).catch(err => {
    error2 = err;
  });

  expect(q.queue).toHaveLength(2);

  const fn = setTimeout.mock.calls[0][0];

  await fn();
  expect(q.queue).toHaveLength(1);
  expect(client.sendBatch).toHaveBeenCalledTimes(1);
  expect(client.sendBatch.mock.calls[0][0]).toHaveLength(2);
  expect(client.sendBatch.mock.calls[0][0][0]).toBe(request1);
  expect(client.sendBatch.mock.calls[0][0][1]).toBe(request2);
  expect(error1).toBeDefined();
  expect(error2).not.toBeDefined();

  await fn();
  expect(q.queue).toHaveLength(0);
  expect(client.sendBatch).toHaveBeenCalledTimes(2);
  expect(client.sendBatch.mock.calls[1][0]).toHaveLength(1);
  expect(client.sendBatch.mock.calls[1][0][0]).toBe(request2);

  expect(error2).toBeDefined();
});

it('should reject every promise when call batch failed', async () => {
  const { client } = setup();

  client.sendBatch.mockImplementation(() => {
    throw new Error('boom');
  });

  let error1;
  const request1 = MessengerBatch.sendMessage('1412611362105802', image);

  q.push(request1).catch(err => {
    error1 = err;
  });

  let error2;
  const request2 = MessengerBatch.sendMessage('1412611362105802', image);

  q.push(request2).catch(err => {
    error2 = err;
  });

  const fn = setTimeout.mock.calls[0][0];

  await fn().catch(() => {});

  expect(error1).toBeDefined();
  expect(error2).toBeDefined();
});
