---
title: Python/pip/conda Notes
layout: post
author: TJYSDSG
---

# Uninstalling package that is installed by `python setup.py install`
Unfortunately, there is no "vanilla" way to uninstall. However, it is still quite easy to do that in two lines of command:

First, save the files lists
```
python setup.py install --record files.txt
```
Then, simply rm -rf them
```
cat files.txt | xargs rm -rf
```

# Managing conda environments
## Creating a virtual environment
```
conda create -n <myenvname> python=3.7 anaconda
```

## Install some Python packages to a virtual environment
```
conda install -n <myenvname> <packagename>
```

## Delete a environment
```
conda remove -n <myenvname> -all
```

# Sorting a numpy array `a` in descending order
## Sort in place
```
a[::-1].sort()
```
## Create a new array
```
np.sort(a)[::-1]
```

# Formatting strings
## `%`-formatting
```
>>> name = "Eric"
>>> "Hello, %s." % name
'Hello, Eric.'
```

or

```
>>> name = "Eric"
>>> age = 74
>>> "Hello, %s. You are %s." % (name, age)
'Hello Eric. You are 74.'
```

## `str.format()`
```
>>> "Hello, {}. You are {}.".format(name, age)
'Hello, Eric. You are 74.'
```

or

```
>>> "Hello, {1}. You are {0}.".format(age, name)
'Hello, Eric. You are 74.'
```

## f-Strings
```
>>> name = "Eric"
>>> age = 74
>>> f"Hello, {name}. You are {age}."
'Hello, Eric. You are 74.'
```

or

```
>>> F"Hello, {name}. You are {age}."
'Hello, Eric. You are 74.'
```

or

```
>>> name = "Eric"
>>> profession = "comedian"
>>> affiliation = "Monty Python"
>>> message = (
...     f"Hi {name}. "
...     f"You are a {profession}. "
...     f"You were in {affiliation}."
... )
>>> message
'Hi Eric. You are a comedian. You were in Monty Python.'
```

# Find current directory and file's directory


To get the full path to the directory a Python file is contained in, write this in that file:
```
import os
dir_path = os.path.dirname(os.path.realpath(__file__))
```
To get the current working directory:
```
import os
cwd = os.getcwd()
```

# References
[Conda Documentation](https://conda.io/docs/index.html)
[Real Python](https://realpython.com/python-f-strings/)
