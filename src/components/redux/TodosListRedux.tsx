import React from 'react';
import styled from 'styled-components';
import { T_Todo, T_Todos } from '../../modules/todosRedux';
import Todo from './Todo';

const Div = styled.div`
  padding: 10px;
`;

interface IProps {
  todos: T_Todos;
  onToggle: (id: number) => void;
}

export default function TodosListRedux({ todos, onToggle }: IProps) {
  return (
    <Div>
      {todos.map((todo: T_Todo) => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </Div>
  );
}
