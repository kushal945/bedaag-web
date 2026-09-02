import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ServicesGrid from './components/ServicesGrid';
import RateCardEstimator from './components/RateCardEstimator';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import WhyBedaag from './components/WhyBedaag';
import PincodeChecker from './components/PincodeChecker';
import Reviews from './components/Reviews';
import BookingModal from './components/BookingModal';
import FloatingMobileBar from './components/FloatingMobileBar';
import Toast from './components/Toast';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [activeCategory, setActiveCategory] = useState('mens');
  const [cart, setCart] = useState({});
  const [toastMessage, setToastMessage] = useState('');

  // Cart helper functions
  const handleUpdateCartItem = (itemId, qty) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (qty <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = qty;
      }
      return updated;
    });
  };

  const totalCartCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  const handleQuickBook = ({ phone, sector, service }) => {
    setBookingInitialData({ phone, sector, service });
    setIsBookingOpen(true);
  };

  const handleProceedToBookFromRateCard = () => {
    setBookingInitialData(null);
    setIsBookingOpen(true);
  };

  const handleResetCart = () => {
    setCart({});
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar
        onOpenBooking={() => {
          setBookingInitialData(null);
          setIsBookingOpen(true);
        }}
        cartCount={totalCartCount}
      />

      <main style={{ flex: 1 }}>
        {/* 1. Hero Section with Quick Booking Widget */}
        <Hero onQuickBook={handleQuickBook} />

        {/* 2. 3-Step Process Flow */}
        <HowItWorks
          onOpenBooking={() => {
            setBookingInitialData(null);
            setIsBookingOpen(true);
          }}
        />

        {/* 3. Core Services Grid */}
        <ServicesGrid
          onSelectCategory={(catId) => setActiveCategory(catId)}
          onOpenBooking={() => {
            setBookingInitialData(null);
            setIsBookingOpen(true);
          }}
        />

        {/* 4. Interactive Rate Card & Live Bill Estimator */}
        <RateCardEstimator
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          cart={cart}
          onUpdateCartItem={handleUpdateCartItem}
          onProceedToBook={handleProceedToBookFromRateCard}
          onShowToast={handleShowToast}
        />

        {/* 5. Interactive Before & After Stain Removal Comparison */}
        <BeforeAfterSlider />

        {/* 6. Why Choose Bedaag Value Proposition */}
        <WhyBedaag />

        {/* 7. Gurugram Sector & Pincode Coverage Checker */}
        <PincodeChecker
          onSelectSectorForBooking={(sectorName) => {
            setBookingInitialData({ sector: sectorName });
            setIsBookingOpen(true);
          }}
        />

        {/* 8. Google Social Proof & Reviews */}
        <Reviews />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => {
          setBookingInitialData(null);
          setIsBookingOpen(true);
        }}
      />

      {/* Floating Bottom Bar on Mobile */}
      <FloatingMobileBar
        onOpenBooking={() => {
          setBookingInitialData(null);
          setIsBookingOpen(true);
        }}
        cartCount={totalCartCount}
      />

      {/* Multi-Step Booking & Confirmation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingInitialData}
        cart={cart}
        onResetCart={handleResetCart}
        onShowToast={handleShowToast}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
