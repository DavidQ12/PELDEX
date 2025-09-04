import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Restaurants from "./components/Restaurants";
import AppDownload from "./components/AppDownload";

// Datos de categorías con imágenes
import pizzaImg from "./images/pizza.jpg";
import burgerImg from "./images/hamburguesa.jpg";
import sushiImg from "./images/sushi.jpg";
import asadoImg from "./images/asado.jpg";
import ensaladaImg from "./images/ensaladas.jpg";
import postreImg from "./images/postres.jpg";
import cafeImg from "./images/cafe.jpg";
import bebidaImg from "./images/bebidas.jpg";

const categories = [
  { name: "Pizza", image: pizzaImg },
  { name: "Hamburguesas", image: burgerImg },
  { name: "Sushi", image: sushiImg },
  { name: "Asado", image: asadoImg },
  { name: "Ensaladas", image: ensaladaImg },
  { name: "Postres", image: postreImg },
  { name: "Café", image: cafeImg },
  { name: "Bebidas", image: bebidaImg },
];

// Datos de restaurantes
const restaurants = [
  {
    name: "Pizzería Napoli",
    rating: 4.8,
    description: "Pizza italiana auténtica",
    deliveryTime: "30-45 min",
    deliveryFee: "$1.99",
    image: "🍕",
  },
  {
    name: "Burger Paradise",
    rating: 4.5,
    description: "Las mejores hamburguesas",
    deliveryTime: "25-40 min",
    deliveryFee: "$1.50",
    image: "🍔",
  },
  {
    name: "Sushi Express",
    rating: 4.7,
    description: "Sushi fresco y delicioso",
    deliveryTime: "35-50 min",
    deliveryFee: "$2.99",
    image: "🍣",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Categories categories={categories} />
      <Restaurants restaurants={restaurants} />
      <AppDownload />
    </div>
  );
}

export default App;
