import React, { useState } from 'react';
import {
  Shirt,
  Sparkles,
  Crown,
  Footprints,
  Home,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Truck,
  CheckCircle2,
  Clock,
  IndianRupee,
  ShoppingBag,
} from 'lucide-react';
import { RATE_CARD_CATEGORIES, RATE_CARD_ITEMS } from '../data/rateCardData';

const catIconMap = {
  Shirt: Shirt,
  Sparkles: Sparkles,
  Crown: Crown,
  Footprints: Footprints,
  Home: Home,
};

export default function RateCardEstimator({
  activeCategory,
  onSelectCategory,
  cart,
  onUpdateCartItem,
  onProceedToBook,
  onShowToast,
}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter items by category and search
  const filteredItems = RATE_CARD_ITEMS.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return searchTerm ? matchesSearch : matchesCategory;
  });

  // Calculate totals
  const totalItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const subtotal = Object.entries(cart).reduce((sum, [itemId, qty]) => {
    const item = RATE_CARD_ITEMS.find((i) => i.id === itemId);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const freePickupThreshold = 499;
  const progressPercent = Math.min(100, Math.round((subtotal / freePickupThreshold) * 100));
  const amountNeededForFree = Math.max(0, freePickupThreshold - subtotal);

  const handleIncrement = (item) => {
    const newQty = (cart[item.id] || 0) + 1;
    onUpdateCartItem(item.id, newQty);
    onShowToast(`Added 1 ${item.name} to estimate`);
  };

  const handleDecrement = (item) => {
    const currentQty = cart[item.id] || 0;
    if (currentQty > 0) {
      onUpdateCartItem(item.id, currentQty - 1);
    }
  };

  return (
    <section id="rate-card" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">
            <IndianRupee size={14} color="var(--cyan-500)" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
            Interactive Rate Card & Live Bill Estimator
          </h2>
          <p className="section-desc">
            No hidden surge fees, no unexpected surprises. Add your items to calculate your instant estimate,
            unlock free doorstep pickup, and transfer your selections directly into booking.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {RATE_CARD_CATEGORIES.map((cat) => {
            const Icon = catIconMap[cat.icon] || Shirt;
            const isActive = activeCategory === cat.id && !searchTerm;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSearchTerm('');
                  onSelectCategory(cat.id);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? 'var(--navy-900)' : 'var(--slate-100)',
                  color: isActive ? 'var(--white)' : 'var(--slate-700)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                }}
              >
                <Icon size={18} color={isActive ? 'var(--cyan-500)' : 'var(--slate-500)'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Layout: Items Grid (2 cols) + Live Sticky Cart (1 col) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Items List */}
          <div style={{ flex: '1 1 60%' }}>
            {/* Search filter input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="Search any garment (e.g. Saree, Suit, Blazer, Sneaker)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  border: '1.5px solid var(--slate-200)',
                  backgroundColor: 'var(--slate-50)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-500)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--slate-200)')}
              />
            </div>

            {/* Garment Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {filteredItems.map((item) => {
                const qty = cart[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 1.5rem',
                      backgroundColor: qty > 0 ? 'var(--aqua-50)' : 'var(--slate-50)',
                      border: qty > 0 ? '1.5px solid var(--cyan-500)' : '1px solid var(--slate-200)',
                      borderRadius: '18px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ paddingRight: '1rem', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-900)' }}>
                          {item.name}
                        </h4>
                        {item.popular && (
                          <span
                            style={{
                              fontSize: '0.6875rem',
                              fontWeight: 700,
                              color: 'var(--cyan-700)',
                              backgroundColor: 'white',
                              padding: '0.15rem 0.5rem',
                              borderRadius: 'var(--radius-pill)',
                              border: '1px solid rgba(14, 165, 233, 0.3)',
                            }}
                          >
                            Popular
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginBottom: '0.4rem' }}>
                        {item.desc}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: 'var(--slate-600)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Clock size={13} color="var(--cyan-600)" />
                          {item.turnaround}
                        </span>
                        <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--navy-900)' }}>
                          ₹{item.price}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        backgroundColor: 'white',
                        padding: '0.35rem 0.5rem',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--slate-200)',
                        boxShadow: 'var(--shadow-xs)',
                      }}
                    >
                      {qty > 0 ? (
                        <>
                          <button
                            onClick={() => handleDecrement(item)}
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--slate-100)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--slate-700)',
                              transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--slate-200)')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--slate-100)')}
                            aria-label={`Decrease ${item.name}`}
                          >
                            <Minus size={15} />
                          </button>

                          <span
                            style={{
                              minWidth: '22px',
                              textAlign: 'center',
                              fontWeight: 800,
                              fontSize: '1rem',
                              color: 'var(--navy-900)',
                            }}
                          >
                            {qty}
                          </span>

                          <button
                            onClick={() => handleIncrement(item)}
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--cyan-500)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--cyan-600)')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--cyan-500)')}
                            aria-label={`Increase ${item.name}`}
                          >
                            <Plus size={15} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleIncrement(item)}
                          style={{
                            padding: '0.4rem 1rem',
                            borderRadius: 'var(--radius-pill)',
                            backgroundColor: 'var(--navy-900)',
                            color: 'white',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--cyan-600)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--navy-900)')}
                        >
                          <Plus size={14} />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Live Cart & Bill Estimator Sidebar */}
          <div
            style={{
              position: 'sticky',
              top: '95px',
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '2rem',
              border: '1.5px solid var(--slate-200)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--slate-200)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--aqua-50)',
                    color: 'var(--cyan-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-900)' }}>
                    Your Care Estimate
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                    {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                  </div>
                </div>
              </div>

              {totalItemsCount > 0 && (
                <button
                  onClick={() => {
                    Object.keys(cart).forEach((id) => onUpdateCartItem(id, 0));
                    onShowToast('Estimate cleared');
                  }}
                  style={{
                    fontSize: '0.75rem',
                    color: '#EF4444',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <Trash2 size={13} />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {/* Free Pickup Progress Indicator */}
            <div
              style={{
                backgroundColor: 'var(--slate-50)',
                borderRadius: '16px',
                padding: '1rem',
                marginBottom: '1.5rem',
                border: '1px solid var(--slate-200)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8125rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700 }}>
                  <Truck size={15} color={subtotal >= freePickupThreshold ? 'var(--emerald-500)' : 'var(--cyan-600)'} />
                  {subtotal >= freePickupThreshold
                    ? '🎉 Free Doorstep Pickup Unlocked!'
                    : `Add ₹${amountNeededForFree} more for Free Pickup`}
                </span>
                <span style={{ fontWeight: 800, color: 'var(--navy-900)' }}>
                  {progressPercent}%
                </span>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'var(--slate-200)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    backgroundColor: subtotal >= freePickupThreshold ? 'var(--emerald-500)' : 'var(--cyan-500)',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
            </div>

            {/* Selected Items Scroll Area */}
            {totalItemsCount > 0 ? (
              <div
                style={{
                  maxHeight: '220px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  marginBottom: '1.5rem',
                  paddingRight: '0.4rem',
                }}
              >
                {Object.entries(cart)
                  .filter(([_, qty]) => qty > 0)
                  .map(([itemId, qty]) => {
                    const item = RATE_CARD_ITEMS.find((i) => i.id === itemId);
                    if (!item) return null;

                    return (
                      <div
                        key={itemId}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.85rem',
                          padding: '0.5rem 0',
                          borderBottom: '1px dashed var(--slate-200)',
                        }}
                      >
                        <div style={{ flex: 1, paddingRight: '0.5rem' }}>
                          <span style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{item.name}</span>
                          <span style={{ color: 'var(--slate-400)', marginLeft: '0.4rem' }}>× {qty}</span>
                        </div>
                        <div style={{ fontWeight: 800, color: 'var(--navy-900)' }}>
                          ₹{item.price * qty}
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div
                style={{
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  color: 'var(--slate-400)',
                  fontSize: '0.9rem',
                }}
              >
                Tap <strong>+ Add</strong> on any garment to calculate your live estimate.
              </div>
            )}

            {/* Subtotal Calculation Box */}
            <div
              style={{
                backgroundColor: 'var(--slate-50)',
                padding: '1.25rem',
                borderRadius: '16px',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.9rem',
                  color: 'var(--slate-600)',
                  marginBottom: '0.5rem',
                }}
              >
                <span>Estimated Subtotal</span>
                <span style={{ fontWeight: 700 }}>₹{subtotal}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.9rem',
                  color: 'var(--slate-600)',
                  marginBottom: '0.75rem',
                }}
              >
                <span>Gurugram Doorstep Pickup</span>
                <span style={{ fontWeight: 700, color: subtotal >= freePickupThreshold ? 'var(--emerald-600)' : 'var(--navy-900)' }}>
                  {subtotal >= freePickupThreshold ? 'FREE' : subtotal > 0 ? '₹99 (or free > ₹499)' : '₹0'}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--navy-900)',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--slate-200)',
                }}
              >
                <span>Estimated Total</span>
                <span>₹{subtotal + (subtotal > 0 && subtotal < freePickupThreshold ? 99 : 0)}</span>
              </div>
            </div>

            {/* Proceed Action Button */}
            <button
              onClick={onProceedToBook}
              disabled={totalItemsCount === 0}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.95rem 1.5rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '14px',
                opacity: totalItemsCount === 0 ? 0.6 : 1,
                cursor: totalItemsCount === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <span>Proceed to Schedule Pickup</span>
              <ArrowRight size={18} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                marginTop: '0.85rem',
                fontSize: '0.75rem',
                color: 'var(--slate-500)',
                fontWeight: 600,
              }}
            >
              <CheckCircle2 size={13} color="var(--emerald-500)" />
              <span>Payment collected digitally after delivery inspection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
