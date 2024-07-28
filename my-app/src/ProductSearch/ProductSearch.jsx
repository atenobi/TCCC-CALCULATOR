import React, { useState } from 'react';

import './ProductSearch.css';

function ProductSearch({ products }) {
  const [searchTerm, setSearchTerm] = useState('znaleźć cenę usługi na liście');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='search'>
      <input
        className='search-input'
        type="text"
        placeholder="Поиск по продуктам"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className='products-list'>
        {filteredProducts.map((product) => (
          <li 
            className='product-card'
            key={product.id}>
            {product.name} - {product.price} zl
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;