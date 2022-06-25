import React from "react";
import styled from "styled-components";
import data from "./data.json";

const PositionTest = () => {
  // const url = "logo.png";
  // const vid = "vid.mp4";
  return (
    <Container>
      <Wrapper>
        {data.map((props) => (
          <BoxHolder>
            <BoxContainer src={props.img} />
            <Box
              src={props.vid}
              // onMouseEnter={() => console.log("play")}
              // onMouseLeave={() => console.log("pause")}
              onMouseMove={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
          </BoxHolder>
        ))}
      </Wrapper>
    </Container>
  );
};

export default PositionTest;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxHolder = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
`;

const BoxContainer = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: red;
  position: absolute;
  object-fit: cover;
`;

const Box = styled.video`
  width: 300px;
  height: 300px;
  background: blue;
  position: absolute;
  opacity: 0;
  object-fit: cover;

  :hover {
    opacity: 1;
    cursor: pointer;
    top: 150px;
  }
`;
