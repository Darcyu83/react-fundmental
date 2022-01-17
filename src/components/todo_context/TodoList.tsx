import styled from "styled-components";
import { useTodosState } from "../../contexts/TodosContext";
import TodoItem from "./TodoItem";

const Div = styled.div`
  padding: 10px;
`;

function TodoList() {
  const todos = useTodosState();
  return (
    <Div>
      <ul>
        {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </Div>
  );
}

export default TodoList;
