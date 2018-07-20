"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ViberEvent {
  constructor(rawEvent) {
    _defineProperty(this, "_rawEvent", void 0);

    this._rawEvent = rawEvent;
  }
  /**
   * Underlying raw event from Viber.
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
    return this._rawEvent.event === 'message';
  }
  /**
   * The message object from Viber raw event.
   *
   */


  get message() {
    if (this.isMessage) {
      return this._rawEvent.message;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes text.
   *
   */


  get isText() {
    return this.isMessage && this.message.type === 'text';
  }
  /**
   * The text string from Viber raw event.
   *
   */


  get text() {
    if (this.isMessage) {
      return this.message.text || null;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes picture.
   *
   */


  get isPicture() {
    return this.isMessage && this.message.type === 'picture';
  }
  /**
   * The picture URL from Viber raw event.
   *
   */


  get picture() {
    if (this.isPicture) {
      return this.message.media;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes video.
   *
   */


  get isVideo() {
    return this.isMessage && this.message.type === 'video';
  }
  /**
   * The video URL from Viber raw event.
   *
   */


  get video() {
    if (this.isVideo) {
      return this.message.media;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes file.
   *
   */


  get isFile() {
    return this.isMessage && this.message.type === 'file';
  }
  /**
   * The file URL from Viber raw event.
   *
   */


  get file() {
    if (this.isFile) {
      return this.message.media;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes sticker.
   *
   */


  get isSticker() {
    return this.isMessage && this.message.type === 'sticker';
  }
  /**
   * The sticker id from Viber raw event.
   *
   */


  get sticker() {
    if (this.isSticker) {
      return this.message.sticker_id;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes contact.
   *
   */


  get isContact() {
    return this.isMessage && this.message.type === 'contact';
  }
  /**
   * The contact object from Viber raw event.
   *
   */


  get contact() {
    if (this.isContact) {
      return this.message.contact;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes URL.
   *
   */


  get isURL() {
    return this.isMessage && this.message.type === 'url';
  }
  /**
   * The URL from Viber raw event.
   *
   */


  get url() {
    if (this.isURL) {
      return this.message.media;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes location.
   *
   */


  get isLocation() {
    return this.isMessage && this.message.type === 'location';
  }
  /**
   * The location object from Viber raw event.
   *
   */


  get location() {
    if (this.isLocation) {
      return this.message.location;
    }

    return null;
  }
  /**
   * Determine if the event is a subscribed event.
   *
   */


  get isSubscribed() {
    return this._rawEvent.event === 'subscribed';
  }
  /**
   * The subscribed payload from Viber raw event.
   *
   */


  get subscribed() {
    if (this.isSubscribed) {
      return this._rawEvent;
    }

    return null;
  }
  /**
   * Determine if the event is an unsubscribed event.
   *
   */


  get isUnsubscribed() {
    return this._rawEvent.event === 'unsubscribed';
  }
  /**
   * The unsubscribed payload from Viber raw event.
   *
   */


  get unsubscribed() {
    if (this.isUnsubscribed) {
      return this._rawEvent;
    }

    return null;
  }
  /**
   * Determine if the event is a conversation_started event.
   *
   */


  get isConversationStarted() {
    return this._rawEvent.event === 'conversation_started';
  }
  /**
   * The conversation started payload from Viber raw event.
   *
   */


  get conversationStarted() {
    if (this.isConversationStarted) {
      return this._rawEvent;
    }

    return null;
  }
  /**
   * Determine if the event is a delivered event.
   *
   */


  get isDelivered() {
    return this._rawEvent.event === 'delivered';
  }
  /**
   * The delivered payload from Viber raw event.
   *
   */


  get delivered() {
    if (this.isDelivered) {
      return this._rawEvent;
    }

    return null;
  }
  /**
   * Determine if the event is a seen event.
   *
   */


  get isSeen() {
    return this._rawEvent.event === 'seen';
  }
  /**
   * The seen payload from Viber raw event.
   *
   */


  get seen() {
    if (this.isSeen) {
      return this._rawEvent;
    }

    return null;
  }
  /**
   * Determine if the event is a failed event.
   *
   */


  get isFailed() {
    return this._rawEvent.event === 'failed';
  }
  /**
   * The failed payload from Viber raw event.
   *
   */


  get failed() {
    if (this.isFailed) {
      return this._rawEvent;
    }

    return null;
  }

}

exports.default = ViberEvent;