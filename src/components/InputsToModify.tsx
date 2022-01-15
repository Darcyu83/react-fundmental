import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IUserInputInfo } from "./RenderArray";
import User, { IUser } from "./User";

const Div = styled.div`
  padding: 10px;
  span {
    display: inline-block;
    min-width: 130px;
  }
`;

const Input = styled.input`
  color: gray;
`;

const Button = styled.button`
    color: crimson;
    margin: 2px;
    padding 5px;
    
`;
const InputsInitialState = {
  firstNm: "",
  lastNm: "",
  email: "",
};

interface IProps {
  user: IUser;
  onModify?: (
    user: IUserInputInfo,
    id: number,
    onReset: () => void,
    changeModeToMod?: () => void
  ) => void;
  changeModeToMod?: () => void;
}

function InputsToModify({ user, onModify, changeModeToMod }: IProps) {
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
  console.log("inputValues.email", inputValues.email);
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
        <Input
          ref={firstNmRef}
          name="firstNm"
          value={firstNm}
          placeholder={user.username.split(" ")[1]}
          onChange={onChange}
        />
      </Div>
      <Div>
        <span>Last Name: </span>
        <Input
          name="lastNm"
          value={lastNm}
          placeholder={user.username.split(" ")[0]}
          onChange={onChange}
        />
      </Div>
      <Div>
        <span>Email address: </span>
        <Input
          name="email"
          value={email}
          placeholder={user.email}
          onChange={onChange}
        />
      </Div>
      <Div></Div>
      <hr />
      <Div>
        <span>Your Name: </span> {lastNm} {firstNm}
      </Div>
      <Div>
        <span>Your email address: </span> {email}
      </Div>
      {onModify && (
        <Div>
          <Button
            onClick={() =>
              onModify(
                inputValues,
                user.id,
                onResetWithoutAsking,
                changeModeToMod
              )
            }
          >
            modify
          </Button>
        </Div>
      )}
    </Div>
  );
}

export default InputsToModify;
