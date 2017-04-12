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
        console.log(this.albums);
        this.display();
    }.bind(this);
    
    request.send();
    
  },

  display: function(){

    var albumsDiv = document.querySelector('#albums');

    this.albums.forEach(function(album){
      var albumDiv = document.createElement('div');
      var albumCover = document.createElement('img');
      var albumTitle = document.createElement('p');
      var albumArtist = document.createElement('p');

      albumCover.src = album.images[2].url;
      albumTitle.innerText = album.name;
      var artistString = '';
      album.artists.forEach(function(artist){
        artistString += artist.name + ' ';
      })
      albumArtist.innerText = artistString;

      albumDiv.appendChild(albumCover)
      albumDiv.appendChild(albumTitle)
      albumDiv.appendChild(albumArtist)

      albumsDiv.appendChild(albumDiv);


    })
  }

};