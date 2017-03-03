(function(){
    'use strict'

    const registerDB = require('../db/register-db');

    angular
    .module('application')
    .service('applicationService',[       
        ApplicationService
    ]);

    function ApplicationService(){
        var self = this;
        self.getRegisterDB = function(){
            return registerDB;
        }
    }
})()