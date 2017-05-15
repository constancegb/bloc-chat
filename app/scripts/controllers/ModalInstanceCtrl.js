(function() {
    function ModalInstanceCtrl() {       
        this.ok = function() {
            $uibModalInstance.close(this.name);
        };
        
        this.close = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }

    angular
        .module('blocChat')
    
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();