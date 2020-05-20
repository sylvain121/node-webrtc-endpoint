declare module 'node-pion-webrtc' {
    function init(offer: RTCSessionDescription): RTCSessionDescription;
    function writeFrame(buffer: Buffer);
}
