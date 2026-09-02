import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { CUSTOMER_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '../data/reviewsData';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        {/* Section Header with Live Google Rating Pill */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">
            <Star size={14} color="var(--amber-500)" fill="var(--amber-500)" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
            Loved by Over 500+ Discerning Wardrobes
          </h2>
          <p className="section-desc">
            See why Gurugram’s top executives, bridal families, and sneakerheads trust Bedaag with their most valuable garments.
          </p>

          {/* Google Summary Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'var(--slate-50)',
              border: '1.5px solid var(--slate-200)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.6rem 1.4rem',
              marginTop: '1.5rem',
            }}
          >
            {/* Google G Logo colors simulation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 800 }}>
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </div>

            <div style={{ height: '16px', width: '1px', backgroundColor: 'var(--slate-300)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={15} color="var(--amber-500)" fill="var(--amber-500)" />
              ))}
            </div>

            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--navy-900)' }}>
              {GOOGLE_REVIEWS_SUMMARY.rating} / 5.0
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
              ({GOOGLE_REVIEWS_SUMMARY.totalReviews} reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              style={{
                backgroundColor: 'var(--slate-50)',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid var(--slate-200)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--slate-200)';
              }}
            >
              <div>
                {/* Rating Stars & Date */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} color="var(--amber-500)" fill="var(--amber-500)" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 600 }}>
                    {rev.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--cyan-700)',
                    backgroundColor: 'var(--aqua-50)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    width: 'fit-content',
                    marginBottom: '0.85rem',
                  }}
                >
                  {rev.service}
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--slate-700)',
                    lineHeight: 1.6,
                    fontStyle: 'normal',
                    marginBottom: '1.5rem',
                  }}
                >
                  "{rev.review}"
                </p>
              </div>

              {/* Author Details */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--slate-200)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--navy-900)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                  }}
                >
                  {rev.name.charAt(0)}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--navy-900)' }}>
                      {rev.name}
                    </span>
                    <CheckCircle2 size={15} color="var(--emerald-500)" />
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--slate-500)' }}>
                    {rev.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
