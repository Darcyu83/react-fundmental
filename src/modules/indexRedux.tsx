import { combineReducers } from 'redux';
import counter from './counterRedux';
import todos from './todosRedux';

const reducers = { counter, todos };
const rootReducer = combineReducers(reducers);

export type T_InitialState = ReturnType<typeof rootReducer>;

export default rootReducer;
