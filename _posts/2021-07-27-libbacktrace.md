---
title:  "C/C++: printing stacktrace containing file name, function name, and line numbers using libbacktrace"
date:   2021-07-27 21:44:00 +0800
permalink: /libbacktrace
---

I needed a library for printing stack traces when developing [tan](https://github.com/tjysdsg/tan).
More specifically, the compiler and the runtime had to print the function names, source file names, and the line
numbers when an assertion failed or an error was raised.

<!--more-->

# Initial Solution

The library was initially implemented using [libunwind](https://www.nongnu.org/libunwind/docs.html).
The code was based on this awesome
[blog post](https://eli.thegreenplace.net/2015/programmatic-access-to-the-call-stack-in-c/)

But the problem was, **it couldn't show line numbers**.
The closest thing libunwind could provide was the program counter, like this:

```
main.cpp (main+0x14)
```

To achieve the goal, we need to somehow read the debug information stored in the binary file
and use it to calculate to convert the program counter into the line numbers in the source file.

As [suggested](https://stackoverflow.com/q/4636456/7730917) by some folks, I can use `addr2line` or `gdb` to
do that. However, **I didn't want to invoke an external program since they couldn't be integrated into the
`tan` runtime**.

Just as I was about to copy the source code of `addr2line` and wrap it into a library, I came across this [SO answer](https://stackoverflow.com/a/65773679/7730917).

# libbacktrace FTW

The SO answer said that libbacktrace could provide the functionalities I needed. After some digging, I decided to use
it and made [a simple wrapper](https://github.com/tjysdsg/tan/tree/master/src/backtrace) around it.

The final API is very simple
```C++
void init_back_trace(const char *filename);
void print_back_trace();
```

`init_back_trace` should be used at the beginning of the program. It is responsible for loading the debug information
of a binary (use `argv[0]` for the program itself) and it is quite an expensive routine.

`print_back_trace` prints the stack trace starting from the current frame to the furthest frame.

The [documentation](https://github.com/ianlancetaylor/libbacktrace/blob/master/backtrace.h) of the APIs is well written,
so I'm not copying and pasting them here.

For anyone that just wants to copy and paste my code (**note that this code only works on linux and has only been
tested using gcc and clang**):

```C++
#include <cxxabi.h>
#include <cstdio>
#include <cstdlib>
#include <backtrace.h>

extern "C" void init_back_trace(const char *filename);
extern "C" void print_back_trace();

void *__bt_state = nullptr;

int bt_callback(void *, uintptr_t, const char *filename, int lineno, const char *function) {
  /// demangle function name
  const char *func_name = function;
  int status;
  char *demangled = abi::__cxa_demangle(function, nullptr, nullptr, &status);
  if (status == 0) {
    func_name = demangled;
  }

  /// print
  printf("%s:%d in function %s\n", filename, lineno, func_name);
  return 0;
}

void bt_error_callback(void *, const char *msg, int errnum) {
  printf("Error %d occurred when getting the stacktrace: %s", errnum, msg);
}

void bt_error_callback_create(void *, const char *msg, int errnum) {
  printf("Error %d occurred when initializing the stacktrace: %s", errnum, msg);
}

void init_back_trace(const char *filename) {
  __bt_state = backtrace_create_state(filename, 0, bt_error_callback_create, nullptr);
}

void print_back_trace() {
  if (!__bt_state) { /// make sure init_back_trace() is called
    printf("Make sure init_back_trace() is called before calling print_stack_trace()\n");
    abort();
  }
  backtrace_full((backtrace_state *) __bt_state, 0, bt_callback, bt_error_callback, nullptr);
}
```
