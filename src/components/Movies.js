import React from "react";
import { movies } from "../data";
import Movie from "./Movie";

 
function Movies() {
  
 const movieList = movies.map((movie,index) => (
    
      <Movie 
        key={index}
        title = {movie.title}
        time = {movie.time}
        genres={movie.genres}
      />
    
  ));

  console.log("movies:",movieList);
  
  
  return (
    <div>
      <center><h1>Movies Page</h1></center>
      <div>
        {movieList}
        

      </div>

    </div>
  );
}

export default Movies;
