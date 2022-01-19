import React from 'react';
import styled from 'styled-components';
import { T_Todo } from '../../modules/todosRedux';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #228be6;
`;

const Text = styled.div<{ done?: boolean }>`
  font-size: 2rem;
  text-decoration: ${(props) => (props.done ? 'line-through gray' : '')};
  color: ${(props) => (props.done ? 'rgba(0,0,0,0.3)' : '#228be6')};
  word-break: break-word;
`;
const StateContainer = styled.div`
  margin-left: 10px;
  min-width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const State = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  svg {
    width: 100px;
    height: 50px;
  }
`;
export default function Todo({
  todo,
  onToggle,
}: {
  todo: T_Todo;
  onToggle: (id: number) => void;
}) {
  return (
    <Container>
      <Text done={todo.done}> {todo.text}</Text>
      <StateContainer>
        <State>State : {todo.done ? 'Done' : 'On Going'}</State>
        <ButtonContainer onClick={() => onToggle(todo.id)}>
          {todo.done ? <BsToggle2On /> : <BsToggle2Off />}
        </ButtonContainer>
      </StateContainer>
    </Container>
  );
}
