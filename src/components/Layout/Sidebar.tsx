import { useRecoilState } from 'recoil';
import { Drawer } from '@/components/common';
import { sidebarState } from '@/components/Layout/sidebarState';
import styles from './sidebar.module.scss';

function Sidebar() {
  const [isShowSidebar, setSidebarState] = useRecoilState(sidebarState);

  return (
    <Drawer position='right' isShow={isShowSidebar} onClose={() => setSidebarState(false)}>
      <div className={styles.wrapper}>sidebar</div>
    </Drawer>
  );
}

export default Sidebar;
