import { ReactNode } from 'react';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Overlay } from '@/components/common/Overlay';
import styles from './drawer.module.scss';

interface Props {
  isShow: boolean;
  onClose: () => void;
  position: 'top' | 'bottom' | 'left' | 'right';
  hideOverlay?: boolean;
  children: ReactNode;
}

export function Drawer({ isShow, onClose, position, hideOverlay = false, children }: Props) {
  return (
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
      <div className={styles.wrapper}>
        {!hideOverlay && <Overlay onClose={onClose} />}
        <aside className={cx(styles.drawer, styles[position])}>{children}</aside>
      </div>
    </CSSTransition>
  );
}
