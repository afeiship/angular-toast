ToastModule
  .directive('toast', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="widget-toast" data-visible="{{visible}}" ng-transclude></div>',
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
