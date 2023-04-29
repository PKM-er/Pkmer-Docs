---
uid: 20230430001441
title: Obsidian 插件：Auto Link Title 帮助自动为网页地址增加链接名
description: 
author: 
type: other
draft: false
editable: false
modified: 20230430004222
---

# Obsidian 插件：Auto Link Title 帮助自动为网页地址增加链接名

## 概述

记录笔记过程中，我们经常会记录一些网页地址。这个插件自动在粘贴时，提取网页链接标题，创建一个 Markdown 链接形式与正确的标题。

> [!Note] 插件名片
> - 插件名称：Auto Link Title
> - 插件作者：Matt Furden
> - 插件说明：自动在粘贴时，提取网页链接标题，创建一个 Markdown 链接形式与正确的标题
> - 插件项目地址：[点我跳转](https://github.com/zolrath/obsidian-auto-link-title)

## 效果&特性

![](https://cdn.pkmer.cn/images/auto-link-title.gif)

## 使用

### 一般情况

当粘贴 [https://github.com/zolrath/obsidian-auto-link-title](https://github.com/zolrath/obsidian-auto-link-title) 时，该插件会获取页面并检索标题，从而得出粘贴内容：`[zolrath/obsidian-auto-link-title: Automatically fetch the titles of pasted links](https://github.com/zolrath/obsidian-auto-link-title)`。

### 将标题添加到现有的 URL 中

此外，使用 `ctrl+shift+e`（Windows）或 `cmd-shift-e（OS X）` 可以将现有的原始链接增强为带有正确标题的 Markdown 格式链接。

如果您的文本光标位于 `https://github.com/zolrath/obsidian-auto-link-title` 的 URL 中，按下 ctrl-shift-e 或 cmd-shift-e 会将文本转换为 `[zolrath/obsidian-auto-link-title: Automatically fetch the titles of pasted links](https://github.com/zolrath/obsidian-auto-link-title)`。

### 覆盖现有链接的标题

此外，使用 `ctrl-shift-e（Windows）` 或 `cmd-shift-e（OS X）` 可以使用 URL 获取的标题覆盖 Markdown 链接的现有标题。

如果您的文本光标位于 `[some plugin](https://github.com/zolrath/obsidian-auto-link-title)` 中，按下 `ctrl + shift + e`。

虽然之前你已经编辑过对应的链接标题，但插件会重新获取网页的标题并替换它，从而得到 `[zolrath/obsidian-auto-link-title: Automatically fetch the titles of pasted links](https://github.com/zolrath/obsidian-auto-link-title)`。

### 移动端使用

为了粘贴 URL，请确保 `Tap and Hold`（长按） -> `Paste`（粘贴），将 URL 粘贴到您的文档中。

### Gboard（Google 输入法）

Google 的 Gboard 输入法在键盘上方有一个剪贴板助手快捷方式，可快速粘贴。由于该功能的实现方式，它不会触发粘贴事件，因此防止该插件与文本交互。

>[!Tip] 提示
>- 一些国产输入法或软键盘也和 Gboard 类似，发生同类不生效的情况。

## 隐私声明

为了提取网页标题，该插件会下载位于粘贴 URL 的页面并提取标题的内容。

如果你了解网页相关知识，下载的内容大概时 `<head><title>Title</title></head>`

在台式机上，使用 Electron 的 BrowserWindow 来实现该功能，可以直接处理使用扩展字符集的语言，例如中文。

然而，在移动设备上，我们没有使用 Electron 平台，因此我们必须简单地获取该页面。由于 web 服务器的 CORS 限制不允许直接访问，该插件使用 allorigins.win 代理来下载页面。该代理不支持其他字符集，将其返回为问号或乱码。