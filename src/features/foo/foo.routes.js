/**
 * Created by Umayr Shahid on 9/11/2015.
 */

'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('foo', {
            url: '/foo',
            template: require('./foo.tpl.html'),
            controller: 'FooController',
            controllerAs: 'vm'
        });
};