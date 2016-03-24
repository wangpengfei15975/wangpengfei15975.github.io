---
layout: post
title: 移动端web调试方法集合
excerpt: "移动端web总有那么多坑要去踩，这里将告诉大家如何在移动设备上调试web页面"
categories: WebApp
tag: 移动端
comments: true
---

## 前言
随着社会发展的节奏越来越快，人们使用移动设备的时间也愈发多过使用pc，随之兴起的自然是ios和android不言而喻，同时大热的还有`Web App`和`Hybrid App`。
因此作为一名前端，学会开发移动设备上的web迫在眉睫，但是同时在ios和android两种系统和多种浏览器、多个版本的系统上等等运行环境千差万别，总有大大小小的坑。
此时就需要我们可以快速的定位问题、解决问题，这就是这篇博文的出发点，我将分初级、中级、高级、终极四个级别的调试方式依次为不同水平的Fer提供指引。

## 初级-Chrome
这里我们主要带大家了解最基本的移动端web调试手段，最基本的方法即是可以非常简单快速上手的方式，同时的代价是在此手段下页面的真实显示效果有一定的偏差。
尽管如此，它亦是大多数人用来开发的常用手段。  

使用Chrome打开一个页面并按下F12，然后点击开发者界面左上角的移动设备按钮：  
<img src="{{ site.loading }}" data-src="/img/webapp/1.png" class="lazy">

下图中红框的部分主要用来设置模拟移动设备的尺寸和横屏竖屏的效果，省略号那里主要用来查看设备的dpr(`device pixel ratio`),以及媒体查询范围和刻度尺，还有设置网络，可以说是功能比较齐全了。  
<img src="{{ site.loading }}" data-src="/img/webapp/2.png" class="lazy">

## 中级-wamp
`wamp`它集成了运行一个可以访问的项目所必备的所有条件，对一些有需要在移动设备上调试web且不具备后端能力的同学，它可以让移动设备访问你的纯前端页面，从而让你在移动设备上查看自己的页面真实效果。  

首先我们需要下载并安装，然后在启动wamp之后，等待图标变为绿色，此时访问`http://localhost/`地址如果进入wamp的主页即说明一切顺利：  
<img src="{{ site.loading }}" data-src="/img/webapp/3.png" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/4.png" class="lazy">

然后我们在任务栏中找到`wamp`的图标，左键点击它在弹出的列表中找到`Apache`的选项，然后继续找到它的子选项`Alias directories`，点击添加一个别名路径：  
<img src="{{ site.loading }}" data-src="/img/webapp/5.png" class="lazy">

在弹窗的窗口中：首先我们输入别名的名称，然后输入别名的路径，最后就设置好了一个别名，进入到`http://localhost/`下就能看到我们设置的别名了：  
<img src="{{ site.loading }}" data-src="/img/webapp/6.png" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/7.png" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/8.png" class="lazy">

此时我们进入别名就能看到此路径下的文件，我们将要调试的页面放在该路径之下，然后确定自己的ip，将地址中的`localhost`改为自己的ip：  
<img src="{{ site.loading }}" data-src="/img/webapp/9.png" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/10.png" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/11.png" class="lazy">

最后把我们要调试的设备和pc置于同一网络环境下，我使用的360wifi(2333)，此时在移动设备浏览器上输入该页面的路径就可以访问到页面了：  
<img src="{{ site.loading }}" data-src="/img/webapp/12.jpg" class="lazy">

如果觉得输入不方便的话，可以在chrome扩展程序中搜索`QR Code`并下载安装该插件，这样在想要访问的页面上可以直接点击它生成二维码然后直接用移动设备扫一扫快速访问：  
<img src="{{ site.loading }}" data-src="/img/webapp/13.png" class="lazy">

## 高级-fiddler
`fiddler`是一款功能十分强大的调试工具，它可以检查所有电脑与互联网之间的http通讯，我们将此功能用于把开启了`fiddler`的PC和移动设备进行代理的方式，从而可以对移动设备真实情况下的http请求一清二楚。
它还可以设置断点，分步调试我们的页面，从而一步步的分析问题查找问题。

首先我们要下载并安装`fiddler`，然后直接运行该程序。在程序运行的情况下，我们以微信为例：  

1. 首先移动设备要有网络  
2. 其次查到自己pc的ip，并将自己的pc设置为移动设备的代理服务器，这里我使用的是360wifi的方式(`要注意的是，fiddler的默认端口是8888`)  
<img src="{{ site.loading }}" data-src="/img/webapp/10.png" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/14.jpg" class="lazy">

3. 清除微信的缓存，然后在微信上随便访问一个链接，然后我们来到pc上运行的`fiddler`上就能看到这个链接中所运行的http请求，此时我们就可以选择指定类型的内容来进行查看：  
<img src="{{ site.loading }}" data-src="/img/webapp/15.jpg" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/16.jpg" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/17.png" class="lazy">

4. 过年期间很火的`微信红包照片`就被我这样一一逐个免费看了一遍(学以致用，2333)：  
<img src="{{ site.loading }}" data-src="/img/webapp/18.jpg" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/19.jpg" class="lazy">

## 终极-weinre
`weinre`是一款移动web调试工具，它的最大的优点是可以在移动设备上查看任意dom的结构和布局样式等等，*唯一美中不足的地方是需要在调试的页面中加入一段通信用的脚本*。  

首先我们需要安装`weinre`，由于我们需要使用`npm`的方式安装，所以我们前置条件还需要安装`node`：
我们通过如下方式安装`weinre`：  

```  
npm install -g weinre
```  
然后在命令行中启动`weinre`服务端：  

```  
weinre --httpPort 8080 --boundHost -all-
```  
接下来在Chrome下打开本地`localhost:8080`即可看到`weinre`的页面：  
<img src="{{ site.loading }}" data-src="/img/webapp/20.png" class="lazy">

然后在准备要调试的页面中加入通信脚本：  

```  
<script src="http://+这里放本地ip:刚刚我们启动服务的端口(8080)+/target/target-script-min.js#anonymous"></script>  
```  

然后我们点击页面中的此项进入调试界面：  
<img src="{{ site.loading }}" data-src="/img/webapp/21.png" class="lazy">

在打开调试界面的情况下，我们用移动设备访问要调试的页面，调试界面中会呈现绿色选项，点击`elements`进入就是我们要的最终调试界面：  
<img src="{{ site.loading }}" data-src="/img/webapp/22.png" class="lazy">

在调试界面中我们将鼠标移动到指定dom节点上，移动设备上就会自动将布局呈现出来，这时我们就可以去更清晰的分析那些移动设备奇怪的布局问题：  
<img src="{{ site.loading }}" data-src="/img/webapp/23.png" class="lazy">
<img src="{{ site.loading }}" data-src="/img/webapp/24.png" class="lazy">