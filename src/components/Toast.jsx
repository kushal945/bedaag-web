import React, { useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '85px',
        right: '20px',
        zIndex: 999,
        backgroundColor: 'var(--navy-900)',
        color: 'white',
        padding: '0.85rem 1.25rem',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        border: '1px solid rgba(14, 165, 233, 0.4)',
        fontSize: '0.875rem',
        fontWeight: 600,
        animation: 'fadeIn 0.25s ease-out',
        maxWidth: '340px',
      }}
    >
      <CheckCircle2 size={18} color="var(--emerald-500)" style={{ flexShrink: 0 }} />
      <span style={{ flex: 1 }}>{message}</span>
    </div>
  );
}
