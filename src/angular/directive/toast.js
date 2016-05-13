(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('toast', [function () {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div id="widget-toast {{cssClass}}" class="ng-widget-toast" data-visible="{{visible}}" ng-bind-html="msg"></div>',
        scope: true
      };
    }]);

})();
