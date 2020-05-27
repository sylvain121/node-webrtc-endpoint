{
  "targets": [
    {
      "target_name": "webrtc",
      "sources": [ "src/webrtc.cc" ],
      "libraries": [ "<!(pwd)/src/golang/webrtc.a" ],
      "include_dirs" : ["<!(node -e \"require('nan')\")"]
    }
  ]
}
