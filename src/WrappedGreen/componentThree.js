import React from "react";
import styled from "styled-components";

const ComponentThree = () => {
  return (
    <Container>
      <Wrapper>Component 3</Wrapper>
    </Container>
  );
};

export default ComponentThree;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: yellow;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;
