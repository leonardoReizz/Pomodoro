import { Logo, Nav, NavbarContainer } from './styles';
import { IoMdSettings } from 'react-icons/io';
import { BiHistory } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import { SettingsModal } from './components/SettingsModal';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
export function Navbar() {
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
  const closeSettingsModal = useCallback(() => {
    setIsOpenSettingsModal(false);
  }, []);

  return (
    <>
      <SettingsModal isOpen={isOpenSettingsModal} onRequestClose={closeSettingsModal} />
      <NavbarContainer>
        <Logo>
          <h3>POMODORO</h3>
        </Logo>
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
            <li>
              <button type="button" onClick={handleLogin}>
                <AiOutlineUser /> Login
              </button>
            </li>
          </ul>
        </Nav>
      </NavbarContainer>
    </>
  );
}
