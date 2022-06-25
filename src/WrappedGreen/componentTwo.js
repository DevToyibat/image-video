import React from "react";
import styled from "styled-components";

const ComponentTwo = () => {
  return (
    <Container>
      <Wrapper>Component 2</Wrapper>
    </Container>
  );
};

export default ComponentTwo;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: green;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;
