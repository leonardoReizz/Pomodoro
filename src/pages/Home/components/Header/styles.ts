import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  .selected {
    background-color: ${(props) => props.theme['gray-600']}
  }

  ul {
    display: flex;
    gap: .5rem
  }

  button {
    padding: .5rem;
    border-radius: 8px;
  }
`