import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;

  max-width: 1000px;
`;

export const Logo = styled.button`
  font-size: 1.5rem;
`;

export const Nav = styled.div`
  ul {
    display: flex;
    gap: 1rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      background-color: ${(props) => props.theme['gray-700']};
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: ${(props) => props.theme['gray-600']};
      }

      svg {
        font-size: 1.1rem;
      }
    }
  }
`;
