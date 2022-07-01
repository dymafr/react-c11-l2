import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && value.length) {
      addTodo(value);
      setValue('');
    }
  }

  async function handleClick() {
    if (value.length) {
      try {
        const reponse = await fetch('https://restapi.fr/api/todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: value,
            edit: false,
            done: false,
          }),
        });
        if (reponse.ok) {
          const todo = await reponse.json();
          addTodo(todo);
          setValue('');
        }
      } catch (e) {}
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Ajouter
      </button>
    </div>
  );
}
