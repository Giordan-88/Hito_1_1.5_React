import Header from "../assets/Header";
import CardPizza from "../assets/CardPizza";
import { useState, useEffect } from "react";

function Home({ cart, onCartUpdate }) {
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

  const handleAddToCart = (id, title, image, price) => {
    const newCart = { ...cart };
    if (newCart[id]) {
      newCart[id].quantity += 1;
    } else {
      newCart[id] = { title, image, price, quantity: 1 };
    }
    onCartUpdate(newCart);
  };

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
            onAddToCart={handleAddToCart}
            desc={pizza.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
