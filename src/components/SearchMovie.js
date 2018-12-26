import React from 'react';

import '../styles/SearchMovie.css'

const SearchMovie = (props)=> {
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Buscar"
                onChange={props.onPressText}
                value={props.filter}
            />
            <i className="fas fa-search-plus icon-search-movie"></i>
            {
                props.filter ?
                <i
                    className="fas fa-times-circle icon-search-delete"
                    onClick={props.onClickDelete}
                ></i>
                : ''
            }
        </div>
    )
}


export default SearchMovie;