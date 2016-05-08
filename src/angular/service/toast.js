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
      scope.template = inTemplate;
      scope.visible = true;
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
