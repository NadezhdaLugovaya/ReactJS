import React from 'react';
import { useInputValue } from '../hooks/useInputValue';
import './addMessage.css';

export const AddMessage = ({onSubmit}) => {
  const input = useInputValue('');

  function submitHandler(event) {
    event.preventDefault();
    if(input.value().trim()){
      onSubmit(input.value());
      input.clean();
    }
  }
  return(
    <form onSubmit = {submitHandler}>
      <input {...input.bind} type = 'text'/>
      <button type = 'submit'>Sent Message</button>
    </form>
  )
}