(function () {
    'use strict'

    angular
        .module('application')
        .component('application', {
            controller: 'applicationController',
            controllerAs: 'it',
             //template: '<h1>Home</h1><p>Hello!!!!!!!!!!!!!!</p>'
            templateUrl: 'src/frontend/application/application.component.html'
        });
})()