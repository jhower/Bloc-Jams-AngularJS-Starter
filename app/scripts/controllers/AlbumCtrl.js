(function() {
  function AlbumCtrl() {

    this.albumData = angular.copy(albumPicasso);
console.log(this);

  }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
