(function(){
	'use strict';

	angular
	.module('app')
	.component('jugadores',{
		templateUrl: 'app/components/jugadores/jugadores.html',
		controller: jugadoresCtrl,
		controllerAs: 'vm'
	});

	jugadoresCtrl.$inject = ['JugadorService'];

	function jugadoresCtrl(JugadorService){
		var vm = this;
		vm.jugadores = null;
		JugadorService.query().$promise.then(function(data){
			vm.jugadores = data;
		});
	}
})();