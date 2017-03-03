(function () {
    'use strict'    

    angular
        .module('application.authorized.persons')
        .controller('personsController', [
            'applicationService',
            PersonsController
        ]);

    function PersonsController(applicationService) {
        var self = this;
        //  self.getPersons = function () {
          self.persons = [{a:'a'},{b:'b'}];
        applicationService.getRegisterDB().getPersons({}, function (arrayOfPersons, err) {
                self.persons = [];
                arrayOfPersons.forEach(function(person){
                    self.persons.push(JSON.stringify(person));
                });       
                $scope.$apply();
                // alert(JSON.stringify(arrayOfPersons));         
            });
            self.cperson = self.persons;
            // return pers;
        //  }
    };
})()