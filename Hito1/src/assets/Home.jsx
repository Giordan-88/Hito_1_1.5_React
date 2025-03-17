import Header from "./Header";
import CardPizza from "./CardPizza";
import { useState } from "react";

const pizzas = [
  {
    id: 1,
    title: "Pizza Especial",
    image: "/imgs/Pizza_Close.jpg",
    ingredients: [
      "🧀 Queso Cheddar",
      "🫒 Aceituna",
      "🍅 Tomate",
      "🌿 Albahaca",
      "🌶️ Jalapeños",
    ],
    price: 15000,
  },
  {
    id: 2,
    title: "Pizza Margarita",
    image: "/imgs/pizza-margarita.jpg",
    ingredients: ["🧀 Mozzarella", "🍅 Tomate", "🌿 Albahaca"],
    price: 12000,
  },
  {
    id: 3,
    title: "Pizza Pepperoni",
    image: "/imgs/Pepperoni-pizza.png",
    ingredients: ["🍕 Pepperoni", "🧀 Queso Mozzarella", "🍅 Salsa de tomate"],
    price: 14000,
  },
  {
    id: 4,
    title: "Pizza Vegetariana",
    image: "/imgs/pv.jpg",
    ingredients: ["🫒 Aceituna", "🫑 Pimientos", "🌶️ Jalapeños", "🧅 Cebolla"],
    price: 13500,
  },
  {
    id: 5,
    title: "Pizza Cuatro Quesos",
    image: "/imgs/p4q.jpeg",
    ingredients: [
      "🧀 Mozzarella",
      "🧀 Gorgonzola",
      "🧀 Parmesano",
      "🧀 Cheddar",
    ],
    price: 16000,
  },
];

function Home({ cart, onCartUpdate }) {
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
            title={pizza.title}
            image={pizza.image}
            ingredients={pizza.ingredients}
            price={pizza.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
