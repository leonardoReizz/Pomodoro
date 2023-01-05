import { Logo, Nav, NavbarContainer } from './styles';
import { IoMdSettings } from 'react-icons/io';
import { BiHistory } from 'react-icons/bi';
import { useState } from 'react';
import { SettingsModal } from './components/SettingsModal';
import { useCallback } from 'react';
export function Navbar() {
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState<boolean>(false);

  function handleOpenSettingsModal() {
    setIsOpenSettingsModal(true);
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
              <button>
                <BiHistory /> History
              </button>
            </li>
          </ul>
        </Nav>
      </NavbarContainer>
    </>
  );
}
