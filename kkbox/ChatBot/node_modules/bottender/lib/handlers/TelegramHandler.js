"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _Handler = _interopRequireWildcard(require("./Handler"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TelegramHandler extends _Handler.default {
  onCallbackQuery(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isCallbackQuery, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onCallbackQuery' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isCallbackQuery && predicate(context.event.callbackQuery, context), handler);
    }

    return this;
  }

  onPayload(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isPayload, handler);
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
            // $FlowFixMe
            const match = pattern.exec(context.event.payload);
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

  onPhoto(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isPhoto, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onPhoto' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isPhoto && predicate(context.event.photo, context), handler);
    }

    return this;
  }

  onDocument(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isDocument, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onDocument' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isDocument && predicate(context.event.document, context), handler);
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

  onGame(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isGame, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onGame' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isGame && predicate(context.event.game, context), handler);
    }

    return this;
  }

  onSticker(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isSticker, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onSticker' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isSticker && predicate(context.event.sticker, context), handler);
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

  onVoice(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isVoice, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onVoice' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isVoice && predicate(context.event.voice, context), handler);
    }

    return this;
  }

  onVideoNote(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isVideoNote, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onVideoNote' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isVideoNote && predicate(context.event.videoNote, context), handler);
    }

    return this;
  }

  onContact(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isContact, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onContact' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isContact && predicate(context.event.contact, context), handler);
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

  onVenue(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isVenue, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onVenue' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isVenue && predicate(context.event.venue, context), handler);
    }

    return this;
  }

}

exports.default = TelegramHandler;