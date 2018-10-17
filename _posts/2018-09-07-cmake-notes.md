---
title: CMake Notes
layout: post
author: TJYSDSG
---

### Basic Template

> cmake_minimum_required (VERSION 3.0)
> 
> project (\<your project name here\>)
> 
> include_directories ("${PROJECT_SOURCE_DIR}/include")
> 
> aux_source_directory(${PROJECT_SOURCE_DIR}/src SRCS)
> 
> add_executable(\<your project name here\> ${SRCS})
> 
> target_link_libraries(\<your project name here\> \<libraries you want to link\>)
> 
> set(\<variable\ \<value\>>
>

### Useful Examples
- set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

&emsp;This enable cmake to export informations about this project which can be utilized by other tools like cppcheck
