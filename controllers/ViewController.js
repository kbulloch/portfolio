app.controller("ViewCtrl", function ViewCtrl($scope) {

  // $scope.bio = true;

  $scope.showBio = function() {
    $scope.bio = true;
    $scope.work = false;
    $scope.education = false;
  };

  $scope.showWork = function() {
    $scope.bio = false;
    $scope.work = true;
    $scope.education = false;
  };

  $scope.showEducation = function() {
    $scope.bio = false;
    $scope.work = false;
    $scope.education = true;
  };

});
