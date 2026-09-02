import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { GURUGRAM_HUBS, POPULAR_SECTOR_CHIPS } from '../data/sectorsData';

export default function PincodeChecker({ onSelectSectorForBooking }) {
  const [query, setQuery] = useState('');
  const [matchResult, setMatchResult] = useState(null);

  const handleSearch = (searchTerm) => {
    const text = searchTerm || query;
    if (!text || text.trim().length === 0) {
      setMatchResult(null);
      return;
    }

    const clean = text.toLowerCase().trim();
    const found = GURUGRAM_HUBS.find(
      (hub) =>
        hub.name.toLowerCase().includes(clean) ||
        hub.pincode.includes(clean) ||
        hub.hub.toLowerCase().includes(clean)
    );

    if (found) {
      setMatchResult({
        served: true,
        hub: found,
        message: `We serve ${found.name}! Next doorstep pickup slot available: ${found.slot}`,
      });
    } else {
      // Default affirmative for any Gurugram sector
      setMatchResult({
        served: true,
        hub: { name: text, pincode: '122001', slot: 'Today, 5:00 PM', hub: 'Gurugram Express Van' },
        message: `We serve ${text}! Our mobile care van can pick up today between 4:00 PM - 7:00 PM.`,
      });
    }
  };

  const handleChipClick = (sectorName) => {
    setQuery(sectorName);
    handleSearch(sectorName);
  };

  return (
    <section
      id="coverage"
      className="section-padding"
      style={{ backgroundColor: 'var(--slate-50)', borderTop: '1px solid var(--slate-200)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">
            <MapPin size={14} color="var(--cyan-500)" />
            <span>Gurugram & NCR Coverage</span>
          </div>
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
            Doorstep Fabric Care Across Every Sector
          </h2>
          <p className="section-desc">
            Check your area availability and see when our dry cleaning concierge van is next arriving in your neighborhood.
          </p>
        </div>

        {/* Search Box Card */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 3rem auto',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-xl)',
            border: '1.5px solid var(--slate-200)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: '220px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--slate-50)',
                border: '1.5px solid var(--slate-200)',
                borderRadius: '14px',
                padding: '0.2rem 1rem',
              }}
            >
              <Search size={18} color="var(--slate-400)" />
              <input
                type="text"
                placeholder="Enter Gurugram Sector or Pincode (e.g. 50, 122018, DLF)"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem',
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--navy-900)',
                }}
              />
            </div>

            <button
              onClick={() => handleSearch()}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', borderRadius: '14px' }}
            >
              <span>Check Area</span>
            </button>
          </div>

          {/* Instant Result Box */}
          {matchResult && (
            <div
              style={{
                backgroundColor: 'var(--emerald-50)',
                border: '1.5px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
                marginBottom: '1.5rem',
                animation: 'fadeIn 0.3s ease',
              }}
            >
              <CheckCircle2 size={22} color="var(--emerald-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065F46', marginBottom: '0.25rem' }}>
                  {matchResult.message}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#047857', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={13} />
                  <span>Free doorstep pickup & delivery guaranteed on your sector.</span>
                </div>
              </div>
            </div>
          )}

          {/* Popular Clickable Sector Chips */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--slate-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.65rem',
              }}
            >
              Popular Gurugram Hubs:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {POPULAR_SECTOR_CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleChipClick(chip)}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: query === chip ? 'var(--navy-900)' : 'var(--slate-100)',
                    color: query === chip ? 'white' : 'var(--slate-700)',
                    border: '1px solid var(--slate-200)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage Cards Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {GURUGRAM_HUBS.slice(0, 4).map((hub, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                borderRadius: '18px',
                padding: '1.5rem',
                border: '1px solid var(--slate-200)',
                boxShadow: 'var(--shadow-xs)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--cyan-700)',
                    backgroundColor: 'var(--aqua-50)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {hub.hub}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-400)' }}>
                  Pin: {hub.pincode}
                </span>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.4rem' }}>
                {hub.name}
              </h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} color="var(--emerald-500)" />
                <span>Next pickup: <strong>{hub.slot}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
