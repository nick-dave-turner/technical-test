/* istanbul ignore file */
import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export default createGlobalStyle`
  ${normalize()}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(180, 178, 183, 0.3);
    border: 1px solid rgba(180, 178, 183, 0.3);
  }
  
  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(180, 178, 183, 0.3);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
    border-color: rgba(180, 178, 183, 0.5);
  }
  
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #656565;
    background-color: #F2F2F4;
  }
`;
