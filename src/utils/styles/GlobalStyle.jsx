import { createGlobalStyle } from 'styled-components';
import colors from './Colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-family: quicksand;
    color: ${colors.textcolor};
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${colors.textlight};
    color: white;
  }
  
  body {
    background-color: #fafafa;
  }
`;

export default GlobalStyle;
