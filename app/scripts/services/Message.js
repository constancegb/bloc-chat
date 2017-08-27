(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filters the messages by their room ID:
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    Message.send = function(newMessage) {
        // Send method logic
        newMessage.sentAt = new Date();
        messages.$add(newMessage);
    };

    return Message;
    }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
