(function(){
	'use strict';

	angular
	.module('app')
	.component('editarJugador',{
		templateUrl:'/app/components/jugadores/jugadorForm.html',
		controller:editarJugadorCtrl,
		controllerAs:'vm'
	});

	editarJugadorCtrl.$inject = ['JugadorService','CarreraService','EquipoService','$stateParams','$state'];

	function editarJugadorCtrl(JugadorService,CarreraService,EquipoService,$stateParams,$state){
		var vm = this;
		vm.location = 'editar';
		vm.equipos = null;
		vm.carreras = null;

		vm.jugador = {
			matricula: null,
			nombre: null,
			apellido: null,
			correo: null,
			estadistica: '{"goles":0,"amarilla":0,"roja":0}',
			carrera_id: null,
			equipo_id : null
		};

		vm.enviarFormulario = function(data){

			JugadorService.update({id: $stateParams.id},data,function(response){
				$state.go('jugadores');
			},function(err){
	
			});

		}

		JugadorService.get({id: $stateParams.id},function(data){
			vm.jugador.matricula = data.matricula;
			vm.jugador.nombre = data.nombre;
			vm.jugador.apellido = data.apellido;
			vm.jugador.correo = data.correo;
			vm.jugador.carrera_id = data.carrera.id;
			vm.jugador.equipo_id = data.equipo.id;
			console.log(data);
		});

		EquipoService.query().$promise.then(function(data){
			vm.equipos = data;
		});

		CarreraService.query().$promise.then(function(data){
			vm.carreras = data;
		});
	}
})();