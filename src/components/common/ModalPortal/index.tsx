import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';

import { Overlay } from '@/components/common/Overlay';
import styles from './modalPotal.module.scss';

const modalRoot = document.querySelector('#modal') as HTMLDivElement;

interface Props {
  isShow: boolean;
  onClose?: () => void;
  className?: string;
  children: ReactNode;
  hideOverlay?: boolean;
}

function ModalPortal({ isShow, onClose, className, children, hideOverlay = false }: Props) {
  return createPortal(
    <CSSTransition
      in={isShow}
      timeout={200}
      classNames={{
        enter: styles.enter,
        enterDone: styles.enterDone,
        exitActive: styles.exitActive,
        exit: styles.exit,
      }}
      unmountOnExit
    >
      <div className={cx(styles.wrapper, className)}>
        {!hideOverlay && <Overlay onClose={onClose} />}
        <aside className={styles.modal}>{children}</aside>
      </div>
    </CSSTransition>,
    modalRoot,
  );
}

export default ModalPortal;
