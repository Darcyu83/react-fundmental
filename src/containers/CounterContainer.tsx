import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterRedux from '../components/redux/CounterRedux';
import { decrease, increase, setDiff } from '../modules/counterRedux';
import { T_InitialState } from '../modules/indexRedux';

export default function CounterContainer() {
  const { number, diff } = useSelector((state: T_InitialState) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));
  return (
    <>
      <h1>Counter</h1>
      <CounterRedux
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </>
  );
}
