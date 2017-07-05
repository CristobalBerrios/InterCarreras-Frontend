(function(){
	'use strict';

	angular
	.module('app')
	.component('verJugador',{
		templateUrl: '/app/components/jugadores/jugadorForm.html',
		controller: verJugadorCtrl,
		controllerAs: 'vm'
	});

	verJugadorCtrl.$inject = ['JugadorService','$stateParams'];

	function verJugadorCtrl(JugadorService,$stateParams){
		var vm = this;
		vm.location = 'ver';
		vm.editable = true;
		vm.jugador = JugadorService.get({id: $stateParams.id});

		vm.jugador.$promise.then(function(data){
			vm.jugador.estadistica = JSON.parse(data.estadistica);
		});

	}	
})();