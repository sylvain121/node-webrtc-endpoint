#include "wrapper.h"
#include <stdio.h>

functionPtr command;
functionPtr control;
functionPtr logger;

extern void register_callback(functionPtr cmd, functionPtr ctl, functionPtr log) {
	command = cmd;
	control = ctl;
	logger = log;
}

void command_callback(char * msg) {
	command(msg);
}

void control_callback(char * msg) {
	control(msg);
}

void logger_callback(char * msg) {
	logger(msg);
}
