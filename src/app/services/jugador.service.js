(function(){
	'use strict';

	angular
	.module('app')
	.service('JugadorService',jugadorService);

	jugadorService.$inject = ['$resource'];

	function jugadorService($resource){

		return $resource('http://192.168.1.144:8888/PHP/ElectivoWeb/Intercarreras/IntercarrerasV1/public/api/jugadores/:id',{id:'@id'},{
			update:{
				method:'PUT'
			}
		});
		
	}
})();