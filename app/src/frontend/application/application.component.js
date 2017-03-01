(function () {
    'use strict'

    angular
        .module('application')
        .component('application', {
            controller: 'applicationController',
            controllerAs: 'it',
            templateUrl: 'application/application.component.html'
        });
})()