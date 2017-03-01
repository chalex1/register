(function () {
    'use strict'

    angular
        .module('application.logon')
        .controller('logonController', [
            LogonController
        ]);

    function LogonController() {
        alert('logoncontroller');
    }
})()