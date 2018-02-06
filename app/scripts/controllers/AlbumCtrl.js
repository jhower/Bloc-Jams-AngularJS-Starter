(function() {
<<<<<<< HEAD
  function AlbumCtrl(Fixtures) {
    this.albums = [];
         this.albumData = angular.copy(albumPicasso));
     }
=======
  function AlbumCtrl() {

    this.albumData = angular.copy(albumPicasso);
console.log(this);

>>>>>>> assignement-5
  }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();
