'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router'

import core from './src/core/core.module';

angular.module('app', [
    uirouter,
    core
]);