//Initial State
const initialState = {
  number: 0,
  diff: 1,
};

//Actions
const SET_DIFF = 'counter/SET_DIFF' as const;
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
//Action creator
export const setDiff = (diff: number) => {
  return { type: SET_DIFF, diff };
};
export const increase = () => {
  return { type: INCREASE };
};
export const decrease = () => {
  return { type: DECREASE };
};
//Reducer

type T_Action =
  | ReturnType<typeof increase>
  | ReturnType<typeof setDiff>
  | ReturnType<typeof decrease>;

export default function reducer(state = initialState, action: T_Action) {
  switch (action.type) {
    case SET_DIFF:
      return { ...state, diff: action.diff };
    case INCREASE:
      return { ...state, number: state.number + state.diff };
    case DECREASE:
      return { ...state, number: state.number - state.diff };
    default:
      return state;
  }
}

export type T_Counter = ReturnType<typeof reducer>;
