---
title: Calculus Notes
layout: post
author: TJYSDSG
---

# Single-Variable Calculus
---

## Scalar Projection
\\[ = |\mathbf {a} |\cos \theta \\]

## Vector Projection
\\[ = |\mathbf{a} |\cos\theta \\]
\\[ = (|\mathbf{a} |\cos\theta )\frac{\mathbf{b}}{|\mathbf{b}|} \\]

## Unit Tangent Vector, Unit Normal Vector and Binormal Vector
![13-3-6](/images/13-3-6.png)

Unit Tangent Vector: 
\\[ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} \\]

Unit Normal Vector: 
\\[ \mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|} \\]

Binormal Vector: 
\\[ \mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t) \\]

## Normal Plane, Osculating Plane and Osculating Circle
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

## Tangent Plane
Suppose $f$ has continuous partial derivatives. An equation of the tangent
plane to the surface $z=f(x,y)$ at the point $P(x_0,y_0,z_0)$ is
\\[ z-z_0 = f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0) \\]

## Tangent Planes to Level Surfaces
For a level surface $S$ which equation is $F(x(t),y(t),z(t))=k$, the tangent plane to $S$
at $P(x_0,y_0,z_0)$ is
\\[ F_x(x_0,y_0,z_0)(x-x_0) + F_y(x_0,y_0,z_0)(y-y_0) + F_z(x_0,y_0,z_0)(z-z_0) = 0 \\]
if $\nabla F(x_0,y_0,z_0) \ne \mathbf{0}$.

## Linear Approximation/Tangent Plane Approximation
\\[f(x,y) \approx L(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b) \\]

## Differentiability of $f(x,y)$
### Formal Definition
If $z=f(x,y)$, then $f$ is differentiable at $(a,b)$ if $\Delta z$ can be expressed in the
form
\\[ \Delta z = f_x(a,b)\Delta x + f_y(a,b)\Delta y + \varepsilon_1\Delta x + \varepsilon_2 \Delta y \\]
where $\varepsilon_1$ and $\varepsilon_2$ as $(\Delta x, \Delta y)\to (0,0)$.

### A Convenient **Sufficient** Condition
If the partial derivatives $f_x$ and $f_y$ exist near $(a,b)$ and are continuous at $(a,b)$,
then $f$ is differentiable at $(a,b)$.

## Differentials
For a differentiable function of two variables, $z=f(x,y)$, we define the
differentials $dx$ and $dy$ to be independent variables; that is, they can be
given any values. Then the differential $dz$, also called the total
differential, is defined by
\\[ dz = f_x(x,y)dx + f_y(x,y)dy = \frac{\partial z}{\partial x}dx +
\frac{\partial z}{\partial y}dy \\]

## The Chain Rule of Multivariable Function
Suppose that $u$ is a differentiable function
of the $n$ variables $x_1,x_2,\dots,x_n$ and each $x_j$ is a differentiable
function of the $m$ variables $t_1,t_2,\dots,t_m$. Then and
\\[ \frac{\partial u}{\partial t_i} = \frac{\partial u}{\partial x_1}
\frac{\partial x_1}{\partial t_i}+
\frac{\partial u}{\partial x_2}
\frac{\partial x_2}{\partial t_i}+
\dots +
\frac{\partial u}{\partial x_n}
\frac{\partial x_n}{\partial t_i}
\\]
for each $i = 1,2,\dots,m$.

## Implicit Differentiation of Multivariable Function
\\[ \frac{dy}{dx} = -\frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial y}}=
-\frac{F_x}{F_y} \\]

## Directional Derivative
### Definition
The directional derivative of $f$ at $(x_0,y_0)$ in the direction of a unit
vector $\mathbf{u}=\langle a,b\rangle$ is \\[ D_u f(x_0,y_0) =
\lim_{h\to0}\frac{f(x_0+ha,y_0+hb)-f(x_0,y_0)}{h} \\] if this limit exists.

### Theorem
If $f$ is a differentiable function of $x$ and $y$, then $f$ has a directional derivative in the
direction of any unit vector $\mathbf{u}=\langle a,b\rangle$ and
\\[ D_uf(x,y)=f_x(x,y)a + f_y(x,y)b \\]

