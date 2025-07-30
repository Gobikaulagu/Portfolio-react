import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <footer style={{ backgroundColor: '#000', color: '#fff', width: '100%', padding: '1rem 2rem' }}>
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <div style={{ fontWeight: '600', fontSize: '1.2rem', color: '#8e44ad' }}>
        𝔽𝕠𝕝𝕝𝕠𝕨 𝕞𝕖
      </div>
      <div className="d-flex gap-3">
        <a href="https://github.com/Gobikaulagu" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.4rem' }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gobika-ulaganathan-28748625a/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.4rem' }}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
