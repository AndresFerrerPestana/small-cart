import React from 'react';

const Product = (props) => {
  const { product, addProduct } = props;

  const addProductHandler = () => {
    addProduct(product);
  };

  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <div>€ {product.price}</div>
      <div>
        <button onClick={addProductHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
