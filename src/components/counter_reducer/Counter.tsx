import { useReducer, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 10px;
`;

const globalState = { value: 0 };

const INCREMENT = `counter/increment` as const;
const DECREMENT = `counter/decrement` as const;
const actionCreatorOfIncrement = () => {
  return { type: INCREMENT };
};
const actionCreatorOfDecrement = () => {
  return { type: DECREMENT };
};

function reducer(state: { value: number }, action: { type: string }) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, globalState);

  const onIncrease = () => {
    dispatch(actionCreatorOfIncrement());
  };

  const onDecrease = () => {
    dispatch(actionCreatorOfDecrement());
  };

  return (
    <Div>
      <h1>{state.value}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </Div>
  );
}

export default Counter;
