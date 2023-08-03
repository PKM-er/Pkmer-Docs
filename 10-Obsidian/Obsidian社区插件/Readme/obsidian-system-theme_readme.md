---
uid: 20230803213302
title: Obsidian 插件：【Readme】System Theme
tags: ['obsidian插件', 'readme']
description: 插件自动更新系统主题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：System Theme

> [!Note] 插件名片
> - 插件名称：System Theme
> - 插件作者：jgauth
> - 插件说明：插件自动更新系统主题。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jgauth/obsidian-system-theme)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-system-theme)

## 概述

插件自动更新系统主题。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jgauth/obsidian-system-theme/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-system-theme]] 插件的自述翻译



# 已弃用
从Obsidian v1.0.1开始，此问题已得到修复。https://forum.obsidian.md/t/obsidian-release-v1-0-1-insider-build/45735

# obsidian-system-theme

在Linux上，Obsidian的“适应系统”主题设置需要重新启动Obsidian才能应用系统主题的更改。

该插件使用Electron的[nativeTheme api](https://www.electronjs.org/docs/latest/api/native-theme)来解决这个限制。启用后，将系统主题在浅色/深色之间切换应自动应用于Obsidian。

这段代码与[kepano的obsidian-system-dark-mode](https://github.com/kepano/obsidian-system-dark-mode)几乎完全相同，只是底层主题API有所改变。

#### 手动安装：
需要npm

# 1. 切换到插件目录
cd my-vault/.obsidian/plugins

# 2. 克隆仓库
git clone git@github.com:jgauth/obsidian-system-theme.git && cd obsidian-system-theme

# 3. 安装依赖
npm install

# 4. 构建
npm run build
```
然后重新启动 Obsidian 并启用插件。

已在以下环境中测试通过：

- Ubuntu 20.04，GNOME Shell 3.36.9
- Arch Linux (linux 5.18.18-xanmod1-1)，Sway 1.7

#### 附加背景信息：

Obsidian论坛用户[ecchina_ko](https://forum.obsidian.md/u/ecchina_ko)发现Obsidian的主题问题是由于Chromium的一个错误引起的：

>我进行了一些研究，我现在知道问题出在哪里了。
>### 错误
>虽然我显然没有Obsidian的原始源代码，但我使用了开发工具和转译后的JavaScript代码，似乎Obsidian确实使用了与System Dark Mode插件相同的方法；具体来说，它调用window.matchMedia()来获取一个MediaQueryList，并为其附加了一个事件监听器，用于prefers-color-scheme媒体特性，并使用回调函数根据值是暗色还是亮色来设置主题。现在，这通常都没问题，但自2019年以来，prefers-color-scheme特性在Linux上的Chromium上已经出现了问题，具体表现为它不会对所选的GTK主题做出反应 - 这是GNOME和Fedora（以及其他Linux发行版和桌面环境）使用的主题。由于Obsidian依赖于Electron，而Electron又依赖于Chromium，所以这个错误也会影响到Obsidian。
>### 修复方法
>但是等等 - VS Code是如何解决这个问题的呢？它也是用TypeScript和Electron编写的，它们的主题服务使用了Electron的nativeTheme模块，该模块提供了一个API来读取和响应系统的主题更改。它提供了一个通用的接口，同时在底层执行实际的系统特定主题逻辑，以便Electron用户不必自己处理所有特定于操作系统的处理。由于之前提到的Chromium错误，Electron开发人员已经为该模块的GTK主题实现了一个解决方法。这个解决方法现在看起来是一个不错的解决方案，因为Chromium开发人员似乎并不急于解决他们那边的问题。

完整的讨论帖子：https://forum.obsidian.md/t/color-scheme-adapt-to-system-not-working-on-linux-fedora-gnome/38743/13



