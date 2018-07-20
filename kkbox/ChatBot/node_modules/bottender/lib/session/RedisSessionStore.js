"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RedisCacheStore = _interopRequireDefault(require("../cache/RedisCacheStore"));

var _CacheBasedSessionStore = _interopRequireDefault(require("./CacheBasedSessionStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MINUTES_IN_ONE_YEAR = 365 * 24 * 60;

class RedisSessionStore extends _CacheBasedSessionStore.default {
  constructor(arg, expiresIn) {
    const cache = new _RedisCacheStore.default(arg);
    super(cache, expiresIn || MINUTES_IN_ONE_YEAR);
  }

}

exports.default = RedisSessionStore;