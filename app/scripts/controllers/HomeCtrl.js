(function() {
    function HomeCtrl() {
        scope.value = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl, Room]);
})();