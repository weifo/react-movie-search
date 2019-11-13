import React, { Component } from 'react';
import SearchBox from './search';
import Card from './card';



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieID: 157336 // set initital load movie - Interstellar
    }
  }
  //add methods


  render() {
    return (
      <div>
        <SearchBox fetchMovieID={this.fetchMovieID.bind(this)}  />
        <Card data={this.state} />
      </div>
    )
  }  // END render

  // the api request function
  fetchApi(url) {

    fetch(url).then((res) => res.json()).then((data) => {
      // update state with API data
      this.setState({
        movieID: data.id,
        original_title: data.original_title,
        tagline: data.tagline,
        overview: data.overview,
        homepage: data.homepage,
        poster: data.poster_path,
        production: data.production_companies,
        production_countries: data.production_countries,
        genre: data.genres,
        release: data.release_date,
        vote: data.vote_average,
        runtime: data.runtime,
        revenue: data.revenue,
        backdrop: data.backdrop_path

      })
    })

    // .catch((err) => console.log('Movie not found!'))

  } // end function

  fetchMovieID(e) {
    let movieID=e.target.id||null;
    console.log(movieID);
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716&&language=zh`
    this.fetchApi(url);
    //[...e.target.parentNode.childNodes].forEach(e=>e.remove());
   // e.target.parentNode.classList.toggle("search-suggest-tooggle");
  } // end function

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?&api_key=cfe422613b250f702980a3bbf9e90716&&language=zh`
    this.fetchApi(url)
  
  } // end component did mount function

  // } // END CLASS - APP
}
