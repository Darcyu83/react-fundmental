import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CounterRedux from '../components/redux/CounterRedux';
import { decrease, increase, setDiff } from '../modules/counterRedux';
import { T_InitialState } from '../modules/indexRedux';

function CounterContainer() {
  const number = useSelector(
    (state: T_InitialState) => state.counter.number,
    shallowEqual
  );
  const diff = useSelector(
    (state: T_InitialState) => state.counter.diff,
    shallowEqual
  );

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

export default React.memo(CounterContainer);
