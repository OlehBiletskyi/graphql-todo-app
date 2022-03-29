import { useState } from 'react';
import { ADD_TODO, GET_TODOS, useAddTodo } from '../../graphql';
import { gql, useApolloClient } from '@apollo/client';
import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./index.module.css";

export function AddTodo() {

  const client = useApolloClient();

  const [inputValue, setInputValue] = useState('');
  const [addTodoMutationFunc, {loading, error, reset } ] = useAddTodo({
      variables: {
        type: inputValue
      },
      errorPolicy: "ignore",
      //request data again for updating to-do list
      // refetchQueries: [GET_TODOS,'getTodos'],

      // update(cache, { data: {addTodoMutationFunc} }) {
      //   cache.modify({
      //     fields: {
      //       todos(existingTodos = []) {
      //         const newTodoRef = cache.writeFragment({
      //           data: addTodoMutationFunc,
      //           fragment: gql`
      //             fragment NewTodo on Todo {
      //               id
      //               type
      //             }
      //           `
      //         });
      //         return [...existingTodos, newTodoRef];
      //       }
      //     }
      //   });
      // }
    })

  const submitForm = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      addTodoMutationFunc()
        .then((res)=>{
          console.log(res, 'res');


          const getTodosReadQuery  = client.readQuery({
            query: GET_TODOS
          });

          client.writeQuery({
            query: GET_TODOS,
            data: {
                todos: [...getTodosReadQuery?.todos, res.data?.addTodo]
              }
          });

/*
          const getTodosReadFragment = client.readFragment({
            fragment: gql`
              fragment readTodosFragment on Todo {
                id
                type
              }
              `,
            id:`Todo:${res.data.addTodo.id}`
          });
*/
/*
          client.writeFragment({
            id: `Todo:${res.data.addTodo.id}`,
            fragment: gql`
              fragment writeTodosFragment on Todo {
                id
                type
              }
            `,
            data: {
              todos: [...getTodosReadFragment?.todos, res.data?.addTodo]
            }
          })
*/
        });
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