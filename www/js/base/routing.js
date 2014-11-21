angular.module('challenger')

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent' :{
        templateUrl: "templates/login.html"
      }
    }
  })
  .state('app.checkMails', {
    url: "/checkMails",
    views: {
      'menuContent' :{
        templateUrl: "templates/checkMails.html"
      }
    }
  })
  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent' :{
        templateUrl: "templates/browse.html"
      }
    },
    data: {
      requiresLogin: true
    }
  })
  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent' :{
        templateUrl: "templates/profile.html",
        controller: "ProfileCtrl"
      }
    }
  })
  .state('app.home', {
    url: "/timeline",
    views: {
      'menuContent' :{
        templateUrl: "templates/timeline.html",
        controller: 'TimelineCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/timeline');
});
