import React from 'react';
import Movie from './Movie';

import streetcar from '../img/streetcar.png';

 function Main(props) {
  const { movies, onAdd } = props;
  return (

<main> 

<section className="about">
<div>
    <br id="about"></br>
<h1>About</h1>
      <p>We are the internet's premier destination for the classic film buff.</p>
      </div>
    
      </section>
  
<br></br>
      <section className="featured" id="featured">
        <h1 className="fw-light">Featured Film</h1>
        <p><strong>Each week, we feature a classic film and have an accompanying movie screening and Blu-Ray special. This week's is "A Streetcar Named Desire".</strong></p>
        <p> <a className="special-btn" href="#special">Purchase Ticket or Blu-Ray ~ Special</a></p>
  <img className="big-img" src={streetcar} alt={streetcar}></img>

  </section>
 
<br id="movies"></br>

      <section>
        <br></br>
        <h1>Movies</h1>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} onAdd={onAdd}></Movie>
        ))}
     </section>

     <div className="special-width" id="special"></div>
<div className="checkout" id="checkout">
    <h1>Checkout</h1>
</div>

     </main>
   
  );
}
export default Main;