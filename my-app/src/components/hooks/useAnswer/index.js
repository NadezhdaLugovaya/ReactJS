
import React, {useEffect, useRef} from "react";


export const useAnswer = (fn, dependencies) => {

  const mounted = useRef(false);

  useEffect(() => {
    if (typeof(fn) !== 'function' ) {
      console.warn('fn is not a function');
      return undefined;
    }

    if (mounted.current) {
      fn()
    } else {
      mounted.current = true;
    }
  }, dependencies);
}