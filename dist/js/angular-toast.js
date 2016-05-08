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
      template: '<div id="widget-toast" class="ng-widget-toast" data-visible="{{visible}}" ng-bind-html="{{template}}"></div>',
      scope: true
    };
  }]);

ToastModule.factory('ngToast', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
  return {
    show: ngToast
  };


  function ngToast(inOptions) {
    var scope = $rootScope.$new(true);

    //init default options:
    var options = extend(scope, {
      interval: 1000,
      template: 'You toast content!',
      visible: false
    }, inOptions || {});

    scope.show = function (inTemplate) {
      _createInstance();
      scope.visible = true;
      scope.template = inTemplate;
    };

    scope.close = function () {
      $timeout(function () {
        scope.visible = false;
      }, options.interval);
    };


    function _createInstance() {
      var element = jqLite('#widget-toast');
      jqLite(document.body).append(element);
    }
  }
}]);
