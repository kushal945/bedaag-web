import React from 'react';
import { ShieldCheck, QrCode, Clock, Leaf, Sparkles, Award } from 'lucide-react';

export default function WhyBedaag() {
  const points = [
    {
      icon: Leaf,
      title: 'German Hydrocarbon Solvents',
      tagline: 'Zero Toxic PERC Chemicals',
      desc: 'Traditional dry cleaners use harsh perchloroethylene which leaves an acrid chemical smell and damages delicate zari work. We use 100% odorless, dermatologically tested solvents.',
      color: 'var(--emerald-500)',
      bg: 'var(--emerald-50)',
    },
    {
      icon: QrCode,
      title: 'Barcoded Individual Tracking',
      tagline: 'Zero Mix-Up Guarantee',
      desc: 'Every saree, shirt, and trouser is tagged with a heat-resistant digital barcode at pickup. Track your garment through sorting, inspection, spotting, and finishing.',
      color: 'var(--cyan-600)',
      bg: 'var(--aqua-50)',
    },
    {
      icon: Clock,
      title: 'Flexible 2-Hour Doorstep Slots',
      tagline: 'Gurugram Wide Convenience',
      desc: 'Morning (9 AM - 12 PM), Afternoon (1 PM - 4 PM), or Evening (5 PM - 8 PM). Scheduled around your busy calendar with live driver ETA alerts.',
      color: 'var(--amber-500)',
      bg: 'var(--amber-50)',
    },
    {
      icon: Award,
      title: 'Breathable Eco Wardrobe Covers',
      tagline: 'Museum-Grade Storage Ready',
      desc: 'Never receive cheap clingy plastic that traps moisture. We return clothes in sturdy, non-woven breathable garment covers with ergonomic wooden-profile hangers.',
      color: 'var(--navy-800)',
      bg: 'var(--slate-100)',
    },
  ];

  return (
    <section id="why-bedaag" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-eyebrow">
            <ShieldCheck size={14} color="var(--cyan-500)" />
            <span>The Bedaag Standard</span>
          </div>
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
            Why Gurugram Trusts Bedaag Over Local Cleaners
          </h2>
          <p className="section-desc">
            We combined European garment care engineering with doorstep on-demand logistics to eliminate
            every frustration in fabric maintenance.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--slate-50)',
                  borderRadius: '24px',
                  padding: '2.25rem 1.75rem',
                  border: '1px solid var(--slate-200)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
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
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: pt.bg,
                    color: pt.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Icon size={28} />
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--cyan-600)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {pt.tagline}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--navy-900)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {pt.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--slate-600)',
                    lineHeight: 1.6,
                  }}
                >
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
