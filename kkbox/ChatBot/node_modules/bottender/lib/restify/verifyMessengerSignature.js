"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifyMessengerSignature = bot => (req, res, next) => {
  if (bot.connector.verifySignature(req.rawBody, req.headers['x-hub-signature'])) {
    return next();
  }

  const error = {
    message: 'Messenger Signature Validation Failed!',
    request: {
      rawBody: req.rawBody,
      headers: {
        'x-hub-signature': req.headers['x-hub-signature']
      }
    }
  };
  console.error(error);
  res.status(400);
  res.send({
    error
  });
};

var _default = verifyMessengerSignature;
exports.default = _default;