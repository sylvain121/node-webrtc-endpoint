declare module 'node-webrtc-endpoint' {
    function init(offer: RTCSessionDescription): RTCSessionDescription;
    function writeFrame(buffer: Buffer);
}