Note: The directional derivative of a function is a **scalar**.

### The Gradient Vector
TODO

## Maximum and Minimum Values
### Theorem
If $f$ has a local maximum or minimum at $(a,b)$ and the first-order
partial derivatives of $f$ exist there, then $f_x(a, b) = 0$ and $f_y(a,b) = 0$.

### Critical Point
A point $(a,b)$ is called a critical point (or stationary point) of $f$ if
$f_x(a,b)=0$ and $f_y(a,b)=0$, or if one of these partial derivatives does
not exist.

### Second Derivatives Test
Suppose the second partial derivatives of $f$
are continuous on a disk with center $(a,b)$, and suppose that $f_x(a,b)=0$ and
$f_y(a,b)=0$ (that is, $(a,b)$ is a critical point of $f$). Let
\\[ D = D(a,b) = f_{xx}(a, b) f_{yy}(a,b) - [f_{xy}(a,b)]^2 \\]

1. If $D > 0$, and $f_{xx}(a,b)>0$, then $f(a, b)$ is a local minimum.
2. If $D > 0$, and $f_{xx}(a,b)<0$, then $f(a, b)$ is a local maximum.
3. If $D < 0$, then $f(a,b)$ is not a local maximum or minimum. In this case
   $(a,b)$ is called a saddle point of $f$.
4. If $D = 0$, the test gives no information: $f$ could have a local maximum or
   local minimum at $(a,b)$, or $(a,b)$ could be a saddle point.

### Absolute Maximum and Minimum Values
TODO

### Extreme Value Theorem for Functions of Two Variables
TODO

### Closed Interval Method
To find the absolute maximum and minimum values of a continuous function $f$ on
a closed, bounded set $D$:
1. Find the values of $f$ at the critical points of $f$ in $D$.
2. Find the extreme values of $f$ on the boundary of $D$.
3. The largest of the values from steps 1 and 2 is the absolute maximum value;
   the smallest of these values is the absolute minimum value.

## Method of Lagrange Multipliers
To find the maximum and minimum values of $f(x,y,z)$ subject to the constraint
$g(x,y,z) = k$ (assuming that these extreme values exist and $\nabla g \ne \mathbf{0}$
on the surface $g(x,y,z) = k$):

1. Find all values of $x$, $y$, $z$, and $\lambda$ such that
   \\[ \nabla f(x,y,z) = \lambda \nabla g(x,y,z) \\]
   and \\[ g(x,y,z) = k \\]
2. Evaluate $f$ at all the points $(x,y,z)$ that result from step 1. The
   largest of these values is the maximum value of $f$; the smallest is the
   minimum value of $f$.

## Double Integral and Iterated Integral Over A Rectangle
### Double integral of $f$ over the rectangle $R$
$ \iint\limits_{R}f(x,y)dA = \lim_{n,m\to\infty } \sum_{i=1}^n \sum_{j=1}^m
f(x_i^\*,y_j^\*)\Delta A $ the the limit exists.

$\sum_{i=1}^n \sum_{j=1}^m f(x_i^\*,y_j^\*)\Delta A$ is a Double Riemann Sum.

### Midpoint Rule for Double Integrals
\\[ \iint\limits_{R}f(x,y)dA \approx \sum_{i=1}^n \sum_{j=1}^m
f(\bar{x_i},\bar{y_j})\Delta A \\] where $\bar{x_i}$ is the midpoint of $[x_{i-1},x_i]$
and $\bar{y_i}$ is the midpoint of $[y_{i-1},y_i]$.

### Fubini's Theorem
If $f(x,y)$ is continuous on $R=[a,b]\times[c,d]$, then
\\[ \iint\limits_{R}f(x,y)dA =
\int_a^b \int_c^d f(x,y)dy dx =
\int_c^d \int_a^b f(x,y)dx dy
\\]

These integrals are called iterated integrals.

### Fact
If $f(x,y) = g(x)h(y)$ and we are integrating over the rectangle $R = [a,b]\times[c,d]$, then
\\[ \iint\limits_{R}f(x,y)dA = \iint\limits_{R} g(x)h(y) dA =
\left( \int_a^bg(x)dx \right)\left( \int_c^dh(y)dy \right) \\]

