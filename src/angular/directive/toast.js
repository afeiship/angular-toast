(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('toast', [function () {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="nx-widget-toast {{cssClass}}" data-visible="{{visible}}" ng-bind-html="msg"></div>',
        scope: true
      };
    }]);

})();
