/**
 * Created by Umayr Shahid on 9/11/2015.
 */

'use strict';

import FooController from './foo.controller';
import RandomNames from './foo.service';
import routes from './foo.routes';

import './foo.scss';

export default angular
    .module('app.features.foo', [])
    .config(routes)
    .controller('FooController', FooController)
    .service('randomNames', RandomNames)
;