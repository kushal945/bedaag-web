import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, AlertCircle } from 'lucide-react';

const PRESETS = [
  {
    id: 'silk-stain',
    title: 'Wine & Curry Stain on Pure Silk',
    category: 'Silk & Delicate Fabrics',
    beforeImg: '/images/stain_silk_before.jpg',
    afterImg: '/images/stain_silk_after.jpg',
    beforeLabel: 'Deep Oil & Tannin Stain',
    afterLabel: '100% Spotless & Zero Fiber Damage',
    badge: 'Hydrocarbon Spotting',
  },
  {
    id: 'sneaker-restore',
    title: 'Monsoon Mud & Scuffs on Luxury Sneakers',
    category: 'Sneaker & Footwear Clinic',
    beforeImg: '/images/sneaker_before.jpg',
    afterImg: '/images/sneaker_after.jpg',
    beforeLabel: 'Heavily Soiled Midsole & Upper',
    afterLabel: 'Restored Bright White Finish',
    badge: 'Sole Whitening & Detailing',
  },
];

export default function BeforeAfterSlider() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activePreset = PRESETS[activePresetIndex];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section
      id="before-after"
      className="section-padding"
      style={{
        backgroundColor: 'var(--navy-900)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            className="section-eyebrow"
            style={{
              backgroundColor: 'rgba(14, 165, 233, 0.15)',
              borderColor: 'rgba(14, 165, 233, 0.3)',
              color: 'var(--cyan-500)',
            }}
          >
            <Sparkles size={14} color="var(--cyan-500)" />
            <span>The Bedaag Guarantee</span>
          </div>
          <h2
            className="heading-section"
            style={{ color: 'var(--white)', marginBottom: '1rem' }}
          >
            Spotless Transformations in Action
          </h2>
          <p
            className="section-desc"
            style={{ color: 'var(--slate-300)', maxWidth: '600px' }}
          >
            Drag the interactive slider back and forth to inspect our microscopic stain extraction and
            restoration results.
          </p>

          {/* Preset Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                onClick={() => {
                  setActivePresetIndex(idx);
                  setSliderPos(50);
                }}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  transition: 'all 0.2s',
                  backgroundColor:
                    activePresetIndex === idx
                      ? 'var(--cyan-500)'
                      : 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--white)',
                  border:
                    activePresetIndex === idx
                      ? '1px solid var(--cyan-500)'
                      : '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                {preset.category}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            backgroundColor: 'var(--navy-800)',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '1.5rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
          }}
        >
          {/* Preset Title & Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>
              {activePreset.title}
            </h3>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--emerald-500)',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              {activePreset.badge}
            </span>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            style={{
              position: 'relative',
              width: '100%',
              height: '420px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'ew-resize',
              userSelect: 'none',
              touchAction: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            {/* After Image (Full background) */}
            <img
              src={activePreset.afterImg}
              alt="After Bedaag Cleaning"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
              }}
            />

            {/* Before Image (Clipped overlay) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${sliderPos}%`,
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
              }}
            >
              <img
                src={activePreset.beforeImg}
                alt="Before Cleaning"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '800px',
                  height: '100%',
                  objectFit: 'cover',
                  maxWidth: 'none',
                }}
              />
            </div>

            {/* Divider Line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                width: '3px',
                backgroundColor: 'white',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                pointerEvents: 'none',
              }}
            >
              {/* Draggable Circle Handle */}
              <div
                onMouseDown={handleMouseDown}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  color: 'var(--navy-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                  cursor: 'ew-resize',
                  pointerEvents: 'auto',
                }}
              >
                <MoveHorizontal size={22} color="var(--navy-900)" />
              </div>
            </div>

            {/* Labels floating inside */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                backgroundColor: 'rgba(10, 25, 47, 0.85)',
                backdropFilter: 'blur(8px)',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <AlertCircle size={14} color="#EF4444" />
              <span>BEFORE</span>
            </div>

            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                backgroundColor: 'rgba(14, 165, 233, 0.9)',
                backdropFilter: 'blur(8px)',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <CheckCircle2 size={14} color="white" />
              <span>AFTER BEDAAG CARE</span>
            </div>
          </div>

          {/* Details below slider */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 600 }}>Initial State</div>
              <div style={{ fontSize: '0.9rem', color: '#F87171', fontWeight: 700 }}>
                {activePreset.beforeLabel}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 600 }}>Final Finish</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--emerald-500)', fontWeight: 700 }}>
                {activePreset.afterLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
