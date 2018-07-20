"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _delay = _interopRequireDefault(require("delay"));

var _Context = _interopRequireDefault(require("./Context"));

var _TestEvent = _interopRequireDefault(require("./TestEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const methodBlackList = ['then', // promise
'handlerDidEnd'];

class TestContext extends _Context.default {
  constructor({
    client,
    event,
    session,
    initialState,
    requestContext,
    fallbackMethods
  }) {
    super({
      client,
      event,
      session,
      initialState,
      requestContext
    });

    _defineProperty(this, "_client", this._client);

    _defineProperty(this, "_event", this._event);

    _defineProperty(this, "_session", this._session);

    if (fallbackMethods) {
      // $FlowExpectedError
      return new Proxy(this, {
        get(target, key) {
          // https://github.com/facebook/flow/issues/6181
          // https://github.com/facebook/flow/issues/6321
          // $FlowFixMe: Cannot get `target[key]` because an indexer property is missing in `TestContext` [1].
          if (typeof target[key] !== 'undefined') {
            // $FlowFixMe: Cannot get `target[key]` because an indexer property is missing in `TestContext` [1].
            return target[key];
          }

          if (methodBlackList.some(method => method === key)) return;
          return async (...args) => {
            await target._methodMissing(key, args);
          };
        }

      });
    }
  }
  /**
   * The name of the platform.
   *
   */


  get platform() {
    return 'test';
  }
  /**
   * Delay and show indicators for milliseconds.
   *
   */


  async typing(milliseconds) {
    if (milliseconds > 0) {
      await (0, _delay.default)(milliseconds);
    }
  }
  /**
   * Send text to the owner of then session.
   *
   */


  async sendText(text) {
    return this._methodMissing('sendText', [text]);
  }

  async _methodMissing(method, args) {
    this._isHandled = true;

    this._client.callMethod(method, args);
  }

}

exports.default = TestContext;