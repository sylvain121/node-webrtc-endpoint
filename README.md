# node-webrtc-endpoint
h264 webrtc endpoint for nodejs

## install

```bash

npm install node-pion-webrtc --save

```

##usage

```js
const webrtc = require('node-pion-webrtc');
const localOffer = webrtc.init(sdpOffer,                    // browser sdp offer.
                               commandDataChannelCallback,  // function (msg: string)
                               controlDataChannelCallback,  // function (msg: string)
                               infoCallback                 // function (msg: string)
); 
                                         // Return the local offer to be send to browser

webrtc.writeFrame(h264Frame); // node buffer of H264 frame

```
