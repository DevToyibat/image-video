import React from "react";
import styled from "styled-components";

const Nav = () => {
  const Log = "logo.png";
  return (
    <Container>
      <Wrapper>
        <Logo src={Log} />
        <Navigation>
          <Link>About us</Link>
          <Link>Menu</Link>
          <Link>Contact</Link>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  min-height: 16vh;
`;
// instead of min-height, you can just give it both container and wrapper80px height
// its advisable to give both container and wrapper thesame height, width and min-height to centralize
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 16vh;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 20px;
  margin-right: 50px;
`;

const Link = styled.div`
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
  margin-left: 20px;
`;
