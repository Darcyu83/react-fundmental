import { useContext } from "react";
import styled from "styled-components";
import { TodosStateContext } from "../../contexts/B_TodosContext";
import A_TodoItem from "./A_TodoItem";

const Div = styled.div`
  padding: 10px;
`;

function A_TodoList() {
  const todos = useContext(TodosStateContext);

  return (
    <Div>
      <ul>
        {todos && todos.map((todo) => <A_TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </Div>
  );
}

export default A_TodoList;
