import styled from 'styled-components';
import CounterContainer from '../../containers/CounterContainer';
import TodosContainer from '../../containers/TodosContainer';

const Div = styled.div`
  padding: 10px;
  min-width: 450px;
`;

const Hr = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;
export default function ReduxHome() {
  return (
    <Div>
      <Title>Counter</Title>
      <CounterContainer />
      <Hr />
      <Title>Todo List</Title>
      <TodosContainer />
    </Div>
  );
}
