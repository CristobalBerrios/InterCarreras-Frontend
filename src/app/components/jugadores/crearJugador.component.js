(function(){
	'use strict';

	angular
	.module('app')
	.component('crearJugador',{
		templateUrl: '/app/components/jugadores/jugadorForm.html',
		controller: crearJugadorCtrl,
		controllerAs: 'vm'
	});

	crearJugadorCtrl.$inject = ['EquipoService','CarreraService'];

	function crearJugadorCtrl(EquipoService,CarreraService){
		var vm = this;
		vm.location = 'crear';
		vm.editable = false;
		vm.equipos = null;
		vm.carreras = null;
		vm.jugador = {
			matricula : null,
			nombre:null,
			apellido:null,
			carrera_id: null,
			equipo_id : null
		};

		EquipoService.query().$promise.then(function(data){
			vm.equipos = data;
		});

		CarreraService.query().$promise.then(function(data){
			vm.carreras = data;
		});
	}
})();