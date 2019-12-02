//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils']);
let requiredColumns = ['id', 'employee_name', 'employee_salary', 'employee_age', 'profile_image'];
app.controller('validationCtrl',function($scope,$http,$uibModal){


  function refreshTable() {
    $('.dataTable').each(function() {
        dt = $(this).dataTable();
        dt.fnDraw();
    })
  }

     
 //    Our GET request function
 let userData = [];
   function getRequest() {
    $http.get("http://dummy.restapiexample.com/api/v1/employees").then(
      function successCallback(response) {
        var data = response.data;
        
        for(var i in data){
            var row = [];
            row.push(data[i][requiredColumns[0]]);
            row.push(data[i][requiredColumns[1]]);
            row.push(data[i][requiredColumns[2]]);
            row.push(data[i][requiredColumns[3]]);
            row.push(data[i][requiredColumns[4]]);
            userData.push(row);
        }
        refreshTable();
        $scope.data = userData;

      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };

  $(function(){
    getRequest();
  })

  $scope.open = function (data) {    
    $uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        passData: function () {
          return data;
        }
      }
    });
  }

$scope.dataTableOpt = {
  "aLengthMenu": [[20, 50, 100,-1], [20, 50, 100,'All']],
  };
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, passData) {

  $scope.myData = passData;
  $scope.columns = requiredColumns;

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});