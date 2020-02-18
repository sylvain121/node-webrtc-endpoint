const webrtc = require('./src');





module.exports.init = function(offer) {
    const base64encodedOffer = new Buffer(JSON.stringify(offer)).toString('base64');
    const localOffer = webrtc.__native_init(base64encodedOffer);
    return JSON.parse(new Buffer(localOffer, 'base64').toString());
};

module.exports.writeFrame = function(buffer) {
    webrtc.__native_write_frame(buffer, buffer.length);
};
