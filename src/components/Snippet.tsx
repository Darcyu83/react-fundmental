import styled from 'styled-components';

const Div = styled.div`
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
  margin-top: 1rem;
`;

const Anchor = styled.span`
  color: blue;
`;

function Snippet() {
  return (
    <Div>
      <Title>React fundmental</Title>
      <hr />
      <b>Author : Darcy Daeseok Yu</b>
      <p>
        Based on
        <a href="https://react.vlpt.us/basic/">
          <Anchor> this tutorial</Anchor>
        </a>
      </p>

      <SubTitle>What I've learn</SubTitle>
      <a href=" https://github.com/Darcyu83/react-study-2">
        <Anchor>Check this</Anchor>
      </a>
    </Div>
  );
}

export default Snippet;
