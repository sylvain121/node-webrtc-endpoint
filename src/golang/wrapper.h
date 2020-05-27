
#ifdef __cplusplus
extern "C" {
#endif

typedef void (*functionPtr)(char*);
extern void register_callback(functionPtr cmd, functionPtr ctl, functionPtr log);

void command_callback(char * msg);
void control_callback(char * msg);
void logger_callback(char * msg);

#ifdef __cplusplus
}
#endif
