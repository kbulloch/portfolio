var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider) {
  $stateProvider.state("index", {
    url: "",
    views: {
      "bio": {
        templateUrl: "partials/bio.html"
      },
      "work": {
        templateUrl: "partials/work.html"
      },
      "education": {
        templateUrl: "partials/education.html"
      },
      "contact": {
        templateUrl: "partials/contact.html"
      }
    }
  });
});

app.directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "partials/navigation.html"
  }
});
