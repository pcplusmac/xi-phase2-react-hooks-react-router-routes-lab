import React from "react";

function movie ({title, time, genres}) {
    
    console.log("a:",genres)
    const genreList = genres.map((genre) => (
        
        <li>{genre}</li>
    ))
    console.log("b:",genreList)
    return (
        <div>
            <h3>Name: {title}</h3>
            <h3>Time: {time}</h3>
            <h3>Genres:</h3> 
             <ul>{genreList}</ul>    
            

            
        </div>
    )

}

export default movie;