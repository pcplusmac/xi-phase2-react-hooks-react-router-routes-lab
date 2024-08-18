import React from "react";
import { actors } from "../data";
import Actor from "./Actor";

function Actors() {
  const actorlist = actors.map((actor) => (
      <Actor
        name={actor.name} 
        movies={actor.movies}
      />
  ))
  
  return (
    <div>
      <h1>Actors Page</h1>
      <div>{actorlist}</div>
    </div>
  );
}

export default Actors;
