---
layout: post
title: 浅谈viewport、响应式、自适应布局
excerpt: "本文将从viewport入手，详细介绍如何实现响应式和自适应布局，以及目前主流的几种移动端布局适配方式。"
categories: Css
tag: Css
comments: true
---

## 前言
本文将从viewport入手，详细介绍如何实现响应式和自适应布局，以及目前主流的几种移动端布局适配方式。

## viewport
我们最直观的接触到这个东西是有这样一个标签的出现：

```html
<meta name="viewport" content="width=device-width, user-scalable=0">
```

这个`meta`标签的name叫做`viewport`，那么这个标签到底是做什么的呢？我们可以先从它的字面意思入手：

> viewport	英[ˈvju:pɔ:t]  美[ˈvju:pɔ:rt]<br>
  n.	视口;<br>
  [网络]	视图; 视窗; 视区;<br>
  [例句]The upper-left corner of the viewport to set or retrieve.<br>
        要设置或检索的视区的左上角。<br>

上边列出了对该词简单的翻译，那么什么是视窗？<br>
我想已经很明显了，就是我们眼睛所看到的窗口，在浏览器中它就是我们眼睛获取信息的那部分窗口。<br>
不同浏览器上viewport都有一个默认值，即为该浏览器想要向我们展示信息的窗口大小。<br>
而且，我们可以通过手动的方式获取到这个默认值：

```javascript
console.log(document.documentElement.clientWidth);
```

在布局上不论PC还是Mobile，对我们影响最大的就是浏览器窗口宽度，所以我们只使用其中获取viewport宽度的方法为己用。<br>
在PC浏览器下，它默认就是获取到浏览器窗口的宽度；<br>
但是在移动端浏览器下，如果我们没有设置viewport的情况下，一般浏览器默认该值为`980`。<br>
如下：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/1.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/2.jpg" class="lazy"><br>
此时我们来找一个设置过了viewport的页面为例：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/3.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/4.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/5.jpg" class="lazy"><br>
到这里，我们就能明白有时候一些PC页面在移动端设备中打开，会显示的特别小，字根本看不清，本身PC页面并没有对移动端设备适配是一个原因，
其次因为大多数移动端设备默认的视窗宽度为980，它在PC页面的基础上将适配到980的宽度，但是实际中手机的宽度却有414,375,320等等各有不同，因此不但字显示的很小，还会出现横向滚动条。<br>
到这里，我们对`viewport`有了一个简单的了解，接下来我们对它的每个属性进行详细的了解。<br>

| 属性          | 可选值                | 描述                         |
|:------------- |:--------------------:|:-----------------------------|
| width         | device-width/指定数字 | 设置viewport宽度             |
| height        | device-height/指定数字| 设置viewport高度             |
| initial-scale | 指定数字              | 设置viewport初始缩放比例      |
| minimum-scale | 指定数字              | 设置viewport最小缩放比例      |
| maximum-scale | 指定数字              | 设置viewport最大缩放比例      |
| user-scalable | yes/no/1/0           | 设置viewport是否允许用户缩放   |

接下来详细讲解每个属性的用法：

* 将视窗设置为浏览器宽度,下边两种方法都可以实现：

```html
<meta name="viewport" content="width=device-width">
```
```html
<meta name="viewport" content="initial-scale=1">
```

* 只设置视窗宽度，不设置缩放相关的属性，此时页面会自动缩放到手机宽度，有一种简单的移动端布局基于此方法：

```html
<meta name="viewport" content="width=640,user-scalable=no">
```

* 同时设置好最大和最小缩放为1等效于设置了禁止用户缩放属性：

```html
<meta name="viewport" content="minimum-scale=1.0,maximum-scale=1.0">
```
```html
<meta name="viewport" content="user-scalable=no">
```

* 最常用的移动端布局视窗设置：

```html
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
```

## 响应式布局
