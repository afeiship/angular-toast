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
          cssClass:'customizeClass',
          msg: '<b>v</b>asfdjsldafj<em style="color:#f00;">I am safed</em>!'
        });
      };
    });

```

##resouces:
+ http://weui.github.io/weui/#/toast

