"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _Bot = _interopRequireDefault(require("./Bot"));

var _TestConnector = _interopRequireDefault(require("./TestConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestBot extends _Bot.default {
  constructor({
    sessionStore,
    fallbackMethods
  } = {}) {
    (0, _warning.default)(false, '`TestBot` is under heavy development. API may change between any versions.');
    const connector = new _TestConnector.default({
      fallbackMethods
    });
    super({
      connector,
      sessionStore,
      sync: true
    });
  }

  async runTests(tests) {
    const client = this.connector.client;
    const requestHandler = this.createRequestHandler();
    const rawEvents = tests.map(t => this._createRawEventFromTest(t));
    const result = [];

    for (let i = 0; i < tests.length; i++) {
      /* eslint-disable no-await-in-loop */
      const test = tests[i];
      await requestHandler({
        payload: '__GET_STARTED__'
      });
      client.mockReset(); // TODO: how to get errors from out of try catch boundary

      await requestHandler(rawEvents[i]);
      result.push({
        input: test,
        output: {
          calls: client.calls,
          error: null
        }
      });
      client.mockReset();
      /* eslint-enable no-await-in-loop */
    }

    return result;
  }

  _createRawEventFromTest(test) {
    if (/^\/payload /.test(test)) {
      const payload = test.split('/payload ')[1];
      return {
        payload
      };
    }

    return {
      message: {
        text: test
      }
    };
  }

}

exports.default = TestBot;