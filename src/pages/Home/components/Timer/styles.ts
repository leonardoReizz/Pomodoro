import styled from "styled-components";

export const TimerContainer = styled.div` 
  display: flex;
  gap: .5rem;
  
  span {
    font-size: 7rem;
    padding: 0 .5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-900']}
  }
`