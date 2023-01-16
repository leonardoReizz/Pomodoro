import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: 700px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: space-around;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 1px;
    background-color: ${(props) => props.theme['gray-600']};
  }

  h3 {
    color: ${(props) => props.theme['gray-600']};
  }

  button {
    color: red;
    svg {
      font-size: 1.3rem;
      color: white;
      color: ${(props) => props.theme['white']};
    }
  }
`;

export const Times = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;

  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
      max-width: 80px;
      height: 45px;
      background: ${(props) => props.theme['gray-600']};
      border: 0;
      border-radius: 8px;
      padding: 0 0.5rem;
    }
  }
`;

export const ButtonClose = styled.button`
  background-color: ${(props) => props.theme['red-500']};
  width: 300px;
  height: 50px;

  position: absolute;
  bottom: 2rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`;
