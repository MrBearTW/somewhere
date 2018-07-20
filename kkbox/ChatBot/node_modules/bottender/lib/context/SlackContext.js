"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _delay = _interopRequireDefault(require("delay"));

var _warning = _interopRequireDefault(require("warning"));

var _messagingApiSlack = require("messaging-api-slack");

var _Context = _interopRequireDefault(require("./Context"));

var _SlackEvent = _interopRequireDefault(require("./SlackEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SlackContext extends _Context.default {
  constructor({
    client,
    event,
    session,
    initialState,
    requestContext
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
  }
  /**
   * The name of the platform.
   *
   */


  get platform() {
    return 'slack';
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
   * Sends a message to the channel of the session.
   *
   * https://api.slack.com/methods/chat.postMessage
   */


  postMessage(message, options) {
    const channelId = this._getChannelIdFromSession();

    if (!channelId) {
      (0, _warning.default)(false, 'postMessage: should not be called in context without session');
      return Promise.resolve();
    }

    this._isHandled = true;
    return this._client.postMessage(channelId, message, _objectSpread({
      thread_ts: this._event.rawEvent.thread_ts
    }, options));
  }
  /**
   * Sends an ephemeral message to the session owner.
   *
   * https://api.slack.com/methods/chat.postMessage
   */


  postEphemeral(message, options = {}) {
    const channelId = this._getChannelIdFromSession();

    if (!channelId) {
      (0, _warning.default)(false, 'postMessage: should not be called in context without session');
      return Promise.resolve();
    }

    this._isHandled = true;
    return this._client.postEphemeral(channelId, // $FlowFixMe
    this._session.user.id, message, options);
  }
  /**
   * Send text to the owner of the session.
   *
   */


  sendText(text, options) {
    return this.postMessage(text, options);
  } // FIXME: this is to fix type checking


  _getChannelIdFromSession() {
    if (!this._session) return null;

    if (typeof this._session.channel === 'object' && this._session.channel && this._session.channel.id && typeof this._session.channel.id === 'string') {
      return this._session.channel.id;
    }

    return null;
  }

}

exports.default = SlackContext;