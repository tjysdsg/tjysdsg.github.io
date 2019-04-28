---
title: Math Notes
layout: post
author: TJYSDSG
---

# Vector
---

## Scalar Projection
\\[ = |\mathbf {a} |\cos \theta \\]

## Vector Projection
\\[ = |\mathbf{a} |\cos\theta \\]
\\[ = (|\mathbf{a} |\cos\theta )\frac{\mathbf{b}}{|\mathbf{b}|} \\]

## Unit Tangent Vector, Unit Normal Vector And Binormal Vector
![13-3-6](/images/13-3-6.png)

Unit Tangent Vector: 
\\[ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} \\]

Unit Normal Vector: 
\\[ \mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|} \\]

Binormal Vector: 
\\[ \mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t) \\]

## Normal Plane, Osculating Plane And Osculating Circle
The plane determined by the normal and binormal vectors N and B is called the
normal plane. It consists of all lines that are orthogonal to the
tangent vector $\mathbf{T}$. 

The plane determined by the vectors $\mathbf{T}$ and $\mathbf{N}$ is called
the osculating plane. It is the plane that comes closest to containing the part
of the curve. (For a plane curve, the osculating plane is simply the plane that
contains the curve.)

The osculating circle lies in the osculating plane has the same tangent of the
curve, lies on the concave side of the curve (toward which $\mathbf{N}$
points), and has radius $\rho = \frac{1}{\kappa}$ (the reciprocal of the
curvature). It is the circle that best describes how the curve behaves near a
point; it shares the same tangent, normal, and curvature at that point.

## Curvature
\\[ \kappa = \left| \frac{d\mathbf{T}}{ds} \right| \\] where $\mathbf{T} $ is
the unit tangent vector.

Also:
\\[ \kappa = \frac{|\mathbf{r}'(t) \times \mathbf{r}^{\prime\prime}(t)|}{|\mathbf{r}'(t)|^3} \\]

# Multivariable Calculus
---

## Limit
### Definition (on $\mathbb{R}^2$)
Let $f$ be a function of two variables whose domain $\mathbf{D}$ includes
points arbitrarily close to $(a,b)$. Then we say that the limit of $f(x,y)$ as
$(x,y)$ approaches $(a,b)$ is $L$ and we write 

\\[ \lim_{(x,y)\to (a,b)}f(x,y) = L \\]

if for every number $ \varepsilon > 0$ there is a corresponding number
$\delta>0$ such that if $(x,y)\in D$ and $0<\sqrt{(x-a)^2+(y-b)^2}<\delta$ then
$|f(x,y)-L|<\varepsilon$

If $f(x,y) \to L_1$ as $(x,y)\to(a,b)$ along a path $C_1$ and $f(x,y)\to L_2$ as
$(x,y)\to(a,b)$ along a path $C_2$, where $L_1\ne L_2$, then
$\lim_{(x,y)\to(a,b)}f(x,y)$ does
not exist.

### Continuity (on $\mathbb{R}^2$)
A function $f$ of two variables is called continuous at $(a,b)$ if
\\[ \lim_{(x,y)\to (a,b)}f(x,y) = f(a,b) \\]

If $f$ is continuous on $D$, $f$ is continuous at every point $(a,b)$ in $D$.

#### Facts
All polynomials and rational functions are continuous on $\mathbb{R}^2$.

### Definition (on $\mathbb{R}^n$)
If $f$ is defined on a subset $D$ of $\mathbb{R}^n$, then $lim_{\mathbf{x} \to
\mathbf{a}}f(\mathbf{x}) = L$ means that for every number $\varepsilon>0$ there is a
corresponding number $\delta > 0$ such that

if $x\in D$ and $0<|\mathbf{x} - \mathbf{a}|$ then $ |f(\mathbf{x}) - L |<\varepsilon$

### Continuity (on $\mathbb{R}^n$)
A function $f$ of $n$ variables is called continuous at $\mathbf{a}$ if
\\[ \lim_{\mathbf{x} \to \mathbf{a}}f(\mathbf{x}) = f(\mathbf{a}) \\]

## Clairaut's Theorem
Suppose $f$ is defined on a disk $D$ that contains the point $(a,b)$. If the
functions $f_{xy}$ and $f_{yx}$ are both continuous on $D$, then $f_{xy}(a,b) =
f_{yx}(a,b)$

Also, $f_{xyy} = f_{yxy} = f_{yyx}$

## Length of An Arc
### Length of An Arc Using Parametric Equations
\\[ L = \int_{a}^{b}|\mathbf{r}'(t)|dt \\]
