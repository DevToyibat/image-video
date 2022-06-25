import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Healthy & Fresh Food For You</Title>
          <Desc>
            Created for lovers of healthy delicious and non-obvious food.
          </Desc>
          <Button>Check Menu →</Button>
        </Header>
        <Image />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div``;

const Wrapper = styled.div``;

const Header = styled.div``;

const Title = styled.div``;

const Desc = styled.div``;

const Button = styled.button``;

const Image = styled.img``;
