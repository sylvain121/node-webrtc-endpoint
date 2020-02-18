default: build

compile-go:
	go build -buildmode=c-shared -o webrtc.so src/golang/webrtcEndpoint.go

build: compile-go
	npm run build
