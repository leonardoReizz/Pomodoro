import { settingsReducer } from '@reducers/settings/reducer';
import { createContext, ReactNode, useReducer } from 'react';
import { changeTimerPromodoroAction } from '@reducers/settings/actions';

interface SettingsContextData {
  timePomodoro: number;
  changeTimePomodoro: (newTime: number) => void;
}

interface SettingsContextProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextData);

export function SettingsContextProvider({ children }: SettingsContextProviderProps) {
  const [settings, dispath] = useReducer(settingsReducer, {
    timePomodoro: 5
  });

  function changeTimePomodoro(newTime: number) {
    dispath(changeTimerPromodoroAction(newTime));
  }

  const { timePomodoro } = settings;

  return (
    <SettingsContext.Provider value={{ timePomodoro, changeTimePomodoro }}>
      {children}
    </SettingsContext.Provider>
  );
}
