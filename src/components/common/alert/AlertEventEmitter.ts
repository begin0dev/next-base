import { EventEmitter } from 'events';

import { AlertInfo, AlertCallbackType } from './types';

class AlertEventEmitter extends EventEmitter {
  private readonly ALERT = 'alert' as const;

  addChangeListener(callback: AlertCallbackType) {
    this.addListener(this.ALERT, callback);
  }

  removeChangeListener(callback: AlertCallbackType) {
    this.removeListener(this.ALERT, callback);
  }

  add(props: AlertInfo) {
    this.emit(this.ALERT, props);
  }
}

export default new AlertEventEmitter();
