import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Design, Preview and Track the API with the team</Title>
          <Desc>
            Dapi helps streamline API integration for the dev team. OpenAPI,
            sequence diagram, API document site and mock server. It aims for
            faster integration and better tracking.
          </Desc>
          <Button>Try FREE Now →</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 75vh;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: 50%;
  margin-top: 100px;
`;

const Title = styled.div`
  font-size: 55px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 20px 0;
`;

const Desc = styled.div`
  color: grey;
  line-height: 1.5;
  font-size: 19px;
`;

const Button = styled.button`
  padding: 20px 80px;
  margin-top: 70px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 25px rgb(91 118 212 / 55%);

  background: transparent;
  border: solid 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, #5b76d4, #f774b9);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 25px rgb(91 118 212 / 100%);
  }
`;
