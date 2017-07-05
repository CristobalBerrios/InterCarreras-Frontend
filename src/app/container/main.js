(function(){
	'use strict';

	angular
	.module('app')
	.component('app',{
		templateUrl : 'app/container/main.html',
		controller : appCtrl,
		controllerAs: 'vm'
	});	

	appCtrl.$inject = [];


	function appCtrl() {

		var vm = this;

	}

})();