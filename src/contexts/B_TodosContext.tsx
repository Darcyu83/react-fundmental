import { createContext, Dispatch, ReactNode, useReducer } from "react";
import produce from "immer";

//1. set state context

type T_B_Todo = {
  id: number;
  text: string;
  done: boolean;
};

type T_B_Todos = T_B_Todo[];

export const TodosStateContext = createContext<T_B_Todos | undefined>(
  undefined
);

//2. set dispatch context
//make dispatch actions
//define actions
const CREATE_TODO = "CREATE" as const;
const REMOVE_TODO = "REMOVE" as const;
const TOGGLE_TODO = "TOGGLE" as const;

//define action creators
const createTodo = (text: string) => ({ type: CREATE_TODO, text });
const removeTodo = (id: number) => ({ type: REMOVE_TODO, id });
const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, id });

type T_B_Action =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;

type TodosDispatch = Dispatch<T_B_Action>;
export const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

//Reducer
function todosReducer(state: T_B_Todos, action: T_B_Action) {
  switch (action.type) {
    case CREATE_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return [...state, { id: nextId, text: action.text, done: false }];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      throw new Error("there's no matched action");
  }
}

//Reducer
function todosReducer_Immer(state: T_B_Todos, action: T_B_Action) {
  switch (action.type) {
    case CREATE_TODO:
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;
      return produce(state, (draft) => {
        draft.push({ id: nextId, text: action.text, done: false });
      });

    case REMOVE_TODO:
      return produce(state, (draft) => {
        const idx = draft.findIndex((todo) => todo.id === action.id);
        draft.splice(idx, 1);
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

// combine  context and useReducer and make a Context.Provider

export function TodosContextProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer_Immer, [
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
