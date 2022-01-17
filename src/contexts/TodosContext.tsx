//state Context

import { createContext, Dispatch, useContext, useReducer } from "react";

export type T_Todo = {
  id: number;
  text: string;
  done: boolean;
};

type T_TodoState = T_Todo[];

const TodosStateContext = createContext<T_TodoState | undefined>(undefined);

//dispatch Context
/* 
action 
     CREATE 
    TOGGLE 
    REMOVE 
 */

type T_Action =
  | { type: "CREATE"; text: string }
  | { type: "REMOVE"; id: number }
  | { type: "TOGGLE"; id: number };

type TodoDispatch = Dispatch<T_Action>;
const TodosDispatchContext = createContext<TodoDispatch | undefined>(undefined);

function todosReducer(state: T_TodoState, action: T_Action) {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;
      return [...state, { id: nextId, text: action.text, done: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      throw new Error("unHandled action");
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, [
    {
      id: 1,
      text: "Context API 배우기",
      done: true,
    },
    {
      id: 2,
      text: "TypeScript 배우기",
      done: true,
    },
    {
      id: 3,
      text: "TypeScript 와 Context API 함께 사용하기",
      done: false,
    },
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");

  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");

  return dispatch;
}
