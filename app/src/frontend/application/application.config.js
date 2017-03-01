(function () {
  'use strict'

  angular
    .module('application')
    // .config([
    //   '$locationProvider',
    //   configureLocationProvider
    // ])

    .config([
      '$stateProvider',
      '$urlMatcherFactoryProvider',
      configureStateProvider
      ]);

  function configureStateProvider($stateProvider,$urlMatcherFactoryProvider) {
     $urlMatcherFactoryProvider.strictMode(false); 
    $stateProvider
      .state('application', {
        url: '',
        views: {
          '': {
            component: 'application'
          }
        }
      })
      .state('application.logon', {
        url: '/logon',
        views: {
          '@application': {
            component: 'logon'
          }
        }
      });
  };
  function configureLocationProvider($locationProvider) {
    $locationProvider.html5Mode(true);
  }
})()