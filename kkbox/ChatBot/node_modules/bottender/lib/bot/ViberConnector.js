"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _messagingApiViber = require("messaging-api-viber");

var _deepObjectDiff = require("deep-object-diff");

var _ViberContext = _interopRequireDefault(require("../context/ViberContext"));

var _ViberEvent = _interopRequireDefault(require("../context/ViberEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ViberConnector {
  constructor({
    accessToken,
    client
  }) {
    _defineProperty(this, "_accessToken", void 0);

    _defineProperty(this, "_client", void 0);

    this._accessToken = accessToken;
    this._client = client || _messagingApiViber.ViberClient.connect(accessToken);
  }

  _getRawEventFromRequest(body) {
    return body;
  }

  get platform() {
    return 'viber';
  }

  get client() {
    return this._client;
  }

  getUniqueSessionKey(body) {
    switch (body.event) {
      case 'subscribed':
      case 'conversation_started':
        return body.user.id;

      case 'unsubscribed':
      case 'delivered':
      case 'seen':
      case 'failed':
        return body.user_id;

      case 'message':
        return body.sender.id;

      default:
        return '';
    }
  }

  async updateSession(session, body) {
    let user;

    switch (body.event) {
      case 'subscribed':
      case 'conversation_started':
        user = body.user;
        break;

      case 'unsubscribed':
      case 'delivered':
      case 'seen':
      case 'failed':
        user = {
          id: body.user_id
        };
        break;

      case 'message':
        user = body.sender;
        break;

      default:
        break;
    }

    if (Object.keys((0, _deepObjectDiff.addedDiff)(session.user || {}, user)).length > 0) {
      session.user = _objectSpread({}, session.user, user);
      session.user._updatedAt = new Date().toISOString();
    }

    Object.freeze(session.user);
    Object.defineProperty(session, 'user', {
      configurable: false,
      enumerable: true,
      writable: false,
      value: session.user
    });
  }

  mapRequestToEvents(body) {
    const rawEvent = this._getRawEventFromRequest(body);

    return [new _ViberEvent.default(rawEvent)];
  }

  createContext(params) {
    return new _ViberContext.default(_objectSpread({}, params, {
      client: this._client
    }));
  }

  verifySignature(rawBody, signature) {
    const hashBufferFromBody = _crypto.default.createHmac('sha256', this._accessToken || '').update(rawBody).digest();

    const bufferFromSignature = Buffer.from(signature, 'hex'); // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal

    if (bufferFromSignature.length !== hashBufferFromBody.length) {
      return false;
    } // wait this PR to be merged
    // https://github.com/facebook/flow/pull/4974
    // $FlowExpectedError


    return _crypto.default.timingSafeEqual(bufferFromSignature, hashBufferFromBody);
  }

}

exports.default = ViberConnector;