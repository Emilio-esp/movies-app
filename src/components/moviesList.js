import React, { Component } from 'react';

import SearchMovie from './SearchMovie';
import MovieDetail from './MovieDetail';
import ModalMovie from './ModalMovie';
import Movie from './Movie';
import MoreMovies from "./MoreMovies";

import listMovies  from "../api/movies.json";

import '../styles/movieList.css';

class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            Movies: [],
            quantity:12,
            display: false,
            scrollPosition:null,
            movie_diplay: null,
            modalDisplay: false,
            video_path: null,
            filter: ''
        };

        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleClickModalOpen = this.handleClickModalOpen.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClickMoreMovies = this.handleClickMoreMovies.bind(this);
        this.handleTextSearch = this.handleTextSearch.bind(this);
        this.handleFilterOption = this.handleFilterOption.bind(this);
        this.handleDeleteFilterText = this.handleDeleteFilterText.bind(this);
    }

    componentDidMount() { 
        const movies = listMovies.map(movie=>movie);

        this.setState({
            Movies: movies
        });
        
    }

    handleClickMovie(movie_id){

        let scrollCurrentPosition = document.documentElement.scrollTop;
        

        let movieIndex = this.state.Movies.findIndex(movie=>movie.movie_id === movie_id);
        let movie = this.state.Movies[movieIndex];

        this.setState({
            display: true,
            movie_diplay: movie,
            scrollPosition: scrollCurrentPosition

        })
        window.scrollTo(0,0)
    }

    handleCloseClick(){
        let scrollCurrentPosition = this.state.scrollPosition + 465;

        this.setState({
            display:false,
            movie_diplay: null,
            scrollPosition: null
        });

        window.scrollTo(0, scrollCurrentPosition)
    }

    handleClickModalOpen(option, url){

        if (option === 'pelicula') {
            url = "https://drive.google.com/file/d/"+url+"/preview"
            
        }
        
        this.setState({
            modalDisplay: true,
            video_path: url
        })

        document.body.style.overflowY = "hidden";
        window.scrollTo(0,0);
    }

    closeModal(){
        this.setState({
            modalDisplay: false,
            video_path: null
        })

        document.body.style.overflowY = "scroll";
    }

    handleClickMoreMovies(){
        let newQuantity = this.state.quantity + 12;

        this.setState({
            quantity: newQuantity
        });
    }

    handleTextSearch(e){
        this.setState({
            filter: e.target.value
        })
    }

    handleFilterOption(filter, Movies){
        const newMovies = Movies.filter(movie => {
            const movieData = movie.name.toUpperCase();
            const textData = filter.toUpperCase();

            return movieData.indexOf(textData) > -1;
        })

        return newMovies;
    };

    handleDeleteFilterText(e){
        e.target.value = '';
        this.setState({
            filter: ''
        });
    };

    render(){        
        return (
            <div className="container">
                <div className="nabvar">
                    <h1 className="title-app">Peliculas</h1>
                    <SearchMovie 
                        onPressText={this.handleTextSearch}
                        onClickDelete={this.handleDeleteFilterText}
                        filter={this.state.filter}
                    />
                </div>
                {this.state.display ?
                    <MovieDetail
                        key={this.state.movie_diplay.id}
                        poster_path={this.state.movie_diplay.poster_path}
                        trailer={this.state.movie_diplay.trailer}
                        overview={this.state.movie_diplay.overview}
                        tagline={this.state.movie_diplay.tagline}
                        popularity={this.state.movie_diplay.popularity}
                        id={this.state.movie_diplay.id}
                        name={this.state.movie_diplay.name}
                        movie_id={this.state.movie_diplay.movie_id}
                        onPressClose = {this.handleCloseClick}
                        onClickModal = {this.handleClickModalOpen}
                    />
                    : ''
                }

                {
                    this.state.modalDisplay ? 
                    <ModalMovie
                        url = {this.state.video_path}
                        onPressCloseModal = {this.closeModal}
                    /> : ''
                }
                <div className="container-movies">
                    {
                        this.handleFilterOption(this.state.filter, this.state.Movies).map((movie, i) => {
                            if (i < this.state.quantity) {
                                return (
                                    <Movie
                                        key={movie.id}
                                        poster_path={movie.poster_path}
                                        tagline={movie.tagline}
                                        name={movie.name}
                                        movie_id={movie.movie_id}
                                        onPressMovie={this.handleClickMovie.bind(this, movie.movie_id)}
                                    />
                                )
                            }
                        })
                    }

                    <MoreMovies onClickMoreMovies={this.handleClickMoreMovies}/>
                </div>
            </div>
        )
    }
} 


export default MovieList