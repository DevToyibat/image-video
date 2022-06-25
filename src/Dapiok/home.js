import React from "react";
import styled from "styled-components";
import Navig from "./navig";
import Hero from "./hero";
import Shot from "./shot";
import Design from "./design";

const Home = () => {
  return (
    <Container>
      <Navig />
      <Hero />
      <Shot />
      <Design />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: black;
  color: red;
`;
