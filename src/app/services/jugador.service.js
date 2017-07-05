(function(){
	'use strict';

	angular
	.module('app')
	.service('JugadorService',jugadorService);

	jugadorService.$inject = ['$resource'];

	function jugadorService($resource){

		return $resource('http://localhost:8000/api/jugadores/:id',{id:'@id'});
		
	}
})();