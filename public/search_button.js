var SearchButton = function(button){
  this.button = button;
}

SearchButton.prototype = {
  handleClick: function(){
    var searchText = document.querySelector('#search-query')
    var url = 'https://api.spotify.com/v1/search?query=' + searchText.value + '&type=album&offset=0&limit=20'
    var results = new AlbumList(url);
    results.getData();
  }
}