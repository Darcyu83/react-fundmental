import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from '../components/redux/TodoForm';
import TodosListRedux from '../components/redux/TodosListRedux';
import { T_InitialState } from '../modules/indexRedux';
import { addTodo, toggleTodo } from '../modules/todosRedux';
function TodosContainer() {
  const { todos } = useSelector((state: T_InitialState) => ({
    todos: [...state.todos],
  }));

  const dispatch = useDispatch();
  const onAddTodo = (text: string) => {
    if (!text) return;
    return dispatch(addTodo(text));
  };
  const onToggle = (id: number) => dispatch(toggleTodo(id));

  return (
    <>
      <TodoForm onAddTodo={onAddTodo} />
      <TodosListRedux todos={todos} onToggle={onToggle} />
    </>
  );
}

export default React.memo(TodosContainer);
