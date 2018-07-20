"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LineEvent {
  constructor(rawEvent) {
    _defineProperty(this, "_rawEvent", void 0);

    this._rawEvent = rawEvent;
  }
  /**
   * Underlying raw event from LINE.
   *
   */


  get rawEvent() {
    return this._rawEvent;
  }
  /**
   * The reply token from LINE raw event. Only present on message, follow, join, postback, beacon events.
   *
   */


  get replyToken() {
    return this._rawEvent.replyToken || null;
  }
  /**
   * The source object from LINE raw event.
   *
   */


  get source() {
    return this._rawEvent.source || null;
  }
  /**
   * Determine if the event is a message event.
   *
   */


  get isMessage() {
    return this._rawEvent.type === 'message';
  }
  /**
   * The message object from LINE raw event.
   *
   */


  get message() {
    return this._rawEvent.message || null;
  }
  /**
   * Determine if the event is a message event which includes text.
   *
   */


  get isText() {
    return this.isMessage && this.message.type === 'text';
  }
  /**
   * The text string from LINE raw event.
   *
   */


  get text() {
    if (this.isText) {
      return this.message.text;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes image.
   *
   */


  get isImage() {
    return this.isMessage && this.message.type === 'image';
  }
  /**
   * The image object from LINE raw event.
   *
   */


  get image() {
    if (this.isImage) {
      return this.message;
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
   * The video object from LINE raw event.
   *
   */


  get video() {
    if (this.isVideo) {
      return this.message;
    }

    return null;
  }
  /**
   * Determine if the event is a message event which includes audio.
   *
   */


  get isAudio() {
    return this.isMessage && this.message.type === 'audio';
  }
  /**
   * The audio object from LINE raw event.
   *
   */


  get audio() {
    if (this.isAudio) {
      return this.message;
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
   * The location object from LINE raw event.
   *
   */


  get location() {
    if (this.isLocation) {
      return this.message;
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
   * The sticker object from LINE raw event.
   *
   */


  get sticker() {
    if (this.isSticker) {
      return this.message;
    }

    return null;
  }
  /**
   * Determine if the event is a follow event.
   *
   */


  get isFollow() {
    return this._rawEvent.type === 'follow';
  }
  /**
   * The source object from LINE raw event.
   *
   */


  get follow() {
    if (this.isFollow) {
      return this.source;
    }

    return null;
  }
  /**
   * Determine if the event is an unfollow event.
   *
   */


  get isUnfollow() {
    return this._rawEvent.type === 'unfollow';
  }
  /**
   * The source object from LINE raw event.
   *
   */


  get unfollow() {
    if (this.isUnfollow) {
      return this.source;
    }

    return null;
  }
  /**
   * Determine if the event is a join event.
   *
   */


  get isJoin() {
    return this._rawEvent.type === 'join';
  }
  /**
   * The source object from LINE raw event.
   *
   */


  get join() {
    if (this.isJoin) {
      return this.source;
    }

    return null;
  }
  /**
   * Determine if the event is a leave event.
   *
   */


  get isLeave() {
    return this._rawEvent.type === 'leave';
  }
  /**
   * The source object from LINE raw event.
   *
   */


  get leave() {
    if (this.isLeave) {
      return this.source;
    }

    return null;
  }
  /**
   * Determine if the event is a postback event.
   *
   */


  get isPostback() {
    return this._rawEvent.type === 'postback';
  }
  /**
   * The postback object from LINE raw event.
   *
   */


  get postback() {
    return this._rawEvent.postback || null;
  }
  /**
   * Determine if the event is a postback event.
   *
   */


  get isPayload() {
    return this.isPostback;
  }
  /**
   * The payload string from LINE raw event.
   *
   */


  get payload() {
    if (this.isPayload) {
      return this.postback.data;
    }

    return null;
  }
  /**
   * The date string from LINE postback event.
   *
   */


  get date() {
    if (this.postback && this.postback.params && this.postback.params.date) {
      return this.postback.params.date;
    }

    return null;
  }
  /**
   * The time string from LINE postback event.
   *
   */


  get time() {
    if (this.postback && this.postback.params && this.postback.params.time) {
      return this.postback.params.time;
    }

    return null;
  }
  /**
   * The datetime string from LINE postback event.
   *
   */


  get datetime() {
    if (this.postback && this.postback.params && this.postback.params.datetime) {
      return this.postback.params.datetime;
    }

    return null;
  }
  /**
   * Determine if the event is a beacon event.
   *
   */


  get isBeacon() {
    return this._rawEvent.type === 'beacon';
  }
  /**
   * The beacon object from LINE raw event.
   *
   */


  get beacon() {
    return this._rawEvent.beacon || null;
  }
  /**
   * Determine if the event is an accountLink event.
   *
   */


  get isAccountLink() {
    return this._rawEvent.type === 'accountLink';
  }
  /**
   * The link object from LINE raw event.
   *
   */


  get accountLink() {
    return this._rawEvent.link || null;
  }

}

exports.default = LineEvent;