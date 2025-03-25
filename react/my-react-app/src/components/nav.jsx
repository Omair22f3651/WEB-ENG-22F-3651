function nav() {
    return (
      <nav style={styles.nav}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.navLinks}>
          <li><a href="#" style={styles.link}>Home</a></li>
          <li><a href="#" style={styles.link}>About</a></li>
          <li><a href="#" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white",
    },
    logo: {
      margin: 0,
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "15px",
      margin: 0,
      padding: 0,
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
    }
  };
  
  export default nav;
  