import React from "react";
import styled from "styled-components";

const ComponentFour = () => {
  return (
    <Container>
      <Wrapper>Component 4</Wrapper>
    </Container>
  );
};

export default ComponentFour;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: blue;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;
