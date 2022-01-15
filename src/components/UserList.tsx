import styled from "styled-components";
import { IUserInputInfo, IUsers } from "./RenderArray";
import User from "./User";

const Div = styled.div`
  padding: 10px;
`;

function UserList({
  users,
  onDelete,
  onModify,
}: {
  users: IUsers;
  onDelete: (id: number) => void;
  onModify: (
    user: IUserInputInfo,
    id: number,
    onReset: () => void,
    changeModeToMod?: () => void
  ) => void;
}) {
  return (
    <Div>
      <Div>{JSON.stringify(users)}</Div>
      <Div>
        <b>User List</b>
      </Div>
      <hr />
      <Div>
        {users &&
          users.map((user, idx) => (
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
