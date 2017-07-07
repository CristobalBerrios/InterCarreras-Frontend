(function(){
	'use strict';

	angular
	.module('app')
	.service('EquipoGrupoService',equipoGrupoService);

	equipoGrupoService.$inject = ['$resource'];

	function equipoGrupoService($resource){

		return $resource('http://192.168.1.144:8888/PHP/ElectivoWeb/Intercarreras/IntercarrerasV1/public/api/equipoGrupo/:id',{id:'@id'},{
			get: {
        
        isArray: true
    }
		});
	}
})();