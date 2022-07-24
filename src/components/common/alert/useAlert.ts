import { useCallback } from 'react';

import AlertEventEmitter from './AlertEventEmitter';
import { AlertInfo } from './types';

function useAlert() {
  return useCallback((alertInfo: AlertInfo) => {
    AlertEventEmitter.add(alertInfo);
  }, []);
}

export default useAlert;
