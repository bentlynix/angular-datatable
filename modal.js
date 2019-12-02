angular.module('myApp', ['ui.bootstrap'])
.controller('ModalDemoCtrl', function ($scope, $uibModal) {

  $scope.open = function () {    
    $uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg'
    });
}
  
}).controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});