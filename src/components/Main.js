import React from 'react';

import Product from './Product';

const Main = (props) => {
  const { products, addProduct } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.key}
            product={product}
            addProduct={addProduct}
          ></Product>
        ))}
      </div>
    </main>
  );
};

export default Main;
