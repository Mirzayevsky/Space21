import React from "react";
import { Container, TextBox, TextWrapper, Title } from "./style";
const FooterTop = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>
          <span>How about a</span>
          <span>pinch of Saffron?</span>
        </Title>
        <TextBox>
          Enter your email and receive occasional updates about our projects,
          news and events
        </TextBox>
      </TextWrapper>
    </Container>
  );
};
export default FooterTop;
