import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #131313;
    color: #fff;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    .root {
    flex: 1;
  }
  }


  body, input, button {
    font-family: 'Lato', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default globalStyle;
