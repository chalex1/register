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
      '$urlRouterProvider',
      configureStateProvider
    ]);

  function configureStateProvider($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.when('/', '/logon');
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
      })
      .state('application.authorized', {
        url: '/authorized',
        abstract: true,
        views: {
          '@application': {
            component: 'authorized'
          }
        }
      })
      .state('application.authorized.persons', {
        url: '/persons',
        views: {
          '@application.authorized': {
            component: 'persons'
          }
        }
      });
  };
  function configureLocationProvider($locationProvider) {
    $locationProvider.html5Mode(true);
  }
})()