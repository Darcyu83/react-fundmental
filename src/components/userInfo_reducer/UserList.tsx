import React, { useReducer } from "react";
import styled from "styled-components";
import {
  actCreate,
  actDelete,
  actModify,
  actSaveInputVal,
  userListReducer,
} from "../../modules/userList";
import {
  ininitalState,
  T_InputValues,
  T_State,
  T_Users,
} from "../gl_reducer_state";
import RegistUserForm from "../input_control/RegistUserForm";
import RegistUserForm_useReducer from "../input_control/RegistUserForm_useReducer";
import User from "./User";

const Div = styled.div`
  padding: 10px;
`;

function countActiveUser(userStates: T_Users) {
  return userStates.filter((user) => user.active).length;
}

function UserList() {
  const [gl_state, dispatch] = useReducer(userListReducer, ininitalState);
  const { users: userStates, inputValues } = gl_state;

  const onCreate = () => {
    dispatch(actCreate(inputValues));
  };
  const onDelete = (id: number) => {
    dispatch(actDelete(id));
  };
  const onModify = () => {
    dispatch(actModify());
  };
  const onToggleOnActive = () => {};

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    const inputVals: { name: string; value: string } = { name, value };
    dispatch(actSaveInputVal(inputVals));
  };
  return (
    <Div>
      <RegistUserForm_useReducer
        inputValues={inputValues}
        onCreate={onCreate}
        onChange={onChange}
      />
      <Div>
        {userStates.map((user, idx) => (
          <User
            key={user.id}
            listNo={idx + 1}
            user={user}
            onDelete={onDelete}
            onModify={onModify}
            onToggleOnActive={onToggleOnActive}
          />
        ))}
      </Div>
    </Div>
  );
}

export default React.memo(UserList);
