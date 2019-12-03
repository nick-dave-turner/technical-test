import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div`
  padding: 0.625rem 1.25rem;
  background: #999999;
  border-radius: 0.625rem 0.625rem 0 0;
`;

const Body = styled.div`
  padding: 1.25rem;
  background: #ffffff;
  border-radius: 0 0 0.625rem 0.625rem;
`;

const Title = styled.h4`
  margin: 0;
  color: #ffffff;
`;

type WidgetProps = {
  children: React.ReactChild;
  title?: string;
};

const Widget: React.FC<WidgetProps> = ({ children, title }) => {
  return (
    <Container>
      {title && (
        <Header>
          <Title>{title}</Title>
        </Header>
      )}
      <Body title={title}>{children}</Body>
    </Container>
  );
};

export default Widget;
