(function() {
    function ModalCtrl($scope, $uibModal, Room) {    
        this.open = function(size, parentSelector) {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl'
            });
            
            modalInstance.result.then(function(name) {
                this.room = {"name": name};
                Room.add(room);
            }, function() {
                $log.info('Modal dismissed at ' + new Date());
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();