'use strict';

/* Services */

angular.module('app.services', []).
factory('Contatos', function() {
	return  [{"id": 1, "nome": "Fulano 1", "telefone":"9999-9999"},{"id": 2, "nome": "Ciclano 2", "telefone":"8888-8888"}];
});