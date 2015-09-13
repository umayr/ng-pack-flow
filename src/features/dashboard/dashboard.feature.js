'use strict';

import DashboardController from './dashboard.controller';

import routes from './dashboard.routes.js';

export default angular.module('features.dashboard', [])
    .config(routes)
    .controller('DashboardController', DashboardController);
