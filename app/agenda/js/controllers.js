'use strict';

/* Controllers */

angular.module('app.controllers', [])

.controller('ContatoCtrl',function($scope, $location, $locale, Contatos) {
	$scope.save = function() {
		Contatos.push({"id": Contatos.length + 1, "nome": $scope.contato.nome, "telefone": $scope.contato.telefone}); 
		$location.path('/');
    }
    $scope.edit = function ( idx ) {
		$location.path('/new');
	}
    $scope.delete = function ( idx ) {
		Contatos.splice(idx, 1);
	}
	$scope.getContatos = function () {
		return Contatos;
	}
	var frm_internalization;
	if($locale.id == 'en-us') {
		frm_internalization = 
				{'find': 'Find', 'edit': 'Edit', 'new': 'New', 'newContato': 'New Contact', 'remove': 'Remove', 'save': 'Save', 'title': 'Crazy Schedule', 'title2' : 'List of Contacts'};
	} else if ($locale.id == 'pt-br') {
		frm_internalization = 
				{'find': 'Pesquisar', 'edit': 'Editar', 'new': 'Novo', 'newContato': 'Novo Contato', 'remove': 'Remover', 'save': 'Salvar', 'title': 'Agenda Doida', 'title2': 'Lista de Contatos'};
	}
	$scope.frm = frm_internalization;
})
.controller('EditContatoCtrl', function($scope, $location, $locale, $routeParams, Contatos) {

		var contatoTemp = 0; 
		var idx = -1;
		for(var i in Contatos) {
			if(Contatos[i].id == $routeParams.id) {
				contatoTemp = Contatos[i];
				idx = i;
			}
		}
		if(contatoTemp) {
			$scope.contato = [];
			$scope.contato.nome = contatoTemp.nome;
			$scope.contato.telefone = contatoTemp.telefone;
		}

		$scope.save = function(){
			if(idx !== -1){
				var contato = {'nome': $scope.contato.nome, 'telefone': $scope.contato.telefone}
				Contatos[idx] = contato;
			}
			$location.path('/');
		}
})