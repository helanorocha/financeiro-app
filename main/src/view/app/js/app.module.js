import 'angular';

import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { NovaContaComponent } from './components/nova-conta/nova-conta.component';
import { NovaMovimentacaoComponent }  from './components/nova-movimentacao/nova-movimentacao.component';
import { ExtratoComponent }  from './components/extrato/extrato.component';

import { LoginService } from './services/login.service';
import { NovaContaService } from './services/nova-conta.service';
import { MovimentacaoService } from './services/movimentacao.service';

import routes from './app.routes';

let angularModules = ['ngRoute'];

angular.module('financeiro', angularModules)
  .service('loginService', LoginService)
  .service('novaContaService', NovaContaService)
  .service('movimentacaoService', MovimentacaoService)
  .component('headerComponent', HeaderComponent)
  .component('loginComponent', LoginComponent)
  .component('welcomeComponent', WelcomeComponent)
  .component('novaContaComponent', NovaContaComponent)
  .component('novaMovimentacaoComponent', NovaMovimentacaoComponent)
  .component('extratoComponent', ExtratoComponent)
  .config(routes)
  ;
