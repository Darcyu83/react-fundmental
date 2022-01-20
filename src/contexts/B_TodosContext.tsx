import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import produce from 'immer';

const initialState: T_Todos = [
  {
    id: 1,
    text: 'Context API 배우기',
    done: true,
  },
  {
    id: 2,
    text: 'TypeScript 배우기',
    done: true,
  },
  {
    id: 3,
    text: 'TypeScript 와 Context API 함께 사용하기',
    done: false,
  },
];

//1-1. set state context
type T_Todo = {
  id: number;
  text: string;
  done: boolean;
};
type T_Todos = T_Todo[];
type T_Action =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof toggleTodo>;

//1-2 create Context of state
export const TodosStateContext = createContext<T_Todos | undefined>(undefined);

//2-1. set dispatch context
//make dispatch actions
//define actions
const CREATE_TODO = 'CREATE' as const;
const DELETE_TODO = 'DELETE' as const;
const UPDATE_TODO = 'UPDATE' as const;
const TOGGLE_TODO = 'TOGGLE' as const;

//define action creators
const createTodo = (text: string) => ({ type: CREATE_TODO, text });
const removeTodo = (id: number) => ({ type: DELETE_TODO, id });
const updateTodo = (id: number, text: string) => ({
  type: UPDATE_TODO,
  id,
  text,
});
const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, id });

type TodosDispatch = Dispatch<T_Action>;

//2-2 create Context of dispatch
export const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

//Reducer
function todosReducer(state: T_Todos, action: T_Action) {
  switch (action.type) {
    case CREATE_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return [...state, { id: nextId, text: action.text, done: false }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      throw new Error("there's no matched action");
  }
}

//Reducer
function todosReducer_Immer(state: T_Todos, action: T_Action) {
  switch (action.type) {
    case CREATE_TODO:
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;
      return produce(state, (draft) => {
        draft.push({ id: nextId, text: action.text, done: false });
      });

    case DELETE_TODO:
      return produce(state, (draft) => {
        const idx = draft.findIndex((todo) => todo.id === action.id);
        draft.splice(idx, 1);
      });

    case UPDATE_TODO:
      return produce(state, (draft) => {
        draft.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        );
      });
    case TOGGLE_TODO:
      return produce(state, (draft) => {
        const todo = draft.find((todo) => todo.id === action.id);
        if (!todo) return;
        todo.done = !todo.done;
      });
    default:
      throw new Error("there's no matched action");
  }
}

// combine context and useReducer and make a Context.Provider
export function TodosContextProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer_Immer, initialState);
  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}
