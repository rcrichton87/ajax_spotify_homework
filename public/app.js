var app = function(){

  var albumList = new AlbumList('https://api.spotify.com/v1/search?query=cats&type=album&offset=0&limit=20');
  albumList.getData();

}

window.onload = app;