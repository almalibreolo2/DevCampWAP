var request = require('request');

// var serverKey =
//   "key=" + "AAAAummcSko:APA91bHppIKcGEMQnLT8RvZC_q1eVrVz2T2IJMIczC4Vh2k-nJquUs0u5_5_UVfiYPVLEJZGUp2jWJsDav8S4ZYifvphaVH0FAJzufKX6-unlvQhKzBM6Ia94BLpSz7_aZGkT7fsqEJg";
// var deviceKey =
//   "cKC9L-KSd7k:APA91bHOJW5NfJCaVJhljS7p4xU9NhY-Pae6-EAx8Hz2pYjEtQKPP3ZfkyPdTLfIJprvkGDNiK5nYg0wZ1KO-qSHyAe8E1B7anwqPzr30Y6g5yd69-1qdHeuCxwWv3Di0wIh1D99bzUk";
var serverKey =
  "key=" + "AAAAdMMHQrs:APA91bGtxWP0DdP8WkL7JW6xELHX25X-1osuE_eUtWr9jmmA8LBKu-hvx60Cqtx8uN-GO26U5dQRP0IEnxHx8RQ3kl3tV-tipeF0Bn4N1SRpzZP80Zopxr30tuwX5ez654vU33vWGf9ZPFktejfAhnTJRG1Nb0vJNg";
var deviceKey =
"d1vwUXeKJ5o:APA91bEL1SVaMaX2x5FLqa0vzQ44_bjVSMZAykwgJhl6ZEPZZk0wmQyE24-jxsfLH26VwcvliTjw9ykIjuCkiAs5oPV9sBqhbCpg5fMKQdDCXLXeu6A8XBigSueXw1yHkVf4WUGnlR5ehePhsqCt8YpTiMrHFudQWg";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};
