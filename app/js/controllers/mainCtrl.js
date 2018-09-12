(function(){
    'use strict';

    angular.module('fireApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', '$stateParams', '$firebaseArray'];
    
    function mainCtrl($scope, $stateParams, $firebaseArray){
        var vm = this;
        vm.connected = true;
        
        $scope.$on('$ionicView.beforeEnter', () => {
            const rootRef = firebase.database().ref().child('Users');
            vm.object = $firebaseArray(rootRef);
            console.log("BEfore Entered", vm.object);
        });
    }
})();