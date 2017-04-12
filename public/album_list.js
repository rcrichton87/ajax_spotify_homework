var AlbumList = function(url){
  this.url = url;
  this.albums = [];
}

AlbumList.prototype = {
  
  getData: function () {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
  
    request.onload = function () {
      if (request.status !== 200) return;
        var jsonString = request.responseText;
        var albumsFromJSON = JSON.parse(jsonString);
        this.albums = albumsFromJSON.albums.items;
        this.display();
    }.bind(this);
    
    request.send();
    
  },

  display: function(){

    var albumsDiv = document.querySelector('#albums');

    while (albumsDiv.hasChildNodes()){
      albumsDiv.removeChild(albumsDiv.firstChild);
    }

    this.albums.forEach(function(album){

      var albumDiv = document.createElement('div');
      albumDiv.classList.add('album');
      var albumCover = document.createElement('img');
      var albumTitle = document.createElement('p');
      var albumArtist = document.createElement('p');

      albumCover.src = album.images[2].url;
      albumTitle.innerText = 'Album: ' + album.name;
      
      var artistString = '';

      if(album.artists.length === 1){
        artistString += 'Artist: ' + album.artists[0].name;
      } else {
        artistString = 'Artists: '
      
        var count = 0;

        album.artists.forEach(function(artist){
          artistString += artist.name;
          count++;
          if(count < album.artists.length){
            artistString += ', '
          }
        })
      }

      albumArtist.innerText = artistString;

      albumDiv.appendChild(albumCover)
      albumDiv.appendChild(albumTitle)
      albumDiv.appendChild(albumArtist)

      albumsDiv.appendChild(albumDiv);


    })
  }

};