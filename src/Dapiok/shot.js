import React from "react";
import styled from "styled-components";
import Img from "./Img/mainshot.png";

const Shot = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={Img} />
      </Wrapper>
    </Container>
  );
};

export default Shot;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 63%;
  box-shadow: 0 0 50px rgb(90 118 212 / 100%);
`;
