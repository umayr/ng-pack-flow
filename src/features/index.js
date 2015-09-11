/**
 * Created by Umayr Shahid on 9/11/2015.
 */

'use strict';

import Foo from './foo/foo.feature';

export default angular.module('app.features', [
    Foo.name
]);

