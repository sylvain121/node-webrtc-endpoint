{
  "targets": [
    {
      "target_name": "webrtc",
      "sources": [ "src/webrtc.cc" ],
      "libraries": [ "<!(pwd)/webrtc.so" ],
      "include_dirs" : ["<!(node -e \"require('nan')\")"]
    }
  ]
}
