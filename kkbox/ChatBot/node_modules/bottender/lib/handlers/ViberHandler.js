"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _Handler = _interopRequireDefault(require("./Handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ViberHandler extends _Handler.default {
  onSubscribed(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isSubscribed, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onSubscribed' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isSubscribed && predicate(context.event.subscribed, context), handler);
    }

    return this;
  }

  onUnsubscribed(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isUnsubscribed, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onUnsubscribed' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isUnsubscribed && predicate(context.event.unsubscribed, context), handler);
    }

    return this;
  }

  onConversationStarted(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isConversationStarted, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onConversationStarted' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isConversationStarted && predicate(context.event.conversationStarted, context), handler);
    }

    return this;
  }

  onDelivered(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isDelivered, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onDelivered' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isDelivered && predicate(context.event.delivered, context), handler);
    }

    return this;
  }

  onSeen(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isSeen, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onSeen' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isSeen && predicate(context.event.seen, context), handler);
    }

    return this;
  }

  onFailed(...args) {
    // FIXME: Can't refine tuple union - https://github.com/facebook/flow/issues/2389
    if (args.length < 2) {
      const [handler] = args;
      this.on(context => context.event.isFailed, handler);
    } else {
      const [predicate, handler] = args;
      (0, _warning.default)(typeof predicate === 'function', `'onFailed' only accepts function, but received ${typeof predicate}`);
      this.on(context => context.event.isFailed && predicate(context.event.failed, context), handler);
    }

    return this;
  }

}

exports.default = ViberHandler;