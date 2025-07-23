import React from 'react';

const About = () => (
  <section
    id="about"
    style={{
      textAlign: 'center',
      padding: '3rem 1rem',
      backgroundImage: `url('/Abtt.jpg')`, // Background image path (put this in public folder)
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    }}
  >
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#00ffe0',
          transition: 'transform 0.3s',
        }}
      >
        About Me
      </h2>
            <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.2',
            transition: 'color 0.3s',
          }}
        >
          I'm a frontend developer who loves building responsive and interactive web apps.
          I specialize in <strong>React</strong>, <strong>TypeScript</strong>, and modern JavaScript.
          I have around 6 months of hands-on experience working at <strong>Finoux Solutions Pvt. Ltd., Mumbai</strong>, where I contributed to developing user interfaces for trading platforms like <strong>BullForce</strong> and internal dashboards.
          <br /><br />
          I hold a Bachelor's degree in Information Technology from <strong>Sandip Foundation</strong> with a CGPA of <strong>8.11</strong>.
          <br /><br />
          I'm passionate about building clean, intuitive designs, and I'm constantly learning new technologies to improve my skill set.
          In my free time, I enjoy exploring design trends, contributing to personal projects, and staying updated with the latest in frontend development.
        </p>

    </div>
  </section>
);

export default About;
