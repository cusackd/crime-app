function ShareButton($scope, $cordovaSocialSharing) {

  var vm = this;

  vm.share = function(message, subject, file, link){

    $cordovaSocialSharing
    .share(vm.message, vm.subject, '', vm.link) // Share via native share sheet
    .then(function(result) {
      // alert('Shared Success')
      // Analytics
    }, function(err) {
      // alert('Failes')
      // An error occured. Show a message to the user
    });

  }


}

angular.module('starter').component('shareButton', {
  templateUrl: 'components/share-button/share-button.template.html',
  controller: ShareButton,
  controllerAs: 'shareButton',
  bindings: {
    message: '=',
    subject: '=',
    link: '='
  }
});
