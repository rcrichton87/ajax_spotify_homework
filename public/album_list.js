var AlbumList = function(url){
  this.url = url;
  this.albums = [];
  this.onUpdate = null;
}

AlbumList.prototype = {
  getData: function () {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
  
    request.onload = function () {
      if (request.status !== 200) return;
        var jsonString = request.responseText;
        var albums = JSON.parse(jsonString);
        this.albums = albums.albums.items;
        console.log(this.albums)
        //this.onUpdate();
    }.bind(this);
  
    request.send();
  }

};