import styled from 'styled-components';
import { TodosContextProvider } from '../../contexts/B_TodosContext';

import ATodoForm from './A_TodoForm';
import ATodoList from './A_TodoList';

const Div = styled.div`
  padding: 10px;
`;

function A_TodoHome() {
  return (
    <TodosContextProvider>
      <ATodoForm />
      <ATodoList />
    </TodosContextProvider>
  );
}

export default A_TodoHome;
