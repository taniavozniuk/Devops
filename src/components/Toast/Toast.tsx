import React, { useEffect, useState } from "react";
import "./Toast.css";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
  showCloseButton: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  showCloseButton: showClostBt,
}) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log("Duration:", duration);
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      {showClostBt && (
        <button className="toast-close" onClick={() => setVisible(false)}>
          &times;
        </button>
      )}
    </div>
  );
};
