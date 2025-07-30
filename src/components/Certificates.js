import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import udemyCSS from '../Udemy-CSS.jpg';
import stepCert from '../step.png';
import javascriptCisco from '..//javascript-cisco.png';
import  javanptel from '../java-nptel.png';
import javaudemy from '../java-udemy.png';
import infosys from '../frontend-infosys.png';

const certificates = [
    {
    title: 'Udemy Java Certificate',
    img: javaudemy, // Using available image as placeholder
    link: '/src/certificates/java-udemy.pdf',
    type: 'image'
  },
  {
    title: 'Programming in Java (NPTEL)',
    img: javanptel, // Using available image as placeholder
    link: '/src/certificates/Programming In Java.pdf',
    type: 'image'
  },
  {
    title: 'Udemy CSS Certificate',
    img: udemyCSS,
    link: '/src/certificates/Udemy-CSS.jpg',
    type: 'image'
  },

  {
    title: 'Front end developer (Infosys)',
    img: infosys, // Using available image as placeholder
    link: '/src/certificates/IEEE.pdf',
      type: 'image'
  },
  // {
  //   title: 'IEEE Certificate 2',
  //   img: udemyCSS, // Using available image as placeholder
  //   link: '/src/certificates/IEEE-2.pdf',
  //   type: 'pdf'
  // },
  {
    title: 'JavaScript Certificate',
    img: javascriptCisco,
    link: '/src/certificates/Gobika U javascript.pdf',
     type: 'image'
  },
  {
    title: 'Step Certificate',
    img: stepCert,
    link: '/src/certificates/Step.pdf',
     type: 'image'
  }
];

const Certificates = () => (
  <section id="certificates" className="certificates-section text-center" style={{ padding: '4rem 0', background: 'transparent' }}>
    <div className="text-center mb-5">
      <h2 style={{ color: '#111', fontWeight: 800, fontSize: '2.2rem', margin: '0.5rem 0' }}>Certificate and Achievements <span role="img" aria-label="trophy">🏆</span></h2>
      {/* <div style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem' }}>Here are my few certificates and achievements :)</div> */}
    </div>
    
    <div className="container">
      <div className="row justify-content-center">
        {certificates.map((cert, idx) => (
          <div key={idx} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="certificate-card" style={{
              background: '#111',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              padding: '1.5rem',
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)';
              e.currentTarget.style.borderColor = '#FFD43B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '0.7rem',
                      background: '#FFD43B'
                    }} 
                  />
                  {cert.type === 'pdf' && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.8)',
                      color: '#FFD43B',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      PDF
                    </div>
                  )}
                </div>
                <div style={{ 
                  color: '#FFD43B', 
                  fontWeight: 700, 
                  fontSize: '1.1rem', 
                  textAlign: 'center',
                  lineHeight: '1.3'
                }}>
                  {cert.title}
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates; 