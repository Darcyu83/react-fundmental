import styled from "styled-components";
import { TodosContextProvider } from "../../contexts/TodosContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Div = styled.div`
  padding: 10px;
`;

function TodoHome() {
  return (
    <>
      <p>files :</p>
      <p> TodoForm.tsx(새 할 일을 등록)</p>
      <p> TodoItem.tsx(할 일에 대한 정보)</p>
      <p> TodoList.tsx(여러 TodoItem을 렌더링)</p>
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
    </>
  );
}

export default TodoHome;
