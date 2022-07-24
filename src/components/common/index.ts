import dynamic from 'next/dynamic';

export * from './Hamburger';
export * from './Drawer';
export * from './Overlay';

const ModalPortal = dynamic(() => import('./ModalPortal'), { ssr: false });

export { ModalPortal };
