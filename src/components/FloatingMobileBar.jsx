import React from 'react';
import { MessageCircle, Calendar, ShoppingBag } from 'lucide-react';

export default function FloatingMobileBar({ onOpenBooking, cartCount }) {
  const whatsappUrl =
    'https://wa.me/919811000000?text=' +
    encodeURIComponent('Hi Bedaag Care Concierge, I would like to schedule a doorstep dry cleaning pickup in Gurugram.');

  return (
    <div
      className="hide-on-desktop"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--slate-200)',
        padding: '0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom, 0px)) 1rem',
        boxShadow: '0 -4px 20px rgba(10, 25, 47, 0.08)',
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
        style={{
          flex: 1,
          padding: '0.75rem',
          fontSize: '0.85rem',
          borderRadius: '14px',
          justifyContent: 'center',
        }}
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="btn btn-primary"
        style={{
          flex: 1.6,
          padding: '0.75rem',
          fontSize: '0.875rem',
          borderRadius: '14px',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Calendar size={18} />
        <span>Book Free Pickup</span>
        {cartCount > 0 && (
          <span
            style={{
              backgroundColor: 'var(--emerald-500)',
              color: 'white',
              fontSize: '0.7rem',
              fontWeight: 800,
              padding: '0.1rem 0.45rem',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid white',
              marginLeft: '0.2rem',
            }}
          >
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
