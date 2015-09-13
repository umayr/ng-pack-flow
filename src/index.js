import styles from './common/styles/index.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import dashboard from './features/dashboard/dashboard.feature';
import foo from './features/foo/foo.feature';

import config from './common/common.config';


angular.module('myapp', [
    uirouter,
    dashboard.name,
    foo.name
]).config(config);
