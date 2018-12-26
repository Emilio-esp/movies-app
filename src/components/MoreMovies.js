import React from "react";

import '../styles/MoreMovies.css'


const MoreMovies = (props) => {
    return(
        <div className="more-btn-container">
            <button 
                className="btn btn-plus"
                onClick={props.onClickMoreMovies}
            >
                Mas Peliculas  <i className="fas fa-plus"></i>
            </button>
        </div>
    )
}

export default MoreMovies