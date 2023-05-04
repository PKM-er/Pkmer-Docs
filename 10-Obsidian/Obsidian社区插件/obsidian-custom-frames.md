---
uid: 20230504152108
title: Obsidian 插件：Custom Frames 集成更多网页应用到笔记中
description: 
author: 
type: other
draft: false
editable: false
modified: 20230504184935
---

# Obsidian 插件：Custom Frames 集成更多网页应用到笔记中

## 概述

虽然我们一直提到 All in One，但我们都知道没有足够时间的积累，或者说没有一个事务是完美的，想要短时间所有工作学习都放到一个软件上，其实是有些勉强的，但是 Custom Frames 让我们离这个目标又更近了一步。

让你在 Obsidian 中以 iframe 方式将 web 应用程序变成标签页。

> [!Note] 插件名片
> - 插件名称：Custom Frames
> - 插件作者：Ellpeck
> - 插件说明：让你在 Obsidian 中以 iframe 方式将 web 应用程序变成标签页。
> - 插件项目地址：[点我跳转](https://github.com/pjeby/pane-relief)

## 效果&特性

![screenshot-big.png](https://cdn.pkmer.cn/images/screenshot-big.png)

## 使用

支持自定义一个网站链接，后面这个链接，可以以标签的方式在 OB 内打开，而不是需要第三方浏览器，整个工作都在 Obsidian 内完成。比如我们设置 baidu，bing 的搜索界面入口地址。方便我们查询资料而不是需要切换窗口到浏览器。

### 自定义集成第三方网页应用

![image.png](https://cdn.pkmer.cn/images/20230504154313.png)

在插件设置中，可以选择 `Custom` ，并 `Add Frame` 添加自定义的第三方网页应用。

![image.png](https://cdn.pkmer.cn/images/20230504154729.png)

- Display Name：**必填**，用于鼠标指向时，提示你对应的网页应用名称，也是这个应用的唯一 ID。只要你能区分开，随便使用你喜欢的名字。
- Icon：**选填**，为自定义的网页应用添加图标。只要填写图标的英文名称即可，但该名称必须是 Lucide icons 图标集内的。如果不熟悉，可以点击插件提供的链接，跳转到 Lucide icons 自己挑选。
- URL：**必填**，且需要包含网站的协议模式，即我们常见的：http://，https://，ftp:// 等。
- Disable on Mobile：默认开启，在移动端禁用此网页引用。这样设计的原因是，部分网页应用不能完全适配移动端，可能带来体验问题，所以默认是不在移动端开启。
- Add Ribbon Icon：默认关闭，在 Ribbon 区域增加一个按钮
- Open in Center：默认关闭，在标签页中直接打开网页应用，好像在使用浏览器一样。开启后对应的自定义网页应用，会像一些插件一样，在在侧边栏中的一个窗口面板中打开。

>[!Warning] 注意
>- Display name 和 URL 是必填项，如果不填写，对应功能无法运作
>- 所有信息修改后，需要重启 Obsidian 才能生效。

### 笔记模式

还可以在 Markdown 笔记中，通过代码块语法添加一个网页应用。该代码块在实时预览和阅读模式下，会转换一个嵌入网页的样式。

````YAML
```custom-frames
frame: YOUR FRAME'S NAME(你自定义的 Display Name )
```
````

或者，也可以将自定义样式设置传递给嵌入，允许更改嵌入的高度等内容，以及将附加到框架的常规 URL 的附加后缀，这对于在 Google Keep 中显示特定注释等非常有用。

````YAML
```custom-frames
frame: Google Keep
style: height: 1000px;
urlSuffix: #reminders
```
````

### 预置第三方网页应用

插件默认提供了一些可能和查找资料、事务管理等相关的网址，如下：

- Obsidian Forum
- Detexify
- Google Calendar
- Google Keep
- Todoist
- Notion
- Twitter
- Google Tasks

## 已知问题

Custom Frames 有一些已知的问题。

在 Obsidian 0.14.2 及更低版本下，许多网站在自定义帧中无法正常运行。这是由于较旧的版本没有允许框架具有与 cookie 和标题相关的特殊功能的功能。

在 Obsidian 0.14.5 及更低版本下，拖动或移动窗格时，将鼠标悬停在自定义框架上会导致它被卡住或表现出意外。

移动端使用 Custom frames 插件，不幸的是，Obsidian Mobile 不在 Electron 上运行，这使得 iframe 和 webview 几乎没有方法在 cookie、跨源资源共享等限制的情况下。这意味着有些网站的部分功能无法正常工作，比如登录等功能需要你重复登录这一操作。