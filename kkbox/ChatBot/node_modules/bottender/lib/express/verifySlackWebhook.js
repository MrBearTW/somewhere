"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifySlackWebhook = () => (req, res, next) => {
  if (req.body.type === 'url_verification') {
    res.send(req.body.challenge);
  } else {
    next();
  }
};

var _default = verifySlackWebhook;
exports.default = _default;