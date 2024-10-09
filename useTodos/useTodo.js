import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, [], init);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
  
    const handleNewTodo = (todo) => {
       const action = {
          type: '[TODO] Add Todo',
          payload: todo
       }
  
       dispatch(action);
    };
  
    const handleDeleteTodo = (id) => {    
      const action = {
         type: '[TODO] Remove Todo',
         payload: id
      }
  
      dispatch(action);
   };
  
   const handleToggleTodo = (id) => {  
      const action = {
         type: '[TODO] Toggle Todo',
         payload: id
      }
  
      dispatch(action);
   };
   
   const todosCount = todos.length;

   const pendingTodosCount = todos.filter(todo => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
