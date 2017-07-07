(function(){
	'use strict';

	angular
	.module('app')
	.component('crearEquipo',{
		templateUrl: '/app/components/equipo/equipoForm.html',
		controller: crearEquipoCtrl,
		controllerAs: 'vm'
	});

	crearEquipoCtrl.$inject = ['EquipoService','GrupoService','$state'];

	function crearEquipoCtrl(EquipoService,GrupoService,$state){
		var vm = this;
		vm.location = 'crear';
		vm.editable = false;
		vm.grupos = null;
		
		vm.enviarFormulario = function(data){
			EquipoService.save(data,function(res){
				console.log(res);
				$state.go('equipo');
			},function(err){
				console.log(err);
			});
			console.log(data);
		};

		vm.equipo = {
			
			nombre: null,
			estadistica: '{"puntos":0,"jugados":0,"ganados":0,"perdidos":0,"empatados":0,"gfavor":0,"gcontra":0}',
			grupo_id: null
		};

		GrupoService.query().$promise.then(function(data){
			vm.grupos = data;
		});

		
	}
})();