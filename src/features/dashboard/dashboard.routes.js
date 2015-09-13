'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            template: require('./dashboard.tpl.html'),
            controller: 'DashboardController as vm'
        });
}
