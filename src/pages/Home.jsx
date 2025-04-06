import Header from "../assets/Header";
import CardPizza from "../assets/CardPizza";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const { cart, handleAddToCart } = useContext(CartContext);

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  async function getPizzas() {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <div className="d-flex flex-wrap justify-content-evenly">
        {pizzas.map((pizza, index) => (
          <CardPizza
            id={pizza.id}
            key={index}
            name={pizza.name}
            image={pizza.img}
            ingredients={pizza.ingredients}
            price={pizza.price}
            desc={pizza.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
