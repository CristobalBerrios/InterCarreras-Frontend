(function(){
	'use strict';

	angular
	.module('app')
	.component('equipo',{
		templateUrl: 'app/components/equipo/equipos.html',
		controller: equiposCtrl,
		controllerAs: 'vm'
	});

	equiposCtrl.$inject = ['EquipoService','$mdDialog','$rootScope'];

	function equiposCtrl(EquipoService,$mdDialog,$rootScope){
		var vm = this;
		vm.equipos = null;
		EquipoService.query().$promise.then(function(data){
			vm.equipos = data;
			for (var i = 0; i < data.length; i++) {
				console.log('entra');
				vm.equipos[i].estadistica = JSON.parse(data[i].estadistica);
				console.log(vm.equipos[i].estadistica);
			};
			
		});

		$rootScope.$on('actualizarEquipo',function(event,data){
			EquipoService.query().$promise.then(function(data){
				vm.equipos = data;
				for (var i = 0; i < data.length; i++) {
					console.log('entra');
					vm.equipos[i].estadistica = JSON.parse(data[i].estadistica);
					console.log(vm.equipos[i].estadistica);
				};
				
			});
		});

		vm.showDialog = function(ev,equipo){
			var confirm = $mdDialog.confirm()
			.title('¿Esta seguro de eliminar este equipo ?')
			.textContent('Se eliminara el equipo ' +equipo.nombre)
			.targetEvent(ev)
			.ok('Confirmar')
			.cancel('Cancelar');

			$mdDialog.show(confirm).then(function() {
				EquipoService.delete({id: equipo.id},function(data){
					$rootScope.$broadcast('actualizarEquipo');
					console.log('se elimino');
				})
			},function(){
				console.log('no se elimino');
			});
		};
	}
})();