import React from "react";
import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

const Container = styled.div`
  height: calc(100vh - 150px);
  margin-top: 80px;
  overflow: hidden;
`;

const Content = styled.div`
  height: 100%;
  padding: 0 5rem;
  overflow-y: auto;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
