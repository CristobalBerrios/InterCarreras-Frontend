(function(){
	'use strict';

	angular
	.module('app')
	.service('CanchasService',canchasService);

	function canchasService(){
		var canchas = [
			{
				nombre: 'Amanecer',
				direccion: 'Aurora 2340-2390',
			},
			{
				nombre: 'Venecia',
				direccion: 'Imperia 2309'
			}
		];

		return canchas;
	}
})();