import React, { useRef } from "react";
import styled from "styled-components";
import { T_InputValues } from "../global_state";
import { IUserInputInfo } from "../userInfo/UserList";

const Div = styled.div`
  padding: 10px;
  span {
    display: inline-block;
    min-width: 130px;
  }
`;

interface IProps {
  onCreate?: () => void;
  onModify?: (user: IUserInputInfo, id: number) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValues: T_InputValues;
}

function RegistUserForm_useReducer({
  inputValues,
  onCreate,
  onModify,
  onChange,
}: IProps) {
  const firstNmRef = useRef<HTMLInputElement>(null);

  const { firstNm, lastNm, email } = inputValues;

  const onReset = () => {
    if (window.confirm("초기화 하시겠습니까?")) {
    }
    firstNmRef.current?.focus();
  };

  const onResetWithoutAsking = () => {
    firstNmRef.current?.focus();
  };
  return (
    <Div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <Div>
        <span>First Name: </span>
        <input
          ref={firstNmRef}
          name="firstNm"
          value={firstNm}
          onChange={(e) => onChange(e)}
        />
      </Div>
      <Div>
        <span>Last Name: </span>
        <input name="lastNm" value={lastNm} onChange={(e) => onChange(e)} />
      </Div>
      <Div>
        <span>Email address: </span>
        <input name="email" value={email} onChange={(e) => onChange(e)} />
      </Div>
      <Div>
        <button onClick={onReset}>Reset</button>
      </Div>
      <hr />
      <Div>
        <span>Your Name: </span> {lastNm} {firstNm}
      </Div>
      <Div>
        <span>Your email address: </span> {email}
      </Div>
      {onCreate && (
        <Div>
          <button onClick={onCreate}>Register</button>
        </Div>
      )}
    </Div>
  );
}

export default RegistUserForm_useReducer;
