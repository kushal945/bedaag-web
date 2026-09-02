import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Truck,
  Star,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { POPULAR_SECTOR_CHIPS } from '../data/sectorsData';

export default function Hero({ onQuickBook }) {
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState('Sector 50, Nirvana Country');
  const [service, setService] = useState('Signature Dry Cleaning');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }
    setFormError('');
    onQuickBook({ phone, sector, service });
  };

  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        padding: '3.5rem 0 5rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Hero Copy & Interactive Booking Card */}
          <div>
            {/* Trust Pill */}
            <div className="section-eyebrow animate-float" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={15} color="var(--cyan-500)" />
              <span>Gurugram's Most Trusted Fabric Care & Dry Cleaners</span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero" style={{ marginBottom: '1.25rem' }}>
              Spotless Garment Care <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Delivered to Your Doorstep.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--slate-600)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              Experience gentle organic dry cleaning, expert stain removal, and crisp Italian steam pressing.
              Pickups across DLF, Golf Course Road, Nirvana Country & all Gurugram sectors with 48-hour turnaround.
            </p>

            {/* Interactive Quick Booking Widget */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                marginBottom: '1.75rem',
                maxWidth: '560px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--emerald-500)',
                      boxShadow: '0 0 8px var(--emerald-500)',
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy-900)' }}>
                    Instant Gurugram Pickup Scheduler
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--emerald-600)',
                    backgroundColor: 'var(--emerald-50)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 700,
                  }}
                >
                  Slots Open Today
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  {/* Phone Input with +91 Prefix */}
                  <div>
                    <label
                      htmlFor="hero-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--slate-500)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Your Mobile Number
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1.5px solid var(--slate-200)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: 'var(--slate-50)',
                        transition: 'border-color 0.2s',
                      }}
                      onFocusCapture={(e) => (e.currentTarget.style.borderColor = 'var(--cyan-500)')}
                      onBlurCapture={(e) => (e.currentTarget.style.borderColor = 'var(--slate-200)')}
                    >
                      <span
                        style={{
                          padding: '0.75rem 0.85rem',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: 'var(--navy-900)',
                          borderRight: '1px solid var(--slate-200)',
                          background: 'var(--slate-100)',
                        }}
                      >
                        🇮🇳 +91
                      </span>
                      <input
                        id="hero-phone"
                        type="tel"
                        placeholder="98110 00000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        maxLength={10}
                        style={{
                          flex: 1,
                          padding: '0.75rem 1rem',
                          border: 'none',
                          background: 'transparent',
                          fontSize: '1rem',
                          fontWeight: 500,
                          color: 'var(--navy-900)',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Sector & Service 2-col on larger view */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '0.75rem',
                    }}
                  >
                    {/* Gurugram Sector Dropdown */}
                    <div>
                      <label
                        htmlFor="hero-sector"
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--slate-500)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        Sector / Landmark
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="hero-sector"
                          value={sector}
                          onChange={(e) => setSector(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            border: '1.5px solid var(--slate-200)',
                            background: 'var(--slate-50)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'var(--navy-900)',
                            outline: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          {POPULAR_SECTOR_CHIPS.map((sec) => (
                            <option key={sec} value={sec}>
                              {sec}
                            </option>
                          ))}
                          <option value="DLF Phase 1-5">DLF Phase 1 - 5</option>
                          <option value="Sushant Lok">Sushant Lok 1 & 2</option>
                          <option value="Cyber City">Cyber City / Cyber Hub</option>
                          <option value="Other Gurugram Sector">Other Gurugram Sector</option>
                        </select>
                      </div>
                    </div>

                    {/* Service Type Selector */}
                    <div>
                      <label
                        htmlFor="hero-service"
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--slate-500)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        Primary Service
                      </label>
                      <select
                        id="hero-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          border: '1.5px solid var(--slate-200)',
                          background: 'var(--slate-50)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--navy-900)',
                          outline: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="Signature Dry Cleaning">Signature Dry Cleaning</option>
                        <option value="Italian Steam Pressing">Italian Steam Pressing</option>
                        <option value="Sneaker & Shoe Clinic">Sneaker & Shoe Clinic</option>
                        <option value="Luxury Bag & Leather Spa">Luxury Bag & Leather Spa</option>
                        <option value="Heavy Quilts & Linen">Heavy Quilts & Linen</option>
                        <option value="Urgent 24H Express">Urgent 24H Express</option>
                      </select>
                    </div>
                  </div>
                </div>

                {formError && (
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: '#EF4444',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '14px',
                  }}
                >
                  <span>Schedule Free Doorstep Pickup</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Trust Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                fontSize: '0.85rem',
                color: 'var(--slate-600)',
                fontWeight: 600,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Truck size={17} color="var(--cyan-600)" />
                <span>Free Pickup & Drop above ₹499</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={17} color="var(--emerald-500)" />
                <span>100% Odor-Free German Solvents</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Star size={17} color="var(--amber-500)" fill="var(--amber-500)" />
                <span>4.8/5 on Google (500+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Badges */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px -12px rgba(10, 25, 47, 0.22)',
                border: '4px solid white',
              }}
            >
              <img
                src="/images/hero_doorstep.jpg"
                alt="Bedaag dry cleaning concierge delivering pristine clothes in Gurugram"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10, 25, 47, 0) 60%, rgba(10, 25, 47, 0.7) 100%)',
                }}
              />

              {/* Bottom Image Overlay Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  color: 'white',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  <MapPin size={16} color="var(--cyan-500)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.9 }}>
                    Doorstep Delivery at The Crest, DLF Phase 5
                  </span>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  Pristine, Wrinkle-Free & Tamper-Sealed
                </div>
              </div>
            </div>

            {/* Floating Trust Card Top-Left */}
            <div
              className="animate-float hide-on-mobile"
              style={{
                position: 'absolute',
                top: '-18px',
                left: '-20px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                padding: '0.85rem 1.25rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--emerald-50)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald-600)',
                }}
              >
                <CheckCircle2 size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--slate-500)' }}>Fabric Safe</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--navy-900)' }}>
                  Zero PERC Chemicals
                </div>
              </div>
            </div>

            {/* Floating SLA Badge Bottom-Right */}
            <div
              className="animate-float hide-on-mobile"
              style={{
                position: 'absolute',
                bottom: '40px',
                right: '-18px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                padding: '0.85rem 1.25rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                zIndex: 2,
                animationDelay: '1.5s',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--aqua-50)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-600)',
                }}
              >
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--slate-500)' }}>Fast Turnaround</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--navy-900)' }}>
                  48-Hour Return SLA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
