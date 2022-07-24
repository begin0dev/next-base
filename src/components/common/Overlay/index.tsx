import styles from './overlay.module.scss';

interface Props {
  onClose?: () => void;
}

export function Overlay({ onClose }: Props) {
  return (
    <div
      role='button'
      tabIndex={0}
      aria-label='overlay'
      className={styles.wrapper}
      onClick={onClose}
    />
  );
}
