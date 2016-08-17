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
那么什么是自适应布局呢?它不同于响应式布局那种一个页面适应所有设备的方式，自适应布局只专注实现移动端的布局，旨在实现所有移动端设备的实现效果完全一样，这点与响应式布局有很大的不同。
通常我们利用`viewport`,`dpr`,`rem`等方式来进行开发，它也是webApp的布局实现最为主流的方式。<br>
本部分将着重介绍自适应布局的相关方法，主要是简单的移动端活动页面布局和webApp的复杂布局的实现。<br>

* 首先为大家介绍第一种上手最快也是最方便的方法，这种方法是利用`viewport`的特性进行布局，但是这种方法有很大的弊端，只能做一些时间比较赶的活动专题页面，且页面布局要求较为简单，因为这种方式
是利用viewport的自动缩放来实现，在通过这种方式实现的布局经常会使页面有很明显的失真问题，不适用于较为复杂的布局。<br>
首先我来为大家讲解这种布局利用的viewport的特性：<br>
在`viewport`模块我提到过：只设置视窗宽度，不设置缩放相关的属性，此时页面会自动缩放到手机宽度，有一种简单的移动端布局基于此方法。<br>
那我们为什么不试试将`viewport`的宽度设置为设计稿宽度，然后不设置缩放相关的属性，但是要设置用户禁止缩放，这样我们不就可以利用`viewport`的特性完全按照设计稿的数据进行开发了吗?<br>
循着这条思路我们就往下走，首先根据设计稿的宽度设置好`viewport`，我以设计稿宽度为`640`为例：<br>

```html
<meta name="viewport" content="width=640(设计稿宽度), user-scalable=no">
```

