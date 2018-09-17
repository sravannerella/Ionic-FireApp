(function(){
    'use strict';

    angular.module('fireApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', '$stateParams', '$firebaseArray', '$ionicPlatform', '$window'];
    
    function mainCtrl($scope, $stateParams, $firebaseArray, $ionicPlatform, $window){
        var vm = this;
        vm.connected = true;

        $ionicPlatform.ready( ()=> {
            console.log("READY");
            loadMaps();
        });

        function loadMaps() {
            var latLang = new google.maps.LatLng(37.3000, -120.4833);

            var options = {
                center: latLang,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("map"), options);
            vm.map = map;
        }

        $scope.$on('$ionicView.beforeEnter', () => {
            const rootRef = firebase.database().ref().child('Users');
            vm.object = $firebaseArray(rootRef);
            console.log("BEfore Entered", vm.object);
        });
    }    
})();