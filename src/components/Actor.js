import React from "react";

function Actor({name,movies}) {
    const movieList = movies.map((movie) =>(
        <li>{movie}</li>
    ))
    return(
        <>
            <h3>Name: {name}</h3>
            <h3>Movies:</h3>
            <ul>{movieList}</ul>
        </> 
    )
   
}

export default Actor;