"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ioredis = _interopRequireDefault(require("ioredis"));

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RedisCacheStore {
  /*
    Support all of args supported by `ioredis`:
    - new Redis()       // Connect to 127.0.0.1:6379
    - new Redis(6380)   // 127.0.0.1:6380
    - new Redis(6379, '192.168.1.1')        // 192.168.1.1:6379
    - new Redis('/tmp/redis.sock')
    - new Redis({
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        family: 4,           // 4 (IPv4) or 6 (IPv6)
        password: 'auth',
        db: 0
      })
    // Connect to 127.0.0.1:6380, db 4, using password "authpassword"
    - new Redis('redis://:authpassword@127.0.0.1:6380/4')
  */
  constructor(...args) {
    _defineProperty(this, "_redis", void 0);

    _defineProperty(this, "_prefix", '');

    this._redis = new _ioredis.default(...args);
  }

  async get(key) {
    const val = await this._redis.get(`${this._prefix}${key}`);
    return this._unserialize(val);
  }

  async put(key, value, minutes) {
    await this._redis.setex(`${this._prefix}${key}`, minutes * 60, this._serialize(value));
  }

  async forget(key) {
    await this._redis.del(`${this._prefix}${key}`);
  }

  async flush() {
    await this._redis.flushdb();
  }

  getRedis() {
    return this._redis;
  }

  getPrefix() {
    return this._prefix;
  }

  setPrefix(prefix) {
    this._prefix = prefix ? `${prefix}:` : '';
  }

  _serialize(value) {
    return (0, _isNumber.default)(value) ? value : JSON.stringify(value);
  }

  _unserialize(value) {
    return (0, _isNumber.default)(value) ? value : JSON.parse(value);
  }

}

exports.default = RedisCacheStore;