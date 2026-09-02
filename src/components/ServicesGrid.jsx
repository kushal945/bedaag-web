import React, { useState } from 'react';
import {
  Sparkles,
  Flame,
  Footprints,
  ShieldCheck,
  Home,
  Zap,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

const iconMap = {
  Sparkles: Sparkles,
  Flame: Flame,
  Footprints: Footprints,
  ShieldCheck: ShieldCheck,
  Home: Home,
  Zap: Zap,
};

export default function ServicesGrid({ onSelectCategory, onOpenBooking }) {
  const [selectedService, setSelectedService] = useState(null);

  const handlePricingClick = (serviceId) => {
    // Map service to rate card category
    const categoryMapping = {
      'dry-cleaning': 'womens',
      'steam-press': 'mens',
      'shoe-clinic': 'shoes_bags',
      'leather-spa': 'shoes_bags',
      'home-linen': 'household',
      'express-24h': 'mens',
    };

    const targetCategory = categoryMapping[serviceId] || 'mens';
    onSelectCategory(targetCategory);

    const rateCardElement = document.getElementById('rate-card');
    if (rateCardElement) {
      rateCardElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="section-padding"
      style={{ backgroundColor: 'var(--slate-50)', borderTop: '1px solid var(--slate-200)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-eyebrow">
            <Sparkles size={14} color="var(--cyan-500)" />
            <span>Artisanal Fabric Care</span>
          </div>
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
            Comprehensive Care for Every Precious Thread
          </h2>
          <p className="section-desc">
            From heirloom Banarasi silk sarees and designer tuxedos to luxury sneakers and leather bags,
            every item receives bespoke treatment using certified eco-friendly technology.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  border: '1px solid var(--slate-200)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--slate-200)';
                }}
              >
                {/* Image Header with Badge */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Top Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(10, 25, 47, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {service.badge}
                  </div>

                  {/* Turnaround Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--navy-900)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <Clock size={13} color="var(--cyan-600)" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Icon + Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          backgroundColor: 'var(--aqua-50)',
                          color: 'var(--cyan-600)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: 'var(--navy-900)',
                            lineHeight: 1.2,
                          }}
                        >
                          {service.title}
                        </h3>
                        <div style={{ fontSize: '0.8rem', color: 'var(--cyan-600)', fontWeight: 600 }}>
                          {service.tagline}
                        </div>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '0.925rem',
                        color: 'var(--slate-600)',
                        lineHeight: 1.55,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.features.map((feat, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.85rem',
                            color: 'var(--slate-700)',
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color="var(--emerald-500)"
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--slate-100)',
                    }}
                  >
                    <button
                      onClick={() => handlePricingClick(service.id)}
                      className="btn btn-secondary"
                      style={{ flex: 1, fontSize: '0.875rem', padding: '0.65rem 1rem' }}
                    >
                      <span>View Rate Card</span>
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="btn btn-primary"
                      style={{ flex: 1, fontSize: '0.875rem', padding: '0.65rem 1rem' }}
                    >
                      <span>Book Pickup</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
