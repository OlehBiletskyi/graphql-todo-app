import { useState } from 'react';

export function AddTodo() {

  const [inputValue, setInputValue] = useState('buy milk')

  function addTodo(event) {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={inputValue}
        onChange={(event)=>{setInputValue(event.target.value)}}
      />
      <button type="submit">ADD</button>
    </form>
  )
}