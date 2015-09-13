'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('foo', {
            url: '/foo',
            template: require('./foo.tpl.html'),
            controller: 'FooController as vm'
        });
}
