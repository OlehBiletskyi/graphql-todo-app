import { useState } from 'react';
import { GET_TODOS, useAddTodo } from '../../graphql';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress } from '@mui/material';
import styles from "./index.module.css";

export function AddTodo() {

  const [inputValue, setInputValue] = useState('');
  const [addTodoMutationFunc, {loading, error, reset } ] = useAddTodo({
      variables: {
        type: inputValue
      },
      errorPolicy: "ignore",
      //request data again for updating to-do list
      refetchQueries: [GET_TODOS,'getTodos']
    })

  const submitForm = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      addTodoMutationFunc();
      setInputValue('');
    }
  }

  if (loading) return <div className={styles.container}> <CircularProgress /></div>
  if (error) return <div className={styles.container}>ERROR: {error.message}<button onClick={() => reset()}>RESET</button></div>
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={styles.container}
    >
      <TextField
        id="outlined-basic"
        label="add task"
        variant="outlined"
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
        className={styles.input}
      />
      <Button
        variant="contained"
        className={styles.button}
        type='submit'
        onClick={(event) => submitForm(event)}
      >
        Add
      </Button>
    </Box>
  )
}