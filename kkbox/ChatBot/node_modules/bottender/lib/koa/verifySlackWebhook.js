"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifySlackWebhook = () => ({
  request,
  response
}, next) => {
  if (request.body.type === 'url_verification') {
    response.body = request.body.challenge;
  } else {
    return next();
  }
};

var _default = verifySlackWebhook;
exports.default = _default;