import styled from 'styled-components';
import { HiOutlineCursorClick } from 'react-icons/hi';

export const DivPadding10 = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-top: 2rem;
`;

const SubTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Anchor = styled.span`
  color: blue;
  margin-right: 5px;
`;

const FlexBoxCenter = styled.div`
  display: flex;
  align-items: center;
`;
function Snippet() {
  return (
    <DivPadding10>
      <Title>React fundmental</Title>
      <hr />
      <b>Author : Darcy Daeseok Yu</b>
      <p>
        Based on
        <a href="https://react.vlpt.us/basic/">
          <Anchor> this tutorial</Anchor> <HiOutlineCursorClick />
        </a>
      </p>
      <SubTitle>What I've learn with this PJT</SubTitle>

      <a href=" https://github.com/Darcyu83/react-study-2">
        <FlexBoxCenter>
          <Anchor>Go to check</Anchor>
          <HiOutlineCursorClick />
        </FlexBoxCenter>
      </a>

      <SubTitle>Other Project</SubTitle>
      <a href=" https://darcyu83.github.io/react-personal-pjt">
        <FlexBoxCenter>
          <Anchor> https://darcyu83.github.io/react-personal-pjt</Anchor>{' '}
          <HiOutlineCursorClick />
        </FlexBoxCenter>
      </a>
    </DivPadding10>
  );
}

export default Snippet;
