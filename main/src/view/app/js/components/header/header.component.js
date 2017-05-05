class HeaderController {
  constructor($location, loginService) {
    this.location = $location;
    this.loginService = loginService;
    let usuarioLogado = localStorage.getItem('usuarioLogado');
    if(usuarioLogado) {
			this.loginService.usuarioLogado = JSON.parse(usuarioLogado);
		} else {
      $location.url('/login');
    }
  }

  minhaConta() {
    this.location.url('/minhaConta');
    $(".navbar-toggler").click();
  }

  extrato() {
    this.location.url('/extrato');
    $(".navbar-toggler").click();
  }

  welcome() {
    this.location.url('/welcome');
    $(".navbar-toggler").click();
  }

  logout() {
    this.loginService.usuarioLogado = null;
    localStorage.clear();
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