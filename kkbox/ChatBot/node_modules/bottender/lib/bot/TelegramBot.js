"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Bot = _interopRequireDefault(require("./Bot"));

var _TelegramConnector = _interopRequireDefault(require("./TelegramConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TelegramBot extends _Bot.default {
  constructor({
    accessToken,
    sessionStore,
    sync
  }) {
    const connector = new _TelegramConnector.default({
      accessToken
    });
    super({
      connector,
      sessionStore,
      sync
    });

    _defineProperty(this, "_offset", void 0);

    _defineProperty(this, "_shouldGetUpdates", false);
  }

  get offset() {
    return this._offset;
  }

  async createLongPollingRuntime(options = {}) {
    this._shouldGetUpdates = true;
    this._offset = options.offset;
    const handler = this.createRequestHandler();
    /* eslint-disable no-await-in-loop */

    while (this._shouldGetUpdates) {
      try {
        const params = this._offset ? _objectSpread({}, options, {
          offset: this._offset
        }) : options;
        const updates = await this.connector.client.getUpdates(params);

        if (updates.length > 0) {
          for (let i = 0; i < updates.length; i++) {
            await handler(updates[i]);
          }

          const highestUpdateId = Math.max(...updates.map(update => update.update_id));
          this._offset = highestUpdateId + 1;
        }
      } catch (err) {
        console.error(err);
      }
    }
    /* eslint-enable no-await-in-loop */

  }

  stop() {
    this._shouldGetUpdates = false;
  }

}

exports.default = TelegramBot;