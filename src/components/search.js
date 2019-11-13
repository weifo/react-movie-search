import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../images/tmdb.svg";

export default class SearchBox extends Component {
  state={
    suggests:[],
    visible:0,
    value:''
  }
  onChange=async (e)=>{
    let search=e.target.value,
        infos=[];
    if(search.length>=2){
      let url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cfe422613b250f702980a3bbf9e90716`;
      let call=await fetch(url);
      let data=await call.json();
      data.results.forEach(result=>{
            infos.push(
          {title:result.title,
           id:result.id});
      });
      this.setState({
        suggests:[...infos],
        visible:1
      });
      //e.target.nextSibling.classList.toggle("search-suggest-tooggle")
    }
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }
  handleChange(event) {
    event.target.select();
  }
  toggle(e){
     this.setState({
       visible:0,
       value:e.target.textContent
     })
  }
  render() {
    return (
      <div className="col-xs-12 search-container nopadding">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <a
              href="baidu.com"
              title="ReactJS TMDb Movie Search"
              onclick="ga('send', 'event', 'link', 'internal', 'TMDB logo')"
            >
              <img src={logo} className="logo" alt="The Movie Database" />
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-7">
            <form className="searchbox" >
              {/*  <label> */}
              <input
                ref="search suggestion"
                onClick={this.handleChange}
                className="searchbox__input form-control"
                type="text"
                placeholder="Search Movie Title..."
                id="q"
                onInput={this.onChange}
                onChange={this.handleInputChange.bind(this)}
                value={this.state.value}
              />
              <div style={{opacity:this.state.visible}} onClick={this.toggle.bind(this)}>
              <ul className="search-suggest">
               {this.state.suggests&&this.state.suggests.map((suggest)=>
                <li key={suggest.popularity} className="search-result" 
                onClick={this.props.fetchMovieID} id={suggest.id}>{suggest.title}</li>
            )}
           </ul>
           </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

