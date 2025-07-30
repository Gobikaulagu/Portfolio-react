import React from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaCertificate, FaEnvelope } from 'react-icons/fa';
import profilePic from '../pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg"
    style={{
      background: 'linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%)',
      borderRadius: '2rem',
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      margin: '0 auto',
      maxWidth: '1100px',
      padding: '0.5rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: '1rem',
      zIndex: 1000,
      border: '2px solid #fff',
    }}
  >
    <div className="d-flex align-items-center gap-2">
      <img src={profilePic} alt="Profile" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
    </div>
    <ul className="navbar-nav mx-auto d-flex flex-row gap-4 align-items-center" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      <li className="nav-item"><a className="nav-link fw-bold d-flex align-items-center gap-1" href="#home" style={{ color: '#fff', fontSize: '1.1rem' }}><FaHome /> Home</a></li>
      <li className="nav-item"><a className="nav-link fw-bold d-flex align-items-center gap-1" href="#skills" style={{ color: '#fff', fontSize: '1.1rem' }}><FaCode /> Skills</a></li>
      <li className="nav-item"><a className="nav-link fw-bold d-flex align-items-center gap-1" href="#projects" style={{ color: '#fff', fontSize: '1.1rem' }}><FaProjectDiagram /> Projects</a></li>
      <li className="nav-item"><a className="nav-link fw-bold d-flex align-items-center gap-1" href="#certificates" style={{ color: '#fff', fontSize: '1.1rem' }}><FaCertificate /> Certificates</a></li>
      <li className="nav-item"><a className="nav-link fw-bold d-flex align-items-center gap-1" href="#internship" style={{ color: '#fff', fontSize: '1.1rem' }}><FaUser /> Internship</a></li>
      <li className="nav-item"><a className="nav-link fw-bold d-flex align-items-center gap-1" href="#contact" style={{ color: '#fff', fontSize: '1.1rem' }}><FaEnvelope /> Contact</a></li>
    </ul>
    <div style={{ width: 40, height: 40 }} /> {/* Spacer for symmetry */}
  </nav>
);

export default Navbar; 