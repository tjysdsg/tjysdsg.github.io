---
title:  "Adding mathjax to jekyll"
date:   2021-05-29 15:31:00 +0800
permalink: /mathjax-jekyll
---

# Steps

## 1. Check for `_includes/head.html` file in your project

If you don't have `_includes/head.html` in your jekyll project, create one.

Be careful that it will override the `_includes/head.html` from the theme, so you should copy the content of it from the
original theme files.

For example, I'm using [minimal mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, so I downloaded the
content of [`_includes/head.html`](https://github.com/mmistakes/minimal-mistakes/blob/master/_includes/head.html).

## 2. Add mathjax

According to [the official doc](https://www.mathjax.org/#gettingstarted), mathjax can be enabled by adding a `<script>`
tag to the `<head>` tag in an html file.

So add the following content to the end of `_includes/head.html`

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

You can also configure mathjax settings like so:

```html
<script>
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$','$$'], ['\\[','\\]']]
    }
};

</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

I did this because I want to use `$` and `$$` to start and end an inline math block and a display math block.

# Test

I did the same step on this site, using the following code, I can test the rendering of the math symbols:

```
\\[ \alpha + \beta = \theta \\]
```

Looks like mathjax works correctly:

\\[ \alpha + \beta = \theta \\]