然后我们在此基础上，跟着思路尝试利用640的设计稿完全按照`px为单位`的布局进行开发：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/15.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/16.jpg" class="lazy"><br>
当写了一部分布局之后我们可以惊奇地发现，页面竟然真的可以自适应，并且布局也没有什么问题。<br>
<!--[demo:易订货移动端官网](http://m.dinghuo123.com/)-->
~~demo:易订货移动端官网~~(给之前公司使用的px布局方式的主页人家已经换成使用rem的方式了。。)
我另外上一个自己最近写的px布局的页面吧，上边的截图由于时间关系就不换了。  
[demo:决战沙城官方下载页](http://download.shengli.com/www/tljzsc/zht6.html)

* 第二种方式与第一种完全不同，它将`viewport`设为设备宽度，然后根据设计稿宽度为基础设置好页面的`html根字体大小`，从而利用`rem`单位把控页面进行开发。<br>
但是有一点要注意的是：<br>
关于文字大小，我们通常不用rem，因为由于不同的rem计算方式会产生很多奇怪的大小，使得文字出现糊掉或者模糊的情况，通常我们使用媒体查询事先设置好body的字体大小，这样来确保文字的正常显示。<br>
即为：`rem`处理适配距离的问题，`em`处理文字大小的问题。<br>
首先设置好`viewport`：<br>

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

然后利用之前`viewport`模块提到的方式获取设备宽度，在页面加载之初设置好页面的html根字体大小，我们以设计稿宽度为`750`为例：<br>

```javascript
var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/7.5(设计稿宽度缩小100倍，为了后期方便测量和使用) + 'px';
```

接下来我们以网易移动端为例，在`iphone6plus`下它将`html根字体大小`设置为`55.2px`，设置了`dpr=1`应该是对dpr没有任何的考虑，然后随便找一处页面中的内容查看元素：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/17.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/18.jpg" class="lazy"><br>
为什么`html根字体大小`设置为`55.2px`呢?我们可以通过`clientWidth`除以这个值就能明白：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/21.jpg" class="lazy"><br>
已经可以看出网易就是用的这一套移动端布局方式，那么它的距离应该也是拿`rem`进行把控的，我们随便找一个元素内容往下看：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/19.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/20.jpg" class="lazy"><br>
我们选取了其中一个元素的右侧边距为例，这里右边距为`.2rem`，这个值到底是怎么来的呢?跟着我的思路往下看：

```javascript
var width = document.documentElement.clientWidth;实际页面宽度
1rem = 55.2px = width/7.5 = width/(750/100);那么.2rem = 0.2rem = 20*width/750
我们将设计稿上此处的距离设置为?px，就有一个很简单的初中等式
width(页面实际宽度)/750(设计稿宽度) = 0.2rem(某个元素实际距离，转换成rem单位)/?px(设计稿实际距离);将0.2rem的换算结果代入可得：
width / 750 = 20 * width / (750 * ?);
可以逆推出? = 20px，根据这种布局方式，实际设计稿中的距离除以100的值作为实际的大小并冠以rem单位，就是实现适配的效果。
```

[demo:手机网易网](http://3g.163.com/touch/all?version=v_standard)

* 第三种方式，也是我现在在用的一种方式，其实本质上跟第二种方式基本相同，还是通过`viewport`控制`rem`的方式：<br>
即为遵循该等式：<br>

```javascript
var width = document.documentElement.clientWidth;
width / 设计稿宽度 = rem / px
```

然后我将`rem`设置为：<br>

```javascript
var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width / 640(设计稿宽度) * 40(任意值) + 'px';
```

```css
/* px to rem */
@function rem($num){
  @return ($num/40)*1rem;
}
body{
  font-family:"Microsoft Yahei";
  width:rem(640);
}
```

这里是使用了sass的方式，定义了一个函数进行不规律数字的转换，从而也实现了px2rem。<br>
可能有人会问，为什么要乘以一个值呢？，因为`width/设计稿宽度`总是一个小于1的值，我们要按一定的比例放大然后才能作为根的字体大小，只不过不同的公司或许有不同的放大倍数。<br>
[demo:倚天屠龙记手游官网](http://yt.shengli.com/)


* 第四种方式，淘宝突破天际的完美方式，还是基于这种布局方式，不过考虑到了`dpr`，然后放大缩小设计稿的方式进行适配使不同的`dpr`设备都有最优的体验<br>
<img src="{{ site.loading }}" data-src="/img/viewport/22.jpg" class="lazy"><br>
<img src="{{ site.loading }}" data-src="/img/viewport/23.jpg" class="lazy"><br>
在`iphone6plus`设备下，我们看到`html根字体`为`124.2px`这么一个奇葩的数字，而且还有一个`data-dpr=3`，到底是什么意思呢？跟我的思路往下看：<br>
因为`iphone6plus`的`dpr`为3，所以相当于一个像素的大小可以显示三个像素的内容那么清晰，主要还是因为屏幕等硬件的原因，分辨率太高，那么我们就要考虑到高分辨率的体验：<br>
`iphone6plus`的屏幕宽度为`414px`，然后乘以`dpr`即为：414 * 3 = 1242，有没有感到这个数字很亲切，刚好是`html根字体`大小的十倍。<br>
其实淘宝的内部运作是，为了考虑`iphone6plus`专门将设计稿放大到`1242`这种高分屏情况，然后继续开发，待开发完成后再根据`dpr`判断进行设置`viewport`的缩放值：<br>
<img src="{{ site.loading }}" data-src="/img/viewport/25.jpg" class="lazy"><br>
由于是`dpr=3`，所以这里页面先写成`1242px`的宽度，然后缩小到原先的1/3，即为`iphone6plus`的屏幕宽度为`414px`，从而实现高分辨率的页面布局。<br>
在这里，`viewport`并没有设置宽度，说明淘宝只是用它设置了缩放的比例，同时我们也可以看一下这个页面的`clientWidth`是多少，也能说明完全吻合我上面所说的布局方式，相当的诡异 。。 <br>
<img src="{{ site.loading }}" data-src="/img/viewport/24.jpg" class="lazy"><br>
[demo:淘宝网触屏版](https://m.taobao.com/#index)