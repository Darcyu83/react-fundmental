import { useRef, useState } from "react";
import styled from "styled-components";
import RegistUserForm from "../input_control/RegistUserForm";
import User, { IUser } from "./User";

const Div = styled.div`
  padding: 10px;
`;

const users = [
  {
    id: 1,
    username: "velopert",
    email: "public.velopert@gmail.com",
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
  },
];

const returnUsers = () => users;
export type IUsers = ReturnType<typeof returnUsers>;

export interface IUserInputInfo {
  firstNm: string;
  lastNm: string;
  email: string;
}
function UserList() {
  const [userStates, setUserStates] = useState(users);
  const nextId = useRef<number>(new Date().getTime());

  const onCreate = (user: IUserInputInfo, onReset: () => void) => {
    if (!(user.firstNm && user.lastNm && user.email))
      return alert("모든 값을 입력하세요.");
    const username = user.lastNm + " " + user.firstNm;
    const newUser = {
      id: nextId.current,
      username,
      email: user.email,
    };
    setUserStates((currState) => [...currState, newUser]);
    nextId.current += 1;
    onReset();
  };

  const onModify = (
    userInputInfo: IUserInputInfo,
    user: IUser,
    onReset: () => void,
    changeModeToMod?: () => void
  ) => {
    // if (
    //   !(userInputInfo.firstNm && userInputInfo.lastNm && userInputInfo.email)
    // ) {
    if (!window.confirm("변경된 내용을 적용하시겠습니까?")) {
      if (changeModeToMod) changeModeToMod();
      onReset();
      return;
    }
    //}

    const lastNm = userInputInfo.lastNm
      ? userInputInfo.lastNm
      : user.username.split(" ")[0] === undefined
      ? ""
      : user.username.split(" ")[0];
    const firstNm = userInputInfo.firstNm
      ? userInputInfo.firstNm
      : user.username.split(" ")[1] === undefined
      ? ""
      : user.username.split(" ")[1];

    const username = `${lastNm} ${firstNm}`;

    const email = userInputInfo.email ? userInputInfo.email : user.email;

    setUserStates((currState) =>
      currState.map((currUser) =>
        currUser.id === user.id
          ? {
              ...currUser,
              username,
              email,
            }
          : currUser
      )
    );
    if (changeModeToMod) changeModeToMod();
    onReset();
  };

  const onDelete = (id: number) => {
    console.log(id);
    setUserStates((currState) => currState.filter((user) => user.id !== id));
  };

  console.log(userStates);
  return (
    <Div>
      <RegistUserForm onCreate={onCreate} />
      <Div>{JSON.stringify(userStates)}</Div>
      <Div>
        <b>User List</b>
      </Div>
      <hr />
      <Div>
        {userStates.map((user, idx) => (
          <User
            key={user.id}
            listNo={idx + 1}
            user={user}
            onDelete={onDelete}
            onModify={onModify}
          />
        ))}
      </Div>
    </Div>
  );
}

export default UserList;
