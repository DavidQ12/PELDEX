import React from "react";
import "./Categories.css";

const Categories = ({ categories }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="categories-title">
            Encuentra tu comida favorita
          </h2>
          <p className="categories-subtitle">
            
          </p>
        </div>

        <div className="categories-container">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <p className="category-name">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;