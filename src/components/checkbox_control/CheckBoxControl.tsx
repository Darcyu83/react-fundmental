import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 10px;
`;
const dataList = [
  { id: 1, data: "aaa", active: true },
  { id: 2, data: "bbb", active: false },
  { id: 3, data: "ccc", active: false },
];

const retureDataListsType = () => dataList;

type TDataLists = ReturnType<typeof retureDataListsType>;

function CheckBoxControl() {
  const [checkedList, setCheckedList] = useState(dataList);
  const [checkedAll, setCheckedAll] = useState(false);
  const onToggleActive = (id: number) => {
    setCheckedList((curr) =>
      curr.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const onToggleAciveAll = () => {
    setCheckedAll((curr) => !curr);
  };

  useEffect(() => {
    setCheckedList((curr) =>
      curr.map((item) => ({ ...item, active: checkedAll }))
    );
  }, [checkedAll]);
  return (
    <Div>
      as Home
      {JSON.stringify(checkedList)}
      <Div>
        <input
          type="checkbox"
          onClick={onToggleAciveAll}
          checked={checkedAll}
        />
      </Div>
      {checkedList.map((item, idx) => (
        <Div key={idx}>
          <input
            type="checkbox"
            onClick={() => onToggleActive(item.id)}
            checked={item.active}
          />
          <b>ID : {item.id}</b>
          <b>Text : {item.data}</b>
        </Div>
      ))}
    </Div>
  );
}

export default CheckBoxControl;
