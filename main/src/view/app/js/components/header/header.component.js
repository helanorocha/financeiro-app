class HeaderController {
  constructor($location, loginService) {
    this.location = $location;
    this.loginService = loginService;
  }

  minhaConta() {
    this.location.url('/minhaConta');
    $(".navbar-toggler").click();
  }

  welcome() {
    this.location.url('/welcome');
    $(".navbar-toggler").click();
  }

  logout() {
    this.loginService.usuarioLogado = null;
    this.location.url('/login');
  }

  logoClick() {
    if(this.loginService.usuarioLogado) {
      this.location.url('/welcome');
    } else {
      this.location.url('/login');
    }
  }
}

HeaderController.$inject = ['$location', 'loginService'];

export const HeaderComponent = {
	controller: HeaderController,
  controllerAs: '$ctrl',
	template: require('./header.html')
}