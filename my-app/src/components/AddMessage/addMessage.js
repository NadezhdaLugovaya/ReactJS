import React from 'react';
import PropTypes from 'prop-types';
import { useInputValue } from '../hooks/useInputValue';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './addMessage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '25ch',
      padding: '6.656px',
      marginTop: '18px',
      fontSize: '25px'
    },
  },
}));

export const AddMessage = ({onSubmit}) => {
  const input = useInputValue('');
  const classes = useStyles();

  function submitHandler(event) {
    event.preventDefault();
    if(input.value().trim()){
      onSubmit(input.value());
      input.clean();
    }
  }
  return(
    <form onSubmit = {submitHandler}  noValidate autoComplete="off">
      <TextField className={classes.root} autoFocus id="standard-basic" {...input.bind} type = 'text'/>
      <button type = 'submit'>Sent Message</button>
    </form>
  );
}

AddMessage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};