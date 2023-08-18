import React, { useState } from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  // const addProduct = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);

  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  const addProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} addProduct={addProduct}></Main>
        <Basket
          products={products}
          cartItems={cartItems}
          addProduct={addProduct}
          removeProduct={removeProduct}
        ></Basket>
      </div>
      {/* <div className="row">
        <Main addProduct={addProduct} products={products}></Main>
        <Basket addProduct={addProduct} cartItems={cartItems}></Basket>
      </div> */}
    </div>
  );
}

export default App;
