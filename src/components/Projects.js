import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import proj1 from '../proj1.jpg';
import proj2 from '../proj2.jpg';
import proj3 from '../proj3.jpg';

const projects = [
  {
    title: 'Cardiac Health Assessment',
    desc: 'A system to predict heart disease by analyzing heart sound recordings using CNN and MFCC, enabling early, non-invasive diagnosis and improving patient outcomes.',
    img: proj1,
    link: 'https://github.com/Gobikaulagu/Cardiac-Health-Assessment-Using-CNN-and-MFCC-Based-Sound-Processing',
    tech: 'Deep Learning, CNN, MFCC'
  },
  {
    title: 'Handwritten Medical Prescriptions',
    desc: 'A system to convert handwritten doctor prescriptions into readable digital text, reducing errors and improving patient safety.',
    img: proj2,
    link: 'https://github.com/Gobikaulagu/Enhancing_Patient_Safety-Automating_the_Interpretation_of_Handwritten_Medical_Prescriptions',
    tech: 'MFCC, OCR, Deep Learning'
  },
  {
    title: 'Career Guidance',
    desc: 'Assists individuals in exploring and identifying various career options to support informed decision-making.',
    img: proj3,
    link: 'https://github.com/Gobikaulagu/careerguidance',
    tech: 'HTML, CSS, SQL, PHP, JavaScript'
  }
];

const Projects = () => (
  <section id="projects" className="projects-section text-center" style={{ padding: '4rem 0', background: 'transparent' }}>
    <div className="text-center mb-4">
      <div style={{ color: '#fff', fontWeight: 600, letterSpacing: 1, fontSize: '1.1rem', opacity: 0.8 }}>some of my recent works</div>
      <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '2.2rem', margin: '0.5rem 0', letterSpacing: 1 }}>PROJECTS</h2>
    </div>
    <div className="d-flex justify-content-center">
      <div className="row g-4 justify-content-center" style={{ maxWidth: 1100, width: '100%' }}>
        {projects.map((project, idx) => (
          <div className="col-md-4 d-flex" key={idx}>
            <div style={{ background: '#23232b', borderRadius: '1rem', padding: '0', minHeight: '390px', color: '#fff', boxShadow: '0 2px 12px rgba(44,19,80,0.18)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'stretch', width: '100%' }}>
              <img src={project.img} alt={project.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
              <div style={{ padding: '1.2rem', flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', textAlign: 'left' }}>{project.title}</div>
                <div style={{ color: '#d1c4e9', fontSize: '1rem', textAlign: 'left', opacity: 0.95 }}>{project.desc}</div>
                <div style={{ color: '#b39ddb', fontSize: '0.95rem', textAlign: 'left', marginTop: '0.75rem' }}><strong>Tech Stack:</strong> {project.tech}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm mt-3"
                  style={{ borderRadius: '2rem', fontWeight: '600', fontSize: '0.9rem' }}
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
