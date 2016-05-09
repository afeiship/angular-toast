#angular-toast
A light simple toast like `IOS/Android system Toast widget`,based on angularjs &amp; sass.


##start:
+ bower install && npm install

##build
+ gulp

##usage:
+ use bower `bower install afeiship/angular-toast`
+ sample code:
```javascript

var TestModule = angular.module('TestApp', ['toast'])
    .controller('MainCtrl', function ($scope, ngToast) {
      $scope.show = function () {
        ngToast.show({
          msg: 'Cool toast!<i class="icon">icon herer!</i>'
        });
      };
    });

```

