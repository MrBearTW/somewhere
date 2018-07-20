"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Bot = _interopRequireDefault(require("./Bot"));

var _LineConnector = _interopRequireDefault(require("./LineConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LineBot extends _Bot.default {
  constructor({
    accessToken,
    channelSecret,
    sessionStore,
    sync,
    shouldBatch,
    sendMethod
  }) {
    const connector = new _LineConnector.default({
      accessToken,
      channelSecret,
      shouldBatch,
      sendMethod
    });
    super({
      connector,
      sessionStore,
      sync
    });
  }

}

exports.default = LineBot;