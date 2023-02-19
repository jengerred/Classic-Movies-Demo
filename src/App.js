import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
function App() {
  const { movies } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (movie) => {
    const exist = cartItems.find((x) => x.id === movie.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === movie.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...movie, qty: 1 }]);
    }
  };
  const onRemove = (movie) => {
    const exist = cartItems.find((x) => x.id === movie.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== movie.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === movie.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
      
        <Main movies={movies} onAdd={onAdd}></Main>
        
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
