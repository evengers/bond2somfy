const fetch = require('node-fetch');
const path = require('path');
 
// you can find the values for these 3 in the bondhome app settings for bridge and for device
 let theToken = '???????????????';
  let theAwningDevice = '???????';
   let theIP = 'http://192.168.2.112'; // change to your local ip and maybe make it static in yoour router
   
   let aFetchStr = theIP+'/v2/devices/' +  theAwningDevice + '/actions';
   
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('*', (req, res) => {     
     res.sendFile(path.join(__dirname, '/index4proxy.html'));
     console.dir(req.path);
     if ( req.path != '/') sendTheCmd(req.path); 

});


app.listen(2020, () => {
    console.log('server is listening on port 2020');
});


function sendTheCmd (cmd){
       fetch(aFetchStr+cmd, {
    method: 'PUT',
    body: '{}',
    payload: '{}',
    headers: { 'Content-Type': 'application/json' , 'BOND-Token': theToken}
}).then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
  
  }
  
  
