import React from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Heart,
  ArrowUp,
} from 'lucide-react';

const FacebookIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block' }}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const facebookUrl = 'https://www.facebook.com/people/BEDAAG-The-Dry-cleaners/100093749471836/';
  const instagramUrl = 'https://www.instagram.com/bedaag_the_dry_cleaners';

  return (
    <footer
      style={{
        backgroundColor: 'var(--navy-950)',
        color: 'var(--slate-300)',
        padding: '5rem 0 3rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
                  Bedaag
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--cyan-500)' }}>
                  The Dry Cleaners
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate-400)', marginBottom: '1.25rem' }}>
              The word <em>Bedaag</em> represents our commitment to spotless, pristine, and unblemished garment care.
              Serving Gurugram with organic German solvents, Italian steam finishing, and free doorstep logistics.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                color: 'var(--emerald-500)',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '1.75rem',
              }}
            >
              <ShieldCheck size={14} />
              <span>100% Odor-Free & PERC-Free Certified</span>
            </div>

            {/* Social Media Channels */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--slate-400)',
                  marginBottom: '0.75rem',
                }}
              >
                Follow Our Care Journey:
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Bedaag on Instagram"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--white)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E1306C';
                    e.currentTarget.style.borderColor = '#E1306C';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(225, 48, 108, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <InstagramIcon size={17} color="#FFFFFF" />
                  <span>Instagram</span>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Bedaag on Facebook"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--white)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1877F2';
                    e.currentTarget.style.borderColor = '#1877F2';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(24, 119, 242, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FacebookIcon size={17} color="#FFFFFF" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', marginBottom: '1.25rem' }}>
              Fabric Care Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <a href="#services" style={{ color: 'var(--slate-400)', transition: 'color 0.2s' }}>
                  Signature Organic Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'var(--slate-400)', transition: 'color 0.2s' }}>
                  Italian Steam Pressing & Vacuum Finish
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'var(--slate-400)', transition: 'color 0.2s' }}>
                  Luxury Sneaker & Shoe Clinic
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'var(--slate-400)', transition: 'color 0.2s' }}>
                  Handbag & Leather Spa Atelier
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'var(--slate-400)', transition: 'color 0.2s' }}>
                  Heavy Quilts & Blanket Sanitization
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'var(--slate-400)', transition: 'color 0.2s' }}>
                  Priority 24-Hour Express Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Gurugram Hubs */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', marginBottom: '1.25rem' }}>
              Doorstep Service Hubs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--slate-400)' }}>
              <li>• Sector 50 & Nirvana Country</li>
              <li>• DLF Phase 1, 2, 3, 4 & 5 (The Crest)</li>
              <li>• Golf Course Road & Golf Course Ext.</li>
              <li>• Sohna Road & South City 2</li>
              <li>• Sushant Lok 1, 2 & 3</li>
              <li>• Sector 54, 56, 57 & SunCity</li>
              <li>• New Gurgaon (Sector 82, 83)</li>
            </ul>
          </div>

          {/* Col 4: Store Address & Hours */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', marginBottom: '1.25rem' }}>
              Physical Atelier & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--cyan-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Shop 114, Nirvana Courtyard, Sector 50, Gurugram, Haryana 122018</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={16} color="var(--cyan-500)" style={{ flexShrink: 0 }} />
                <span>Daily: 9:00 AM – 9:00 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="var(--cyan-500)" style={{ flexShrink: 0 }} />
                <span>+91 98110 00000 / 0124-4000000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="var(--cyan-500)" style={{ flexShrink: 0 }} />
                <span>care@bedaagdrycleaners.com</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1.25rem', padding: '0.75rem', fontSize: '0.875rem' }}
            >
              <span>Schedule Free Doorstep Pickup</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontSize: '0.8125rem',
            color: 'var(--slate-500)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Bedaag The Dry Cleaners Pvt. Ltd. All rights reserved. Pristine Gurugram Garment Care.
          </div>

          {/* Social Links in Bottom Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--slate-400)' }}>
            <span style={{ fontSize: '0.8rem' }}>Connect:</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--slate-300)', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E1306C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--slate-300)')}
            >
              <InstagramIcon size={15} />
              <span>Instagram</span>
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--slate-300)', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1877F2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--slate-300)')}
            >
              <FacebookIcon size={15} />
              <span>Facebook</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--cyan-500)',
              fontWeight: 700,
              fontSize: '0.8125rem',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
