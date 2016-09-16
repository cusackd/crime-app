angular.module('starter.controllers', [])

.filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
})

.controller('NewsCtrl', function($scope, articleFactory) {

  // articleFactory.query().$promise.then(function(data){
  //   console.log(data)
  //   $scope.article = data;
  // })


})

.controller('ArticleCtrl', function($scope, articleFactory, $state, $cordovaSocialSharing) {

  var articleId = $state.params.articleId;

  articleFactory.query({articleId: articleId}).$promise.then(function(data){
    $scope.article = data;
  })

  $scope.share = function(){
    $cordovaSocialSharing
    .share('message', 'subject', '', 'http://coollink.com') // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });

  }

})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  var vm = this;

  $scope.settings = {
    notifications: true
  };

  vm.getSettings = function(){
    var savedSettings = localStorage.getItem('settings');

    if(savedSettings){
      $scope.settings = JSON.parse(savedSettings);
    }

  }

  $scope.updateSettings = function(){
    localStorage.setItem('settings', JSON.stringify($scope.settings))
  }

  vm.getSettings();

});
