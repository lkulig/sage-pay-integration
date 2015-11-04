'use strict';

angular.module('sagePayPoc')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'scripts/form/form.controller.html',
                controller: 'FormController',
                controllerAs: 'formController'
            })
    });
