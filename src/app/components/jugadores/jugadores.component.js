(function(){
	'use strict';

	angular
	.module('app')
	.component('jugadores',{
		templateUrl: 'app/components/jugadores/jugadores.html',
		controller: jugadoresCtrl,
		controllerAs: 'vm'
	});

	jugadoresCtrl.$inject = ['JugadorService','$mdDialog'];

	function jugadoresCtrl(JugadorService,$mdDialog){
		var vm = this;
		vm.jugadores = null;
		JugadorService.query().$promise.then(function(data){
			vm.jugadores = data;
		});

		vm.showDialog = function(ev,jugador){
			var confirm = $mdDialog.confirm()
			.title('¿Esta seguro de eliminar este jugador ?')
			.textContent('Se eliminara el jugador ' +jugador.nombre + ' '+ jugador.apellido)
			.targetEvent(ev)
			.ok('Confirmar')
			.cancel('Cancelar');

			$mdDialog.show(confirm).then(function() {
				JugadorService.delete({id: jugador.id},function(data){
				//$rootScope.$broadcast('actualizar');
				console.log('se elimino');
				})
			},function(){
				console.log('no se elimino');
			});
		};
	}
})();