"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _micro = require("micro");

const verifySlackWebhook = () => async (req, res) => {
  const body = await (0, _micro.json)(req);

  if (body.type === 'url_verification') {
    (0, _micro.send)(res, 200, body.challenge);
  }
};

var _default = verifySlackWebhook;
exports.default = _default;