import React, { useState } from 'react';
import styled from 'styled-components';
import { DivPadding10 } from '../Snippet';

const Div = styled.div`
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  background: linear-gradient(rgba(147, 247, 117, 0.3), rgba(13, 153, 76, 0.8));
  color: green;
  margin-right: 10px;
  border: none;
  border-radius: 3px;
  flex: 100%;
  height: 1.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  outline: 1px solid green;
  color: green;
  font-weight: bold;
  background: none;
  border: none;
  border-radius: 3px;
  min-width: 110px;
  &:hover {
    background: green;
    color: white;
  }
  &:active {
    background: rgba(52, 31, 243, 0.5);
  }
`;
export default function TodoForm({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void;
}) {
  const [value, setValue] = useState('');
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Div>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Input what you have to do..."
      />
      <Button
        onClick={() => {
          onAddTodo(value);
          setValue('');
        }}
      >
        Add
      </Button>
    </Div>
  );
}
