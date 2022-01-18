import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodosDispatchContext } from "../../contexts/B_TodosContext";

const Div = styled.div`
  padding: 10px;
`;

function A_TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useContext(TodosDispatchContext);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatch) return;
    dispatch({ type: "CREATE", text: value });
    setValue("");
  };

  return (
    <Div>
      <form onSubmit={onsubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button>Register</button>
      </form>
    </Div>
  );
}

export default A_TodoForm;
