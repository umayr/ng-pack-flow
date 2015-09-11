'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router'

import features from './features';

angular.module('app', [
    uirouter,
    features.name
]);