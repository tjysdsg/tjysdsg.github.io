---
title: Math Notes
layout: post
author: TJYSDSG
---

# Vector

## Scalar Projection
$$ = |\mathbf {a} |\cos \theta $$

## Vector Projection
$$ = |\mathbf{a} |\cos\theta $$
$$ = (|\mathbf{a} |\cos\theta )\frac{\mathbf{b}}{|\mathbf{b}|} $$

## Unit Tangent Vector, Unit Normal Vector And Binormal Vector
![13-3-6](/images/13-3-6.png)

Unit Tangent Vector: 
\\( \mathbf{T}(t) = \frac{\mathbf{r}^{'}(t)}{|\mathbf{r}^{'}(t)|} \\)

Unit Normal Vector: 
\\( \mathbf{N}(t) = \frac{\mathbf{T}^{'}(t)}{|\mathbf{T}^{'}(t)|} \\)

Binormal Vector: 
\\( \mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t) \\)

## Normal Plane, Osculating Plane And Osculating Circle
The plane determined by the normal and binormal vectors N and B is called the
normal plane. It consists of all lines that are orthogonal to the
tangent vector $$\mathbf{T}$$. 

The plane determined by the vectors $$\mathbf{T}$$ and $$\mathbf{N}$$ is called
the osculating plane. It is the plane that comes closest to containing the part
of the curve. (For a plane curve, the osculating plane is simply the plane that
contains the curve.)

The osculating circle lies in the osculating plane has the same tangent of the
curve, lies on the concave side of the curve (toward which $$\mathbf{N}$$
points), and has radius $$\rho = \frac{1}{\kappa}$$ (the reciprocal of the
curvature). It is the circle that best describes how the curve behaves near a
point; it shares the same tangent, normal, and curvature at that point.

## Curvature
$$ \kappa = \left| \frac{d\mathbf{T}}{ds} \right| $$ where $$\mathbf{T} $$ is
the unit tangent vector.

Also:

$$ \kappa = \frac{|\mathbf{r}^{'}(t) \times \mathbf{r}^{''}(t)|}{|\mathbf{r}^{'}(t)|^3} $$

## Length of An Arc
### Length of An Arc Using Parametric Equations
$$ L = \int_{a}^{b}|\mathbf{r}^{'}(t)|dt $$
