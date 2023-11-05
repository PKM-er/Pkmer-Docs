---
uid: 20231030145627
title: 为什么输入 annotator 的 yaml 模板时，会被解析成分割线或文档属性？
tags: [Obsidian, yaml, annotator]
description: Obsidian 更新到 1.4 后，如何插入 YAML
author: Huajin
type: other
draft: false
editable: false
modified: 20231104130511
---

# Obsidian 中为什么输入 annotator 的 yaml 模板时，会被解析成分割线或文档属性？

自从 obsidian 更新到 1.4 版本以后，原先的 YAML 区域就被渲染成了 `文档属性`，很多小白就不清楚如何在 YAML 中输入元数据了。比较常见的例子就是使用 Annotator 插件时输入要阅读的 pdf 或者 epub 的路径。

> [!note] Annotator 插件
> Annotator 插件可以让你在 obsidian 中阅读 pdf 和 epub 文件的同时插入笔记。

实际上，新版 ob 的文档属性区域就是原来的 YAML 区域，只不过加了一个渲染。下面提供三种输入元数据的方式

![Pasted image 20231030151122.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231030151122.png!pkmer)

## 方式一：放在文档属性中（也就是原先的 YAML）

原先我们写 YAML 的方式是在文档的开头写上

```
---
createDate: 2023-10-30
annotation-target: pdf 的路径
---
```

而现在，我们在文档的开头输入 `---` 时会被直接渲染成 `文档属性`（如果没出现说明你没有在文档最开头写），这个就是之前的 YAML 区域。我们只需要各自填上属性名和属性值即可。


上图中 `annotation-target` 的属性值是文件路径，不需要加引号，还可以是在线 pdf 的链接。

## 方式二：插入在文中（行内字段）

这种方式需要你安装了 dataview 插件，在文中任意位置写上

```
annotation-target:: 文件路径
```

文件路径替换成写你自己的文件路径

这种方法插入的字段也就是行内字段，行内字段可以用方括号、圆括号括起来，区别在于

- 如果==两端不加内容==：行内字段会识别一整行内容，也就是属性前的内容也被识别为属性名，属性值后的内容也被识别为属性值；
- 如果==两端加上方括号==：`[annotation-target:: 文件路径]` 那么识别范围被限定于方括号内，在阅读模式下背景会有所渲染；
- 如果==两端加上圆括号==：`(annotation-target:: 文件路径)` 那么识别范围被限定于圆括号内，在阅读模式下不显示属性名，只显示属性值；

## 方式三：关闭渲染成文档属性

打开**设置**，在**编辑器**的**显示**中找到**文档属性**，选择**源码**，重新打开要添加元数据的文件，手动输入 `---` 来插入
