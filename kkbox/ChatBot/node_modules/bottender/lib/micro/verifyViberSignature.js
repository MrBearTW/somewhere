"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _micro = require("micro");

const verifyViberSignature = bot => async (req, res) => {
  const rawBody = await (0, _micro.text)(req);
  const verified = bot.connector.verifySignature(rawBody, req.headers['x-viber-content-signature']);

  if (!verified) {
    (0, _micro.send)(res, 400, {
      error: {
        message: 'Viber Signature Validation Failed!',
        request: {
          rawBody,
          headers: {
            'x-viber-content-signature': req.headers['x-viber-content-signature']
          }
        }
      }
    });
  }

  return verified;
};

var _default = verifyViberSignature;
exports.default = _default;