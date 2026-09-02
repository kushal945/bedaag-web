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

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate-400)', marginBottom: '1.5rem' }}>
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
              }}
            >
              <ShieldCheck size={14} />
              <span>100% Odor-Free & PERC-Free Certified</span>
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
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--slate-500)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Bedaag The Dry Cleaners Pvt. Ltd. All rights reserved. Pristine Gurugram Garment Care.
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
