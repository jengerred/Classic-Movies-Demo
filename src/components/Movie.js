import React from 'react';

function Movie(props) {
    const {movie, onAdd} = props;
    return (
         <><br></br>
          <div className="card">
                <ul className="movie-ul">
               
                    <li> <img className="movie-img" src={movie.image} alt={movie.name}></img></li>
                    <li className="movie-name"><h3>{movie.name}</h3></li>
                    <li><div className="price">${movie.price}</div></li>
                    <li><button className="btn" onClick={()=>onAdd(movie)}>Add To Cart</button></li>
                </ul>
            </div>
          
        </>
    )
}
export default Movie;