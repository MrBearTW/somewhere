"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _delay = _interopRequireDefault(require("delay"));

var _warning = _interopRequireDefault(require("warning"));

var _messagingApiTelegram = require("messaging-api-telegram");

var _Context = _interopRequireDefault(require("./Context"));

var _TelegramEvent = _interopRequireDefault(require("./TelegramEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TelegramContext extends _Context.default {
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
    return 'telegram';
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


  async sendText(text, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'sendText: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.sendMessage(chatId, text, options);
  }

  _getChatId() {
    if (this._event.isMessage) {
      return this._event.message.chat.id;
    }

    if (this._event.isEditedMessage) {
      return this._event.editedMessage.chat.id;
    }

    if (this._event.isChannelPost) {
      return this._event.channelPost.chat.id;
    }

    if (this._event.isEditedChannelPost) {
      return this._event.editedChannelPost.chat.id;
    }

    if (this._event.isInlineQuery) {
      return this._event.inlineQuery.from.id;
    }

    if (this._event.isChosenInlineResult) {
      return this._event.chosenInlineResult.from.id;
    }

    if (this._event.isCallbackQuery && this._event.callbackQuery.message) {
      return this._event.callbackQuery.message.chat.id;
    }

    if (this._event.isShippingQuery) {
      return this._event.shippingQuery.from.id;
    }

    if (this._event.isPreCheckoutQuery) {
      return this._event.preCheckoutQuery.from.id;
    }

    if (this._session) {
      return this._session.user.id;
    }

    return null;
  }

  async answerShippingQuery(ok, options) {
    if (!this._event.isShippingQuery) {
      (0, _warning.default)(false, 'answerShippingQuery: should only be called to answer ShippingQuery event');
      return;
    }

    this._isHandled = true;
    const shippingQueryId = this._event.shippingQuery.id;
    return this._client.answerShippingQuery(shippingQueryId, ok, options);
  }

  async answerPreCheckoutQuery(ok, options) {
    if (!this._event.isPreCheckoutQuery) {
      (0, _warning.default)(false, 'answerPreCheckoutQuery: should only be called to answer PreCheckoutQuery event');
      return;
    }

    this._isHandled = true;
    const preCheckoutQueryId = this._event.preCheckoutQuery.id;
    return this._client.answerPreCheckoutQuery(preCheckoutQueryId, ok, options);
  }

  async answerInlineQuery(results, options) {
    if (!this._event.isInlineQuery) {
      (0, _warning.default)(false, 'answerInlineQuery: should only be called to answer InlineQuery event');
      return;
    }

    this._isHandled = true;
    const inlineQueryId = this._event.inlineQuery.id;
    return this._client.answerInlineQuery(inlineQueryId, results, options);
  }

  async getUserProfilePhotos(options) {
    if (!this._session) {
      (0, _warning.default)(false, 'getUserProfilePhotos: should not be called in context without session');
      return null;
    }

    return this._client.getUserProfilePhotos(this.session.user.id, options);
  }

  async getChat() {
    if (!this._session) {
      (0, _warning.default)(false, 'getChat: should not be called in context without session');
      return null;
    }

    const chatId = this._getChatId();

    return this._client.getChat(chatId);
  }

  async getChatAdministrators() {
    if (!this._session) {
      (0, _warning.default)(false, 'getChatAdministrators: should not be called in context without session');
      return null;
    }

    const chatId = this._getChatId();

    return this._client.getChatAdministrators(chatId);
  }

  async getChatMembersCount() {
    if (!this._session) {
      (0, _warning.default)(false, 'getChatMembersCount: should not be called in context without session');
      return null;
    }

    const chatId = this._getChatId();

    return this._client.getChatMembersCount(chatId);
  }

  async getChatMember(userId) {
    if (!this._session) {
      (0, _warning.default)(false, 'getChatMember: should not be called in context without session');
      return null;
    }

    const chatId = this._getChatId();

    return this._client.getChatMember(chatId, userId);
  }

  async getGameHighScores(options) {
    if (!this._session) {
      (0, _warning.default)(false, 'getGameHighScores: should not be called in context without session');
      return null;
    }

    const chatId = this._getChatId();

    return this._client.getGameHighScores(chatId, options);
  }

  async editMessageText(text, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'editMessageText: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.editMessageText(text, _objectSpread({
      chat_id: chatId
    }, options));
  }

  async editMessageCaption(caption, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'editMessageCaption: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.editMessageCaption(caption, _objectSpread({
      chat_id: chatId
    }, options));
  }

  async editMessageReplyMarkup(replyMarkup, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'editMessageReplyMarkup: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.editMessageReplyMarkup(replyMarkup, _objectSpread({
      chat_id: chatId
    }, options));
  }

  async deleteMessage(messageId) {
    if (!this._session) {
      (0, _warning.default)(false, 'deleteMessage: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.deleteMessage(chatId, messageId);
  }

  async editMessageLiveLocation(location, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'editMessageLiveLocation: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.editMessageLiveLocation(location, _objectSpread({
      chat_id: chatId
    }, options));
  }

  async stopMessageLiveLocation(options) {
    if (!this._session) {
      (0, _warning.default)(false, 'stopMessageLiveLocation: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.stopMessageLiveLocation(_objectSpread({
      chat_id: chatId
    }, options));
  }

  async forwardMessageFrom(fromChatId, messageId, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'forwardMessageFrom: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.forwardMessage(chatId, fromChatId, messageId, options);
  }

  async forwardMessageTo(toChatId, messageId, options) {
    if (!this._session) {
      (0, _warning.default)(false, 'forwardMessageTo: should not be called in context without session');
      return;
    }

    this._isHandled = true;

    const chatId = this._getChatId();

    return this._client.forwardMessage(toChatId, chatId, messageId, options);
  }

}

const sendMethods = [// Send API
'sendMessage', 'sendPhoto', 'sendAudio', 'sendDocument', 'sendSticker', 'sendVideo', 'sendVoice', 'sendVideoNote', 'sendMediaGroup', 'sendLocation', 'sendVenue', 'sendContact', 'sendChatAction', // Group API
'kickChatMember', 'unbanChatMember', 'restrictChatMember', 'promoteChatMember', 'exportChatInviteLink', 'setChatPhoto', 'deleteChatPhoto', 'setChatTitle', 'setChatDescription', 'setChatStickerSet', 'deleteChatStickerSet', 'pinChatMessage', 'unpinChatMessage', 'leaveChat', // Payments API
'sendInvoice', // Game API
'sendGame', 'setGameScore'];
sendMethods.forEach(method => {
  Object.defineProperty(TelegramContext.prototype, `${method}`, {
    enumerable: false,
    configurable: true,
    writable: true,

    async value(...args) {
      if (!this._session) {
        (0, _warning.default)(false, `${method}: should not be called in context without session`);
        return;
      }

      this._isHandled = true;

      const chatId = this._getChatId();

      return this._client[method](chatId, ...args);
    }

  });
});
var _default = TelegramContext;
exports.default = _default;