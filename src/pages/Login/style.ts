import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 600px;
  width: 400px;

  border-radius: 8px;
  padding: 1rem;

  background-color: ${(props) => props.theme['gray-800']};
  .title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 100%;
    flex: 2;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    button {
      background-color: ${(props) => props.theme['purple-100']};
      width: 200px;
      height: 40px;
      border-radius: 8px;

      margin-top: 2rem;

      transition: background-color 0.2s ease;
      &:hover {
        background-color: ${(props) => props.theme['purple-200']};
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.9rem;
  }

  input {
    width: 100%;
    background-color: transparent;
    border: 0;
    height: 30px;
    border-bottom: 2px solid ${(props) => props.theme['gray-600']};
  }
`;
