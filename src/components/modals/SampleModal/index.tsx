import { ModalPortal } from '@/components/common';

interface Props {
  isShow: boolean;
  onClose: () => void;
}

function SampleModal(props: Props) {
  return (
    <ModalPortal {...props}>
      <div>test</div>
    </ModalPortal>
  );
}

export default SampleModal;
