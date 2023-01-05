import { AppState } from '../..';
import { HeaderContainer } from './styles';

interface HeaderProps {
  changeAppState: (newState: AppState) => void;
  appState: AppState;
}

export function Header({ changeAppState, appState }: HeaderProps) {
  return (
    <HeaderContainer>
      <ul>
        <li>
          <button
            type="button"
            className={`${appState === 'pomodoro' ? 'selected' : ''}`}
            onClick={() => changeAppState('pomodoro')}>
            Pomodoro
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`${appState === 'shortBreak' ? 'selected' : ''}`}
            onClick={() => changeAppState('shortBreak')}>
            Short Break
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`${appState === 'longBreak' ? 'selected' : ''}`}
            onClick={() => changeAppState('longBreak')}>
            Long Break
          </button>
        </li>
      </ul>
    </HeaderContainer>
  );
}
