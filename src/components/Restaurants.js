// src/components/Restaurants.jsx
import React, { useState } from "react";
import "./Restaurants.css";

const Restaurants = ({ restaurants }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtros de categoría
  const categories = ["all", "popular", "rápido", "lujo", "promociones"];

  return (
    <section className="restaurants-section">
      <div className="restaurants-container">
        <div className="restaurants-header">
          <h2 className="restaurants-title">
            Restaurantes <span className="text-accent">Destacados</span>
          </h2>
          <p className="restaurants-subtitle">
            Descubre los favoritos de nuestros clientes con las mejores valoraciones y experiencias culinarias
          </p>
          
          {/* Filtros de categoría */}
          <div className="filters-container">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'filter-btn-active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="restaurants-grid">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="restaurant-card"
            >
              <div className="card-image-container">
                <div className="card-image-placeholder">
                  <div className="restaurant-icon">{restaurant.image}</div>
                </div>
                
                {/* Badge de rating */}
                <div className="rating-badge">
                  <span className="star-icon"></span>
                  {restaurant.rating}
                </div>
                
                {/* Badge de categoría */}
                <div className="category-badge">
                  {restaurant.category || "Popular"}
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="restaurant-name">
                  {restaurant.name}
                </h3>
                <p className="restaurant-description">{restaurant.description}</p>
                
                <div className="location-info">
                  <span className="location-icon"></span>
                  {restaurant.distance || "1.2 km"}
                </div>
                
                <div className="card-footer">
                  <div className="delivery-info">
                    <span className="delivery-time">{restaurant.deliveryTime}</span> • {restaurant.deliveryFee}
                    <span className="delivery-label">Entrega aproximada</span>
                  </div>
                  <button className="order-btn">
                    <span className="cart-icon"></span>
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botón para ver más restaurantes */}
        <div className="view-more-container">
          <button className="view-more-btn">
            Ver todos los restaurantes
            <span className="chevron-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;