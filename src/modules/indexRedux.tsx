import { combineReducers } from 'redux';
import counter from './counterRedux';
import todos from './todosRedux';
import movieList from './movieList';

const reducers = { counter, todos, movieList };

//combine Reducers
const rootReducer = combineReducers(reducers);

//Type definition
export type T_InitialState = ReturnType<typeof rootReducer>;

export default rootReducer;
