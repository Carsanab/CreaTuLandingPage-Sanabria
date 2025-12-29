import CartWidget from "./CartWidget";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <img src={logo} alt="HomeDecoHub" style={styles.logoImg} />

      <ul style={styles.links}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="#">Contacto</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;


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
