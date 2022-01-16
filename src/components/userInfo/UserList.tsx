import React, { useEffect, useRef, useState } from "react";
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
    active: true,
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
    active: false,
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
    active: false,
  },
];

const returnUsers = () => users;
export type IUsers = ReturnType<typeof returnUsers>;

function countActiveUser(userStates: IUsers) {
  return userStates.filter((user) => user.active).length;
}
export interface IUserInputInfo {
  firstNm: string;
  lastNm: string;
  email: string;
}
function UserList() {
  const [userStates, setUserStates] = useState(users);
  const nextId = useRef<number>(new Date().getTime());
  const [activeUserCount, setActiveUserCount] = useState(0);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const onCreate = (user: IUserInputInfo, onReset: () => void) => {
    if (!(user.firstNm && user.lastNm && user.email))
      return alert("모든 값을 입력하세요.");
    const username = user.lastNm + " " + user.firstNm;
    const newUser = {
      id: nextId.current,
      username,
      email: user.email,
      active: false,
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
    if (!window.confirm("변경된 내용을 적용하시겠습니까?")) {
      if (changeModeToMod) changeModeToMod();
      onReset();
      return;
    }

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
    setUserStates((currState) => currState.filter((user) => user.id !== id));
  };

  const onToggleOnActive = (id: number) => {
    setUserStates((currState) =>
      currState.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  //활성화된 사용자 수 산출
  useEffect(() => {
    setActiveUserCount(countActiveUser(userStates));
  }, [userStates]);

  // 활성화된 사용자 수 === 전체사용자수 => 전체선택 체크박스에 true
  useEffect(() => {
    if (activeUserCount === userStates.length) {
      setIsCheckedAll(true);
    } else {
      setIsCheckedAll(false);
    }
  }, [activeUserCount]);

  const checkedAll = (state: IUsers) => {
    setUserStates((currState) =>
      currState.map((user) => ({ ...user, active: !isCheckedAll }))
    );
    setIsCheckedAll((curr) => !curr);
  };

  return (
    <Div>
      <RegistUserForm onCreate={onCreate} />
      <Div>{JSON.stringify(userStates)}</Div>
      <Div>
        <input
          type="checkbox"
          onChange={() => checkedAll(userStates)}
          checked={isCheckedAll}
        />
      </Div>
      <Div>
        <p>
          <b>User List</b>
        </p>
        <p>활동중인 사용자 수:{activeUserCount} </p>
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
            onToggleOnActive={onToggleOnActive}
          />
        ))}
      </Div>
    </Div>
  );
}

export default React.memo(UserList);
