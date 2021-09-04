import { useState } from 'react';
import PropTypes from 'prop-types';


export const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState('');

  return{
    bind:{
      value,
      onChange: event => setValue(event.target.value)
    },
    clean: () => setValue(''),
    value: () => value
  };
}

useInputValue.propTypes = {
  defaultValue: PropTypes.string
};