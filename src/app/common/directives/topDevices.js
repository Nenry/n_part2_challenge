angular
  .module("directives.topDevices", ["resources.devices"])
  .directive("topDevices", function () {
    return {
      restrict: "EA",
      transclude: true,
      scope: {
        devices: "=",
        categoryTitle: "@",
        filterKey: "@",
        formatUnit: "@"
      },
      templateUrl: "app/common/directives/topDevices.tpl.html"
    };
  });
