(function() {
    function HomeCtrl(Room, $uibModal) {
         var $ctrl = this;
         $ctrl.title = "Bloc Chat";
         $ctrl.rooms = Room.all;
         $ctrl.RoomModal = function() {
             $uibModal.open({
                 templateUrl: '/templates/modal.html',
                 controller: 'ModalCtrl as modals'
             });
         }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
