import {useEffect, useRef} from "react";
import PropTypes from 'prop-types';

export const useAnswer = (fn, dependencies) => {

  const mounted = useRef(false);

  useEffect(() => {
    if (typeof(fn) !== 'function' ) {
      console.warn('fn is not a function');
      return undefined;
    }

    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
  }, dependencies);
}
useAnswer.propTypes = {
  fn: PropTypes.func.isRequired,
  dependencies: PropTypes.array
};