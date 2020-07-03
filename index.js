const webrtc = require('./src');





module.exports.init = function(offer, commandCallback, controlCallback, infoCallback) {
    const base64encodedOffer = new Buffer(JSON.stringify(offer)).toString('base64');
    if(!offer) {
        throw new Error("missing distant RTCSessionDescription");
    }
    if(!commandCallback)  {
        throw new Error("missing command callback");
    }
    if(!controlCallback) {
        throw new Error("missing control callback");
    }
    if(!infoCallback) {
        throw new Error("missing info callback");
    }
    const localOffer = webrtc.__native_init(base64encodedOffer,commandCallback, controlCallback, infoCallback);
    return JSON.parse(new Buffer(localOffer, 'base64').toString());
};

module.exports.writeFrame = function(buffer) {
    webrtc.__native_write_frame(buffer, buffer.length);
};

module.exports.sendCursor = function(data) {
    webrtc.__native_send_cursor(data);
}
