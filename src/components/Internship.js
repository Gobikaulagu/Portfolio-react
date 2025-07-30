import React, { useState } from 'react';
import intern from '../intern.png';

const Internship = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <section
      id="internship"
      className="internship-section"
      style={{
        padding: '4rem 2rem',
        background: '#e6b4f0',
        color: '#111',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      {/* Centered Heading */}
      <h2 style={{ fontWeight: 800, fontSize: '2.5rem', marginBottom: '2rem' }}>Internship</h2>

      {/* Flexbox Layout */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '2rem',
        }}
      >
        {/* Left Side: Description */}
        <div style={{ flex: '1 1 450px', maxWidth: '600px', textAlign: 'left' }}>
          <h3 style={{ color: '#FFF', fontWeight: 700 }}>MGF-IT Project Engineer - Intern</h3>
          <p><strong>Company:</strong> IndusAuto Technologies, Chennai</p>
          <p><strong>Duration:</strong> 3 months</p>
          <p>
            During my internship at IndusAuto Technologies in Chennai, I served as a MFG-IT Project Engineer Intern. I actively assisted the MFG IT team in developing and optimizing manufacturing software systems. My responsibilities included conducting user acceptance testing (UAT), identifying and resolving bugs, and enhancing overall system performance. I worked with frontend technologies like HTML, CSS, and JavaScript, backend scripting with PHP, and handled database operations using SQL. This experience provided me with valuable exposure to real-time industrial IT workflows and development practices.
          </p>
        </div>

        {/* Right Side: Certificate */}
        <div style={{ flex: '0 0 250px', textAlign: 'center', position: 'relative' }}>
          <img
            src={intern}
            alt="Internship Certificate"
            onClick={toggleZoom}
            style={{
              width: '100%',
              maxWidth: '250px',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
              zIndex: isZoomed ? 1001 : 1,
              position: isZoomed ? 'fixed' : 'relative',
              top: isZoomed ? '50%' : 'auto',
              left: isZoomed ? '50%' : 'auto',
              transform: isZoomed ? 'translate(-50%, -50%) scale(1.3)' : 'none',
              background: isZoomed ? '#fff' : 'transparent',
            }}
          />
          {isZoomed && (
            <div
              onClick={toggleZoom}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Internship;
