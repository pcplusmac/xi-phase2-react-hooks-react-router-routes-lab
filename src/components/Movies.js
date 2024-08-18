import React from "react";
import { movies } from "../data";

const movie = movies.map((movie,index) => {return( 
   movie.title)})
function Movies() {
  return (
    <div>
      <center><h1>Movies</h1></center>
      <div>
        {movie}
        

      </div>

    </div>
  );
}

export default Movies;
