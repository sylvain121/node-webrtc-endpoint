declare module 'node-pion-webrtc' {
    function init(offer: RTCSessionDescription, commandCallback: Function, controlCallback: Function, infoCallback: Function): RTCSessionDescription;
    function writeFrame(buffer: Buffer);
}
