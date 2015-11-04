'use strict';

angular.module('sagePayPoc')
    .config(function ($stateProvider) {
        $stateProvider
            .state('error', {
                url: '/error',
                templateUrl: 'scripts/error/error.controller.html',
                controller: 'ErrorController',
                controllerAs: 'errorCtrl'
            })
    });
