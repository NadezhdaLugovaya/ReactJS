import React, { useState } from 'react';


export const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState('');

  return{
    bind:{
      value,
      onChange: event => setValue(event.target.value)
    },
    clean: () => setValue(''),
    value: () => value
  }
}