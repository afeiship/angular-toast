ToastModule
  .directive('toast', [function () {
    return {
      restrict: 'E',
      template: '<div class="toast"></div>',
      controller: ['$scope', '$element', function ($scope, $element) {
        this.$scope = $scope;
        this.$element = $element;
      }]
    };
  }]);
