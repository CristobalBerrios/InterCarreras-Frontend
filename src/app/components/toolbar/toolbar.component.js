(function(){
	'use strict';

	angular
	.module('app')
	.component('toolbar',{
		templateUrl: 'app/components/toolbar/toolbar.html',
		controller: toolbarCtrl,
		controllerAs: 'vm'
	});

	toolbarCtrl.$inject = ['$mdSidenav','$state'];

	function toolbarCtrl($mdSidenav,$state){
		var vm = this;

		vm.toggle = function(){
			$mdSidenav('sidenav').toggle();
		}

		vm.go = function(ruta){
			$state.go(ruta);
			$mdSidenav('sidenav').toggle();
		}
	}
})();