"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MessengerEvent {
  constructor(rawEvent, options = {}) {
    _defineProperty(this, "_rawEvent", void 0);

    _defineProperty(this, "_isStandby", void 0);

    _defineProperty(this, "_pageId", void 0);

    this._rawEvent = rawEvent;
    this._isStandby = options.isStandby || false;
    this._pageId = options.pageId;
  }
  /**
   * Underlying raw event from Messenger.
   *
   */


  get rawEvent() {
    return this._rawEvent;
  }
  /**
   * Determine if the event is a message event.
   *
   */


  get isMessage() {
    return !!this._rawEvent.message && typeof this._rawEvent.message === 'object';
  }
  /**
   * The message object from Messenger raw event.
   *
   */


  get message() {
    return this._rawEvent.message;
  }
  /**
   * Determine if the event is a message event which includes text.
   *
   */


  get isText() {
    return this.isMessage && typeof this.message.text === 'string';
  }
  /**
   * The text string from Messenger raw event.
   *
   */


  get text() {
    if (this.isText) {
      return this.message.text;
    }

    return null;
  }
  /**
   * Determine if the event has any attachments.
   *
   */


  get hasAttachment() {
    return this.isMessage && !!this.message.attachments && this.message.attachments.length > 0;
  }
  /**
   * The attachments array from Messenger raw event.
   *
   */


  get attachments() {
    return this.message ? this.message.attachments : null;
  }
  /**
   * Determine if the event is a message event which includes image attachment.
   *
   */


  get isImage() {
    return this.hasAttachment && this.attachments[0].type === 'image';
  }
  /**
   * The image attachment from Messenger raw event.
   *
   */


  get image() {
    return this.isImage ? this.attachments[0].payload : null;
  }
  /**
   * Determine if the event is a message event which includes audio attachment.
   *
   */


  get isAudio() {
    return this.hasAttachment && this.attachments[0].type === 'audio';
  }
  /**
   * The audio attachment from Messenger raw event.
   *
   */


  get audio() {
    return this.isAudio ? this.attachments[0].payload : null;
  }
  /**
   * Determine if the event is a message event which includes video attachment.
   *
   */


  get isVideo() {
    return this.hasAttachment && this.attachments[0].type === 'video';
  }
  /**
   * The video attachment from Messenger raw event.
   *
   */


  get video() {
    return this.isVideo ? this.attachments[0].payload : null;
  }
  /**
   * Determine if the event is a message event which includes location attachment.
   *
   */


  get isLocation() {
    return this.hasAttachment && this.attachments[0].type === 'location';
  }
  /**
   * The location attachment from Messenger raw event.
   *
   */


  get location() {
    return this.isLocation ? this.attachments[0].payload : null;
  }
  /**
   * Determine if the event is a message event which includes file attachment.
   *
   */


  get isFile() {
    return this.hasAttachment && this.attachments[0].type === 'file';
  }
  /**
   * The file attachment from Messenger raw event.
   *
   */


  get file() {
    return this.isFile ? this.attachments[0].payload : null;
  }
  /**
   * Determine if the event is a message event which includes fallback attachment.
   *
   */


  get isFallback() {
    return this.hasAttachment && this.attachments[0].type === 'fallback';
  }
  /**
   * The fallback attachment from Messenger raw event.
   *
   */


  get fallback() {
    return this.isFallback ? this.attachments[0] : null;
  }
  /**
   * Determine if the event is a message event which includes sticker.
   *
   */


  get isSticker() {
    return this.isMessage && typeof this.message.sticker_id === 'number';
  }
  /**
   * The sticker_id from Messenger raw event.
   *
   */


  get sticker() {
    return this.isSticker ? this.message.sticker_id : null;
  }
  /**
   * Determine if the event is a message event which includes 'like' sticker.
   * id 369239263222822 is a small like sticker
   * id 369239263222814 is a large like sticker
   * id 369239263222810 is a huge like sticker
   */


  get isLikeSticker() {
    return this.isSticker && (this.message.sticker_id === 369239263222822 || this.message.sticker_id === 369239343222814 || this.message.sticker_id === 369239383222810);
  }
  /**
   * Determine if the event is a message event triggered from quick reply.
   *
   */


  get isQuickReply() {
    return this.isMessage && !!this.message.quick_reply && typeof this.message.quick_reply === 'object';
  }
  /**
   * The quick reply object from Messenger raw event.
   *
   */


  get quickReply() {
    return this.message ? this.message.quick_reply : null;
  }
  /**
   * Determine if the event is a message event sent from our side.
   *
   */


  get isEcho() {
    return this.isMessage && !!this.message.is_echo;
  }
  /**
   * Determine if the event is a postback event.
   *
   */


  get isPostback() {
    return !!this._rawEvent.postback && typeof this._rawEvent.postback === 'object';
  }
  /**
   * The postback object from Messenger raw event.
   *
   */


  get postback() {
    return this._rawEvent.postback || null;
  }
  /**
   * Determine if the event is a game_play event.
   *
   */


  get isGamePlay() {
    return !!this._rawEvent.game_play && typeof this._rawEvent.game_play === 'object';
  }
  /**
   * The game_play object from Messenger raw event.
   *
   */


  get gamePlay() {
    if (!this.isGamePlay) {
      return null;
    }

    const rawGamePlay = this._rawEvent.game_play;
    let payload;

    try {
      payload = JSON.parse(rawGamePlay.payload);
    } catch (e) {
      payload = rawGamePlay.payload;
    }

    return _objectSpread({}, rawGamePlay, {
      payload
    });
  }
  /**
   * Determine if the event is an opt-in event.
   *
   */


  get isOptin() {
    return !!this._rawEvent.optin && typeof this._rawEvent.optin === 'object';
  }
  /**
   * The optin object from Messenger raw event.
   *
   */


  get optin() {
    return this._rawEvent.optin || null;
  }
  /**
   * Determine if the event is a payment event.
   *
   */


  get isPayment() {
    return !!this._rawEvent.payment && typeof this._rawEvent.payment === 'object';
  }
  /**
   * The payment object from Messenger raw event.
   *
   */


  get payment() {
    return this._rawEvent.payment || null;
  }
  /**
   * Determine if the event is a checkout update event.
   *
   */


  get isCheckoutUpdate() {
    return !!this._rawEvent.checkout_update && typeof this._rawEvent.checkout_update === 'object';
  }
  /**
   * The checkout_update object from Messenger raw event.
   *
   */


  get checkoutUpdate() {
    return this._rawEvent.checkout_update || null;
  }
  /**
   * Determine if the event is a pre-checkout event.
   *
   */


  get isPreCheckout() {
    return !!this._rawEvent.pre_checkout && typeof this._rawEvent.pre_checkout === 'object';
  }
  /**
   * The pre_checkout object from Messenger raw event.
   *
   */


  get preCheckout() {
    return this._rawEvent.pre_checkout || null;
  }
  /**
   * Determine if the event is a message read event.
   *
   */


  get isRead() {
    return !!this._rawEvent.read && typeof this._rawEvent.read === 'object';
  }
  /**
   * The read object from Messenger raw event.
   *
   */


  get read() {
    return this.isRead ? this._rawEvent.read : null;
  }
  /**
   * Determine if the event is a message delivery event.
   *
   */


  get isDelivery() {
    return !!this._rawEvent.delivery && typeof this._rawEvent.delivery === 'object';
  }
  /**
   * The delivery object from Messenger raw event.
   *
   */


  get delivery() {
    return this.isDelivery ? this._rawEvent.delivery : null;
  }
  /**
   * Determine if the event is a postback or quick reply which includes payload.
   *
   */


  get isPayload() {
    return !!this.postback && typeof this.postback.payload === 'string' || !!this.quickReply && typeof this.quickReply.payload === 'string';
  }
  /**
   * The payload received from postback or quick reply.
   *
   */


  get payload() {
    if (!!this.postback && this.isPayload) {
      return this.postback.payload;
    }

    if (!!this.quickReply && this.isPayload) {
      return this.quickReply.payload;
    }

    return null;
  }
  /**
   * Determine if the event is a policy enforcement event.
   *
   */


  get isPolicyEnforcement() {
    return !!this._rawEvent['policy-enforcement'] && typeof this._rawEvent['policy-enforcement'] === 'object';
  }
  /**
   * The policy enforcement object from Messenger raw event.
   *
   */


  get policyEnforcement() {
    return this._rawEvent['policy-enforcement'] || null;
  }
  /**
   * Determine if the event is an app roles event.
   *
   */


  get isAppRoles() {
    return !!this._rawEvent.app_roles && typeof this._rawEvent.app_roles === 'object';
  }
  /**
   * The app roles object from Messenger raw event.
   *
   */


  get appRoles() {
    return this._rawEvent.app_roles || null;
  }
  /**
   * Determine if the event is a standby event.
   *
   */


  get isStandby() {
    return this._isStandby;
  }
  /**
   * Determine if the event is a pass thread control event.
   *
   */


  get isPassThreadControl() {
    return !!this._rawEvent.pass_thread_control && typeof this._rawEvent.pass_thread_control === 'object';
  }
  /**
   * The pass thread control object from Messenger raw event.
   *
   */


  get passThreadControl() {
    return this._rawEvent.pass_thread_control || null;
  }
  /**
   * Determine if the event is a take thread control event.
   *
   */


  get isTakeThreadControl() {
    return !!this._rawEvent.take_thread_control && typeof this._rawEvent.take_thread_control === 'object';
  }
  /**
   * The take thread control object from Messenger raw event.
   *
   */


  get takeThreadControl() {
    return this._rawEvent.take_thread_control || null;
  }
  /**
   * Determine if the event is a request thread control event.
   *
   */


  get isRequestThreadControl() {
    return !!this._rawEvent.request_thread_control && typeof this._rawEvent.request_thread_control === 'object';
  }
  /**
   * Determine if the event is a request thread control event sent by facebook integrated 'Page Inbox' (appId is 263902037430900).
   *
   */


  get isRequestThreadControlFromPageInbox() {
    return !!this._rawEvent.request_thread_control && typeof this._rawEvent.request_thread_control === 'object' && this._rawEvent.request_thread_control.requested_owner_app_id === 263902037430900;
  }
  /**
   * The take thread control object from Messenger raw event.
   *
   */


  get requestThreadControl() {
    return this._rawEvent.request_thread_control || null;
  }
  /**
   * Determine if the event is from customer chat plugin.
   *
   */


  get isFromCustomerChatPlugin() {
    const isMessageFromCustomerChatPlugin = !!(this.isMessage && !!this.message.tags && this.message.tags.length !== 0 && this.message.tags.some(tag => tag.source === 'customer_chat_plugin'));
    const isReferralFromCustomerChatPlugin = !!(this.isReferral && this.referral && this.referral.source === 'CUSTOMER_CHAT_PLUGIN');
    return isMessageFromCustomerChatPlugin || isReferralFromCustomerChatPlugin;
  }
  /**
   * Determine if the event is a referral event.
   *
   */


  get isReferral() {
    return !!(this._rawEvent.referral || this._rawEvent.postback && this._rawEvent.postback.referral);
  }
  /**
   * The referral object from Messenger event.
   *
   */


  get referral() {
    if (!this.isReferral) {
      return null;
    }

    return this._rawEvent.referral || this._rawEvent.postback && this._rawEvent.postback.referral;
  }
  /**
   * The ref string from Messenger event.
   *
   */


  get ref() {
    if (!this.isReferral) {
      return null;
    }

    return this.referral && this.referral.ref;
  }
  /**
   * The pageId of the Page where this Messenger event is happening on.
   *
   */


  get pageId() {
    return this._pageId || null;
  }
  /**
   * Determine if the event is a branded_camera event.
   *
   */


  get isBrandedCamera() {
    return !!this._rawEvent.branded_camera && typeof this._rawEvent.branded_camera === 'object';
  }
  /**
   * The branded_camera object from Messenger event.
   *
   */


  get brandedCamera() {
    if (!this.isBrandedCamera) {
      return null;
    }

    return this._rawEvent.branded_camera;
  }

}

exports.default = MessengerEvent;