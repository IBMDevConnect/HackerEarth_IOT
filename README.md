# About:

This node.js project publishes random temperature values to your IBM iot dashboard on cloud

# Requirements:
* Install [Node.js](https://nodejs.org/en/download/)
* Install [npm](https://www.npmjs.com/get-npm)

# Create Device:

* Login to [https://www.ibm.com/internet-of-things/](https://www.ibm.com/internet-of-things/) and choose 'try Watson IOT Platform'
* Name the project, choose Appropriate Region and your organization, space
* Click launch to go to your dashboard
* In Dashboard go to Devices and click Add device
* Create a new Device type and give it a name, description rest of the fields are optional so you can skip to the end
* choose your device type from drop-down and click next to Add Device
* Enter a unique device ID and click next.you can skip adding meta data
* Provide an authentication token
* After you click Add, copy the device credentials for further use

# Run project:

* git clone [https://github.com/krishnac7/IOTF_Publish.git](https://github.com/krishnac7/IOTF_Publish.git)
* cd HackerEarth_IOT
* npm install
* Update the config.json file with your device connection information
* node index.js
 
