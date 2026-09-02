import React from 'react';
import { Calendar, PackageCheck, Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  const steps = [
    {
      step: '01',
      title: 'Schedule in 60 Seconds',
      desc: 'Select your preferred pickup date, time slot, and Gurugram address online or via WhatsApp.',
      icon: Calendar,
      highlight: 'Instant Confirmation',
    },
    {
      step: '02',
      title: 'Doorstep Sanitized Pickup',
      desc: 'Our uniformed care executive collects your garments in tamper-proof bags with individual barcode tagging.',
      icon: PackageCheck,
      highlight: 'Zero Mix-Up Guarantee',
    },
    {
      step: '03',
      title: 'Spotless 48H Delivery',
      desc: 'Individually inspected, steam-pressed, and delivered on luxury hangers protected by breathable garment covers.',
      icon: Sparkles,
      highlight: 'Pristine & Wrinkle-Free',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-eyebrow">
            <Clock size={14} color="var(--cyan-500)" />
            <span>Effortless 3-Step Process</span>
          </div>
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
            Garment Care as Effortless as Tapping a Button
          </h2>
          <p className="section-desc">
            No more driving through traffic or dealing with harsh chemicals. Bedaag handles everything from door to door.
          </p>
        </div>

        {/* Steps Grid with Connectors */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}
        >
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.step}
                style={{
                  backgroundColor: 'var(--slate-50)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: '24px',
                  padding: '2.25rem 2rem',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  e.currentTarget.style.borderColor = 'var(--cyan-500)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--slate-200)';
                }}
              >
                <div>
                  {/* Top Bar: Step Number & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        backgroundColor: 'var(--aqua-50)',
                        border: '1px solid rgba(14, 165, 233, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan-600)',
                      }}
                    >
                      <IconComponent size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: '2rem',
                        fontWeight: 900,
                        color: 'var(--slate-300)',
                        letterSpacing: '-0.05em',
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--navy-900)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--slate-600)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--cyan-700)',
                    backgroundColor: 'var(--aqua-100)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    width: 'fit-content',
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn btn-primary"
            style={{ padding: '0.9rem 2rem', fontSize: '1.05rem', fontWeight: 700 }}
          >
            <span>Book Your Free Pickup Now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
