import React, { useState } from "react";
import "./Restaurantes.css";
import MenuModal from "./MenuModal";

function Restaurantes() {
  const [filter, setFilter] = useState("todos");
  const [sortBy, setSortBy] = useState("rating");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const restaurants = [
    {
      id: 1,
      name: "Pizzería Napoli",
      rating: 4.8,
      reviews: 128,
      description: "Pizza italiana auténtica con ingredientes importados directamente de Italia",
      deliveryTime: "30-45 min",
      deliveryFee: "$1.99",
      minOrder: "$15.00",
      category: "italiana",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      promoted: true,
      menu: [
        {
          id: 101,
          name: "Pizza Margherita",
          description: "Salsa de tomate, mozzarella fresca, albahaca",
          price: 12.99,
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          category: "Pizzas"
        },
        {
          id: 102,
          name: "Pizza Pepperoni",
          description: "Salsa de tomate, mozzarella, pepperoni",
          price: 14.99,
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          category: "Pizzas"
        },
        {
          id: 103,
          name: "Lasagna de la Casa",
          description: "Láminas de pasta con carne, queso y salsa bechamel",
          price: 16.99,
          image:"https://images.unsplash.com/photo-1597289124948-688c1a35cb48?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          category: "Pastas"
        }
      ]
    },
    {
      id: 2,
      name: "Burger Paradise",
      rating: 4.5,
      reviews: 96,
      description: "Las mejores hamburguesas gourmet de la ciudad con ingredientes premium",
      deliveryTime: "25-40 min",
      deliveryFee: "$1.50",
      minOrder: "$12.00",
      category: "hamburguesas",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      promoted: false,
      menu: [
        {
          id: 201,
          name: "Burger Clásica",
          description: "Carne de res, lechuga, tomate, cebolla, salsa especial",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          category: "Hamburguesas"
        },
        {
          id: 202,
          name: "Burger BBQ",
          description: "Carne de res, bacon, queso cheddar, cebolla crispy, salsa BBQ",
          price: 13.99,
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          category: "Hamburguesas"
        }
      ]
    },

    {
  id: 3,
  name: "Sushi Express",
  rating: 4.7,
  reviews: 110,
  description: "Sushi fresco y deliciosos rolls japoneses",
  deliveryTime: "30-50 min",
  deliveryFee: "$2.99",
  minOrder: "$20.00",
  category: "asiática",
  image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  promoted: true,
  menu: [
    {
      id: 301,
      name: "California Roll",
      description: "Cangrejo, aguacate, pepino",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Sushi"
    },
    {
      id: 302,
      name: "Sashimi de Salmón",
      description: "Finas láminas de salmón fresco",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Sashimi"
    },
    {
      id: 303,
      name: "Tempura Mixta",
      description: "Verduras y camarón rebozados y fritos",
      price: 10.99,
      image: "https://plus.unsplash.com/premium_photo-1666920344211-88611229ce09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Fritos"
    }
  ]
},
{
  id: 4,
  name: "Tacos El Mexicano",
  rating: 4.6,
  reviews: 85,
  description: "Auténticos tacos mexicanos con salsas caseras",
  deliveryTime: "20-35 min",
  deliveryFee: "$1.20",
  minOrder: "$10.00",
  category: "mexicana",
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  promoted: false,
  menu: [
    {
      id: 401,
      name: "Taco al Pastor",
      description: "Carne de cerdo marinada con piña",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Tacos"
    },
    {
      id: 402,
      name: "Taco de Carnitas",
      description: "Cerdo deshebrado cocido lentamente",
      price: 2.75,
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Tacos"
    },
    {
      id: 403,
      name: "Quesadilla de Pollo",
      description: "Pollo con queso Oaxaca en tortilla de maíz",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Quesadillas"
    }
  ]
},
{
  id: 5,
  name: "Ramen House",
  rating: 4.9,
  reviews: 130,
  description: "Ramen japonés auténtico con caldo casero",
  deliveryTime: "35-50 min",
  deliveryFee: "$3.00",
  minOrder: "$18.00",
  category: "asiática",
  image: "https://images.unsplash.com/photo-1591325418441-ff678baf78ef?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  promoted: true,
  menu: [
    {
      id: 501,
      name: "Ramen Tonkotsu",
      description: "Caldo de cerdo, fideos, huevo, y chashu",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1635379511574-bc167ca085c8?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Ramen"
    },
    {
      id: 502,
      name: "Ramen Miso",
      description: "Caldo de miso, verduras, huevo y algas",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1637024696628-02cb19cc1829?q=80&w=1217&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Ramen"
    },
    {
      id: 503,
      name: "Gyozas de Cerdo",
      description: "Empanadillas japonesas rellenas de cerdo",
      price: 6.99,
      image: "https://plus.unsplash.com/premium_photo-1661431071835-eaf149720818?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Entradas"
    }
  ]
}

    // ... (otros restaurantes con sus menús)
  ];

  const categories = [
    { id: "todos", name: "Todos", icon: "🍽️" },
    { id: "italiana", name: "Italiana", icon: "🍕" },
    { id: "hamburguesas", name: "Hamburguesas", icon: "🍔" },
    { id: "asiatica", name: "Asiática", icon: "🍣" },
    { id: "mexicana", name: "Mexicana", icon: "🌮" }
  ];

  const handleOpenMenu = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setSelectedRestaurant(null);
  };

  // Filtrar y ordenar restaurantes
  const filteredRestaurants = restaurants
    .filter(rest => 
      (filter === "todos" || rest.category === filter) &&
      (rest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       rest.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "deliveryTime") {
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      }
      if (sortBy === "deliveryFee") {
        return parseFloat(a.deliveryFee.replace('$', '')) - parseFloat(b.deliveryFee.replace('$', ''));
      }
      return 0;
    });

  const promotedRestaurants = filteredRestaurants.filter(rest => rest.promoted);
  const regularRestaurants = filteredRestaurants.filter(rest => !rest.promoted);

  return (
    <div className="restaurantes-container">
      {/* Header con buscador */}
      <div className="restaurantes-header">
        <div className="container mx-auto px-4 py-6">
          <h1 className="restaurantes-title">Restaurantes</h1>
          <p className="restaurantes-subtitle">
            Descubre los mejores restaurantes cerca de ti
          </p>
          
          {/* Barra de búsqueda */}
          <div className="search-container">
            <div className="search-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar restaurantes o platos..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Filtros y ordenamiento */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          {/* Filtros por categoría */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`filter-button ${filter === category.id ? 'filter-button-active' : 'filter-button-inactive'}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Ordenamiento */}
          <div className="flex items-center gap-2">
            <span className="sort-label">Ordenar por:</span>
            <select 
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Mejor valoración</option>
              <option value="deliveryTime">Tiempo de entrega</option>
              <option value="deliveryFee">Costo de envío</option>
            </select>
          </div>
        </div>

        {/* Resultados de búsqueda */}
        {filteredRestaurants.length === 0 ? (
          <div className="no-results-container">
            <div className="no-results-icon">🔍</div>
            <h3 className="no-results-title">No se encontraron restaurantes</h3>
            <p className="no-results-text">Intenta con otros filtros o términos de búsqueda</p>
          </div>
        ) : (
          <>
            {/* Restaurantes destacados */}
            {promotedRestaurants.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="section-title">Restaurantes Destacados</h2>
                  <span className="count-badge count-badge-yellow">
                    {promotedRestaurants.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {promotedRestaurants.map(restaurant => (
                    <RestaurantCard 
                      key={restaurant.id} 
                      restaurant={restaurant} 
                      promoted={true}
                      onViewMenu={() => handleOpenMenu(restaurant)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Todos los restaurantes */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="section-title">
                  {filter === "todos" ? "Todos los Restaurantes" : `Restaurantes de ${categories.find(c => c.id === filter)?.name}`}
                </h2>
                <span className="count-badge count-badge-gray">
                  {regularRestaurants.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularRestaurants.map(restaurant => (
                  <RestaurantCard 
                    key={restaurant.id} 
                    restaurant={restaurant} 
                    promoted={false}
                    onViewMenu={() => handleOpenMenu(restaurant)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal de menú */}
      {isMenuOpen && selectedRestaurant && (
        <MenuModal 
          restaurant={selectedRestaurant} 
          onClose={handleCloseMenu} 
        />
      )}
    </div>
  );
}

// Componente de tarjeta de restaurante
function RestaurantCard({ restaurant, promoted, onViewMenu }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="restaurant-image"
        />
        {promoted && (
          <div className="promoted-badge">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Destacado
          </div>
        )}
        <div className="rating-badge">
          <span className="rating-text">⭐ {restaurant.rating}</span>
        </div>
      </div>
      
      <div className="restaurant-content">
        <div className="restaurant-header">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          <span className="reviews-badge">{restaurant.reviews} reviews</span>
        </div>
        
        <p className="restaurant-description">{restaurant.description}</p>
        
        <div className="restaurant-details">
          <div className="detail-item">
            <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{restaurant.deliveryTime}</span>
          </div>
          
          <div className="detail-item">
            <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            <span>Envío: {restaurant.deliveryFee} • Mín: {restaurant.minOrder}</span>
          </div>
        </div>
        
        <button className="menu-button" onClick={onViewMenu}>
          <svg className="menu-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Ver menú
        </button>
      </div>
    </div>
  );
}

export default Restaurantes;