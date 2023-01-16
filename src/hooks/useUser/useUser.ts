import { UserContext } from '@contexts/UserContext/UserContext';
import { IUser } from '@services/http/user/types';
import { useContext } from 'react';

export function useUser() {
  const user = useContext(UserContext);

  function changeUser(newUser: IUser) {
    localStorage.setItem('@pomodoro:user', JSON.stringify(newUser));
    user.changeUser(newUser);
  }

  return { ...user, changeUser };
}
