//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils']);
app.controller('validationCtrl',function($scope,$http){


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
            row.push(data[i].id);
            row.push(data[i].employee_name);
            row.push(data[i].employee_salary);
            row.push(data[i].employee_age);
            row.push(data[i].profile_image);
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

$scope.dataTableOpt = {
  "aLengthMenu": [[25, 50, 100,-1], [25, 50, 100,'All']],
  };
});