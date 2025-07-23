import React from 'react';
import profile from '../assets/profile.jpg'; // Make sure this image exists in src/assets
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => (
  <section
    id="hero"
    style={{
      textAlign: 'center',
      padding: '3rem 1rem',
      backgroundImage: `url('/home.jpg')`, // Background image path (put this in public folder)
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    }}
  >
    <img
      src={profile}
      alt="Harshal Profile"
      style={{
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '90%',
        marginBottom: '1rem',
        marginTop: '1rem',
      }}
    />

    <h1 style={{ fontSize: '2.5rem' }}>
      Hi, I'm <span style={{ color: '#00ffe0' }}>Harshal 👋</span>
    </h1>
    <p style={{ maxWidth: '600px', margin: '0.4rem auto', fontSize: '1.1rem' }}>
      I'm a passionate <strong>Frontend Developer</strong> with 6 months of experience working with modern technologies like{' '}
      <strong>React.js, TypeScript, Redux</strong>, and <strong>Tailwind CSS</strong>. I enjoy building clean and interactive
      user interfaces and I'm always learning something new.
    </p>

    <div style={{ margin: '0.2rem 0' }}>
      <a
        href="/Harshal_Resume's.pdf"
        download
        style={{
          padding: '0.6rem 1.2rem',
          border: '2px solid #00ffe0',
          borderRadius: '8px',
          color: '#00ffe0',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'inline-block',
        }}
      >
        Download CV
      </a>
    </div>

    <div style={{ fontSize: '1.8rem' }}>
      <a
        href="https://github.com/Harshal-Khalkar"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '0 10px', color: '#00ffe0' }}
      >
        <FaGithub />
      </a>
      <a
        href="http://www.linkedin.com/in/harshal-khalkar-32899b246"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '0 10px', color: '#00ffe0' }}
      >
        <FaLinkedin />
      </a>
      <a href="mailto:harshalkhalkar0@email.com" style={{ margin: '0 10px', color: '#00ffe0' }}>
        <FaEnvelope />
      </a>
    </div>
  </section>
);

export default Hero;
