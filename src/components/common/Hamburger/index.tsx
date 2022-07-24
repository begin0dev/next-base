import cx from 'classnames';
import styles from './hamburger.module.scss';

interface Props {
  active: boolean;
  onClick: () => void;
}

export function Hamburger({ active, onClick }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cx(styles.wrapper, { [styles.active]: active })}
    >
      <div className={styles.box}>
        <div className={styles.line} />
      </div>
    </button>
  );
}
