"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitionTimeout = transitionTimeout;
exports.nameShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (!props[timeoutPropName]) {
        return new Error(timeoutPropName + " wasn't supplied to CSSTransitionGroup: " + "this can cause unreliable animations and won't be supported in " + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  leave: _propTypes.default.string,
  active: _propTypes.default.string,
  height: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  leave: _propTypes.default.string,
  leaveActive: _propTypes.default.string,
  appear: _propTypes.default.string,
  appearActive: _propTypes.default.string,
  height: _propTypes.default.string,
  heightActive: _propTypes.default.string
})]);

exports.nameShape = nameShape;