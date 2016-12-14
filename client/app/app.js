'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import modal from '../components/modal/modal.service';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import services from './services/services.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.css';

angular.module('configProxy', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, navbar,
  footer, modal, main, services, constants, util
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['configProxy'], {
      strictDi: true
    });
  });
