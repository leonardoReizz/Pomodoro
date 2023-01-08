import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['white']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['white']};
    outline: 1px ${(props) => props.theme['purple-100']};
  }

  li {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .reactModalOverlay {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 4000;
    background: #41414187;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .reactModalContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 350px;
    max-width: 600px;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    position: relative;
    gap: 1rem;
  }
`;
