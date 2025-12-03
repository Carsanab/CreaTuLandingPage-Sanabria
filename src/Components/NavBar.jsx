import CartWidget from './CartWidget'
import logo from '../Images/logo.png';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <img src={logo} alt="HomDecoHub" style={styles.logoImg} />

      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}
export default NavBar


const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "#fff",
    alignItems: "center"
  },
  logoImg: {
    height: "70px",
    cursor: "pointer"
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px"
  }
};

