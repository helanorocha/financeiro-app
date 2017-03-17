import 'angular-route';

import { LoginComponent }  from './components/login/login.component';
import { WelcomeComponent }  from './components/welcome/welcome.component';
import { NovaContaComponent }  from './components/nova-conta/nova-conta.component';
import { NovaMovimentacaoComponent }  from './components/nova-movimentacao/nova-movimentacao.component';

function routes($routeProvider, $locationProvider, $httpProvider) {
  'use strict';
  $routeProvider
  .when('/', { redirectTo: 'login' })
  .when('/login', LoginComponent)
  .when('/welcome', WelcomeComponent)
  .when('/novaConta', NovaContaComponent)
  .when('/minhaConta', NovaContaComponent)
  .when('/novaMovimentacao', NovaMovimentacaoComponent)
  .otherwise({ redirectTo: 'login' });

  $locationProvider.html5Mode(false);
}

routes.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

export default routes;