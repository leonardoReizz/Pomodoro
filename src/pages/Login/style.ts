import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  .title {
    position: absolute;
    top: 80px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    button {
      background-color: ${(props) => props.theme['purple-100']};
      width: 230px;
      height: 45px;
      border-radius: 8px;

      font-weight: bold;

      transition: background-color 0.2s ease;
      &:hover {
        background-color: ${(props) => props.theme['purple-200']};
      }
    }
  }
`;

export const FormContainer = styled.div`
  width: 400px;
  height: 550px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 8px;
  padding: 1rem 3rem;
  position: relative;

  background-color: ${(props) => props.theme['gray-800']};
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

export const CreateAccountButton = styled.button`
  position: absolute;
  bottom: 50px;
  margin-top: 1rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;
