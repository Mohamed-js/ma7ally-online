import React from 'react';

const TopProducts = ({ TopProducts, type }) => {
  return (
    <div className="products">
      <h3 className="text-center p-3 bg-gradient-tertiary curved">{type}</h3>
      {TopProducts &&
        TopProducts.map((product) => (
          <div className="card flex-row justify-between p-2">
            <div className="img">
              <img
                className="full-img"
                src={product[0][1]}
                alt={product[0][0]}
              />
            </div>
            <div className="name-price flex-col p-3 pt-0">
              <h3 className="name">{product[0][0]}</h3>
              <h4 className="price">${product[0][2]}</h4>
            </div>
            {type === 'MOST POPULAR PRODUCTS' && (
              <div className="flex-col profit-unit  flex-col justify-center">
                <h5>SOLD UNITS</h5>
                <h4 className="number">{product[1]}</h4>
              </div>
            )}
            {type === 'MOST PROFITABLE PRODUCTS' && (
              <div className="flex-col profit-unit  flex-col justify-center">
                <h5>TOTAL PROFIT</h5>
                <h4 className="number">{product[1]}</h4>
                <p>$</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TopProducts;
