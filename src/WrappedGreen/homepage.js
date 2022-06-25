import React from "react";
import styled from "styled-components";
import Nav from "./nav";

const Homepage = () => {
  return (
    <Container>
      <Nav />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: black;
`;
