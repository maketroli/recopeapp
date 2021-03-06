'use strict';

angular.module('RecopeApp.services')
  .factory('OrderFactory', function($q, $http) {

  	return {
  		orders: function() {
  			var defer = $q.defer();

  			defer.resolve(
				  [{
				  id: '1',
				  order: '000001',
				  header: 'Detalle completo del detalle de cabecera de la orden',
				  group: 'Grupo Planificador Belén',
				  details: [{
				    label: 'Supervisor',
				    value: 'Alberto Cole'
				  }, {
				    label: 'Responsable',
				    value: 'Marcelo Retana'
				  }, {
				    label: 'Solicitante',
				    value: 'Recope'
				  }, {
				    label: 'Unidad ejecutora',
				    value: 'Grupo Planificador Belén'
				  }, {
				    label: 'Centro de Costo',
				    value: 'No se'
				  }, {
				    label: 'Plantel',
				    value: 'Mi casa'
				  }, {
				    label: 'Área funcional',
				    value: 'Programación'
				  }, {
				    label: 'Área de empresa',
				    value: 'Oficina'
				  }, {
				    label: 'Ubicación Técnica',
				    value: 'Taller'
				  }, {
				    label: 'Equipo superior',
				    value: 'foo'
				  }, {
				    label: 'Local',
				    value: '12A'
				  }, {
				    label: 'Ubicación',
				    value: 'Belén'
				  }, {
				    label: 'Equipo',
				    value: 'Ninjas'
				  }, {
				    label: 'Dato técnico',
				    value: 'EH-2138'
				  }, {
				    label: 'Prioridad',
				    value: 'Alta'
				  }, {
				    label: 'Actividad PM',
				    value: '900'
				  }, {
				    label: 'Fecha prox. Mtto',
				    value: '17 de julio'
				  }],
				  operations : [{
				    title    : 'Operación 170794',
				    duration : '3600',
				    status   : '0'
				  }, {
				    title    : 'Operación 981922',
				    duration : '60',
				    status   : '0'
				  }]
					}, {
					  id         : '2',
					  order      : '000002',
					  header     : 'Detalle completo del detalle de cabecera de la orden',
					  group      : 'Grupo Planificador mierda',
					  operations : []
					}]);
        return deferred.promise;
  		}
  	}
  });
