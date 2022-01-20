import { useContext } from 'react';
import styled from 'styled-components';
import { A_T_Todo } from '../../contexts/A_TodosContext';
import { TodosDispatchContext } from '../../contexts/B_TodosContext';
import './TodoItem.css';
const Div = styled.div`
  padding: 10px;
`;

type T_TodoProps = { todo: A_T_Todo };

function A_TodoItem({ todo }: T_TodoProps) {
  const dispatch = useContext(TodosDispatchContext);

  const onRemove = () => {
    if (!dispatch) return;
    dispatch({ type: 'DELETE', id: todo.id });
  };

  const onToggle = () => {
    if (!dispatch) return;
    dispatch({ type: 'TOGGLE', id: todo.id });
  };
  return (
    <li onClick={onToggle} className={`TodoItem ${todo.done ? `done` : ``}`}>
      <span className="text"> {todo.text} </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default A_TodoItem;
