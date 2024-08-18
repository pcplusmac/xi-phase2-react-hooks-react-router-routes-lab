import React from "react";
import { directors } from "../data";
import Director from "./Director.js";

function Directors() {
  const directorList = directors.map((director) => (
    <Director 
      name={director.name}
      movies={director.movies}    
    />
  ))
  return (
    <div>
      <h1>Directores Page</h1>
      <div>{directorList}</div>
    </div>
  );
}

export default Directors;
