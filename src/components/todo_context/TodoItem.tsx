import styled from "styled-components";
import { T_Todo, useTodosDispatch } from "../../contexts/TodosContext";
import "./TodoItem.css";

const Div = styled.div`
  padding: 10px;
`;

export type TodoItemProps = {
  todo: T_Todo;
};
function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };
  const onRemove = () => {
    dispatch({ type: "REMOVE", id: todo.id });
  };

  return (
    <Div>
      <li className={`TodoItem ${todo.done ? "done" : ``}`}>
        <span className="text" onClick={onToggle}>
          {todo.text}
        </span>
        <span className="remove" onClick={onRemove}>
          (X)
        </span>
      </li>
    </Div>
  );
}

export default TodoItem;
