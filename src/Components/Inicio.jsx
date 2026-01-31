import hero from "../Images/hero-home.png";

function Inicio() {
  return (
    <div style={styles.container}>
      <img src={hero} alt="HomeDecoHub" style={styles.image} />

      <div style={styles.overlay}>
        <h1 style={styles.title}>Bienvenidos a HomeDecoHub</h1>
        <p style={styles.subtitle}>
          Diseño, confort y estilo para tu hogar
        </p>
      </div>
    </div>
  );
}

export default Inicio;

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 80px)",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center"
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "20px"
  }
};
