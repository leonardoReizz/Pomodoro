import styled from 'styled-components';

export const TaskContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 2em;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 80px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    margin-left: -2rem;
    height: 2px;
    border-radius: 5rem;
    background-color: ${(props) => props.theme['gray-800']};
    bottom: 0;
  }

  .finished {
    text-decoration: line-through;
    color: ${(props) => props.theme['gray-500']};
  }

  .actions {
    display: flex;
    gap: 0.5rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme['gray-900']};
      height: 40px;
      width: 40px;
      font-size: 0.9rem;
      border-radius: 8px;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: ${(props) => props.theme['gray-600']};
      }
    }
  }
`;

export const TaskList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;
