#include <nan.h>
#include "golang/webrtc.h"

using namespace Nan;
using namespace v8;

Callback *commandCallback;
Callback *controlCallback;
Callback *infoCallback;
char * info_callback_message;
char * command_callback_message;
char * control_callback_message;



uv_async_t asyncInfoInstance;
uv_async_t asyncControlInstance;
uv_async_t asyncCommandInstance;

uv_loop_t* loop = uv_default_loop();

void asyncInfoMsg(uv_async_t* handle) {
           Nan::HandleScope scope;
           Isolate* isolate = Isolate::GetCurrent();
			v8::Local<v8::Value> argv[] = {
				String::NewFromUtf8(isolate, info_callback_message)
			};
           infoCallback->Call(1, argv);
}

void asyncControlMsg(uv_async_t* handle) {
           Nan::HandleScope scope;
            Isolate* isolate = Isolate::GetCurrent();
			v8::Local<v8::Value> argv[] = {
				String::NewFromUtf8(isolate, control_callback_message)
			};

    controlCallback->Call(1, argv);
}

void asyncCommandMsg(uv_async_t* handle) {
           Nan::HandleScope scope;
            Isolate* isolate = Isolate::GetCurrent();
			v8::Local<v8::Value> argv[] = {
				String::NewFromUtf8(isolate, command_callback_message)
			};

            commandCallback->Call(1, argv);
}


const char* ToCString(const String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}
void command_callback_from_golang(char *msg) {
    command_callback_message = msg;
    uv_async_send(&asyncCommandInstance);
}

void control_callback_from_golang( char* msg) {
       control_callback_message = msg;
       uv_async_send(&asyncControlInstance);
}


void info_callback_from_golang( char* msg) {
       info_callback_message = msg;
       uv_async_send(&asyncInfoInstance);
}


NAN_METHOD(__native_init) {

  uv_async_init(loop, &asyncInfoInstance, asyncInfoMsg);
  uv_async_init(loop, &asyncControlInstance, asyncControlMsg);
  uv_async_init(loop, &asyncCommandInstance, asyncCommandMsg);

  Isolate* isolate = info.GetIsolate();
  String::Utf8Value str(isolate, info[0]);
  commandCallback  = new Nan::Callback(info[1].As<v8::Function>());
  controlCallback  = new Nan::Callback(info[2].As<v8::Function>());
  infoCallback  = new Nan::Callback(info[3].As<v8::Function>());
  register_callback(&command_callback_from_golang, &control_callback_from_golang, &info_callback_from_golang);

  const char* cstr = ToCString(str);
  char * charstr = const_cast<char *>(cstr);
  char* result = NewWebrtc(charstr);
  info.GetReturnValue().Set(String::NewFromUtf8(isolate, result));
}

 NAN_METHOD(__native_write_frame){
  unsigned char * buffer = (unsigned char *) node::Buffer::Data(info[0]->ToObject(Isolate::GetCurrent()));
  unsigned int size = info[1]->Uint32Value();
  submitFrame(buffer, size);
}

NAN_METHOD(__native_send_cursor) {
		Nan::Utf8String dstr(info[0]);
		sendCursor(*dstr);
}


NAN_MODULE_INIT(Init) {
  Nan::Set(target, New<String>("__native_init").ToLocalChecked(), GetFunction(New<FunctionTemplate>(__native_init)).ToLocalChecked());
  Nan::Set(target, New<String>("__native_write_frame").ToLocalChecked(), GetFunction(New<FunctionTemplate>(__native_write_frame)).ToLocalChecked());
  Nan::Set(target, New<String>("__native_send_cursor").ToLocalChecked(), GetFunction(New<FunctionTemplate>(__native_send_cursor)).ToLocalChecked());
}

NODE_MODULE(webrtc, Init)

