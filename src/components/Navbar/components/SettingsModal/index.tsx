import ReactModal from 'react-modal';
import { ButtonClose, Header, ModalContainer, Times } from './styles';
import { GrFormClose } from 'react-icons/gr';
import { useContext } from 'react';
import { CyclesContext } from '@contexts/CyclesContext/CyclesContext';
interface SettingsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SettingsModal({ isOpen, onRequestClose }: SettingsModalProps) {
  const {
    changeTotalMinutesPomodoro,
    changeTotalMinutesLongBreak,
    changeTotalMinutesShortBreak,
    totalMinutesPomodoro
  } = useContext(CyclesContext);

  function handleMinutesPomodoro(minutes: string) {
    changeTotalMinutesPomodoro(Number(minutes));
  }

  function handleMinutesShortBreak(minutes: string) {
    changeTotalMinutesShortBreak(Number(minutes));
  }

  function handleMinutesLongBreak(minutes: string) {
    changeTotalMinutesLongBreak(Number(minutes));
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="reactModalOverlay"
      className="reactModalContent">
      <ModalContainer>
        <Header>
          <h3>TIMER SETTINGS</h3>
        </Header>
        <Times>
          <div>
            <h4>Pomodoro</h4>
            <input
              type="number"
              step={5}
              max={60}
              min={5}
              defaultValue={5}
              onChange={(e) => handleMinutesPomodoro(e.target.value)}
            />
          </div>
          <div>
            <h4>Short Break</h4>
            <input
              type="number"
              step={5}
              max={60}
              min={5}
              defaultValue={totalMinutesPomodoro}
              onChange={(e) => handleMinutesShortBreak(e.target.value)}
            />
          </div>
          <div>
            <h4>Long Break</h4>
            <input
              type="number"
              step={5}
              max={60}
              min={5}
              defaultValue={5}
              onChange={(e) => handleMinutesLongBreak(e.target.value)}
            />
          </div>
        </Times>

        <ButtonClose type="button" onClick={onRequestClose}>
          Close
        </ButtonClose>
      </ModalContainer>
    </ReactModal>
  );
}
