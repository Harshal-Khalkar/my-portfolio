import bgImage from '../assets/prj.jpg';
const Projects = () => (
  <section
    id="projects"
    style={{
      textAlign: 'center',
      padding: '3rem 1rem',
      backgroundImage: `url(${bgImage})`, 
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
        }}
      >
        Projects
      </h2>

      <div style={{ textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <h3 style={{ color: '#00ffe0' }}>BullForce Trading App <span style={{ fontWeight: 'normal', fontSize: '0.9rem' }}></span></h3>
        <ul>
          <li>Developed a user login page by integrating APIs for authentication and session management.</li>
          <li>Created a document submission pop-up displayed after login for streamlined uploads.</li>
          <li>Implemented Aadhaar OTP and PAN verification using secure API integration.</li>
          <li>Built a user profile page and integrated signature verification for document authenticity.</li>
        </ul>

        <br />

        <h3 style={{ color: '#00ffe0' }}>Deep Learning Approach for Suspicious Activity Detection</h3>
        <ul>
          <li>Integrated Convolutional Neural Networks (CNN) for activity recognition in surveillance videos.</li>
          <li>Used libraries: NumPy, OpenCV, TensorFlow, Pillow, and Tkinter.</li>
          <li>Trained the system to recognize human behaviors in real-world scenarios using deep learning.</li>
          <li>Applications include security surveillance and shopping behavior analysis.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