## Double Integral and Iterated Integral Over A General Region
If $F$ is integrable over $R$, then we define the double integral of $f$ over $D$ by
\\[ \iint\limits_{D}f(x,y)dA = \iint\limits_{R}F(x,y)dA \\]
where
$$ F(x,y)\begin{cases}
\displaystyle f(x,y) & \text{if } (x,y) \text{ is in } D \\\\
\displaystyle 0 & \text{if } (x,y) \text{ is in } R \text{ but not in } D \\\\
\end{cases} $$

### Type I Region
If $f$ is continuous on a type I region $D$ such that
\\[ D = \left\\{(x,y)| a \le x \le b, g_1(x) \le y \le g_2(x) \right\\} \\]
then \\[ \iint\limits_D f(x,y)dA = \int_a^b \int_{g_1(x)}^{g_2(x)}f(x,y) dy dx \\]

### Type II Region
If $f$ is continuous on a type II region $D$ such that
\\[ D = \left\\{ (x,y)|c \le y \le d, h_1(y) \le x \le h_2(y) \right\\} \\]
then \\[ \iint\limits_D f(x,y)dA = \int_c^d \int_{h_1(y)}^{h_2(y)}f(x,y) dx dy \\]

## Properties of Double Integrals
TODO

## Double Integrals in Polar Coordinates
TODO

## Surface Area
The area of the surface with equation $z = f(x,y)$, $(x,y) \in D$, where $f_x$ and $f_y$ are
continuous, is
\\[ A(S) = \iint\limits_D \sqrt{[f_x(x,y)]^2 + [f_y(x,y)]^2 + 1} dA \\]

## Triple Integral
TODO

### Triple Integrals in Cylindrical Coordinates
TODO
### Triple Integrals in Spherical Coordinates
TODO

## Vector Fields
A vector field $F$ is called a conservative vector field if it is the gradient
of some scalar function, that is, if there exists a function $f$ such that $F
=\nabla f$. In this situation $f$ is called a potential function for $F$.

## Line Integral
If $f$ is defined on a smooth curve $C$ given by $x=x(t), y=y(t)$ where $a \le t \le b$, then the
line integral of $f$ along $C$ is
\\[ \int_C f(x,y)ds = \lim_{n\to\infty}\sum_{i=1}^{n}f(x_i^\*,y_i^\*)\nabla s_i \\]
if the limit exists.

Also,
\\[ \int_C f(x,y)ds = \int_a^b f(x(t),y(t))\sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2}dt \\]

