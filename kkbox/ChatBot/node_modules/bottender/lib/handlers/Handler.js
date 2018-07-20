"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchPattern = matchPattern;
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function matchPattern(pattern, text) {
  if (typeof pattern === 'string') {
    return pattern === text;
  }

  if (pattern instanceof RegExp) {
    return pattern.test(text);
  }

  return false;
}

class Handler {
  constructor() {
    _defineProperty(this, "_handlers", []);

    _defineProperty(this, "_errorHandler", null);

    _defineProperty(this, "_unhandledHandler", null);
  }

  on(predicate, handler) {
    this._handlers.push({
      predicate,
      handler: handler.build ? handler.build() : handler
    });

    return this;
  }

  onEvent(handler) {
    this.on(() => true, handler);
    return this;
  }

  onMessage(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isMessage, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onMessage' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isMessage && predicate(context.event.message, context), handler);
    }

    return this;
  }

  onText(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isText, handler);
    } else {
      // eslint-disable-next-line prefer-const
      let [pattern, handler] = args;

      if (handler.build) {
        handler = handler.build();
      }

      (0, _warning.default)(typeof pattern === 'function' || typeof pattern === 'string' || pattern instanceof RegExp, `'onText' only accepts string, regex or function, but received ${typeof pattern}`);

      if (typeof pattern === 'function') {
        const predicate = pattern;
        this.on(context => context.event.isText && predicate(context.event.text, context), handler);
      } else {
        if (pattern instanceof RegExp) {
          const _handler = handler;

          handler = context => {
            // $FlowFixMe
            const match = pattern.exec(context.event.text);
            if (!match) return _handler(context); // reset index so we start at the beginning of the regex each time
            // $FlowFixMe

            pattern.lastIndex = 0;
            return _handler(context, match);
          };
        }

        this.on(context => context.event.isText && matchPattern(pattern, context.event.text), handler);
      }
    }

    return this;
  }

  onUnhandled(handler) {
    this._unhandledHandler = handler.build ? handler.build() : handler;
    return this;
  }

  onError(handler) {
    this._errorHandler = handler.build ? handler.build() : handler;
    return this;
  }

  build() {
    const handlers = this._handlers;
    return async context => {
      try {
        for (let i = 0; i < handlers.length; i++) {
          const {
            predicate,
            handler
          } = handlers[i]; // eslint-disable-next-line no-await-in-loop

          const predicateResult = await predicate(context);

          if (typeof predicateResult === 'boolean' && predicateResult) {
            // eslint-disable-next-line no-await-in-loop
            await handler(context);
            break;
          }
        }

        if (this._unhandledHandler && !context.isHandled) {
          await this._unhandledHandler(context);
        }
      } catch (err) {
        if (this._errorHandler) {
          return this._errorHandler(context, err);
        }

        throw err;
      }
    };
  }

}

exports.default = Handler;