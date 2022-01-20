import React, { Dispatch } from 'react';
import { connect, useDispatch } from 'react-redux';
import CounterRedux from '../components/redux/CounterRedux';
import {
  decrease,
  increase,
  setDiff,
  T_Action,
  T_Counter,
} from '../modules/counterRedux';
import { T_InitialState } from '../modules/indexRedux';
import CounterContainer from './CounterContainer';

interface IProps {
  number: number;
  diff: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
}

function CounterContainerConnect({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}: IProps) {
  return (
    <CounterRedux
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

const mapStateToProps = (state: T_InitialState) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

const mapDispatchToProps = (dispatch: Dispatch<T_Action>) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff: number) => dispatch(setDiff(diff)),
});

/* 2.와 같음
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainerConnect);
*/

//2.
const enhance = connect(mapStateToProps, mapDispatchToProps);
export default enhance(CounterContainerConnect);
