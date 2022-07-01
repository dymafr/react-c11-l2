import React from 'react';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

export default function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  editTodo,
  selectTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo._id}
            todo={todo}
            editTodo={(content) => editTodo(todo._id, content)}
            cancelEditTodo={() => toggleTodoEdit(todo._id)}
          />
        ) : (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo._id)}
            toggleTodo={() => toggleTodo(todo._id)}
            editTodo={() => toggleTodoEdit(todo._id)}
            selectTodo={() => selectTodo(todo._id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune tâche en cours </p>
  );
}
