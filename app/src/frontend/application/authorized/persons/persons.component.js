(function () {
    'use strict'

    angular
        .module('application.authorized.persons')
        .component('persons', {
            controller: 'personsController',
            controllerAs: 'it',
            templateUrl: 'application/authorized/persons/persons.component.html'
        });
})()