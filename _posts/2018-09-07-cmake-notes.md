---
title: CMake Notes
layout: post
author: TJYSDSG
---
# CMake Cheatsheet
## Basic Template
```
cmake_minimum_required(VERSION X.X)
project (<your project name here>)
add_executable(<your project name here> ${SRCS})
target_link_libraries(<your project name here> <libraries you want to link>)
aux_source_directory(${PROJECT_SOURCE_DIR}/src SRCS)
include_directories(${PROJECT_SOURCE_DIR}/include)

```



### Useful Commands 
```
set(<variable name> <value>)
# export compile commands can help applications like cppcheck to analyze your codes
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
# output x,y are variable names
# you can also directly write the text instead of using variables
message(${x}${y})
```

#### For-Loop
```
SET(x 3 2)
FOREACH(val${x})
MESSAGE(${val})
ENDFOREACH(val)
```

#### Set Output Directory
```
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)
```
Also:
```
set_target_properties(<target-name>
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin"
    )
```

### Details

All variable values are a text string. Text strings can be evaluated as boolean
expressions (e.g. when used in `IF()` and `WHILE()`). The values `FALSE`,
`OFF`, `NO`, or any string ending in `-NOTFOUND` evaluates be false and everything else to true.

Text strings can represent multiple values as a list by separating entities using
a semicolon.

```
SET(x 3 2 ) #x="3;2"
SET(y hello world !) # y = "hello;world;!"
SET(z "hello world !") # y = "hello;world;!"
```
