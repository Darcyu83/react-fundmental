import React, { useState } from "react";
import styled from "styled-components";
import { useTodosDispatch } from "../../contexts/TodosContext";

const Div = styled.div`
  padding: 10px;
`;

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "CREATE", text: value });
    setValue("");
  };
  return (
    <Div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="할일을 입력하세요."
        />
        <button>Register</button>
      </form>
    </Div>
  );
}

export default TodoForm;
