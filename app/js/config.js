(function(){
    'use strict';

    angular.module('fireApp')
            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'main.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            });
        
        $urlRouterProvider.otherwise('/');
    }
})();