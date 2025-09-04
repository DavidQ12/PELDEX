import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Lógica de búsqueda aquí
    console.log('Buscando:', searchTerm);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Comida deliciosa 
            <span className="hero-title-accent"> a tu puerta</span>
          </h1>
          <p className="hero-subtitle">
            Ordena de tus restaurantes favoritos y recibe en minutos
          </p>
          
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <span className="search-icon"></span>
              <input 
                type="text" 
                placeholder="¿Qué quieres comer hoy?" 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <span className="search-btn-text">Buscar</span>
                <span className="search-arrow-icon"></span>
              </button>
            </div>
          </form>

          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon delivery-icon"></span>
              <span>Entrega rápida</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon quality-icon"></span>
              <span>Calidad garantizada</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon payment-icon"></span>
              <span>Pago seguro</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="floating-card card-1">
            <div className="card-image food-1"></div>
            <div className="card-content">
              <h4>Comida Italiana</h4>
              <p>20-30 min • $2.99 envío</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-image food-2"></div>
            <div className="card-content">
              <h4>Sushi Premium</h4>
              <p>25-35 min • $3.99 envío</p>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-image food-3"></div>
            <div className="card-content">
              <h4>Postres</h4>
              <p>15-25 min • $1.99 envío</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;