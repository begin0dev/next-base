import dynamic from 'next/dynamic';
import useAlert from './useAlert';

const Alert = dynamic(() => import('./Alert'), { ssr: false });

export { Alert, useAlert };
