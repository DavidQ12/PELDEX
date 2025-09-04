import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <section className="app-download-section">
      <div className="app-download-container">
        <div className="app-download-content">
          <h2 className="app-download-title">
            Descarga nuestra <span className="app-download-highlight">app</span>
          </h2>
          <p className="app-download-subtitle">
            Disfruta de la mejor experiencia de comida a domicilio en tu móvil
          </p>
          
          <div className="app-download-badges">
            <button className="app-badge">
              <span className="badge-icon apple-icon"></span>
              <div className="badge-content">
                <span className="badge-available">Disponible en</span>
                <span className="badge-store">App Store</span>
              </div>
            </button>
            
            <button className="app-badge">
              <span className="badge-icon google-play-icon"></span>
              <div className="badge-content">
                <span className="badge-available">Disponible en</span>
                <span className="badge-store">Google Play</span>
              </div>
            </button>
          </div>

          <div className="app-features">
            <div className="feature">
              <span className="feature-icon delivery-feature-icon"></span>
              <span>Envíos más rápidos</span>
            </div>
            <div className="feature">
              <span className="feature-icon offers-feature-icon"></span>
              <span>Ofertas exclusivas</span>
            </div>
            <div className="feature">
              <span className="feature-icon tracking-feature-icon"></span>
              <span>Seguimiento en tiempo real</span>
            </div>
          </div>
        </div>

        <div className="app-preview">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-screen-content">
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;