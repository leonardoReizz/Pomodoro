import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 3rem auto;
  gap: 2rem;
  max-width: 600px;
  width: 100%;
  height: 100%;
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['white']};

  width: 100%;
  height: 350px;
  border-radius: 8px;
  padding: 1rem;
`;

export const StartButton = styled.button`
  background-color: ${(props) => props.theme['purple-100']};
  width: 300px;
  height: 45px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme['purple-200']};
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme['gray-700']};
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 8px;

  gap: 1rem;

  form {
    display: flex;

    gap: 1rem;
    margin-top: 2rem;
    width: 100%;

    input {
      width: 100%;
      background: transparent;
      border: 0;
      padding: 0 1rem;
      border-bottom: 2px solid ${(props) => props.theme['gray-900']};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${(props) => props.theme['green-500']};
      width: 50px;
      height: 40px;
      border-radius: 8px;
      transition: background-color 0.2s ease;
      font-size: 1.2rem;

      &:hover {
        background-color: ${(props) => props.theme['green-700']};
      }
    }
  }
`;
