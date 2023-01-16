import { IUser } from '@services/http/user/types';
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

interface UserContextProviderProps {
  children: ReactNode;
}

interface CreateContextProps {
  user: IUser | undefined;
  changeUser: (newUser: IUser | undefined) => void;
  // authorization: '';
}

export const UserContext = createContext({} as CreateContextProps);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const localUser = localStorage.getItem('@pomodoro:user');

    if (localUser !== null) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  const changeUser = useCallback((newUser: IUser | undefined) => {
    setUser(newUser);
  }, []);

  return <UserContext.Provider value={{ user, changeUser }}>{children}</UserContext.Provider>;
}
