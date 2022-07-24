import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';

import { Overlay } from '@/components/common/Overlay';
import AlertEventEmitter from './AlertEventEmitter';
import { AlertCallbackType, AlertInfo } from './types';
import styles from './alert.module.scss';

const alertRoot = document.querySelector('#modal') as HTMLDivElement;

interface Props {
  defaultConfirmText?: string;
  defaultCancelText?: string;
}

function Alert({ defaultConfirmText = '확인', defaultCancelText = '취소' }: Props) {
  const [alert, setAlert] = useState<AlertInfo | null>(null);

  const onClickConfirm = () => {
    alert?.confirmAction?.();
    setAlert(null);
  };

  const onClickClose = () => {
    alert?.cancelAction?.();
    setAlert(null);
  };

  useEffect(() => {
    const eventCallback: AlertCallbackType = (alertInfo) => {
      setAlert(alertInfo);
    };

    AlertEventEmitter.addChangeListener(eventCallback);
    return () => {
      AlertEventEmitter.removeChangeListener(eventCallback);
    };
  }, []);

  if (!alert) return null;
  return createPortal(
    <CSSTransition
      in={!!alert}
      timeout={200}
      classNames={{
        enter: styles.enter,
        enterDone: styles.enterDone,
        exitActive: styles.exitActive,
        exit: styles.exit,
      }}
      unmountOnExit
    >
      <div className={cx(styles.wrapper, alert.className)}>
        {alert.showOverlay && <Overlay onClose={onClickClose} />}
        <aside className={styles.alert}>
          {alert.title && <div className={styles.title}>{alert.title}</div>}
          <div className={styles.content}>{alert.content}</div>
          <div className={styles.buttons}>
            {alert.showCancel && (
              <button type='button' aria-label='cancel' onClick={onClickClose}>
                {alert.cancelText || defaultCancelText}
              </button>
            )}
            <button type='button' aria-label='confirm' onClick={onClickConfirm}>
              {alert.confirmText || defaultConfirmText}
            </button>
          </div>
        </aside>
      </div>
    </CSSTransition>,
    alertRoot,
  );
}

export default Alert;
