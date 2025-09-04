import React, { useState } from "react";
import "./MenuModal.css";

const MenuModal = ({ restaurant, onClose }) => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  // Obtener categorías únicas del menú
  const categories = [...new Set(restaurant.menu.map(item => item.category))];

  // Filtrar productos por categoría
  const filteredMenu = activeCategory 
    ? restaurant.menu.filter(item => item.category === activeCategory)
    : restaurant.menu;

  // Agregar producto al carrito
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // Calcular total del carrito
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header del modal */}
        <div className="modal-header">
          <div className="modal-restaurant-info">
            <h2 className="modal-title">{restaurant.name}</h2>
            <p className="modal-subtitle">Menú • {restaurant.menu.length} productos</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Categorías */}
          <div className="categories-container">
            <button
              className={`category-btn ${!activeCategory ? 'category-btn-active' : ''}`}
              onClick={() => setActiveCategory("")}
            >
              Todas
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'category-btn-active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Lista de productos */}
          <div className="menu-grid">
            {filteredMenu.map(product => (
              <div key={product.id} className="menu-item">
                <div className="menu-item-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="menu-item-info">
                  <h3 className="menu-item-name">{product.name}</h3>
                  <p className="menu-item-description">{product.description}</p>
                  <p className="menu-item-price">${product.price.toFixed(2)}</p>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Carrito flotante */}
        {cart.length > 0 && (
          <div className="cart-floating">
            <div className="cart-summary">
              <span className="cart-items-count">{cart.reduce((total, item) => total + item.quantity, 0)} items</span>
              <span className="cart-total">Total: ${cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              Ver carrito
            </button>
          </div>
        )}

        {/* Panel de carrito (alternativa al flotante) */}
        <div className="cart-panel">
          <h3 className="cart-title">Tu pedido</h3>
          
          {cart.length === 0 ? (
            <p className="empty-cart-message">El carrito está vacío</p>
          ) : (
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total-section">
                <span className="total-label">Total:</span>
                <span className="total-amount">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn-full">
                Proceder al pago
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;