### Line integrals of $f$ along $c$ with respect to $x$ and $y$
\\[ \int_C f(x,y)dx = \int_a^b f(x(t),y(t))x'(t)dt \\]
\\[ \int_C f(x,y)dy = \int_a^b f(x(t),y(t))y'(t)dt \\]

It frequently happens that line integrals with respect to $x$ and $y$ occur
together. When this happens, it’s customary to abbreviate by writing
\\[ \int_CP(x,y)dx + \int_CQ(x,y)dy = \int_C P(x,y)dx + Q(x,y)dy \\]

### Parametrization of a line segment
\\[ \mathbf{r}(t) = (1-t)\mathbf{r}_0 + t\mathbf{r}_1 \\] where $0\le t\le 1$

## The Fundamental Theorem for Line Integrals
Let $C$ be a smooth curve given by the vector function $\mathbf{r}(t)$, $a \le
t \le b$. Let $f$ be a differentiable function of two or three variables whose
gradient vector $\nabla f$ is continuous on $C$. Then
\\[ \int_C \nabla f \cdot d\mathbf{r} = f(\mathbf{r}(b) - f(\mathbf{r}(a)) \\]

### Independence of path
$\int_C\mathbf{F}\cdot d\mathbf{r}$ is independent of path in $D$ if and only if
$\int_C\mathbf{F}\cdot d\mathbf{r} = 0$ for every closed path C in D.

### Theorem
Suppose $\mathbf{F}$ is a vector field that is continuous on an *open connected
region $D$*. If $\int_C\mathbf{F}\cdot d\mathbf{r}$ is independent of path in
$D$, then $\mathbf{F}$ is a conservative vector field on $D$; that is, there
exists a function $f$ such that $\nabla f = \mathbf{F}$.

Note: $D$ is open means that for every point $P$ in $D$ there is a disk with
center $P$ that lies entirely in $D$. (So $D$ doesn’t contain any of its
boundary points.) In addition, $D$ is connected means that any two points in
$D$ can be joined by a path that lies in $D$.

### Theorem
If $\mathbf{F}(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$ is a conservative
vector field, where $P$ and $Q$ have continuous first-order partial derivatives on
a domain $D$, then throughout $D$ we have
\\[ \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} \\]

![16-3-6](/images/16-3-6.png)

![16-3-7](/images/16-3-7.png)

### Theorem
Let $\mathbf{F} = P\mathbf{i} + Q\mathbf{j}$ be a vector field on an open
simply-connected region $D$. Suppose that $P$ and $Q$ have continuous first-order
partial derivatives and
\\[ \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} \\] throughout D

Then $\mathbf{F}$ is conservative.

## Green's Theorem
Let $C$ be a positively oriented, piecewise-smooth, simple closed curve in the
plane and let $D$ be the region bounded by $C$. If $P$ and $Q$ have continuous
partial derivatives on an open region that contains $D$, then
\\[ \int_C Pdx + Qdy = \iint\limits_D \left( \frac{\partial Q}{\partial x} -
\frac{\partial P}{\partial y} \right)dA \\]

Also,
\\[ \oint_C xdy = -\oint_Cydx = \frac{1}{2}\oint_Cxdy - ydx \\]

## Curl
If $\mathbf{F} = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$ is a vector field on
$\mathbb{R}^3$ and the partial derivatives of $P$, $Q$, and $R$ all exist, then the curl
of $\mathbf{F}$ is the vector field on $\mathbb{R}^3$ defined by
\\[ \text{curl }\mathbf{F} =
(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z})\mathbf{i}+
(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x})\mathbf{j}+
(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})\mathbf{k} =
\nabla \times \mathbf{F} \\]

where $\nabla = \mathbf{i}\frac{\partial}{\partial x}+
\frac{\partial}{\partial y}\mathbf{j}+
\frac{\partial}{\partial z}\mathbf{k}$

### Theorem
If $f$ is a function of three variables that has continuous second-order
partial derivatives, then 
\\[ \text{curl }(\nabla f) = \mathbf{0} \\]

### Theorem
If $\mathbf{F}$ is conservative, then
\\[ \text{curl }\mathbf{F} = \mathbf{0} \\]

### Theorem
If $\mathbf{F}$ is a vector field defined on all of $\mathbb{R}^3$ whostions
have continuous partial derivatives and $ \text{curl }\mathbf{F} = \mathbf{0} $,
then $\mathbf{F}$ is a conservative vector field.

## Divergence
If $\mathbf{F} = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$ is a vector field on
$\mathbb{R}^3$ and the partial derivatives of $P$, $Q$, and $R$ all exist, then
the divergence of $\mathbf{F}$ is the function of three variables defined by
\\[ \text{div }\mathbf{F} =
\frac{\partial P}{\partial x} +
\frac{\partial Q}{\partial y} +
\frac{\partial R}{\partial z} = \nabla \cdot \mathbf{F} \\]

where $\nabla = \mathbf{i}\frac{\partial}{\partial x}+
\frac{\partial}{\partial y}\mathbf{j}+
\frac{\partial}{\partial z}\mathbf{k}$

### Theorem
If $\mathbf{F}$ is a vector field on $\mathbb{R}^3$ and $P$, $Q$, and $R$ has
continuous second-order partial derivatives, then 
\\[ \text{div curl }\mathbf{F} = 0 \\]

## Vector Forms of Green's Theorem
\\[ \oint_C \mathbf{F}\cdot d\mathbf{r} = \iint\limits_D(\text{curl }\mathbf{F})\cdot\mathbf{k}dA \\]
\\[ \oint_C \mathbf{F}\cdot\mathbf{n} ds = \iint\limits_D\text{div }\mathbf{F}(x,y)dA \\]
where $\mathbf{n}$ is outward unit normal vector to $C$.



