"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface ToastContextType {
  showToast: () => void;
  hideToast: () => void;
  isToastVisible: boolean;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = () => setIsToastVisible(true);
  const hideToast = () => setIsToastVisible(false);

  return (
    <ToastContext.Provider value={{ showToast, hideToast, isToastVisible }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
