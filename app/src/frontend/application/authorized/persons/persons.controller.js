(function () {
    'use strict'

    angular
        .module('application.authorized.persons')
        .controller('personsController', [
            '$scope',
            'applicationService',
            PersonsController
        ]);

    function PersonsController($scope, applicationService) {
        var self = this;
        applicationService.getRegisterDB().getPersonsShort({}, function (arrayOfPersons, err) {
            self.persons = [];
            if (arrayOfPersons)
                self.person = arrayOfPersons;
            $scope.$apply();
        
        });

    };
})()