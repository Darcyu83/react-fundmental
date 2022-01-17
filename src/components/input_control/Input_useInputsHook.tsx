import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useInputs } from "../../hooks/useInputs";
import { IUserInputInfo } from "../userInfo/UserList";

const Div = styled.div`
  padding: 10px;
  span {
    display: inline-block;
    min-width: 130px;
  }
`;

const InputsInitialState = {
  firstNm: "",
  lastNm: "",
  email: "",
};

interface IProps {
  onCreate?: (user: IUserInputInfo, onReset: () => void) => void;
  onModify?: (user: IUserInputInfo, id: number) => void;
}

function Input_useInputsHook({ onCreate, onModify }: IProps) {
  const firstNmRef = useRef<HTMLInputElement>(null);
  const [inputValues, onChange, reset] = useInputs(InputsInitialState);
  const { firstNm, lastNm, email } = inputValues;

  return (
    <Div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <Div>
        <span>First Name: </span>
        <input
          ref={firstNmRef}
          name="firstNm"
          value={firstNm}
          onChange={onChange}
        />
      </Div>
      <Div>
        <span>Last Name: </span>
        <input name="lastNm" value={lastNm} onChange={onChange} />
      </Div>
      <Div>
        <span>Email address: </span>
        <input name="email" value={email} onChange={onChange} />
      </Div>
      <Div>
        <button onClick={reset}>Reset</button>
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
          <button onClick={() => onCreate(inputValues, reset)}>Register</button>
        </Div>
      )}
    </Div>
  );
}

export default Input_useInputsHook;
