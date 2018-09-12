(function(){
    'use strict';

    angular.module('fireApp', [
        'ionic',
        'firebase'
    ]);
})();
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
(function(){
    'use strict';
    angular.module('fireApp')
        .filter('length', ()=> {
        return (obj) => {
            return Object.keys(obj).length;
        }
    });
})();
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
//# sourceMappingURL=app.js.map
