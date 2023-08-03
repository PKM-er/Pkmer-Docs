---
uid: 20230803231105
title: Obsidian 插件：Sidebar Toggler
tags: ['obsidian插件', 'readme']
description: 黑曜石侧边栏的更精细的控制。用于外部窗口管理器。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232450
---

# Obsidian 插件：Sidebar Toggler

> [!Note] 插件名片
> - 插件名称：Sidebar Toggler
> - 插件作者：pseudometa
> - 插件说明：黑曜石侧边栏的更精细的控制。用于外部窗口管理器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chrisgrieser/obsidian-sidebar-toggler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-sidebar-toggler)

## 概述

黑曜石侧边栏的更精细的控制。用于外部窗口管理器。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgrieser/obsidian-sidebar-toggler/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-sidebar-toggler]] 插件的自述翻译

# 侧边栏切换器

![](https://img.shields.io/github/downloads/chrisgrieser/obsidian-sidebar-toggler/total?label=总下载量&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-sidebar-toggler?label=最新版本&style=plastic) [![](https://img.shields.io/badge/更新日志-点击这里-FFE800?style=plastic)](Changelog.md)

更精细地控制 Obsidian 的侧边栏。与外部窗口管理器一起使用。

## 插件的功能

它添加了四个命令来切换侧边栏。与 Obsidian 的原生命令相反，原生命令只允许*切换*侧边栏，而你可以明确地确定是显示还是隐藏它们。

- 隐藏左侧边栏
- 隐藏右侧边栏
- 显示左侧边栏
- 显示右侧边栏

此外，该插件为这些命令注册了 URI 方案。URI 必须包含 `showLeft` 或 `showRight`，并且两者只接受 `true` 和 `false` 作为有效输入。你也可以同时包含两者以一次性影响两个侧边栏。

```text

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

## 相似的插件

[当窗口变窄时隐藏侧边栏](https://obsidian.md/plugins?id=obsidian-hide-sidebars-when-narrow) 根据可配置的像素宽度自动显示/隐藏侧边栏。

## 安装

目前，该插件仍处于测试阶段。可以使用 [BRAT插件](https://github.com/TfTHacker/obsidian42-brat) 进行安装。

发布后，可以通过 Obsidian 的社区插件浏览器进行安装：`设置` → `社区插件` → `浏览` → 搜索“Sidebar Toggler”

贡献

在提交拉取请求之前，请使用存储库中的 `.eslintrc` 配置，并运行 eslint，请不要使用 `prettier`。🙂

```shell```

# 运行 eslint 修复最常见的错误

eslint --fix *.ts

## 关于开发者

在我的日常工作中，我是一名社会学家，研究数字经济背后的社会机制。在我的博士项目中，我研究应用经济的治理以及软件生态系统如何处理创新和兼容性之间的紧张关系。如果您对这个主题感兴趣，请随时与我联系！

### 个人资料

- [学术网站](https://chris-grieser.de/)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [Discord](https://discordapp.com/users/462774483044794368/)
- [GitHub](https://github.com/chrisgrieser/)
- [Twitter](https://twitter.com/pseudo_meta)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

### 捐赠

如果您非常慷慨，您也可以从我的亚马逊愿望清单中为我购买一些东西。但在考虑为我购买愿望清单上的物品之前，请先向仍在上大学的开发者们捐赠一些东西！😊

[亚马逊愿望清单](https://www.amazon.de/hz/wishlist/ls/2C7RIOJPN3K5F?ref_=wl_share)
