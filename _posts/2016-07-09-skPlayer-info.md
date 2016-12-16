---
layout: post
title: skPlayer (已支持拉取网易云音乐歌单)
excerpt: "一款超好看+极简的HTML5音乐播放器。"
categories: Plugin
tag: Plugin
comments: true
---

## 更新提醒！
由于2016/12/14服务器到期忘记续费，导致接口发生变化，烦请更新源文件以正常使用。  
竟然有同学想要捐助，在底部列出了捐助支付方式，有想支持接口服务器的，随意捐助数目。

## 前言
[![npm](https://img.shields.io/npm/v/skplayer.svg)]() [![npm](https://img.shields.io/npm/l/skplayer.svg?maxAge=2592000)]() [![npm](https://img.shields.io/npm/dt/skplayer.svg)]() [![npm](https://img.shields.io/badge/made%20by-Scott-orange.svg)]()  
a simple HTML5 music player  
一款基于HTML5的web音乐播放器  
其实主要原因是为了将博客以前使用的网易云音乐外链播放器换掉，结果不知不觉就有了自己的播放器，哈哈哈(2333)，详见右下角。  
old：  
<img src="{{ site.loading }}" data-src="/img/skPlayer/old.png" class="lazy"><br>
new：  
<img src="{{ site.loading }}" data-src="/img/skPlayer/new.png" class="lazy"><br>

## Demo
[在线预览](http://www.chengfeilong.com/skPlayer/)  
预览：  
![demo](http://o9vplcp9o.bkt.clouddn.com/demo.gif)  
多曲列表模式预览：  
![demo](http://o9vplcp9o.bkt.clouddn.com/demo_mutil.jpg)  
red主题预览：  
![demo](http://o9vplcp9o.bkt.clouddn.com/demo_red.jpg)

## 使用方法
方式1：NPM  

```bash
npm install skplayer
```

方式2：引入文件  

引入css文件： 

```html
<link rel="stylesheet" href="./dist/skPlayer.min.css">
```

写入播放器DOM：

```html
<div id="skPlayer"></div>
```

引入js文件：

```html
<script src="./dist/skPlayer.min.js"></script>
```

配置skPlayer对象：

```js
//无列表单曲模式
skPlayer({
    music:{
        src:'http://o9vplcp9o.bkt.clouddn.com/music.mp3',//音乐文件，必填
        name:'打呼',//歌曲名称，必填
        author:'潘玮柏&杨丞琳',//歌手，必填
        cover:'http://o9vplcp9o.bkt.clouddn.com/cover.jpg'//专辑封面，必填
    },
    //loop:true 是否单曲循环，选填
    //theme:'red' 切换red主题，选填
});
//有列表多曲模式
skPlayer({
    music:[
        {
            src:'http://o9vplcp9o.bkt.clouddn.com/Solitude.mp3',//音乐文件，必填
            name:'Solitude',//歌曲名称，必填
            author:'Re:plus',//歌手，必填
            cover:'http://o9vplcp9o.bkt.clouddn.com/Solitude_cover.jpg'//专辑封面，必填
        },
        {
            src:'http://o9vplcp9o.bkt.clouddn.com/CountingStars.mp3',
            name:'Counting Stars',
            author:'OneRepublic',
            cover:'http://o9vplcp9o.bkt.clouddn.com/CountingStars_cover.jpg'
        },
        {
            src:'http://o9vplcp9o.bkt.clouddn.com/music.mp3',
            name:'打呼',
            author:'潘玮柏&杨丞琳',
            cover:'http://o9vplcp9o.bkt.clouddn.com/cover.jpg'
        }
    ],
    //loop:true 是否单曲循环，选填
    //theme:'red' 切换red主题，选填
});
//获取网易云歌单模式
skPlayer({
    music:317921676 //歌单id(登陆网页版网易云音乐，进入歌单详情后，在url中可找到歌单id，例：'http://music.163.com/#/playlist?id=317921676'),
    theme:'red'
});
```

## 技术依赖
原生Javascript、CSS3、HTML5 DOM API、HTML5 AUDIO API

## TODO
* 滚动歌词
* 兼容移动端

## Github
[Github](https://github.com/wangpengfei15975/skPlayer)  
[![GitHub stars](https://img.shields.io/github/stars/wangpengfei15975/skPlayer.svg?style=social&label=Star)](https://github.com/wangpengfei15975/skPlayer)

## 捂脸
竟然有同学想给我捐助，鉴于服务器到期的事情不好意思了，这里列上捐助方式吧，有愿意捐助的朋友就当支持一下歌单拉取服务器。  
支付宝：<img src="{{ site.loading }}" data-src="/img/skPlayer/zfb.jpg" class="lazy">
微信：<img src="{{ site.loading }}" data-src="/img/skPlayer/wx.jpg" class="lazy">

## 最后
UI参考：[dribbble](https://dribbble.com/shots/1233843-Ui-Kit-Rainy-Season)
