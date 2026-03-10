"use client";

import { useEffect } from 'react';
import { useToast } from '@/contexts/ToastContext';

export default function Toast() {
  const { isToastVisible, hideToast } = useToast();

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isToastVisible, hideToast]);

  if (!isToastVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[9999] animate-pulse">
      <div className="bg-[#3DDC97] text-[#022B1C] px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-semibold">Message sent successfully!</span>
      </div>
    </div>
  );
}
