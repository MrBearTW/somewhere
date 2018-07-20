"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _micro = _interopRequireDefault(require("micro"));

var _shortid = _interopRequireDefault(require("shortid"));

var _connectNgrok = _interopRequireDefault(require("../connectNgrok"));

var _createRequestHandler = _interopRequireDefault(require("./createRequestHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createServer(bot, config = {}) {
  config.verifyToken = config.verifyToken || bot.connector.verifyToken || _shortid.default.generate();
  const server = (0, _micro.default)((0, _createRequestHandler.default)(bot, config));

  const _listen = server.listen.bind(server);

  server.listen = (...args) => {
    _listen(...args);

    if (config.ngrok) {
      (0, _connectNgrok.default)(args[0], (err, url) => {
        console.log(`webhook url: ${url}/`);
      });
    }

    if (bot.connector.platform === 'messenger') {
      console.log(`verify token: ${config.verifyToken}`);
    }
  };

  return server;
}

var _default = createServer;
exports.default = _default;