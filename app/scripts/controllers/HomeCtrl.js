(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
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

         $ctrl.setActiveRoom = function(room) {
           $ctrl.activeRoom = room;
           $ctrl.messages = Message.getByRoomId($ctrl.activeRoom.$id);
         }

         $ctrl.sendMessage = function() {
           $ctrl.newMessage.roomId = $ctrl.activeRoom.$id;
           $ctrl.newMessage.username = $cookies.get('blocChatCurrentUser');
           Message.send($ctrl.newMessage);
         }
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
