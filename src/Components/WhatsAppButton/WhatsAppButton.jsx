import React from 'react';

import WtpLogo from "../../Assets/WhatsApp_icon.png";
import callLogo from "../../Assets/call.png";

const WhatsAppButton = () => {
    return (
        <div>
            <div style={{ position: 'fixed', right: '1rem', bottom: '2rem', zIndex: 50 }}>
                <a href="https://wa.me/+919918509296" target="_blank" rel="noopener noreferrer">
                    <img src={WtpLogo} alt="WhatsApp" height="64" width="64" />
                </a>
            </div>
            <div style={{ position: 'fixed', left: '2rem', bottom: '2rem', zIndex: 50 }}>
                <a href="tel:+919918509296" target="_blank" rel="noopener noreferrer">
                    <img src={callLogo} alt="Call" height="50" width="50" />
                </a>
            </div>
        </div>
    );
};

export default WhatsAppButton;
