---
uid: 20230822233837
title: Obsidian 插件：Sidebar Toggler 侧边栏的更精细的控制
tags: [obsidian插件]
description: Obsidian 侧边栏的更精细的控制。用于外部窗口管理器。
author: OS
type: basic
draft: false
editable: false
modified: 20230914160405
---

# Obsidian 插件：Sidebar Toggler 侧边栏的更精细的控制

## 概述

黑曜石侧边栏的更精细的控制。用于外部窗口管理器。

> [!Note] 插件名片
> - 插件名称：Sidebar Toggler
> - 插件作者：pseudometa
> - 插件说明：黑曜石侧边栏的更精细的控制。用于外部窗口管理器。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/chrisgrieser/obsidian-sidebar-toggler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-sidebar-toggler)

## 使用

它添加了四个命令来切换侧边栏。与 Obsidian 的原生命令相反，原生命令只允许*切换*侧边栏，而你可以明确地确定是显示还是隐藏它们。

- 隐藏左侧边栏
- 隐藏右侧边栏
- 显示左侧边栏
- 显示右侧边栏

此外，该插件为这些命令注册了 URI 方案。URI 必须包含 `showLeft` 或 `showRight`，并且两者只接受 `true` 和 `false` 作为有效输入。你也可以同时包含两者以一次性影响两个侧边栏。

```html

显示左侧边栏（对右侧边栏不做任何操作）

# 显示左侧栏并隐藏右侧栏
obsidian://sidebar?showLeft=true&showRight=false
```

这个插件的主要用途是为了提供一个简单明了的方法，供 __ 窗口管理应用 __ 来控制 Obsidian 的侧边栏。只需在窗口管理配置中添加类似于 `open "obsidian://sidebar?side=left&show=false"` 的内容，就可以让窗口管理器控制 Obsidian 的侧边栏。

例如，我已经配置了当我触发窗口的垂直分割时隐藏 Obsidian 的侧边栏。当我最大化 Obsidian 窗口时，侧边栏会再次显示出来。

对于 macOS 的自动化应用程序 [Hammerspoon](http://www.hammerspoon.org/) 来说，这样一个函数可能是这样的：

```lua
function toggleObsidianSidebar (obsiWin)
  local obsi_width = obsiWin:frame().w
  local screen_width = obsiWin:screen():frame().w
  if (obsi_width / screen_width > 0.6) then
  	hs.urlevent.openURL("obsidian://sidebar?showLeft=true&showRight=false")
  else
  	hs.urlevent.openURL("obsidian://sidebar?showLeft=false&showRight=false")
  end
end
```