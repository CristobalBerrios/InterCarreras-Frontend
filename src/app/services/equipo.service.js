(function(){
	'use strict';

	angular
	.module('app')
	.service('EquipoService',equipoService);

	equipoService.$inject = ['$resource'];

	function equipoService($resource){

		//return $resource('http://localhost:8000/api/equipos/:id',{id:'@id'});
		return $resource('http://192.168.1.144:8888/PHP/ElectivoWeb/Intercarreras/IntercarrerasV1/public/api/equipos/:id',{id:'@id'});
	}
})();