(function() {
    function HomeCtrl(Room, Message, $uibModal) {
         var $ctrl = this;
         $ctrl.title = "Bloc Chat";
         $ctrl.rooms = Room.all;
         $ctrl.activeRoom = null;
         $ctrl.RoomModal = function() {
             $uibModal.open({
                 templateUrl: '/templates/modal.html',
                 controller: 'ModalCtrl as modals'
             });
         }

         $ctrl.setActiveRoom = fonction(room) {
           $ctrl.activeRoom = room;
           $ctrl.messages = Message.getByRoomId($ctrl.activeRoom.$id);
         }
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
