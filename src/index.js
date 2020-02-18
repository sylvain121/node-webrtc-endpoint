try {
  module.exports = require('../build/Release/webrtc.node');
} catch (err) {
  module.exports = require('../build/Debug/webrtc.node');
}
