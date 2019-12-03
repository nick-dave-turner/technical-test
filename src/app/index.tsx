import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "../style";
import Root from "../routes";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Root />
    </Router>
  );
};

export default App;
