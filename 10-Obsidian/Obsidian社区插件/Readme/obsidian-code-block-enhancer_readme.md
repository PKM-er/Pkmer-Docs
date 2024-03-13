---
uid: 2023080322160119
title: Obsidian 插件：Code Block Enhancer
tags: ['编辑工具', '编程', '美化', 'obsidian插件', 'readme']
description: 增强 Obsidian 代码域的体验，提供复制按钮、行号、语言名称提示，代码块的上下文菜单。。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Code Block Enhancer

> [!Note] 插件名片
> - 插件名称：Code Block Enhancer
> - 插件作者：hafuhafu
> - 插件说明：增强 Obsidian 代码域的体验，提供复制按钮、行号、语言名称提示，代码块的上下文菜单。。
> - 插件分类：[' 编辑工具 ', ' 编程 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nyable/obsidian-code-block-enhancer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-code-block-enhancer)

## 概述

增强 Obsidian 代码域的体验，提供复制按钮、行号、语言名称提示，代码块的上下文菜单。。

![Code Block Enhancer](https://cdn.pkmer.cn/covers/obsidian-code-block-enhancer.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nyable/obsidian-code-block-enhancer/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-code-block-enhancer]] 插件的自述翻译

# Obsidian 代码块增强插件

这是一个为 Obsidian（<https://obsidian.md>）开发的插件。

灵感来自于 [obsidian-code-block-copy](https://github.com/jdbrice/obsidian-code-block-copy)。

**注意：** Obsidian API 仍处于早期阶段，随时可能发生变化！

## 功能

增强预览模式下的 Markdown 代码块。

* 提供“复制按钮”。
* 提供“行号”。
* 显示“语言名称”。
* 自定义排除语言。
* 增强代码块中的上下文菜单。

## 截图

![Gif](https://github.com/nyable/obsidian-code-block-enhancer/blob/master/screenshot/GIF.gif?raw=true)

### 默认暗色主题

![Obsidian_Default_Dark_Theme](https://github.com/nyable/obsidian-code-block-enhancer/blob/master/screenshot/Obsidian_Default_Dark_Theme.png?raw=true)

### 默认的浅色主题

![Obsidian_Default_Light_Theme](https://github.com/nyable/obsidian-code-block-enhancer/blob/master/screenshot/Obsidian_Default_Light_Theme.png?raw=true)

### Gruvbox 主题

![Obsidian_Gruvbox_Dark_Theme](https://github.com/nyable/obsidian-code-block-enhancer/blob/master/screenshot/Obsidian_Gruvbox_Dark_Theme.png?raw=true)

### Nord 主题

![Obsidian_Nord_Dark_Theme](https://github.com/nyable/obsidian-code-block-enhancer/blob/master/screenshot/Obsidian_Nord_Dark_Theme.png?raw=true)

### 插件设置

![plugin_settings](https://github.com/nyable/obsidian-code-block-enhancer/blob/master/screenshot/plugin_settings.png?raw=true)

# 如何使用

## Obsidian

- 打开 Obsidian
- 设置 -> 社区插件 -> 关闭安全模式
- 浏览社区插件并搜索 `Code Block Enhancer`
- 安装并启用

## 发布版本

- 在 [最新版本](https://github.com/nyable/obsidian-code-block-enhancer/releases/latest) 中下载 `main.js`、`styles.css`、`manifest.json`。
- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-code-block-enhancer/` 中。
- 在 Obsidian 设置中启用插件。

## 源代码

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run build` 来构建文件到 `./dist` 目录。
- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 Vault 文件夹下的 `VaultFolder/.obsidian/plugins/obsidian-code-block-enhancer/` 目录中。
- 在 Obsidian 设置中启用插件。



