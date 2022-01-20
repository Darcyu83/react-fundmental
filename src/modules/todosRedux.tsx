//Initial state
const initialState = [{ id: -1, text: '', done: false }];

//Type definition
const returnATodo = () => initialState[0];
export type T_Todo = ReturnType<typeof returnATodo>;
export type T_Todos = ReturnType<typeof reducer>;
type T_Action = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo>;

//Actions
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

//Action creator
let nextId = 1;
export const addTodo = (text: string) => {
  return { type: ADD_TODO, todo: { id: nextId++, text, done: false } };
};
export const toggleTodo = (id: number) => {
  return { type: TOGGLE_TODO, id };
};

//Reducer
export default function reducer(state = initialState, action: T_Action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state.filter((todo) => todo.id !== -1);
  }
}
