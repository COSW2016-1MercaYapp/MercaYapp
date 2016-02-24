'use strict';
angular.module('service.modulo1', ['ngRoute', 'ngResource'])

        /*.factory('servicio1', function () {
         var data = {
         listado: []
         };
         return {
         getListado: function () {
         return data.listado;
         },
         addTodo: function (todo) {
         data.listado.push(todo);
         }};
         })*/

         //---------------Post---------------
        .factory('Post', function ($resource) {
            return $resource('/tareas');
        })
    
        //---------------Get---------------
        .factory('Get', function ($resource) {
            return $resource('/tareas',{},
                {get: { method: 'GET', isArray: true}
            });
        });