import { ReactNode } from 'react';

export interface AlertInfo {
  title?: string;
  content: string | ReactNode;
  cancelText?: string;
  cancelAction?: () => void;
  confirmText?: string;
  confirmAction?: () => void;
  className?: string;
  showCancel?: boolean;
  showOverlay?: boolean;
}

export type AlertCallbackType = (alert: AlertInfo) => void;
