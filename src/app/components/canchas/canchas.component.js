(function(){
	'use strict';

	angular
	.module('app')
	.component('canchas',{
		templateUrl:'/app/components/canchas/canchas.html',
		controller:canchasCtrl,
		controllerAs:'vm'
	});

	canchasCtrl.$inject = ['CanchasService'];

	function canchasCtrl(CanchasService){
		var vm = this;
		vm.canchas = CanchasService;
	}

})();