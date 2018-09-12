(function(){
    'use strict';
    angular.module('fireApp')
        .filter('length', ()=> {
        return (obj) => {
            return Object.keys(obj).length;
        }
    });
})();