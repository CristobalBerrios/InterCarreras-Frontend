(function(){
	'use strict';

	angular
	.module('app')
	.component('verGrupo',{
		templateUrl:'/app/components/grupos/verGrupo.html',
		controller: verGrupoCtrl,
		controllerAs : 'vm'
	});

	verGrupoCtrl.$inject = ['EquipoGrupoService','$stateParams'];

	function verGrupoCtrl(EquipoGrupoService,$stateParams){
		var vm = this;

		EquipoGrupoService.get({id: $stateParams.id}).$promise.then(function(data){
			vm.equipo = data;
			

			for(var i=0;i<data.length;i++){
				vm.equipo[i].estadistica = JSON.parse(data[i].estadistica);
			}
			console.log(data);
		})


	}
})();