(function(){
	'use strict';

	angular
	.module('app')
	.service('EquipoService',equipoService);

	equipoService.$inject = ['$resource'];

	function equipoService($resource){

		return $resource('http://localhost:8000/api/equipos/:id',{id:'@id'});
	}
})();