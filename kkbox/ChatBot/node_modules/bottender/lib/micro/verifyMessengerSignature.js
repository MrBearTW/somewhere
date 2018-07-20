"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _micro = require("micro");

const verifyMessengerSignature = bot => async (req, res) => {
  const rawBody = await (0, _micro.text)(req);
  const verified = bot.connector.verifySignature(rawBody, req.headers['x-hub-signature']);

  if (!verified) {
    (0, _micro.send)(res, 400, {
      error: {
        message: 'Messenger Signature Validation Failed!',
        request: {
          rawBody,
          headers: {
            'x-hub-signature': req.headers['x-hub-signature']
          }
        }
      }
    });
  }

  return verified;
};

var _default = verifyMessengerSignature;
exports.default = _default;