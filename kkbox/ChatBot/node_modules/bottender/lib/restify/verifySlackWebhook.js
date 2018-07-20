"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifySlackWebhook = () => (req, res, next) => {
  const {
    body,
    params
  } = req;

  if (params && params.type && params.type === 'url_verification') {
    res.end(req.params.challenge);
  } else if (body && body.type && body.type === 'url_verification') {
    res.end(req.body.challenge);
  } else {
    return next();
  }
};

var _default = verifySlackWebhook;
exports.default = _default;