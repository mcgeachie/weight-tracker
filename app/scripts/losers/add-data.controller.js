var loserControllers = angular.module('loserControllers');

loserControllers.controller('AddDataCtrl', ['$scope', '$firebase', 'calculateBmi', function ($scope, $firebase, calculateBmi) {
  $scope.today = new Date();
  $scope.dateOptions = { startingDay: 1 };

  $scope.openDatepicker = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.datepickerOpen = true;
  };

  $scope.cancelForm = function () {
    $scope.date = null;
    $scope.weight = null;
    $scope.modal.dismiss();
  };

  $scope.addDataPoint = function () {
    $scope.$parent.loser.weights.$add({
      kg: $scope.weight,
      datePoint: $scope.date.toString(),
      bmi: calculateBmi($scope.weight, $scope.$parent.loser.height)
    })

    $scope.cancelForm();
  }
}]);
