import React from "react";

import '../styles/MovieDisplay.css'

const MovieDetail = (props)=>{
    return(
        <div className="movie-container-box">
            <div className="btn-close-container">
                <button 
                    className="bnt-close"
                    onClick={props.onPressClose}
                >
                    <i className="fa fa-times"></i>

                </button>
            </div>
            <div className="movie-container">
                <figure className="movie-figure">
                    <img className="movie-image-detail" src={props.poster_path} alt={props.name}/>
                </figure>
                <div className="movie-description-box">
                    <div className="movie-title-btn">
                        <h3 className="movie-title-detail">{props.name}</h3>
                    </div>
                    <div className="movie-popularity">
                        <div className="movie-popularity points">
                            <p>{parseInt(props.popularity * 10)}%</p>
                        </div>
                        <div className="description">
                            <p>Puntuación de los Usuarios</p>
                        </div>
                    </div>
                    <p align="justify" className="movie-overview">{props.overview}</p>
                    <div className="movie-btn-box">
                        <button 
                            className="btn btn-movie"
                            onClick={props.onClickModal.bind(this, "pelicula", props.id)}
                        > 
                            <i className="fas fa-play"></i> Ver Pelicula
                        </button>
                        {props.trailer !== 'no-trailer' ?
                            <button
                                className="btn btn-trailer"
                                onClick={props.onClickModal.bind(this, "trailer", props.trailer)}
                            >
                                <i className="fab fa-youtube"></i> Ver Trailer
                            </button> : ''   
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
