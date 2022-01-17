import { T_InputValues, T_State, T_User } from "../components/gl_reducer_state";

export const CREATE_USER = "userlist/create" as const;
export const DELELTE_USER = "userlist/delete" as const;
export const MODIFY_USER = "userlist/modify" as const;
export const SAVE_INPUT_VALUES = "registerForm/save" as const;
export const actCreate = (inputValues: T_InputValues): T_Action => {
  return {
    type: CREATE_USER,
    user: {
      id: new Date().getTime(),
      username: inputValues.lastNm + " " + inputValues.firstNm,
      email: inputValues.email,
      active: false,
    },
  };
};
export const actDelete = (id: number) => ({ type: DELELTE_USER, payload: id });
export const actModify = () => ({ type: MODIFY_USER });
export const actSaveInputVal = (inputVals: T_Inputs) => {
  return {
    type: SAVE_INPUT_VALUES,
    inputVals: {
      [inputVals.name]: inputVals.value,
    },
  };
};
export type T_Action =
  | { type: "userlist/create"; user: T_User }
  | { type: "userlist/modify" }
  | { type: "userlist/delete"; payload: number }
  | {
      type: "registerForm/save";
      inputVals: {
        firstNm?: string;
        lastNm?: string;
        email?: string;
      };
    };

type T_Inputs = {
  name: string;
  value: string;
};

export function userListReducer(state: T_State, action: T_Action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case DELELTE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case MODIFY_USER:
      return state;
    case SAVE_INPUT_VALUES:
      return {
        ...state,
        inputValues: { ...state.inputValues, ...action.inputVals },
      };
    default:
      return state;
  }
}
