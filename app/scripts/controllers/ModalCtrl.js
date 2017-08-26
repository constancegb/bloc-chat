(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var $ctrl = this;

        $ctrl.ok = function() {
            console.log(this.newRoom)
            Room.add($ctrl.newRoom);
            $uibModalInstance.close();
        };

        $ctrl.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $ctrl.createUsername = function() {
          $cookies.put('blocChatCurrentUser', this.username);
          $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')

        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
