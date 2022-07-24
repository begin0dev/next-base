import { valueOf } from '@/utils/typescript-utils';

export type PositionType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export const toastAction = {
  ADD: 'add',
  REMOVE: 'remove',
} as const;
type ToastActionType = valueOf<typeof toastAction>;

export interface ToastItemInterface {
  id: string;
  action: ToastActionType;
  message: string;
  visible: boolean;
  autoCloseTime: number;
  isAutoClose: boolean;
}

export type ToastAddType = Pick<ToastItemInterface, 'message'> &
  Partial<Pick<ToastItemInterface, 'autoCloseTime' | 'isAutoClose'>>;

export type ToastCallbackType = (
  toast: Pick<ToastItemInterface, 'id' | 'action'> | ToastItemInterface,
) => void;
