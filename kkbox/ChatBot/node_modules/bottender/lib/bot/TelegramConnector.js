"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _messagingApiTelegram = require("messaging-api-telegram");

var _TelegramContext = _interopRequireDefault(require("../context/TelegramContext"));

var _TelegramEvent = _interopRequireDefault(require("../context/TelegramEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TelegramConnector {
  constructor({
    accessToken,
    client
  }) {
    _defineProperty(this, "_client", void 0);

    this._client = client || _messagingApiTelegram.TelegramClient.connect(accessToken);
  }

  _getRawEventFromRequest(body) {
    return body;
  }

  get platform() {
    return 'telegram';
  }

  get client() {
    return this._client;
  }

  getUniqueSessionKey(body) {
    if (body.message) {
      return `${body.message.chat.id}`;
    }

    if (body.edited_message) {
      return `${body.edited_message.chat.id}`;
    }

    if (body.channel_post) {
      return `${body.channel_post.chat.id}`;
    }

    if (body.edited_channel_post) {
      return `${body.edited_channel_post.chat.id}`;
    }

    if (body.inline_query) {
      return `${body.inline_query.from.id}`;
    }

    if (body.chosen_inline_result) {
      return `${body.chosen_inline_result.from.id}`;
    }

    if (body.callback_query) {
      if (body.callback_query.message) {
        return `${body.callback_query.message.chat.id}`;
      }

      return `${body.callback_query.from.id}`;
    }

    if (body.shipping_query) {
      return `${body.shipping_query.from.id}`;
    }

    if (body.pre_checkout_query) {
      return `${body.pre_checkout_query.from.id}`;
    }

    return '';
  }

  async updateSession(session, body) {
    if (body.channel_post) {
      session.channel = body.channel_post.chat;
    } else if (body.edited_channel_post) {
      session.channel = body.edited_channel_post.chat;
    }

    if (session.channel) {
      session.channel._updatedAt = new Date().toISOString();
      Object.freeze(session.channel);
    }

    Object.defineProperty(session, 'channel', {
      configurable: false,
      enumerable: true,
      writable: false,
      value: session.channel
    });

    if (body.message && body.message.chat.type === 'group') {
      session.group = body.message.chat;
    } else if (body.edited_message && body.edited_message.chat.type === 'group') {
      session.group = body.edited_message.chat;
    } else if (body.callback_query && body.callback_query.message && body.callback_query.message.chat.type === 'group') {
      session.group = body.callback_query.message.chat;
    }

    if (session.group) {
      session.group._updatedAt = new Date().toISOString();
      Object.freeze(session.group);
    }

    Object.defineProperty(session, 'group', {
      configurable: false,
      enumerable: true,
      writable: false,
      value: session.group
    });

    if (body.message) {
      session.user = body.message.from;
    } else if (body.edited_message) {
      session.user = body.edited_message.from;
    } else if (body.inline_query) {
      session.user = body.inline_query.from;
    } else if (body.chosen_inline_result) {
      session.user = body.chosen_inline_result.from;
    } else if (body.callback_query) {
      session.user = body.callback_query.from;
    } else if (body.shipping_query) {
      session.user = body.shipping_query.from;
    } else if (body.pre_checkout_query) {
      session.user = body.pre_checkout_query.from;
    }

    if (session.user) {
      session.user._updatedAt = new Date().toISOString();
      Object.freeze(session.user);
    }

    Object.defineProperty(session, 'user', {
      configurable: false,
      enumerable: true,
      writable: false,
      value: session.user
    });
  }

  mapRequestToEvents(body) {
    const rawEvent = this._getRawEventFromRequest(body);

    return [new _TelegramEvent.default(rawEvent)];
  }

  createContext(params) {
    return new _TelegramContext.default(_objectSpread({}, params, {
      client: this._client
    }));
  }

}

exports.default = TelegramConnector;