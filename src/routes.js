angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    }).state('jugadores',{
    	url: '/jugadores',
    	component: 'jugadores'
    }).state('verJugador',{
      url: '/jugadores/:id',
      component: 'verJugador'
    }).state('editarJugador',{
      url: '/jugadores/editar/:id',
      component: 'editarJugador'
    }).state('crearJugador',{
      url: '/jugador/crear',
      component: 'crearJugador'
    }).state('canchas',{
      url:'/canchas',
      component: 'canchas'
    }).state('grupo',{
      url: '/grupos',
      component: 'grupo'
    }).state('verGrupo',{
      url:'/grupo/:id',
      component:'verGrupo'
    }).state('equipo',{
      url:'/equipo',
      component:'equipo'
    }).state('crearEquipo',{
      url:'/equipo/crear',
      component:'crearEquipo'
    });
}
