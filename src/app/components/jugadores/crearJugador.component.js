(function(){
	'use strict';

	angular
	.module('app')
	.component('crearJugador',{
		templateUrl: '/app/components/jugadores/jugadorForm.html',
		controller: crearJugadorCtrl,
		controllerAs: 'vm'
	});

	crearJugadorCtrl.$inject = ['EquipoService','CarreraService','JugadorService','$state'];

	function crearJugadorCtrl(EquipoService,CarreraService,JugadorService,$state){
		var vm = this;
		vm.location = 'crear';
		vm.editable = false;
		vm.equipos = null;
		vm.carreras = null;

		vm.enviarFormulario = function(data){
			JugadorService.save(data,function(res){
				console.log(res);
				$state.go('jugadores');
			},function(err){
				console.log(err);
			});
			console.log(data);
		};

		vm.jugador = {
			matricula: null,
			nombre: null,
			apellido: null,
			correo: null,
			estadistica: '{"goles":0,"amarilla":0,"roja":0}',
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