(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/tmdb.27b65cb4.svg"},11:function(e,t,a){e.exports=a(22)},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n,c=a(0),i=a.n(c),s=a(6),o=a.n(s),r=a(1),l=a(2),u=a(4),m=a(3),d=a(5),p=a(7),h=a.n(p),v=a(9),g=a(10),f=a.n(g),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={suggests:[],visible:0,value:""},a.onChange=function(){var e=Object(v.a)(h.a.mark(function e(t){var n,c,i,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,c=[],!(n.length>=2)){e.next=11;break}return i="https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=cfe422613b250f702980a3bbf9e90716"),e.next=5,fetch(i);case 5:return s=e.sent,e.next=8,s.json();case 8:e.sent.results.forEach(function(e){c.push({title:e.title,id:e.id})}),a.setState({suggests:[].concat(c),visible:1});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleInputChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleChange",value:function(e){e.target.select()}},{key:"toggle",value:function(e){this.setState({visible:0,value:e.target.textContent})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-xs-12 search-container nopadding"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-5"},i.a.createElement("a",{href:"baidu.com",title:"ReactJS TMDb Movie Search",onclick:"ga('send', 'event', 'link', 'internal', 'TMDB logo')"},i.a.createElement("img",{src:f.a,className:"logo",alt:"The Movie Database"}))),i.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-7"},i.a.createElement("form",{className:"searchbox"},i.a.createElement("input",{ref:"search suggestion",onClick:this.handleChange,className:"searchbox__input form-control",type:"text",placeholder:"Search Movie Title...",id:"q",onInput:this.onChange,onChange:this.handleInputChange.bind(this),value:this.state.value}),i.a.createElement("div",{style:{opacity:this.state.visible},onClick:this.toggle.bind(this)},i.a.createElement("ul",{className:"search-suggest"},this.state.suggests&&this.state.suggests.map(function(t){return i.a.createElement("li",{key:t.popularity,className:"search-result",onClick:e.props.fetchMovieID,id:t.id},t.title)})))))))}}]),t}(c.Component),E=a(19),y=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data,t="https://image.tmdb.org/t/p/w500"+e.poster,a=e.production,c=e.production_countries,s=e.genre,o=e.revenue,r=k(a),l=(k(c),k(s));return n="https://image.tmdb.org/t/p/original"+e.backdrop,"undefined"===e.vote||0===e.vote?e.vote="-":e.vote=e.vote+" / 10",o="undefined"===o||0===o?"-":E(e.revenue).format("($0,0)"),null==e.poster&&(t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"),i.a.createElement("div",{className:"col-xs-12 cardcont nopadding"},i.a.createElement("div",{className:"meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5"},i.a.createElement("h1",null,e.original_title),i.a.createElement("span",{className:"tagline"},e.tagline),i.a.createElement("p",null,e.overview),i.a.createElement("div",{className:"additional-details"},i.a.createElement("span",{className:"genre-list"},l),i.a.createElement("span",{className:"production-list"},r),i.a.createElement("div",{className:"row nopadding release-details"},i.a.createElement("div",{className:"col-xs-6"}," Original Release: ",i.a.createElement("span",{className:"meta-data"},e.release)),i.a.createElement("div",{className:"col-xs-6"}," Running Time: ",i.a.createElement("span",{className:"meta-data"},e.runtime," mins")," "),i.a.createElement("div",{className:"col-xs-6"}," Box Office: ",i.a.createElement("span",{className:"meta-data"},o)),i.a.createElement("div",{className:"col-xs-6"}," Vote Average: ",i.a.createElement("span",{className:"meta-data"},e.vote))))),i.a.createElement("div",{className:"poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 "},i.a.createElement("img",{id:"postertest",className:"poster",src:t})))}},{key:"componentDidUpdate",value:function(){document.body.style.backgroundImage="url("+n+")"}}]),t}(c.Component);function k(e){var t=[];return void 0!==e&&e.forEach(function(e){t.push(e.name)}),t.join(", ")}var N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movieID:157336},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,{fetchMovieID:this.fetchMovieID.bind(this)}),i.a.createElement(y,{data:this.state}))}},{key:"fetchApi",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){t.setState({movieID:e.id,original_title:e.original_title,tagline:e.tagline,overview:e.overview,homepage:e.homepage,poster:e.poster_path,production:e.production_companies,production_countries:e.production_countries,genre:e.genres,release:e.release_date,vote:e.vote_average,runtime:e.runtime,revenue:e.revenue,backdrop:e.backdrop_path})})}},{key:"fetchMovieID",value:function(e){var t=e.target.id||null;console.log(t);var a="https://api.themoviedb.org/3/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716&&language=zh");this.fetchApi(a)}},{key:"componentDidMount",value:function(){var e="https://api.themoviedb.org/3/movie/".concat(this.state.movieID,"?&api_key=cfe422613b250f702980a3bbf9e90716&&language=zh");this.fetchApi(e)}}]),t}(c.Component);a(20);window.React=i.a,o.a.render(i.a.createElement(N,null),document.getElementById("app"))}},[[11,2,1]]]);
//# sourceMappingURL=main.7ff8e28c.chunk.js.map