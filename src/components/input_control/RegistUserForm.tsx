import React, { useRef, useState } from "react";
import styled from "styled-components";
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

function RegistUserForm({ onCreate, onModify }: IProps) {
  const firstNmRef = useRef<HTMLInputElement>(null);
  const [inputValues, setInputValues] = useState(InputsInitialState);
  const { firstNm, lastNm, email } = inputValues;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onReset = () => {
    if (window.confirm("초기화 하시겠습니까?")) {
      setInputValues({
        ...InputsInitialState,
      });
    }
    firstNmRef.current?.focus();
  };

  const onResetWithoutAsking = () => {
    setInputValues({
      ...InputsInitialState,
    });

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
          <button onClick={() => onCreate(inputValues, onResetWithoutAsking)}>
            Register
          </button>
        </Div>
      )}
    </Div>
  );
}

export default RegistUserForm;
