exports.MessengerBatchQueue = require('./MessengerBatchQueue');

exports.isError613 = function isError613(err) {
  try {
    const { message } = JSON.parse(err.response.body).error;
    return /#613/.test(message);
  } catch (_) {
    return false;
  }
};
