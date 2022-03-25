import { useState } from 'react';
import { GET_TODOS, useAddTodo } from '../../graphql';

export function AddTodo() {

  const [inputValue, setInputValue] = useState('');
  const [addTodoMutationFunc, {loading, error } ] = useAddTodo({
      variables: {
        type: inputValue
      },
      //request data again for updating to-do list
      refetchQueries: [GET_TODOS,'getTodos']
    })


  const submitForm = (event) => {
    event.preventDefault();
    addTodoMutationFunc();
    setInputValue('')
  }

  if (loading) return <div>Loading adding todo ...</div>
  if (error) return <div>ERROR: {error.message}</div>
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={inputValue}
        onChange={(event)=>{setInputValue(event.target.value)}}
      />
      <button type="submit">ADD</button>
    </form>
  )
}