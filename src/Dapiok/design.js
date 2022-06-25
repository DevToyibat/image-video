import React from "react";
import styled from "styled-components";

const Design = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Rule></Rule>
          <Title>Design</Title>
          <Desc>
            More than just editing an openAPI doc, you can define the model
            relationship, draw sequence diagram to understand better the logic
            behind each API.
          </Desc>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Design;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  width: 53%;
`;

const Rule = styled.div`
  color: grey;
  background: blue;
  width: 2px;
  height: 100px;
  margin-left: 200px;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const Desc = styled.div`
  color: grey;
  font-size: 19px;
`;

// color: linear-gradient(90deg, #5b76d4, #f774b9);
