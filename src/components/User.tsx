import { useState } from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import InputsToModify from "./InputsToModify";
import { IUserInputInfo } from "./RenderArray";

const Div = styled.div`
  padding: 10px;
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
}

interface IProps {
  listNo: number;
  user: IUser;
  onDelete: (id: number) => void;
  onModify: (
    user: IUserInputInfo,
    id: number,
    onReset: () => void,
    changeModeToMod?: () => void
  ) => void;
}
function User({ user, listNo, onDelete, onModify }: IProps) {
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
          <Div>No : {listNo}</Div>
          <Div>Name : {user.username}</Div>
          <Div>Email : {user.email} </Div>
          <Button onClick={() => onDelete(user.id)}>Del</Button>
          <Button onClick={changeModeToMod}>Modify</Button>
        </>
      )}
      <hr></hr>
    </Div>
  );
}

export default User;
