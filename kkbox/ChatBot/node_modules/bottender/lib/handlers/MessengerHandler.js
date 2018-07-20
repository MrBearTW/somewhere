"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _Handler = _interopRequireWildcard(require("./Handler"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MessengerHandler extends _Handler.default {
  onPostback(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isPostback, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onPostback' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isPostback && predicate(context.event.postback, context), handler);
    }

    return this;
  }

  onPayload(...args) {
    if (args.length < 2) {
      const [handler] = args;
      this.on(({
        event
      }) => event.isPostback || event.isMessage && !!event.message.quick_reply, handler);
    } else {
      // eslint-disable-next-line prefer-const
      let [pattern, handler] = args;

      if (handler.build) {
        handler = handler.build();
      }

      (0, _warning.default)(typeof pattern === 'function' || typeof pattern === 'string' || pattern instanceof RegExp, `'onPayload' only accepts string, regex or function, but received ${typeof pattern}`);

      if (typeof pattern === 'function') {
        const predicate = pattern;
        this.on(context => context.event.isPayload && predicate(context.event.payload, context), handler);
      } else {
        if (pattern instanceof RegExp) {
          const _handler = handler;

          handler = context => {
            let message;

            if (context.event.isPostback) {
              message = context.event.postback.payload;
            } else {
              message = context.event.message.quick_reply.payload;
            } // $FlowFixMe


            const match = pattern.exec(message);
            if (!match) return _handler(context); // reset index so we start at the beginning of the regex each time
            // $FlowFixMe

            pattern.lastIndex = 0;
            return _handler(context, match);
          };
        }

        this.on(({
          event
        }) => event.isPayload && (0, _Handler.matchPattern)(pattern, event.payload), handler);
      }
    }

    return this;
  }

  onPayment(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isPayment, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onPayment' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isPayment && predicate(context.event.payment, context), handler);
    }

    return this;
  }

  onOptin(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isOptin, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onOptin' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isOptin && predicate(context.event.optin, context), handler);
    }

    return this;
  }

  onCheckoutUpdate(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isCheckoutUpdate, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onCheckoutUpdate' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isCheckoutUpdate && predicate(context.event.checkoutUpdate, context), handler);
    }

    return this;
  }

  onPreCheckout(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isPreCheckout, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onPreCheckout' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isPreCheckout && predicate(context.event.preCheckout, context), handler);
    }

    return this;
  }

  onQuickReply(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isQuickReply, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onQuickReply' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isQuickReply && predicate(context.event.quickReply, context), handler);
    }

    return this;
  }

  onEcho(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isEcho, handler);
    } else {
      const [predicate, handler] = args;
      this.on(context => context.event.isEcho && predicate(context.event.message, context), handler);
    }

    return this;
  }

  onRead(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isRead, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onRead' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isRead && predicate(context.event.read, context), handler);
    }

    return this;
  }

  onDelivery(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isDelivery, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onDelivery' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isDelivery && predicate(context.event.delivery, context), handler);
    }

    return this;
  }

  onLocation(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isLocation, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onLocation' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isLocation && predicate(context.event.location, context), handler);
    }

    return this;
  }

  onImage(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isImage, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onImage' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isImage && predicate(context.event.image, context), handler);
    }

    return this;
  }

  onAudio(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isAudio, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onAudio' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isAudio && predicate(context.event.audio, context), handler);
    }

    return this;
  }

  onVideo(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isVideo, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onVideo' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isVideo && predicate(context.event.video, context), handler);
    }

    return this;
  }

  onFile(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isFile, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onFile' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isFile && predicate(context.event.file, context), handler);
    }

    return this;
  }

  onFallback(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isFallback, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onFallback' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isFallback && predicate(context.event.fallback, context), handler);
    }

    return this;
  }

}

exports.default = MessengerHandler;