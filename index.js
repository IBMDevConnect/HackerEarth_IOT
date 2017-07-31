var iotf = require("ibmiotf");
var config = require('./config.json');

var deviceClientConfig = {
  org: config.org,
  type: config.type,
  id: config.id,
  "auth-method" : config.auth_method,
  "auth-token" : config.auth_token
};
var deviceClient = new iotf.IotfDevice(deviceClientConfig);

//setting the log level to trace. By default its 'warn'
deviceClient.log.setLevel('info');

//connecting to the IBM IoT
deviceClient.connect();

deviceClient.on('connect', function(){
        setInterval(function(){
                  var event = {};
                  event.d = {};
            event.d.temp = Math.random().toFixed(2)*30;
                  var eventStr = JSON.stringify(event);
                  console.log(eventStr);
                  deviceClient.publish('myevt', 'json', eventStr, 0);
                },2500);
          });

//deviceClient.disconnect();

deviceClient.on('disconnect', function(){
  console.log('Disconnected from IoTF');
});
