"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Bot = _interopRequireDefault(require("./Bot"));

var _ViberConnector = _interopRequireDefault(require("./ViberConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ViberBot extends _Bot.default {
  constructor({
    accessToken,
    sessionStore,
    sync
  }) {
    const connector = new _ViberConnector.default({
      accessToken
    });
    super({
      connector,
      sessionStore,
      sync
    });
  }

}

exports.default = ViberBot;