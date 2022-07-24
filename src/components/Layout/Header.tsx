import { useRecoilState } from 'recoil';
import { Hamburger } from '@/components/common/Hamburger';
import { IconBell } from '@/assets/svgs';
import { sidebarState } from '@/components/Layout/sidebarState';
import styles from './header.module.scss';

function Header() {
  const [isShowSidebar, setSidebarState] = useRecoilState(sidebarState);

  return (
    <header className={styles.wrapper}>
      <Hamburger
        active={isShowSidebar}
        onClick={() => setSidebarState((prevState) => !prevState)}
      />
      검색
      <IconBell className={styles.bellIcon} />
    </header>
  );
}

export default Header;
