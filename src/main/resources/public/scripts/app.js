'use strict';

angular.module('sagePayPoc', [
    'ui.router'
]).config(function ($httpProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');
});
