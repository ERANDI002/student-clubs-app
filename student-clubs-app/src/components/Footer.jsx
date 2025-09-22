import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#333',
      color: 'white',
      marginTop: '20px'
    }}>
      <p>&copy; {new Date().getFullYear()} University Student Clubs </p>
    </footer>
  );
};

export default Footer;