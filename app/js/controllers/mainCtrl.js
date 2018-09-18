(function(){
    'use strict';

    angular.module('fireApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', '$stateParams', '$firebaseArray', '$ionicPlatform', '$window'];
    
    function mainCtrl($scope, $stateParams, $firebaseArray, $ionicPlatform, $window){
        var vm = this;
        vm.connected = true;
        vm.addItem = addItem;
        vm.deleteItem = deleteItem;
        vm.updateItem = updateItem;
        vm.rootRef;

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
            vm.rootRef = firebase.database().ref().child('Users');
            vm.object = $firebaseArray(vm.rootRef);
            console.log("BEfore Entered", vm.object);
        });

        function addItem() {
            console.log("Item Added");
            vm.object.$add({
                Email: "testName@gmail.com",
                Name: "TestName",
                Password: "Testing123",
            });
        }

        person = {
            firstName: {
                2000: "AKhil",
                2001: "Killer",
                2005: "Ravan"
            },
            lastName: "Nerella  ",
            address: "asdasd    ",
            isLoggedIn: true
        };

        function deleteItem(item){
            console.log("ITem Deleted", item.$id);
            vm.object.$remove( item );
        }

        function updateItem(item){
            var test = vm.rootRef.child(item.$id);
            test.update({Name: "Ravan"});
            console.log("Updated");
        }
        
    }    
})();