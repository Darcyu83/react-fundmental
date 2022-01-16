import { useState } from "react";
import styled from "styled-components";
import { T_InputValues } from "../global_state";

import InputsToModify from "./InputsToModify";

const Div = styled.div<{ active?: boolean }>`
  padding: 10px;
  color: ${(props) => (props.active ? "tomato" : "inherit")};
`;
const Button = styled.button`
    color: crimson;
    margin: 2px;
    padding 5px 10px;
    
`;
export interface IUser {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

interface IProps {
  listNo: number;
  user: IUser;
  onDelete: (id: number) => void;
  onModify: (
    userInputInfo: T_InputValues,
    user: IUser,
    onReset: () => void,
    changeModeToMod?: () => void
  ) => void;
  onToggleOnActive: (id: number) => void;
}
function User({ user, listNo, onDelete, onModify, onToggleOnActive }: IProps) {
  const [toggleMode, setToggleMode] = useState(false);
  const changeModeToMod = () => {
    setToggleMode((curr) => !curr);
  };

  return (
    <Div>
      {toggleMode ? (
        <InputsToModify
          user={user}
          onModify={onModify}
          changeModeToMod={changeModeToMod}
        />
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              onChange={() => onToggleOnActive(user.id)}
              checked={user.active}
            />
            <Div active={user.active}>No : {listNo}</Div>
            <Div>Name : {user.username}</Div>
            <Div>Email : {user.email} </Div>
          </div>
          <Button onClick={() => onDelete(user.id)}>Del</Button>
          <Button onClick={changeModeToMod}>Modify</Button>
        </>
      )}
      <hr></hr>
    </Div>
  );
}

export default User;
