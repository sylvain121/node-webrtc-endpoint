#include <nan.h>
#include "../webrtc.h"

using namespace Nan;
using namespace v8;

const char* ToCString(const String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}

NAN_METHOD(__native_init) {
  Isolate* isolate = info.GetIsolate();
  String::Utf8Value str(info[0]);
  const char* cstr = ToCString(str);
  char * charstr = const_cast<char *>(cstr);
  char* result = NewWebrtc(charstr);
  info.GetReturnValue().Set(String::NewFromUtf8(isolate, result));
}

 NAN_METHOD(__native_write_frame){
  unsigned char * buffer = (unsigned char *) node::Buffer::Data(info[0]->ToObject());
  unsigned int size = info[1]->Uint32Value();
  submitFrame(buffer, size);
}


NAN_MODULE_INIT(Init) {
  Nan::Set(target, New<String>("__native_init").ToLocalChecked(), GetFunction(New<FunctionTemplate>(__native_init)).ToLocalChecked());
  Nan::Set(target, New<String>("__native_write_frame").ToLocalChecked(), GetFunction(New<FunctionTemplate>(__native_write_frame)).ToLocalChecked());
}

NODE_MODULE(webrtc, Init)

