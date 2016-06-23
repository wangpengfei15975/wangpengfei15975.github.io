---
layout: post
title: MutationObserver-DOM树变化监控器
excerpt: "MutationObserver-一个基于DOM4的DOM树变化监控API."
categories: Javascript
tag: Javascript
comments: true
image: {feature: "/img/MutationObserver/mirror.jpg"}
---

## 前言
关于这个API的起因是有一个前端朋友有一个监测DOM绑定属性的需求向我询问有没有可行性比较高的方式去自动监测，而不是自己手动通过`trigger`的方式去完成，热心助人的我就找到了这个API。  
`MutationObserver`是一个基于DOM4的DOM树变化监控API，什么是DOM树变化监控?  
简而言之就是DOM树发生了变化就可以监测的到，包括节点的增加删除，甚至行内样式的变化，标签属性值的变化。  
在特定的场景下，通过监控DOM树的变化，可以更有利于我们的开发。  
下边是MutationObserver的兼容性，只列出主流浏览器及版本：  
<img src="{{ site.loading }}" data-src="/img/MutationObserver/1.jpg" class="lazy">  

## 正文
那么我们要如何使用它呢？  
首先要通过`MutationObserver()`构造函数创建观察者对象，该函数接收一个参数用于DOM节点发生变化时回调使用的函数。  
即为：  

```js
MutationObserver(
  function callback
);
```

该对象中的回调函数在DOM节点发生变化时调用，调用时该函数可以返回两个参数，第一个参数是一个包含了多个对象的数组，第二个参数是该观察者对象本身。  
那么第一个参数中的多个对象又是什么呢？  
在每次DOM发生变化的时候，该节点可能同时会有多个动作，所以就相当于每个动作生成一个对象多个动作生成了多个对象即为一个对象数组。  
那为什么DOM发生变化的时候，该节点可能同时会有多个动作呢？  
做一个简单的比方，我们改变了一个节点的id属性，它在id改变的同时，由于它的css也是根据id来查找的，所以它现在找不到css了，即为css也发生了变化，变为浏览器默认的css了。  
下面对动作对象做一个介绍：  

| 属性          |   类型                | 描述                         |
|:------------- |:---------------------|:-----------------------------|
| type         | String | 如果是属性发生变化,则返回attributes.如果是一个CharacterData节点发生变化,则返回characterData,如果是目标节点的某个子节点发生了变化,则返回childList.             |
| target        | Node| 返回此次变化影响到的节点,具体返回那种节点类型是根据type值的不同而不同的. 如果type为attributes,则返回发生变化的属性节点所在的元素节点,如果type值为characterData,则返回发生变化的这个characterData节点.如果type为childList,则返回发生变化的子节点的父节点.             |
| addedNodes | NodeList              | 返回被添加的节点,或者为null.      |
| removedNodes | NodeList              | 返回被删除的节点,或者为null.      |
| previousSibling | Node              | 返回被添加或被删除的节点的前一个兄弟节点,或者为null.      |
| nextSibling | Node          | 返回被添加或被删除的节点的后一个兄弟节点,或者为null.   |
| attributeName | String           | 返回变更属性的本地名称,或者为null.   |
| attributeNamespace | String           | 返回变更属性的命名空间,或者为null.   |
| oldValue | String           | 根据type值的不同,返回的值也会不同.如果type为 attributes,则返回该属性变化之前的属性值.如果type为characterData,则返回该节点变化之前的文本数据.如果type为childList,则返回null.   |

<hr>
该对象又分别有三个实例方法：  

```js
observe(target,options); //通过options配置对象中的选项，监控target该Dom对象的变化。
disconnect(); //和observe()成对出现，停止对Dom的监控。
takeRecords(); //清空观察者对象队列，并返回。
```

其中`observe()`方法需要传入两个参数，其中第一个是DOM节点，第二个是观察者的配置对象。  
下面对配置对象介绍：  

| 属性          | 描述                |
|:--------------|:---------------------|
| childList         |如果需要观察目标节点的子节点(新增了某个子节点,或者移除了某个子节点),则设置为true.|
| attributes        |如果需要观察目标节点的属性节点(新增或删除了某个属性,以及某个属性的属性值发生了变化),则设置为true.|
| characterData |如果目标节点为characterData节点(一种抽象接口,具体可以为文本节点,注释节点,以及处理指令节点)时,也要观察该节点的文本内容是否发生变化,则设置为true.|
| subtree |除了目标节点,如果还需要观察目标节点的所有后代节点(观察目标节点所包含的整棵DOM树上的上述三种节点变化),则设置为true.|
| attributeOldValue |在attributes属性已经设为true的前提下,如果需要将发生变化的属性节点之前的属性值记录下来(记录到下面MutationRecord对象的oldValue属性中),则设置为true.|
| characterDataOldValue |在characterData属性已经设为true的前提下,如果需要将发生变化的characterData节点之前的文本内容记录下来(记录到下面MutationRecord对象的oldValue属性中),则设置为true.|
| attributeFilter |一个属性名数组(不需要指定命名空间),只有该数组中包含的属性名发生变化时才会被观察到,其他名称的属性发生变化后会被忽略.|

下面我们对它进行一个简单的使用： 
 
{% highlight js linenos %}
// 设置节点
var target = document.querySelector('body');
// 创建观察者对象
var observer = new MutationObserver(function(mutations,x) {
  mutations.forEach(function(mutation) {
    alert(mutation.type + ': ' + mutation.attributeName);
  });    
});
// 配置观察选项:
var config = { attributes: true, childList: true, characterData: true, subtree: true }
// 传入节点和观察选项
observer.observe(target, config);
{% endhighlight %}

其中我选择了`body`节点，然后设置了`subtree`配置属性为`true`，即为观察整个`body`下的所有节点。  
我主要想对DOM属性进行监测，所以在监测代码中通过弹窗输出了变化对象类型和变化属性名。  
下面我们就随便找一个页面来进行实验：  
首先在控制台中将我们的监测代码输入：  
<img src="{{ site.loading }}" data-src="/img/MutationObserver/2.jpg" class="lazy">  
然后我们选择任意一个`body`下的节点来进行测试，修改它的id为任意值：  
<img src="{{ site.loading }}" data-src="/img/MutationObserver/3.jpg" class="lazy">  
<img src="{{ site.loading }}" data-src="/img/MutationObserver/4.jpg" class="lazy">  
然后我们看到弹窗输出我们修改的是属性，并且该属性是'id'：  
<img src="{{ site.loading }}" data-src="/img/MutationObserver/5.jpg" class="lazy">  
下面我们再修改它的`css`，因为在`chrome`下直接写在`element.style`下的`css`是直接写成行内样式写入到DOM当中的，也就相当于给节点增加了`style`的属性，那么我们就根据这个思路试一下：  
<img src="{{ site.loading }}" data-src="/img/MutationObserver/6.jpg" class="lazy">  
然后我们看到弹窗输出我们修改的是属性，并且该属性是'style'：  
<img src="{{ site.loading }}" data-src="/img/MutationObserver/7.jpg" class="lazy">  
~~其实我真的不是因为很久没写博客感到愧疚才写的(2333)。~~