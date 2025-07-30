import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const skills = [
  { name: 'HTML', percent: 90, icon: '🌐' },
  { name: 'CSS', percent: 80, icon: '🎨' },
  { name: 'JavaScript', percent: 75, icon: '⚡' },
  { name: 'React', percent: 70, icon: '⚛️' },
  { name: 'Java', percent: 85, icon: '☕' },
  { name: 'Python', percent: 70, icon: '🐍' },
  { name: 'MySQL', percent: 80, icon: '🗄️' },
  { name: 'Git', percent: 80, icon: '🔧' },
];

const Skills = () => (
  <section id="skills" className="skills-section text-center" style={{ padding: '4rem 0', background: 'transparent' }}>
    <h2 className="mb-4" style={{ color: '#fff', fontWeight: 700, letterSpacing: 1 }}>Skill Set</h2>
    <div className="d-flex justify-content-center">
      <div style={{ background: '#18181c', borderRadius: '2rem', padding: '2.5rem 2rem', maxWidth: 800, width: '100%', boxShadow: '0 2px 24px rgba(44,19,80,0.18)', margin: '0 1rem' }}>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, idx) => (
            <div className="col-md-6" key={idx} style={{ marginBottom: '1.5rem' }}>
              <div className="d-flex align-items-center mb-2" style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem' }}>
                <span style={{ fontSize: '2rem', marginRight: '1rem' }}>{skill.icon}</span>
                <span style={{ flex: 1, textAlign: 'left' }}>{skill.name}</span>
                <span style={{ color: '#a18cd1', marginLeft: '1rem', fontWeight: 700 }}>{skill.percent}%</span>
              </div>
              <div className="progress" style={{ height: '10px', background: '#333', borderRadius: '5px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.percent}%`, background: '#a18cd1', borderRadius: '5px' }}
                  aria-valuenow={skill.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 