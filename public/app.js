var app = function(){

  //took this out, so it defaults to nothing
  // var albumList = new AlbumList('https://api.spotify.com/v1/search?query=cats&type=album&offset=0&limit=20');
  // albumList.getData();

  var searchButton = new SearchButton(document.querySelector('#search-button'));
  searchButton.button.onclick = searchButton.handleClick;

}

window.onload = app;