import React from 'react';
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p>© 2023 Mercado. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;