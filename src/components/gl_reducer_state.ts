export const ininitalState = {
  inputValues: { firstNm: "", lastNm: "", email: "" },
  users: [
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
  ],
};

const returnState = () => ininitalState;
export type T_State = ReturnType<typeof returnState>;

const returnUsers = () => ininitalState.users;
export type T_Users = ReturnType<typeof returnUsers>;

const returnUser = () => ininitalState.users[0];
export type T_User = ReturnType<typeof returnUser>;

const returnInputValues = () => ininitalState.inputValues;
export type T_InputValues = ReturnType<typeof returnInputValues>;
