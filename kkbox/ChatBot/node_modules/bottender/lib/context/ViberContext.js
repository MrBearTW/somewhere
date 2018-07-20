"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _delay = _interopRequireDefault(require("delay"));

var _warning = _interopRequireDefault(require("warning"));

var _messagingApiViber = require("messaging-api-viber");

var _Context = _interopRequireDefault(require("./Context"));

var _ViberEvent = _interopRequireDefault(require("./ViberEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ViberContext extends _Context.default {
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

    _defineProperty(this, "_session", this.session);
  }
  /**
   * The name of the platform.
   *
   */


  get platform() {
    return 'viber';
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
   * Send text to the owner of the session.
   *
   */


  async sendText(text, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'sendText: should not be called in context without session');
      return;
    }

    this._isHandled = true;
    return this._client.sendText(this._session.user.id, text, options);
  }
  /**
   * Get user details from the owner of the session.
   *
   */


  async getUserDetails() {
    if (!this._session) {
      (0, _warning.default)(false, 'getUserDetails: should not be called in context without session');
      return null;
    }

    return this._client.getUserDetails(this._session.user.id);
  }
  /**
   * Get user online status from the owner of the session.
   *
   */


  async getOnlineStatus() {
    if (!this._session) {
      (0, _warning.default)(false, 'getOnlineStatus: should not be called in context without session');
      return null;
    }

    const status = await this._client.getOnlineStatus([this._session.user.id]);
    return status[0];
  }

}

const sendMethods = ['sendMessage', 'sendPicture', 'sendVideo', 'sendFile', 'sendContact', 'sendLocation', 'sendURL', 'sendSticker', 'sendCarouselContent'];
sendMethods.forEach(method => {
  Object.defineProperty(ViberContext.prototype, `${method}`, {
    enumerable: false,
    configurable: true,
    writable: true,

    async value(...args) {
      if (!this._session) {
        (0, _warning.default)(false, `${method}: should not be called in context without session`);
        return;
      }

      this._isHandled = true;
      return this._client[method](this._session.user.id, ...args);
    }

  });
});
var _default = ViberContext;
exports.default = _default;