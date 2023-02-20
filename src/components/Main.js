import React from 'react';
import Movie from './Movie';
import streetcar from '../img/streetcar.png';


 function Main(props) {
  const { movies, onAdd } = props;
  return (

<main> 
<br id="about"></br>
<section className="about">
<div>
  
<h1>About</h1>
      <p>We are the internet's premier destination for the classic film buff.</p>
      <br id="featured"></br>
      <br></br>
      <br></br>
      </div>
      </section>
  

      <section className="featured">
        <h1 className="fw-light">Featured Film</h1>
        <p><strong>Each week, we feature a classic film and have an accompanying movie screening and Blu-Ray special. This week's is "A Streetcar Named Desire".</strong></p>
        <p> <a className="special-btn" href="#special">Purchase Ticket or Blu-Ray ~ Special</a></p>
  <img className="big-img" src={streetcar} alt={streetcar}></img>

  </section>
 
<br id="movies"></br>
<br></br>
<br></br>

      <section>
        <br></br>
        <h1>Movies</h1>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} onAdd={onAdd}></Movie>
        ))}
          <div className="special-padding" id="special"></div>
     </section>
     </main>

   
  );
}
export default Main;