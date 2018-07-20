"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _Handler = _interopRequireWildcard(require("./Handler"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LineHandler extends _Handler.default {
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

        this.on(context => context.event.isPayload && (0, _Handler.matchPattern)(pattern, context.event.payload), handler);
      }
    }

    return this;
  } // account is added as a friend (or unblocked).


  onFollow(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isFollow, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onFollow' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isFollow && predicate(context.event.follow, context), handler);
    }

    return this;
  }

  onUnfollow(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isUnfollow, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onUnfollow' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isUnfollow && predicate(context.event.unfollow, context), handler);
    }

    return this;
  } // account joins a group or talk room.


  onJoin(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isJoin, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onJoin' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isJoin && predicate(context.event.join, context), handler);
    }

    return this;
  } // account leaves a group.


  onLeave(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isLeave, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onLeave' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isLeave && predicate(context.event.leave, context), handler);
    }

    return this;
  }

  onBeacon(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isBeacon, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onBeacon' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isBeacon && predicate(context.event.beacon, context), handler);
    }

    return this;
  }

}

exports.default = LineHandler;