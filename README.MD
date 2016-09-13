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

var TestModule = angular.module('TestApp', ['nx.widget'])
    .controller('MainCtrl', function ($scope, nxToast) {
      $scope.show = function () {
        nxToast.show({
          cssClass:'customizeClass',
          msg: '<b>v</b>asfdjsldafj<em style="color:#f00;">I am safed</em>!'
        });
      };
    });

```

## todos:
- [ ] add toast provider.

##resouces:
+ http://weui.github.io/weui/#/toast
