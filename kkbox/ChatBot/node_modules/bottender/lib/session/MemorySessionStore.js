"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MemoryCacheStore = _interopRequireDefault(require("../cache/MemoryCacheStore"));

var _CacheBasedSessionStore = _interopRequireDefault(require("./CacheBasedSessionStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MINUTES_IN_ONE_YEAR = 365 * 24 * 60;

class MemorySessionStore extends _CacheBasedSessionStore.default {
  constructor(max, expiresIn) {
    const cache = new _MemoryCacheStore.default(max);
    super(cache, expiresIn || MINUTES_IN_ONE_YEAR);
  }

}

exports.default = MemorySessionStore;