(function () {
    'use strict'

    angular
        .module('application.authorized')
        .component('authorized',{
            controller: 'authorizedController',
            controllerAs: 'it',
            templateUrl: 'application/authorized/authorized.component.html'
        })
})()