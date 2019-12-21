import styled, { createGlobalStyle } from "styled-components";
import { theme } from "../../theme";
export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap')
    body{
        font-family:'Bebas Neue', cursive,sans-serif;
    }
    * {
      border: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: auto;
      font-weight: inherit;
      margin: 0;
      outline: 0;
      padding: 0;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    a{
      color:black;
    }
    a,button:hover{
      cursor:pointer;
    }
        
    
`;

export const H1 = styled.h1`
  color: ${theme.text.default};
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.3;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  color: ${theme.text.default};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  color: ${theme.text.default};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const H4 = styled.h4`
  color: ${theme.text.default};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H5 = styled.h5`
  color: ${theme.text.default};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H6 = styled.h6`
  color: ${theme.text.default};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.675rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const Title = styled.span``;
export const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
