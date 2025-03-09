import Home from "./assets/Home";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Navbar navtext={"NAVBAR"} />
      
      <Home />
      <Footer
        footerText={
          "© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados"
        }
      />
    </div>
  );
}

export default App;
