import { useState } from 'react';
import { useAddTodo } from '../../graphql';

export function AddTodo() {

  const [inputValue, setInputValue] = useState('');
  const [addTodo, {loading, error } ] = useAddTodo({
      variables: {
        type: inputValue
      }
    })



  function submit(event) {
    event.preventDefault();
    addTodo();
  }

  if (loading) return <div>Loading adding todo ...</div>
  if (error) return <div>ERROR: {error.message}</div>
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event)=>{setInputValue(event.target.value)}}
      />
      <button type="submit">ADD</button>
    </form>
  )
}