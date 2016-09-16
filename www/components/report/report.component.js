function ReportController($scope, reportFactory) {
  var vm = this;

  vm.hideForm = false;
  vm.loading = false;
  vm.successMessage = false;
  vm.errorMessage = false;

  vm.reportForm = {
    location: '',
    when: '',
    details: '',
    email: ''
  }

  vm.submitAnother = function(){
    vm.hideForm = false;
    vm.loading = false;
    vm.successMessage = false;
    vm.errorMessage = false;

  }

  vm.submitForm = function(){

    vm.hideForm = true;
    vm.loading = true;
    vm.successMessage = false;
    vm.errorMessage = false;

    var errors = {},
        reportForm = vm.reportForm;

    if(reportForm.location == ''){
      errors.location = 'Please set your location';
    }

    if(reportForm.when == ''){
      errors.when = 'When did the incident happen';
    }

    if(reportForm.details == ''){
      errors.details = 'Please enter some details about the incident';
    }

    if(reportForm.email == ''){
      errors.email = 'Please insert email data';
    }


    if(typeof errors == 'undefined'){
      vm.loading = false;
      vm.hideForm = false;
      console.log('has errors');
    }else{
      reportFactory.save(reportForm).$promise.then(function(data){
        console.log('Success', data);
        vm.reportForm = {};
        vm.loading = false;
        vm.hideForm = true;
        vm.successMessage = true;
      }, function(error){
        console.log(error);
        vm.loading = false;
        vm.hideForm = false;
        vm.errorMessage = true;
      })
      console.log('Success');
    }

  }



}

angular.module('starter').component('reportComponent', {
  templateUrl: 'components/report/report.template.html',
  controller: ReportController,
  controllerAs: 'ReportCtrl',
  bindings: {
    hero: '='
  }
});
