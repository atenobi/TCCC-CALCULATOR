import React, { useState } from 'react';
import './PriceCalculator.css';

import logo_tccc from "../../src/images/ТССС_image.png";

function PriceCalculator({ items }) {
  // Состояние для хранения количества каждого товара
  const initialQuantities = items.reduce((acc, item) => {
    acc[item.id] = 0;
    return acc;
  }, {});
  
  const [quantities, setQuantities] = useState(initialQuantities);

  // Функция для обновления количества товара
  const updateQuantity = (id, value) => {
    // Запрещаем устанавливать отрицательное значение
    const quantity = Math.max(0, value);
    setQuantities({ ...quantities, [id]: quantity });
  };

  // Функция для расчета общей стоимости
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + (item.price * quantities[item.id]);
    }, 0);
  };

  // Функция для сброса параметров
  const resetQuantities = () => {
    setQuantities(initialQuantities);
  };
  return (
    <div className="calculator">
      <h1>Kalkulator cen TCCC</h1>
      {items.map(item => (
        <div key={item.id} className="item">
          <h3>{item.name}</h3>
          <p>cena jednostki: {item.price}</p>
          <div className="input-group">
            <label>ilość:</label>
            <input
              type="number"
              value={quantities[item.id]}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
          </div>
        </div>
      ))}
       
      <div className="total-price">
        <h2>Całkowity koszt: {calculateTotalPrice()} zl</h2>
        <button className='clear-button' onClick={resetQuantities}>wyczyść wszystko</button>
      </div>
      <div className="logo">
          <img className='logo-image' src={logo_tccc} alt="tccc_logo" />
      </div>
    </div>
  );
}

export default PriceCalculator;

