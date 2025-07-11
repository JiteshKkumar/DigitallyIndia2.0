import React from 'react';

// Floating Button Styles
const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const buttonStyle = {
  backgroundColor: '#FFFFFF',  // Parrot green color
  border: 'none',
  color: 'white',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth hover effect
};

// Button Hover Style
const buttonHoverStyle = {
  backgroundColor: '#2ca737', // Darker green for hover effect
  transform: 'scale(1.1)', // Slightly enlarge on hover
};

const ContactPopup = () => {
  return (
    <div>
      {/* Floating icons */}
      <div style={floatingButtonStyle}>
        <a
          href="tel:+1234567890"
          style={buttonStyle}
          aria-label="Call Us"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#100908'} // Darker green on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#100908'} // Parrot green when not hovering
        >
        📲
        </a>
        <a
          href="mailto:info@example.com"
          style={buttonStyle}
          aria-label="Email Us"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#100908'} // Darker green on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#100908'} // Parrot green when not hovering
        >
        📧
        </a>
      </div>
    </div>
  );
};

export default ContactPopup;
