(function () {
    'use strict'

    angular
        .module('application')
        .config(['$stateProvider',
            configureStateProvider]);

    function configureStateProvider($stateProvider) {
        $stateProvider
                  .state('application', {
                    url: '',
                    views: {
                      '': {
                        component: 'application'
                      }
                    }
                  });
    };
})()