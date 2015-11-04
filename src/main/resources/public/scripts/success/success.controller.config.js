'use strict';

angular.module('sagePayPoc')
    .config(function ($stateProvider) {
        $stateProvider
            .state('success', {
                url: '/success',
                templateUrl: 'scripts/success/success.controller.html',
                controller: 'SuccessController',
                controllerAs: 'successCtrl'
            })
    });
