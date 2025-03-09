import Header from "./Header";
import CardPizza from "./CardPizza";

const pizzas = [
  {
    title: "Pizza Especial",
    image: "/imgs/Pizza_Close.jpg",
    ingredients: ["🧀 Queso Cheddar", "🫒 Aceituna", "🍅 Tomate","🌿 Albahaca", "🌶️ Jalapeños"],
    price: "$15.000",
  },
  {
    title: "Pizza Margarita",
    image: "/imgs/pizza-margarita.jpg",
    ingredients: ["🧀 Mozzarella", "🍅 Tomate", "🌿 Albahaca"],
    price: "$12.000",
  },
  {
    title: "Pizza Pepperoni",
    image: "/imgs/Pepperoni-pizza.png",
    ingredients: ["🍕 Pepperoni", "🧀 Queso Mozzarella", "🍅 Salsa de tomate"],
    price: "$14.000",
  },
  {
    title: "Pizza Vegetariana",
    image: "/imgs/pv.jpg",
    ingredients: ["🫒 Aceituna", "🫑 Pimientos", "🌶️ Jalapeños", "🧅 Cebolla"],
    price: "$13.500",
  },
  {
    title: "Pizza Cuatro Quesos",
    image: "/imgs/p4q.jpeg",
    ingredients: ["🧀 Mozzarella", "🧀 Gorgonzola", "🧀 Parmesano", "🧀 Cheddar"],
    price: "$16.000",
  },
];


function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex flex-wrap justify-content-evenly">
      {pizzas.map((pizza, index) => (
        <CardPizza key={index} title={pizza.title} image={pizza.image} ingredients={pizza.ingredients} price={pizza.price} />
      ))}
    </div>
    </div>
  );
}



export default Home;
