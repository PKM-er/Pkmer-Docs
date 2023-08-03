---
uid: 20230803212140
title: Obsidian 插件：【Readme】Comments
tags: ['界面相关', '效率', '编辑器', 'obsidian插件', 'readme']
description: 给 Obsidian 添加注释
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Comments

> [!Note] 插件名片
> - 插件名称：Comments
> - 插件作者：darakah
> - 插件说明：给 Obsidian 添加注释
> - 插件分类：['界面相关', '效率', '编辑器', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Darakah/obsidian-comments-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-comments)

## 概述

给 Obsidian 添加注释

![Comments](https://cdn.pkmer.cn/covers/obsidian-comments.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darakah/obsidian-comments-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-comments]] 插件的自述翻译



I am sorry, but I am unable to translate the text as it is not provided. Could you please provide the text that you would like me to translate into Chinese?
# Obsidian评论插件
![GitHub发布](https://img.shields.io/github/v/release/Darakah/obsidian-comments-plugin)
![GitHub所有发布](https://img.shields.io/github/downloads/Darakah/obsidian-comments-plugin/total)

**_简要描述:_** Obsidian笔记的PDF评论

**_详细描述:_**
1. 在编辑模式下，添加一个用于选定文本的评论语法的命令
2. 在预览模式下，选定的文本将以特定的文本颜色和背景颜色进行高亮显示
3. 在预览模式下，单击高亮显示的文本将显示一个弹出窗口，其中包含与之相关的评论
4. 一个侧边栏，列出当前活动笔记的所有评论

使用方法

### 插入评论：
----

1. 选择要添加评论的文本
2. cmd/ctrl + p -> 'add comment' 命令 -> 输入
3. 选定的文本将被替换为以下内容：
```<label class="ob-comment" title="..." style="..."> 选定的文本 <input type="checkbox"> <span> 评论 </span></label>```
- 将添加评论绑定到热键（设置 -> 热键）可以加快使用速度，例如 cmd/ctrl + C

### 示例
----

![示例](https://raw.githubusercontent.com/Darakah/obsidian-comments-plugin/main/images/example_2.png)

**----> 旧视图但仍然有效的注释:**

![示例](https://raw.githubusercontent.com/Darakah/obsidian-comments-plugin/main/images/example_1.png)

### 评论属性
----
1. 标题（可选）：在评论旁边的侧边栏中显示的文本。如果未指定标题，则将使用默认占位符作为标题。可能的用例：
  - 指定此评论出现的文本行（如果您启用了编辑器模式行号），这在非常大的注释中非常有用，因为当前的侧边栏链接不会导致页面跳转到它 ;(
  - 问答 -> 问题可以作为标题，单击侧边栏中的问题将显示突出显示的文本（可以用于仅从侧边栏审查笔记的关键思想）
  - 用于记住评论原因的注释
2. 样式（可选）：如上例所示，由于它是简单的HTML语法样式，可以根据需要定义样式。请记住，有 !!! **2种样式** !!!，放置在```<label class="ob-comment" style="...">```内的样式将指定突出显示文本的样式，而```<input type="checkbox"> <span style="">```将指定评论弹出窗口的样式（此样式在侧边栏中也使用相同的方式）。
3. 评论部分：由于使用```<input type="checkbox"> <span>```来标识评论的内容，实际的评论可以包括更多的divs / spans / HTML元素来进一步自定义，它将正确地在行内和侧边栏中呈现。

### 评论功能区和评论面板：

#### 评论功能栏
默认情况下，会添加一个功能栏，点击后会打开侧边栏的评论列表。可以通过插件设置选项卡隐藏功能栏（在修改此选项后，需要卸载/重新加载插件才能生效！）

#### 评论面板
可以通过以下两种方式打开：
- 点击评论选项卡
- 使用命令“评论面板”

### 默认背景颜色和文本颜色
----
由于所有的内联高亮/弹出窗口都是使用css完成的，可以通过修改`obsidian-comments-plugin`文件夹中的`style.css`来自定义它们。要修改高亮文本的默认背景颜色/文本颜色：

```
.ob-comment {
  color: #8f0303;
  background-color: #CCA300;
}
```
要修改评论气泡的默认背景颜色/文本颜色：

```
.ob-comment span {
  background-color: #FFDE5C;
  color: #b30202;
}
```

要修改鼠标悬停时的高亮颜色：
```
.ob-comment:hover {
  background-color: #FFDE5C;
}
```

### 设置：
----
![设置](https://raw.githubusercontent.com/Darakah/obsidian-comments-plugin/main/settings.png)

## 发布说明：

### v0.2.0
- 评论弹出窗口的粘性书签样式显示

## 待办事项：
- [x] 改进评论弹出窗口的粘性显示
- [ ] 找到一种方法，使侧边栏中的链接能够跳转到原文的相应部分

## 支持

[![Github赞助](https://raw.githubusercontent.com/Darakah/Darakah/e0fe245eaef23cb4a5f19fe9a09a9df0c0cdc8e1/icons/github_sponsor_btn.svg)](https://github.com/sponsors/Darakah) [<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/darakah)

## 鸣谢：
感谢 Obsidian Discord 社区的帮助，特别是那些耐心回答我的问题的开发者们。



