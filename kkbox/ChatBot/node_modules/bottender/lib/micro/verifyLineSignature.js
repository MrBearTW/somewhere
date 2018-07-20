"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _micro = require("micro");

const verifyLineSignature = bot => async (req, res) => {
  const rawBody = await (0, _micro.text)(req);
  const verified = bot.connector.verifySignature(rawBody, req.headers['x-line-signature']);

  if (!verified) {
    (0, _micro.send)(res, 400, {
      error: {
        message: 'LINE Signature Validation Failed!',
        request: {
          rawBody,
          headers: {
            'x-line-signature': req.headers['x-line-signature']
          }
        }
      }
    });
  }

  return verified;
};

var _default = verifyLineSignature;
exports.default = _default;