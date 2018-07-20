"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _registerRoutes = _interopRequireDefault(require("./registerRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createServer(bot, config = {}) {
  const server = new _koa.default();
  server.use((0, _koaBodyparser.default)());
  (0, _registerRoutes.default)(server, bot, config);
  return server;
}

var _default = createServer;
exports.default = _default;