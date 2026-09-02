import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RATE_CARD_ITEMS } from '../data/rateCardData';
import { POPULAR_SECTOR_CHIPS } from '../data/sectorsData';

export default function BookingModal({
  isOpen,
  onClose,
  initialData,
  cart,
  onResetCart,
  onShowToast,
}) {
  const [step, setStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [copied, setCopied] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [sector, setSector] = useState(initialData?.sector || 'Sector 50, Nirvana Country');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('122018');
  const [service, setService] = useState(initialData?.service || 'Signature Dry Cleaning');
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState('Evening (5:00 PM - 8:00 PM)');
  const [instructions, setInstructions] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialData?.phone) setPhone(initialData.phone);
    if (initialData?.sector) setSector(initialData.sector);
    if (initialData?.service) setService(initialData.service);
  }, [initialData]);

  if (!isOpen) return null;

  // Compute items from cart
  const cartItems = Object.entries(cart)
    .filter(([_, qty]) => qty > 0)
    .map(([itemId, qty]) => {
      const item = RATE_CARD_ITEMS.find((i) => i.id === itemId);
      return { ...item, qty };
    });

  const cartSubtotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  const handleNextStep = () => {
    if (step === 1) {
      if (!name.trim()) {
        setErrorMsg('Please enter your full name');
        return;
      }
      if (!phone.trim() || phone.trim().length < 10) {
        setErrorMsg('Please enter a valid 10-digit mobile number');
        return;
      }
      if (!address.trim()) {
        setErrorMsg('Please enter your apartment/villa number and society');
        return;
      }
    }
    setErrorMsg('');
    setStep(step + 1);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();

    // Generate realistic Bedaag ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `#BDG-${randomNum}`;
    setBookingId(newId);
    setBookingConfirmed(true);

    // Fire Confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0EA5E9', '#10B981', '#06B6D4', '#0A192F'],
      });
    } catch (e) {
      // safe fallback
    }

    onShowToast(`Booking confirmed! ID: ${newId}`);
    if (onResetCart) onResetCart();
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Bedaag Care Concierge! I have scheduled a pickup with Booking ID ${bookingId}.\nName: ${name}\nPhone: ${phone}\nAddress: ${address}, ${sector}\nSlot: ${pickupDate} (${slot})\nThank you!`
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(10, 25, 47, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          border: '1.5px solid var(--slate-200)',
          animation: 'fadeIn 0.25s ease-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            borderBottom: '1px solid var(--slate-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--slate-50)',
            borderTopLeftRadius: '28px',
            borderTopRightRadius: '28px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <Sparkles size={16} color="var(--cyan-500)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--cyan-600)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Bedaag Doorstep Care
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)' }}>
              {bookingConfirmed ? 'Pickup Confirmed!' : 'Schedule Free Pickup'}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              backgroundColor: 'var(--slate-200)',
              color: 'var(--slate-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem' }}>
          {!bookingConfirmed ? (
            <>
              {/* Step indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                }}
              >
                <div style={{ color: step >= 1 ? 'var(--cyan-600)' : 'var(--slate-400)' }}>
                  1. Address & Contact
                </div>
                <div style={{ height: '2px', flex: 1, backgroundColor: step >= 2 ? 'var(--cyan-500)' : 'var(--slate-200)', margin: '0 0.75rem' }} />
                <div style={{ color: step >= 2 ? 'var(--cyan-600)' : 'var(--slate-400)' }}>
                  2. Date & Time Slot
                </div>
              </div>

              {errorMsg && (
                <div
                  style={{
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #F87171',
                    color: '#B91C1C',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {/* Name Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--slate-200)',
                        backgroundColor: 'var(--slate-50)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                      Mobile Number (for pickup SMS & OTP) *
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        border: '1.5px solid var(--slate-200)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        backgroundColor: 'var(--slate-50)',
                      }}
                    >
                      <span style={{ padding: '0.8rem 0.9rem', fontSize: '0.9rem', fontWeight: 700, backgroundColor: 'var(--slate-100)', color: 'var(--navy-900)' }}>
                        🇮🇳 +91
                      </span>
                      <input
                        type="tel"
                        placeholder="98110 00000"
                        value={phone}
                        maxLength={10}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          flex: 1,
                          padding: '0.8rem 1rem',
                          border: 'none',
                          background: 'transparent',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Gurugram Sector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                      Gurugram Sector / Locality *
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--slate-200)',
                        backgroundColor: 'var(--slate-50)',
                        fontSize: '0.925rem',
                        outline: 'none',
                      }}
                    >
                      {POPULAR_SECTOR_CHIPS.map((sec) => (
                        <option key={sec} value={sec}>
                          {sec}
                        </option>
                      ))}
                      <option value="DLF Phase 1">DLF Phase 1</option>
                      <option value="DLF Phase 2">DLF Phase 2</option>
                      <option value="DLF Phase 4">DLF Phase 4</option>
                      <option value="DLF Phase 5 (The Crest / Camellias / Magnolias)">DLF Phase 5</option>
                      <option value="Sushant Lok 1 & 2">Sushant Lok</option>
                      <option value="Sector 14 & 15">Sector 14 / 15</option>
                      <option value="Other Gurugram Location">Other Gurugram Sector</option>
                    </select>
                  </div>

                  {/* Complete Address */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                      Flat / Villa No., Tower & Society Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tower 3, Flat 902, The Crest, Golf Course Road"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--slate-200)',
                        backgroundColor: 'var(--slate-50)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Selected Items summary preview if any */}
                  {cartItems.length > 0 && (
                    <div
                      style={{
                        backgroundColor: 'var(--aqua-50)',
                        borderRadius: '12px',
                        padding: '0.85rem 1rem',
                        border: '1px solid rgba(14, 165, 233, 0.25)',
                        fontSize: '0.85rem',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.25rem' }}>
                        <span>Items from Live Estimate ({cartItems.length} categories)</span>
                        <span>₹{cartSubtotal}</span>
                      </div>
                      <div style={{ color: 'var(--slate-600)', fontSize: '0.8rem' }}>
                        {cartItems.map((i) => `${i.name} (×${i.qty})`).join(', ')}
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
                  >
                    <span>Proceed to Select Slot</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleConfirmBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Preferred Date */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                      Preferred Pickup Date *
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setPickupDate(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--slate-200)',
                        backgroundColor: 'var(--slate-50)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* 2-Hour Time Slot */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                      Doorstep Time Slot *
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                      {[
                        { label: 'Morning Slot', time: '9:00 AM - 12:00 PM', hint: 'Popular for office goers' },
                        { label: 'Afternoon Slot', time: '1:00 PM - 4:00 PM', hint: 'Fastest dispatch' },
                        { label: 'Evening Slot', time: '5:00 PM - 8:00 PM', hint: 'After work convenient' },
                      ].map((s) => {
                        const isSelected = slot.includes(s.time);
                        return (
                          <div
                            key={s.label}
                            onClick={() => setSlot(`${s.label} (${s.time})`)}
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: '14px',
                              border: isSelected ? '2px solid var(--cyan-500)' : '1px solid var(--slate-200)',
                              backgroundColor: isSelected ? 'var(--aqua-50)' : 'var(--slate-50)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 800, fontSize: '0.925rem', color: 'var(--navy-900)' }}>
                                {s.label} — {s.time}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>
                                {s.hint}
                              </div>
                            </div>
                            <div
                              style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                border: isSelected ? '6px solid var(--cyan-500)' : '2px solid var(--slate-300)',
                                backgroundColor: 'white',
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                      Special Fabric Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Red wine stain on silk saree, need urgent express turnaround for Thursday"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--slate-200)',
                        backgroundColor: 'var(--slate-50)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn btn-secondary"
                      style={{ flex: 1, padding: '0.9rem' }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ flex: 2, padding: '0.9rem' }}
                    >
                      <Sparkles size={16} />
                      <span>Confirm Free Pickup</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Confirmation Screen */
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--emerald-50)',
                  color: 'var(--emerald-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <CheckCircle2 size={38} />
              </div>

              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                Your Doorstep Pickup is Scheduled!
              </h4>

              <p style={{ fontSize: '0.925rem', color: 'var(--slate-600)', marginBottom: '1.5rem' }}>
                Our care concierge will arrive with sanitized garment bags and barcoded tags.
              </p>

              {/* Receipt Card */}
              <div
                style={{
                  backgroundColor: 'var(--slate-50)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1.5px dashed var(--slate-300)',
                  textAlign: 'left',
                  marginBottom: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--slate-200)' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', fontWeight: 600 }}>Booking Reference</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--cyan-600)', letterSpacing: '0.02em' }}>
                      {bookingId}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyId}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--slate-600)',
                      backgroundColor: 'white',
                      padding: '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--slate-200)',
                    }}
                  >
                    {copied ? <Check size={14} color="var(--emerald-500)" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-500)' }}>Customer:</span>
                    <strong style={{ color: 'var(--navy-900)' }}>{name} ({phone})</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-500)' }}>Pickup Location:</span>
                    <strong style={{ color: 'var(--navy-900)', textAlign: 'right', maxWidth: '240px' }}>
                      {address}, {sector}
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-500)' }}>Scheduled Slot:</span>
                    <strong style={{ color: 'var(--emerald-600)' }}>{pickupDate} • {slot}</strong>
                  </div>
                  {cartItems.length > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid var(--slate-200)' }}>
                      <span style={{ color: 'var(--slate-500)' }}>Estimated Bill:</span>
                      <strong style={{ color: 'var(--navy-900)', fontSize: '1rem' }}>₹{cartSubtotal}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={`https://wa.me/919811000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.85rem', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>Receive Live Driver Updates on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="btn btn-dark"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  Close & Return to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
