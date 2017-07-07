(function(){
	'use strict';

	angular
	.module('app')
	.component('grupo',{
		templateUrl: '/app/components/grupos/grupo.html',
		controller: grupoCtrl,
		controllerAs: 'vm'
	});

	grupoCtrl.$inject = ['GrupoService'];

	function grupoCtrl(GrupoService){
		var vm = this;
		vm.grupos = null;

		GrupoService.query().$promise.then(function(data){
			vm.grupos = data;
		});
	}
})();