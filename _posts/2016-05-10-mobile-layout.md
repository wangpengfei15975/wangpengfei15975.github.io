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
首先我们要知道什么是响应式布局，响应的意思就是根据外界因素的影响作出改变以适应。<br>
所以响应式的意思就是一个页面可以适应所有的设备，包括PC\PAD\PHONE各种情况，但是又因为设备跨度较大，我们不可能做到所有设备上的表现基本一致，那么我们就要通过
判断不同的设备从而设计不同的布局方式，对布局进行改变和取舍。<br>
通常响应式布局的特点是：百分比布局，文字流式，图片自适应，通过几个关键断点进行媒体查询区分设备类型来改变布局或者进行布局取舍。<br>
<hr>
接下来我就以本博客为例详细的介绍一下响应式布局：<br>
首先我将断点设置为`600px`和`992px`，将小于600px的设备理解为手机等移动设备，之间的理解为pad，大于992px的理解为PC设备。<br>
页面主要分为侧边栏和文章详情两个部分进行布局，所以页面结构也较为简单，利于很方便的进行响应式布局。<br>

* 在大于992px的屏幕下：  
左侧侧边栏设为宽度`25%`，右侧内容的宽度为`75%`，同时将文章内容等受宽度影响的元素设为流式布局，所以在大于992px的设备情况下，页面呈现方式基本相同。<br>
<img src="{{ site.loading }}" data-src="/img/viewport/6.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/7.jpg" class="lazy"><br>
页面效果：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/8.jpg" class="lazy"><br>
* 在小于992px且大于600px的屏幕下：  
由于屏幕过小，所以我们在这种情况下将左侧侧边栏移动到顶部，宽度设置为`100%`，同样的将右侧的内容宽度设置为`100%`，然后在页面滚动的情况下，我们将内容覆盖在信息之上。
<img src="{{ site.loading }}" data-src="/img/viewport/9.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/10.jpg" class="lazy"><br>
页面效果：<br>
(btw:由于屏幕高度不够，只显示了pad的75%，所以字显得很小，不要在意 ~ )<br>
<img src="{{ site.loading }}" data-src="/img/viewport/11.jpg" class="lazy"><br>
* 在小于600px的屏幕下：  
这个断点区间内我将他们理解为都是移动设备，但是我们并没有专门为PAD设计布局，所以PAD情况下基本就是PHONE的布局了(2333)，所以我们的布局基本按照上一个布局的逻辑，唯一有一点的就是隐藏掉了音乐播放器。<br>
<img src="{{ site.loading }}" data-src="/img/viewport/12.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/13.jpg" class="lazy"><br>
页面效果：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/14.jpg" class="lazy"><br>
<p style="color:red">总结一下：通过设置断点进行媒体查询区别设备类型，从页面设计之初就考虑到每一个模块在所以设备下的布局，通过百分比布局的方式进行页面控制和页面取舍，通过文字流式保证页面的良好显示。</p>

## 自适应布局