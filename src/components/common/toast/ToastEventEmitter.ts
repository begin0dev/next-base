import { EventEmitter } from 'events';

import { generateID } from '@/utils/helper';
import { ToastAddType, ToastCallbackType, toastAction } from './types';

class ToastEventEmitter extends EventEmitter {
  private readonly CHANGE_EVENT_NAME = 'change' as const;

  addChangeListener(callback: ToastCallbackType) {
    this.addListener(this.CHANGE_EVENT_NAME, callback);
  }

  removeChangeListener(callback: ToastCallbackType) {
    this.removeListener(this.CHANGE_EVENT_NAME, callback);
  }

  add({ message, autoCloseTime, isAutoClose }: ToastAddType) {
    this.emit(this.CHANGE_EVENT_NAME, {
      id: generateID('toast-message-'),
      action: toastAction.ADD,
      visible: true,
      autoCloseTime: autoCloseTime ?? 3000,
      isAutoClose: isAutoClose ?? true,
      message,
    });
  }

  remove(id: string) {
    this.emit(this.CHANGE_EVENT_NAME, {
      id,
      action: toastAction.REMOVE,
    });
  }
}

export default new ToastEventEmitter();
