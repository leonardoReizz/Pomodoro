import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  width: 100%;
  height: 100%;
`

export const TimerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-700']};
  width: 100%;
  height: 350px;
  border-radius: 8px;
  padding: 1rem;
  color: ${(props) => props.theme['white']};
`

export const StartButton = styled.button`
  background-color: ${(props) => props.theme['purple-100']};
  width: 300px;
  height: 45px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme['purple-200']}
  }
`

export const TaskContainer = styled.div`
  background-color: ${(props) => props.theme['gray-700']};
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;

  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  form {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;

    width: 100%;
    input {
      width: 100%;
      background: transparent;
      border: 0;
      padding: 0 1rem;
      border-bottom: 2px solid ${(props) => props.theme['gray-900']}
    }
    button {
      background-color: ${(props) => props.theme['green-500']};
      width: 100px;
      height: 40px;
      border-radius: 8px;
    }
  }
`


