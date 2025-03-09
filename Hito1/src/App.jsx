import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
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
