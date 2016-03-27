---
layout: post
title: 关于本站
excerpt: "这里主要是介绍一下本站存在的初衷，以及相关技术依赖"
categories: About&nbsp;this&nbsp;site
comments: true
---

## 前言
关于玩博客的历程就先不废话了，完全符合**阮一峰**的说法：

> 第一阶段，刚接触Blog，觉得很新鲜，试着选择一个免费空间来写。  
第二阶段，发现免费空间限制太多，就自己购买域名和空间，搭建独立博客。  
第三阶段，觉得独立博客的管理太麻烦，最好在保留控制权的前提下，让别人来管，自己只负责写文章。

## 正文
该博客基于**jekyll**框架搭建于github上。

博客介绍：  

- 响应式设计，pc\pad\phone上都有良好的表现  

- 简洁的页面布局，让访问者有更舒适的体验  

- 使用多说、disqus评论系统，在每篇博文下设置了评论功能  

- 使用百度分享，每篇博文下可以将你喜欢的博文进行分享转发  

- 使用网易云音乐外链，博客右下角可以打开播放器  

- 使用github外链，博客底部可以直接star该博客的repo  

- 部分icon使用字体图标：font-awesome、icon-font  

- 使用Image to asc2，将PhotoShop制作的个性签名绘制输出在控制台  

- 使用图片延迟加载，使用lazyload和unveil

***

博客整体的思路就是简洁和响应式，所以在页面结构和布局上十分的简单，也并没有使用过多的效果，才更能注重博文的质量。

整站使用的相关技术：  

- 博客框架：jekyll、markdown、liquid  

- 语言依赖：HTML、CSS、JAVASCRIPT  

- 库依赖：jQuery  

- CSS处理和后期维护：Sass  

- 版本控制：git  

- 字体图标：font-awesome、icon-font  

- 制作图标和绘制控制台签名：PhotoShop  

- 图片延迟加载：jquery.lazyload和jquery.unveil

***

博客的不足之处：

- 该博客非**spa(single page application)**，所以在播放音乐的时候页面跳转会中断播放

- 依赖于网易云音乐，可能会因为网络问题导致音乐无法播放的问题

- 依赖github外链，可能会因为网络问题导致页面底部star按钮加载失败

- 博主并未测试到所有移动端机型，可能在有的安卓设备上布局会坍塌，发生奇怪的问题

针对以上，博主准备在后期使用react+webpack的方式搭建一个spa(single page application)博客，解决音乐播放中断的问题，此举同时可以优化访问者的体验，使用虚拟dom和ajax做到整体无刷新和异步加载模块。至于部分安卓的样式问题待指出并解决。

***

博客的整体布局和样式其实是基于这张照片的灵感(2333)，博主本人作为一名小前端，对各种页面效果下至CSS3、Canvas，上至WebGL、Threejs都有所涉猎。但是无耐于在设计方面真的很差，尝试了不少的布局和特效，但是为什么自己设计的效果都看起来那么low，那么丑。最后还是在参考了诸多博客的设计之后才有了现在的整体样式。

可能看到这里有人已经按耐不住想要学习一番了，下面介绍一下如何制作一个这样的博客(免费，需要翻墙，绑定个性域名需要购买域名)：

首先在自己的PC上安装了git并学习git版本控制的相关内容，使用git Bash或者git GUI的方式皆可；其次要有HTML、CSS、JAVASCRIPT的基础，在对dom的操作上为了方便引入了jQuery库，在为了更好的操作CSS使用了Sass；其次要有一个属于自己的github账号，然后将所要展示的博客创建repo，并克隆到本地；接下来需要安装jekyll(需要翻墙)，这里就不偏离主题对它做详细介绍了，大家可以自行google教程，有卡主的地方可以直接在下方留言告知博主帮你解决；最后就是使用markdown和liquid编辑自己的博文上传生成博客了，欢迎大家fork我的[repo](https://github.com/wangpengfei15975/wangpengfei15975.github.io)作为对制作自己的博客的一个入门指引模板。

## 最后说几句
所见即所得，这就是本人的博客，欢迎大家来star或者fork我的[repo](https://github.com/wangpengfei15975/wangpengfei15975.github.io)皆可，成为我的follower也是极好的。

如果有任何问题或建议，可以给我[发邮件：me@chengfeilong.com](mailto:me@chengfeilong.com)或是直接在页面下留言，博主每天都及时的回复。
