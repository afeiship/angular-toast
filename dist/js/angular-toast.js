/* eslint no-unused-vars:0 */
var ToastModule = angular.module('toast', []),
  extend = angular.extend,
  forEach = angular.forEach,
  jqLite = angular.element,
  noop = angular.noop;

ToastModule
  .directive('toast', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="ng-widget-toast" data-visible="{{visible}}" ng-transclude></div>',
      scope: {
        visible: '='
      },
      controller: ['$scope', '$element', function ($scope, $element) {
        var scope = this.$scope = $scope;
        this.$element = $element;

        //init:
        scope.visible = false;


        function _createInstance(){

        }
      }]
    };
  }]);

ToastModule.factory('ngToast', ['$rootScope', function ($rootScope) {
  return {
    show: ngToast
  };


  function ngToast(inOptions) {

  }
}]);
