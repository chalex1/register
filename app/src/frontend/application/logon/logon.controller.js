(function () {
    'use strict'

    angular
        .module('application.logon')
        .controller('logonController', [
            '$state',
            LogonController
        ]);

    function LogonController($state) {
        this.logon = function () {            
            $state.go('application.authorized.persons');
        }
    }
})()