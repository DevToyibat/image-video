import React from "react";
import styled from "styled-components";
import Log from "./Img/logo.png";

const Navig = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Logo src={Log} />
          <Dapi>Dapi</Dapi>
        </Holder>
        <Links>
          <Link>Changelog</Link>
          <Link>Pricing</Link>
          <Link>Contact</Link>
        </Links>
        <Btn>
          <Bt1>Login</Bt1>
          <Bt2>Sign Up</Bt2>
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default Navig;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 13vh;
  background: blur;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 13vh;
  display: flex;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  padding-right: 13px;
`;

const Dapi = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
// font-family: sfrounded;

const Links = styled.div`
  display: flex;
  padding-right: 50px;
`;

const Link = styled.div`
  margin: 0 25px;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Bt1 = styled.button`
  font-weight: bold;
  margin: 0 30px;
  background: transparent;
  color: #416bb6;
  outline: none;
  border: 0;
  font-size: 16px;
  transition: all 350ms;

  :hover {
    color: rgba(59, 130, 246, 0.5);
  }
`;

const Bt2 = styled.button`
  font-weight: bold;
  margin: 0 25px 0 10px;
  padding: 6px 24px;
  border-radius: 5px;
  background: #416bb6;
  color: white;
  outline: none;
  border: 0;
  font-size: 14px;
  transition: all 350ms;

  :hover {
    background: #3d56b2;
    color: #f9f9f9;
  }
`;

const Btn = styled.div`
  position: absolute;
  right: 100px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
`;
