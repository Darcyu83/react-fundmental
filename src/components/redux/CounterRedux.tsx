import React from 'react';
import styled from 'styled-components';

import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
const Div = styled.div`
  padding: 10px;
  border: solid black 1px;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 3rem;
  color: blue;
  margin: 5px auto;
`;

const Input = styled.input``;
const ButtonContainer = styled.div`
  margin-left: 10px;
  display: inline-block;
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
interface IProps {
  number: number;
  diff: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
}
export default function CounterRedux({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}: IProps) {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    onSetDiff(parseInt(e.currentTarget.value, 10));
  };
  return (
    <Div>
      <Title>{number}</Title>
      <Container>
        Amount :
        <Input type="number" value={diff} min="1" onChange={onChange} />
        <ButtonContainer onClick={onDecrease}>
          <FaMinusCircle />
        </ButtonContainer>
        <ButtonContainer onClick={onIncrease}>
          <FaPlusCircle />
        </ButtonContainer>{' '}
      </Container>
    </Div>
  );
}
