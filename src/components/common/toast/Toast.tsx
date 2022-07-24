import { useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useUnmount } from 'react-use';
import cx from 'classnames';
import { createPortal } from 'react-dom';
import styles from './toast.module.scss';
import { toastAction, PositionType, ToastCallbackType, ToastItemInterface } from './types';
import ToastEventEmitter from './ToastEventEmitter';

const toastRoot = document.querySelector('#toast') as HTMLDivElement;

interface Props {
  maxCount?: number;
  position?: PositionType;
}

function Toast({ maxCount = 10, position = 'top-center' }: Props) {
  const timers = useRef<Record<string, NodeJS.Timer>>({});

  const [toasts, setToasts] = useState<ToastItemInterface[]>([]);

  const remove = useCallback(
    (id: string) => {
      setToasts((prevState) => prevState.filter((notification) => notification.id !== id));
      delete timers.current[id];
    },
    [setToasts],
  );

  const addToast = useCallback(
    (toast: ToastItemInterface) => {
      setToasts((prevState) => [...prevState, toast].slice(maxCount * -1));
      if (toast.isAutoClose) {
        timers.current[toast.id] = setTimeout(() => remove(toast.id), toast.autoCloseTime);
      }
    },
    [maxCount, remove],
  );

  useEffect(() => {
    const eventCallback: ToastCallbackType = (toast) => {
      if (toast.action === toastAction.ADD) addToast(toast as ToastItemInterface);
      if (toast.action === toastAction.REMOVE) remove(toast.id);
    };

    ToastEventEmitter.addChangeListener(eventCallback);
    return () => {
      ToastEventEmitter.removeChangeListener(eventCallback);
    };
  }, [addToast, remove]);

  useUnmount(() => {
    Object.values(timers.current).forEach((timer) => {
      if (timer) clearTimeout(timer);
    });
  });

  return createPortal(
    <TransitionGroup className={cx(styles.wrapper, position)}>
      {toasts.map((toast) => (
        <CSSTransition
          key={toast.id}
          timeout={300}
          classNames={{
            enterDone: styles.enterDone,
            enter: styles.enter,
            exitActive: styles.exitActive,
            exit: styles.exit,
          }}
          unmountOnExit
        >
          <div className={cx(styles.toast)}>
            <span>{toast.message}</span>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>,
    toastRoot,
  );
}

export default Toast;
