import { Logo, Nav, NavbarContainer } from './styles';
import { IoMdSettings } from 'react-icons/io';
import { BiHistory } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import { SettingsModal } from './components/SettingsModal';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser/useUser';

export function Navbar() {
  const { changeUser, user } = useUser();
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleOpenSettingsModal() {
    setIsOpenSettingsModal(true);
  }

  function handleHistory() {
    navigate('/history');
  }

  function handleLogin() {
    navigate('/login');
  }

  function handleHome() {
    navigate('/');
  }

  function handleLeave() {
    changeUser(undefined);
    navigate('/');
  }

  const closeSettingsModal = useCallback(() => {
    setIsOpenSettingsModal(false);
  }, []);

  return (
    <>
      <SettingsModal isOpen={isOpenSettingsModal} onRequestClose={closeSettingsModal} />
      <NavbarContainer>
        <Logo onClick={handleHome}>Pomodoro</Logo>
        <Nav>
          <ul>
            <li>
              <button type="button" onClick={handleOpenSettingsModal}>
                <IoMdSettings /> Settings
              </button>
            </li>
            <li>
              <button type="button" onClick={handleHistory}>
                <BiHistory /> History
              </button>
            </li>
            {user === undefined && (
              <li>
                <button type="button" onClick={handleLogin}>
                  <AiOutlineUser /> Login
                </button>
              </li>
            )}
            {user !== undefined && (
              <li>
                <button type="button" onClick={handleLeave}>
                  <AiOutlineUser /> Sair
                </button>
              </li>
            )}
          </ul>
        </Nav>
      </NavbarContainer>
    </>
  );
}
