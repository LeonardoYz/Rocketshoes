import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0.65rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #393b47;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #7159c1;
    border-radius: 0.5rem;
  }

  @supports (scrollbar-color: grey lightgrey) {
    * {
      scrollbar-color: #7159c1 #393b47;
      scrollbar-width: 0.65rem;
    }
  }
`;
