(function(){
	'use strict';

	angular
	.module('app')
	.service('CarreraService',carreraService);

	carreraService.$inject = ['$resource'];

	function carreraService($resource){

		return $resource('http://localhost:8000/api/carreras/:id',{id:'@id'});
	}
})();