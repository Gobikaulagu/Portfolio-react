import React from 'react';
import profilePic from '../pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <section
    id="home"
    style={{
      // background: 'linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%)',
      background: 'transparent',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div className="container py-5">
      <div
        className="row align-items-center justify-content-center"
        style={{
          borderRadius: '2rem',
          background: '#fff',
          boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        }}
      >
        <div className="col-md-7 p-5">
          <div
            style={{
              color: '#8e44ad', // Violet text
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: '1.1rem',
            }}
          >
            FULL STACK DEVELOPER
          </div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: '2.7rem',
              color: '#222',
              margin: '1rem 0',
            }}
          >
            Hello, my name is{' '}
            <span style={{ color: '#111' }}>Gobika Ulaganathan</span>
          </h1>
          <p
            style={{
              color: '#444',
              fontSize: '1.15rem',
              marginBottom: '2rem',
            }}
          >
            I am a passionate final year student with internship experience in
            Full Stack Development, strong technical skills, and strengths in
            creativity, adaptability, problem-solving, and leadership.
          </p>
          <div className="d-flex gap-3">
            <a
              href="https://drive.google.com/file/d/1T_86PCEXtmsOxWtR9cFeg2Iciy34_bAg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              // className="btn fw-bold px-4"
              className="btn btn-outline-dark fw-bold px-4"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/gobika-ulaganathan-28748625a/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark fw-bold px-4"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="col-md-5 text-center p-5">
          <img
            src={profilePic}
            alt="Gobika Ulaganathan"
            className="rounded-circle shadow"
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'cover',
              border: '6px solid #8e44ad', // Violet border
              background: '#fff',
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
