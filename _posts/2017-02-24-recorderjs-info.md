---
layout: post
title: Recorder.js
excerpt: "一款基于纯HTML5的录音功能解决方案。"
categories: Plugin
tag: Plugin
comments: true
---

## 前言
完全依赖H5原生API实现的录音功能，并且在录音过程中实时将音频编码为mp3格式输出。  
主要方式是通过封装`getUserMedia()`方法获取音频流，通过`AudioContext`对象处理音频流，同时通过`Worker`对象开启多线程进行mp3编码，最后再利用`Video/Audio API`配合`Blob`文件格式通过`URL`对象生成可播放的url进行试听以及上传需要。  
## 传送门
Demo：[Demo](https://wangpengfei15974.github.io/recorder.js)  
Github：[Github](https://github.com/wangpengfei15975/recorder.js)  
<iframe frameborder="0" scrolling="0" width="91px" height="20px" src="https://ghbtns.com/github-btn.html?user=wangpengfei15975&repo=recorder.js&type=star&count=true"></iframe>  
## 兼容性
Chrome、FF、Edge、QQ、360(注：目前IE和Safari全版本不兼容)  
其中Chrome47以上以及QQ浏览器强制要求HTTPS的支持  
请尝试使用FF、Edge、360等浏览器进行体验，或将项目下载到本地通过localhost的方式  
## 使用方式

```js
var recorder = new Recorder({
    sampleRate: 44100, //采样频率，默认为44100Hz(标准MP3采样率)
    bitRate: 128, //比特率，默认为128kbps(标准MP3质量)
    success: function(){ //成功回调函数
    },
    error: function(msg){ //失败回调函数
    },
    fix: function(msg){ //不支持H5录音回调函数
    }
});
```

## API

```js
//开始录音
recorder.start();
//停止录音
recorder.stop();
//获取MP3编码的Blob格式音频文件
recorder.getBlob(function(blob){ //获取成功回调函数，blob即为音频文件
//  ...
},function(msg){ //获取失败回调函数，msg为错误信息
//  ...
});
```
