
const Navbar = () => (
  <nav style={styles.nav}>
    <div style={styles.logo}><strong>Harshal Khalkar</strong></div>
    <div style={styles.links}>
      <a href="#hero" style={styles.link}>Home</a>
      <a href="#about" style={styles.link}>About</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </div>
  </nav>
);

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 16px', // smaller padding
    backgroundColor: 'black',
    fontSize: '14px', // smaller text
  },
  logo: {
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '12px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '14px',
  },
};

export default Navbar;
