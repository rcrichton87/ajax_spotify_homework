var AlbumView = function(divElement, albumList){
  this.divElement = divElement;
  this.albumList = albumList;
}

AlbumView.prototype = {
  display: function(){
    this.albumList.albums.forEach(function(album){
      var albumDiv = document.createElement('div');
      var albumCover = document.createElement('img');
      var albumTitle = document.createElement('p');
      var albumArtist = document.createElement('p');

      albumCover.src = album.images[0];
      albumTitle.innerText = album.name;
      var artistString = '';
      album.artists.forEach(function(artist){
        artistString += artist + ' ';
      })
      albumArtist.innerText = artistString;

      albumDiv.appendChild(albumCover)
      albumDiv.appendChild(albumTitle)
      albumDiv.appendChild(albumArtist)

      this.divElement.appendChild(albumDiv);


    })
  }
}