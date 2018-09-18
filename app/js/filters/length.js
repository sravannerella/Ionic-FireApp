(function(){
    'use strict';
    angular.module('fireApp')
        .filter('length', ()=> {
        return (obj) => {
            if(obj !== null && obj !== undefined){
                return Object.keys(obj).length;
            } else {
                return 0;
            }
        }
    });
})();