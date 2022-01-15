import { useRef, useState } from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import UserList from "./UserList";

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
function RenderArray() {
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
    user: IUserInputInfo,
    id: number,
    onReset: () => void,
    changeModeToMod?: () => void
  ) => {
    if (!(user.firstNm && user.lastNm && user.email)) {
      if (window.confirm("미입력된 값이 있습니다. 입력을 취소하시겠습니까?")) {
        if (changeModeToMod) changeModeToMod();
        onReset();
        return;
      }
      return;
    }
    const username = user.lastNm + " " + user.firstNm;
    const email = user.email;

    setUserStates((currState) =>
      currState.map((currUser) =>
        currUser.id === id
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
      {/* <Div>
        users Data : <Div>{JSON.stringify(userStates)}</Div>
      </Div> */}
      <Div>
        <Inputs onCreate={onCreate} />
      </Div>
      <UserList users={userStates} onDelete={onDelete} onModify={onModify} />
    </Div>
  );
}

export default RenderArray;
