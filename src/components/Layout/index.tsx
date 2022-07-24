import { ReactNode } from 'react';
import { Toast } from '@/components/common/toast';
import { Alert } from '@/components/common/alert';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles.main}>{children}</main>

      <Toast />
      <Alert />
    </>
  );
}

export default Layout;
