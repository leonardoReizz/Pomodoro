import ReactModal from 'react-modal';

interface SettingsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SettingsModal({ isOpen, onRequestClose }: SettingsModalProps) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h3>OLA</h3>
    </ReactModal>
  );
}
