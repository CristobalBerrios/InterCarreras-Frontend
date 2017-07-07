(function(){
	'use strict';

	angular
	.module('app')
	.service('GrupoService',grupoService);

	grupoService.$inject = ['$resource'];

	function grupoService($resource){

		return $resource('http://localhost:8000/api/grupos/:id',{id:'@id'});
	}
})();