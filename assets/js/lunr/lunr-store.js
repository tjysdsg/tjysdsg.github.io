var store = [{
        "title": "Adding mathjax to jekyll",
        "excerpt":"Steps 1. Check for _includes/head.html file in your project If you don’t have _includes/head.html in your jekyll project, create one. Be careful that it will override the _includes/head.html from the theme, so you should copy the content of it from the original theme files. For example, I’m using minimal mistakes...","categories": [],
        "tags": [],
        "url": "/mathjax-jekyll",
        "teaser": null
      },{
        "title": "Understanding the Math Behind CTC",
        "excerpt":"In this post, I’m writing down my thought process of understanding the math behind Connectionist Temporal Classification (CTC) [1][2]. This article assumes that you understand the intuition behind CTC. Definitions Input and Output Sequences The input of a CTC network (an audio signal) is a sequence denoted as \\(\\boldsymbol{x} =...","categories": [],
        "tags": [],
        "url": "/ctc",
        "teaser": null
      },{
        "title": "C/C++: printing stacktrace containing file name, function name, and line numbers using libbacktrace",
        "excerpt":"I needed a library for printing stack traces when developing tan. More specifically, the compiler and the runtime had to print the function names, source file names, and the line numbers when an assertion failed or an error was raised. Initial Solution The library was initially implemented using libunwind. The...","categories": [],
        "tags": [],
        "url": "/libbacktrace",
        "teaser": null
      },{
        "title": "C++ Associative Containers in One Place",
        "excerpt":"This is not an original work. Most things on this page are summarized/copied from cppreference.com. The purpose of this post is to put concise language reference of these containers in one place for easier reading. I also pointed out some common functionality and properties among them to help you understand...","categories": [],
        "tags": [],
        "url": "/cpp-associative-containers",
        "teaser": null
      },{
        "title": "Machine Learning Notes",
        "excerpt":"Machine Learning review notes Fundamentals Overfitting/Underfitting Overfitting = a model fits too well against its training data, and it cannot perform accurately against unseen data, thus has high generalization error/out-of-sample error/risk Underfitting = a data model is unable to capture the relationship between the input and output variables accurately, generating...","categories": [],
        "tags": [],
        "url": "/ml-notes",
        "teaser": null
      },{
        "title": "Shit I Should've Remembered but Google'd Every Time",
        "excerpt":"Ah shit, here we go again. – Carl Johnson Connect to a SLURM node using SSH tunneling (and use jupyter) Using PSC as an example: ssh -t -t XXX@bridges2.psc.edu -L 7777:localhost:8888 ssh v001.ib.bridges2.psc.edu -L 8888:localhost:9999 This command forwards the port 9999 on v001 to the port 8888 on the login...","categories": [],
        "tags": [],
        "url": "/memo",
        "teaser": null
      }]
