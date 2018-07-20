"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _restify = _interopRequireDefault(require("restify"));

var _registerRoutes = _interopRequireDefault(require("./registerRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createServer(bot, config = {}) {
  const server = _restify.default.createServer();

  server.use(_restify.default.plugins.queryParser());
  server.use(_restify.default.plugins.bodyParser());
  (0, _registerRoutes.default)(server, bot, config);
  return server;
}

var _default = createServer;
exports.default = _default;