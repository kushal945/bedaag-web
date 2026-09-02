import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MessageCircle, Calendar, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenBooking, cartCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Rate Card', href: '#rate-card' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Gurugram Sectors', href: '#coverage' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl =
    'https://wa.me/919811000000?text=' +
    encodeURIComponent('Hi Bedaag Care Team, I would like to schedule a doorstep dry cleaning pickup in Gurugram.');

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          transition: 'all 0.25s ease',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.85)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(10, 25, 47, 0.05)' : 'none',
        }}
      >
        {/* Top Mini Banner */}
        <div
          style={{
            backgroundColor: 'var(--navy-900)',
            color: 'var(--white)',
            fontSize: '0.75rem',
            padding: '0.4rem 1rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            fontWeight: 500,
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={13} color="var(--aqua-500)" />
            <strong>Gurugram Special:</strong> Free Doorstep Pickup & Delivery on orders above ₹499
          </span>
          <span className="hide-on-mobile" style={{ opacity: 0.6 }}>•</span>
          <span className="hide-on-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={13} color="var(--emerald-500)" />
            100% Odorless German Solvents
          </span>
        </div>

        {/* Main Navbar */}
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            height: '74px',
            gap: '1.5rem',
          }}
        >
          {/* Col 1: Brand Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              justifySelf: 'start',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '11px',
                background: 'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <Sparkles size={20} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--navy-900)',
                  lineHeight: 1.1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                Bedaag
                <span
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--cyan-500)',
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--cyan-600)',
                  lineHeight: 1,
                  marginTop: '2px',
                }}
              >
                The Dry Cleaners
              </div>
            </div>
          </a>

          {/* Col 2: Desktop Nav Links (Perfect Center Alignment) */}
          <nav
            className="hide-on-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              justifySelf: 'center',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--slate-700)',
                  transition: 'all 0.2s ease',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-pill)',
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--cyan-600)';
                  e.currentTarget.style.backgroundColor = 'var(--slate-100)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--slate-700)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Col 3: Header Action Buttons (Aligned Right) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              justifySelf: 'end',
              flexShrink: 0,
            }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hide-on-mobile"
              style={{
                fontSize: '0.85rem',
                height: '42px',
                padding: '0 1.25rem',
                borderRadius: 'var(--radius-pill)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{
                fontSize: '0.875rem',
                height: '42px',
                padding: '0 1.35rem',
                position: 'relative',
                borderRadius: 'var(--radius-pill)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <Calendar size={16} />
              <span>Book Pickup</span>
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    backgroundColor: 'var(--emerald-500)',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid white',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hide-on-desktop"
              style={{
                padding: '0.5rem',
                borderRadius: '8px',
                color: 'var(--navy-900)',
                background: 'var(--slate-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'white',
              borderTop: '1px solid var(--slate-200)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: 600,
                    padding: '0.75rem 0.5rem',
                    color: 'var(--slate-800)',
                    borderRadius: '8px',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', marginBottom: '0.75rem', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
