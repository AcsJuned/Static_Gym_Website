import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "./Popup.css";
import RegisterSection from './Components/RegisterSection/RegisterSection';

const Popup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      const interval = setInterval(() => {
        setIsOpen(true);
      }, 200000); 

      return () => clearInterval(interval);
    }
  }, [isLoggedIn]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
  
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Form"
      >
        <RegisterSection closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Popup;