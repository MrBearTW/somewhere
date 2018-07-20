"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TestEvent {
  constructor(rawEvent) {
    _defineProperty(this, "_rawEvent", void 0);

    this._rawEvent = rawEvent;
  }
  /**
   * Underlying raw event from Test.
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
    return !!this._rawEvent.message;
  }
  /**
   * The message object from Test raw event.
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
    if (this.isMessage) {
      return true;
    }

    return false;
  }
  /**
   * The text string from Test raw event.
   *
   */


  get text() {
    if (this.isText) {
      return this.message.text;
    }

    return null;
  }
  /**
   * Determine if the event is a payload event.
   *
   */


  get isPayload() {
    return !!this._rawEvent.payload;
  }
  /**
   * The payload string from Test raw event.
   *
   */


  get payload() {
    return this._rawEvent.payload || null;
  }

}

exports.default = TestEvent;