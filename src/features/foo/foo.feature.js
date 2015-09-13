'use strict';

import routes from './foo.routes.js';
import FooController from './foo.controller.js';



export default angular.module('features.foo', [])
    .config(routes)
    .controller('FooController', FooController);