import React from 'react';

const Basket = (props) => {
  const { cartItems, onAdd, removeProduct } = props;

  const itemsPrice = cartItems.reduce(
    (acumulator, current) => acumulator + current.price * current.qty,
    0
  );
  const taxPrice = itemsPrice * 0.14;
  const shippingTax = itemsPrice > 1000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingTax;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => removeProduct(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x €{item.price.toFixed(2)}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">€{itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">€{taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">€{itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>€{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert('Implement Checkout!')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Basket;
