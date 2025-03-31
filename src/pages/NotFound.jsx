

function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}>
    <h1 style={{ fontSize: "4rem", color: "#ff4c4c" }}>404</h1>
    <h2>Página no encontrada</h2>
    <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
<a href="/" style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#007bff", color: "white", borderRadius: "5px", textDecoration: "none" }}>Volver al inicio</a>
  </div>
  )
}

export default NotFound