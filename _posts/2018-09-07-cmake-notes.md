---
title: CMake Notes
layout: post
author: TJYSDSG
---
# Basic Template
```
cmake_minimum_required(VERSION X.X)
project (<your project name here>)
set(CMAKE_CXX_STANDARD 11)

include_directories(${PROJECT_SOURCE_DIR}/include)
include_directories(<target name> PUBLIC ${PROJECT_SOURCE_DIR}/include)
aux_source_directory(${PROJECT_SOURCE_DIR}/src SRCS)

add_executable(<target name> ${SRCS})
target_link_libraries(<target name> <libraries you want to link>)

```

## For-Loop
```
SET(x 3 2)
FOREACH(val${x})
MESSAGE(${val})
ENDFOREACH(val)
```

## Set Output Directory
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

## Common-used Variables
```
set(CMAKE_BUILD_TYPE None|Debug|Release|RelWithDebInfo|MinSizeRel)

set(CMAKE_C_FLAGS|CMAKE_CXX_FLAGS "-Wall -Wextra")

# gdb flag can be set here:
set(CMAKE_C_FLAGS_DEBUG|CMAKE_CXX_FLAGS_DEBUG "-g")

# optimization flag can be set here:
set(CMAKE_C_FLAGS_RELEASE|CMAKE_CXX_FLAGS_RELEASE "-O3")
```

## Common-used Flags

Besides flags above, there are flags that might be useful:

`CMAKE_EXE_LINKER_FLAGS` - used by the linker when linking executables
`CMAKE_SHARED_LINKER_FLAGS` - used by linker when linking shared object libraries
`CMAKE_MODULE_LINKER_FLAGS` - used by linker when linking modules
`CMAKE_STATIC_LINKER_FLAGS` - used by linker when linking static object libraries
