---
title: Linux Notes
layout: post
author: TJYSDSG
---

# List files bigger than filesize specified

To find files larger than 100MB:

```
find . -type f -size +100M
```
To find files larger than 4096 bytes:

```
find . -type f -size +4096c
```
or in the current dir only:

```
find . -maxdepth 1 -type f -size +100M
```

# Copy things to clipboard in command line
#### Prerequisite
```
sudo apt install xclip
```

#### To copy *contents of a file or output of* some command to clipboard
```
cat ./myfile.txt|xclip -i
```

#### To copy data to the "clipboard" selection, so it can be pasted into an application with Ctrl-V
```
cat ./myfile.txt|xclip -i -selection clipboard
```

# Fix apt-get update “the following signatures couldn’t be verified because the public key is not available”
#### Problem
```
$ sudo apt update
Ign http://security.ubuntu.com trusty-security InRelease
Get:1 http://security.ubuntu.com trusty-security Release.gpg [933 B]
...
Fetched 21.9 MB in 14s (1,537 kB/s)
Reading package lists... Done
W: GPG error: http://security.ubuntu.com trusty-security Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 40976EAF437D05B5 NO_PUBKEY 3B4FE6ACC0B21F32
W: GPG error: http://archive.canonical.com trusty Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 40976EAF437D05B5 NO_PUBKEY 3B4FE6ACC0B21F32
W: GPG error: http://archive.ubuntu.com trusty Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 40976EAF437D05B5 NO_PUBKEY 3B4FE6ACC0B21F32
W: GPG error: http://archive.ubuntu.com trusty-updates Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 40976EAF437D05B5 NO_PUBKEY 3B4FE6ACC0B21F32
```
#### Solution
```
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 40976EAF437D05B5
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32
```
