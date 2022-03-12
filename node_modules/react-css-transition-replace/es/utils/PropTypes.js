import PropTypes from 'prop-types';
export function transitionTimeout(transitionType) {
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
export var nameShape = PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  leave: PropTypes.string,
  active: PropTypes.string,
  height: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterActive: PropTypes.string,
  leave: PropTypes.string,
  leaveActive: PropTypes.string,
  appear: PropTypes.string,
  appearActive: PropTypes.string,
  height: PropTypes.string,
  heightActive: PropTypes.string
})]);