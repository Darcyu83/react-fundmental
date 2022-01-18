import { createContext, Dispatch, ReactNode, useReducer } from "react";

export type A_T_Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type A_T_Todos = A_T_Todo[];

// State context

export const TodosStateContext = createContext<A_T_Todos | undefined>(
  undefined
);

//dispatch context

const CREATE = "CREATE" as const;
const REMOVE = "REMOVE";
const TOGGLE = "TOGGLE";

type A_T_Action =
  | { type: "CREATE"; text: string }
  | { type: "REMOVE"; id: number }
  | { type: "TOGGLE"; id: number };

export const TodosDispatchContext = createContext<
  Dispatch<A_T_Action> | undefined
>(undefined);

//reducer
function todosReducer(state: A_T_Todos, action: A_T_Action) {
  switch (action.type) {
    case CREATE:
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;
      return [...state, { id: nextId, text: action.text, done: false }];
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      throw new Error("Nothing matched");
  }
}

//useReducer + context
export function TodosContextProvider({ children }: { children: ReactNode }) {
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
