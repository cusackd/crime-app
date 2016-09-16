function FavouriteButtonController(articlesFactory, $scope) {
  var vm = this;

  $scope.favourited = false;

  console.log(vm.id);

  vm.clickFavourite = function(){
    console.log('Button Clicked')
    if($scope.favourited){
      vm.setFavourite(false);
      $scope.favourited = false;
    }else{
      vm.setFavourite(true);
      $scope.favourited = true;
    }
  }

  vm.checkFavourited = function(){
    var data = JSON.parse(localStorage.getItem(vm.type + '-' + vm.id));

    if(data){
      console.log('Has the information')
      $scope.favourited = true;
    }else{
      $scope.favourited = false;
      console.log('Not Favourited')
    }

  }

  vm.setFavourite = function(bool) {
    if(bool){
      localStorage.setItem(vm.type + '-' + vm.id, bool);
    }else{
      localStorage.removeItem(vm.type + '-' + vm.id)
    }
  }

  vm.checkFavourited();

}

angular.module('starter').component('favouriteButton', {
  templateUrl: 'components/favourite-button/favourite-button.template.html',
  controller: FavouriteButtonController,
  controllerAs: 'FBCtrl',
  bindings: {
    id: '=',
    type: '='
  }
});
