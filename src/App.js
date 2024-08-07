import React, { useState, useEffect } from 'react';
import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import Footer from "./Components/Footer/Footer";
import MembershipPlans from "./Components/MembershipPlans/MembershipPlans";
import NavBar from "./Components/NavBar/NavBar";
import RegisterSection from "./Components/RegisterSection/RegisterSection";
import UnlimitedClasses from "./Components/UnlimitedClasses/UnlimitedClasses";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Popup from './Popup'; // Import your Popup component

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowPopup(true);
    }, 60000); // Show popup every 60 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <RegisterSection />
      <MembershipPlans />
      <WhatsAppButton />
      <UnlimitedClasses />
      <AboutSection />
      <Footer />
      <Popup show={showPopup} handleClose={handleClosePopup} /> {/* Add Popup here */}
    </div>
  );
}

export default App;
