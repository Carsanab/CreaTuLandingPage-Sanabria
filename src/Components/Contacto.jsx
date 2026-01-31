import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    consulta: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consulta enviada correctamente ✅");
    setForm({
      nombre: "",
      telefono: "",
      email: "",
      consulta: ""
    });
  };

  return (
    <div style={styles.container}>
      <h2>Contacto</h2>
      <p>¿Tenés alguna consulta? Escribinos </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
  style={styles.input}
  type="text"
  name="nombre"
  placeholder="Nombre completo"
  value={form.nombre}
  onChange={handleChange}
  required
/>

<input
  style={styles.input}
  type="tel"
  name="telefono"
  placeholder="Teléfono"
  value={form.telefono}
  onChange={handleChange}
  required
/>

<input
  style={styles.input}
  type="email"
  name="email"
  placeholder="Correo electrónico"
  value={form.email}
  onChange={handleChange}
  required
/>

<textarea
  style={styles.textarea}
  name="consulta"
  placeholder="Escribí tu consulta"
  value={form.consulta}
  onChange={handleChange}
  rows="4"
  required
/>

<button style={styles.button} type="submit">
  Enviar consulta
</button>

      </form>
    </div>
  );
}

export default Contacto;

//Estilos utilizados
const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "30px",
    backgroundColor: "#fafafa",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none"
  },
  textarea: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    resize: "none",
    outline: "none"
  },
  button: {
    padding: "12px",
    backgroundColor: "#ccc",
    color: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "500",
    marginTop: "10px"
  }
};


