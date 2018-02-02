(function() {
  function AlbumCtrl() {
    this.albums = [];
    for (var i=0; i < 5; i++){
         this.albums.push(angular.copy(albumPicasso));
     }
  }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
