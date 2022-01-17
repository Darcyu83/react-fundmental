import styled from "styled-components";
import { TodosContextProvider } from "../../contexts/A_TodosContext";
import A_TodoForm from "./A_TodoForm";
import A_TodoList from "./A_TodoList";

const Div = styled.div`
  padding: 10px;
`;

function A_TodoHome() {
  return (
    <TodosContextProvider>
      <A_TodoForm />
      <A_TodoList />
    </TodosContextProvider>
  );
}

export default A_TodoHome;
