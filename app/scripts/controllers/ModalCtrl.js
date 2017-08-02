(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var $ctrl = this;

        $ctrl.ok = function() {
            console.log(this.newRoom)
            Room.add($ctrl.newRoom);
            $uibModalInstance.close();
        };

        $ctrl.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')

        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
