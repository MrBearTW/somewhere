"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lruCache = _interopRequireDefault(require("lru-cache"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MemoryCacheStore {
  constructor(max) {
    _defineProperty(this, "_lru", void 0);

    this._lru = new _lruCache.default({
      max
    });
  }

  async get(key) {
    const _value = this._lru.get(key); // cloneDeep: To make sure read as different object to prevent
    // reading same key multiple times, causing freezed by other events.


    const value = typeof _value === 'object' ? (0, _cloneDeep.default)(_value) : _value;
    return value || null;
  }

  async put(key, value, minutes) {
    // cloneDeep: To make sure save as writable object
    const val = value && typeof value === 'object' ? (0, _cloneDeep.default)(value) : value;

    this._lru.set(key, val, minutes * 60 * 1000);
  }

  async forget(key) {
    this._lru.del(key);
  }

  async flush() {
    this._lru.reset();
  }

  getPrefix() {
    return '';
  }

}

exports.default = MemoryCacheStore;