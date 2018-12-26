import React from 'react';

import '../styles/Movie.css'



const Movie = (props)=>{
        return (
            <div
                className="movie-wraper"
            >
                    <img
                        className="movie-image"
                        src={props.poster_path}
                        onClick={props.onPressMovie}
                        alt={props.name}
                    >
                    </img>
                
                    <h3 
                        className="movie-title"
                        onClick={props.onPressMovie}
                        >
                            {props.name}
                    </h3>
                <p className="movie-tagline">{props.tagline}</p>
                <p className="movie-year">{props.year}</p>
            </div>
        )

}



export default Movie
