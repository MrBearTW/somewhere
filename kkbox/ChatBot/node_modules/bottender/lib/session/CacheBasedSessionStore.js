"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MINUTES_IN_ONE_YEAR = 365 * 24 * 60;

class CacheBasedSessionStore {
  // The number of minutes to store the data in the session.
  constructor(cache, expiresIn) {
    _defineProperty(this, "_cache", void 0);

    _defineProperty(this, "_expiresIn", void 0);

    this._cache = cache;
    this._expiresIn = expiresIn || MINUTES_IN_ONE_YEAR;
  }

  async init() {
    // $FlowFixMe
    return this;
  }

  async read(key) {
    return this._cache.get(key);
  }

  async write(key, sess) {
    this._cache.put(key, sess, this._expiresIn);
  }

  async destroy(key) {
    this._cache.forget(key);
  }

}

exports.default = CacheBasedSessionStore;