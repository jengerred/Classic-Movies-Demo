import React from 'react';

function Header(props) {
  return (
   
    <header>
           <div className="nav">
            <p>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#featured">Featured</a>
                <a href="#movies">Movies</a>
                <a href="#checkout">Checkout</a>
            </p>
        </div>
        <br id="home"></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <div className="hero-text">
            <h1 className="title">Welcome to Hollywood Classic Films!</h1>
        
            </div>
        </div>
        </header>
    
  );
}
export default Header;