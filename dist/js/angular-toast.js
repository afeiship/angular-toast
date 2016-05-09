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
      template: '<div id="widget-toast" class="ng-widget-toast" data-visible="{{visible}}" ng-bind-html="msg"></div>',
      scope: true
    };
  }]);

ToastModule.factory('ngToast', [
  '$rootScope',
  '$timeout',
  '$compile',
  '$sce',
  function ($rootScope, $timeout, $compile, $sce) {

    var scope, element;
    initial();

    return {
      init: initial,
      show: ngToast,
      destroy: destroy
    };

    function initial() {
      scope = extend($rootScope.$new(true), {
        interval: 2000,
        msg: $sce.trustAsHtml('You toast <b>msg</b>!'),
        visible: false
      });

      element = scope.element = $compile('<toast></toast>')(scope);
      jqLite(document.body).append(element);
    }

    function ngToast(inOptions) {

      //init default options:
      var options = extend(scope, inOptions || {});
      scope.show = function () {
        scope.msg = $sce.trustAsHtml(options.msg);
        scope.visible = true;
        scope.close();
      };

      scope.close = function () {
        $timeout(function () {
          scope.visible = false;
        }, options.interval);
      };


      scope.show();
    }

    function destroy() {
      scope.$destroy();
      element.remove();
    }

  }]);
