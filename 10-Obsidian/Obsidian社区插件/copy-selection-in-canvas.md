---
uid: 20231123193057
title: Obsidian 插件：Canvas Copy Selection 实现 Canvas 卡片按顺序合并
tags: [Canvas, 社区插件, quickadd, 脚本]
description: 将 Canvas 中整理的内容按照选择顺序合并为一篇笔记
author: KuiyueRO
type: other
draft: false
editable: false
modified: 20231123230136
---

# Obsidian 插件：Canvas Copy Selection 实现 Canvas 卡片按顺序合并

## 概述

白板可以帮我们快速的梳理内容以及整理思路。但有时我们需要将 Canvas 中整理的内容按照选择顺序合并为一篇笔记，那么可以用下面的插件来实现。

> [!note] Text Generator
> 插件名称：Canvas Copy Selection
> 插件版本：0.0.3
> 插件作者：Boninall
> 插件说明：在白板中按照选择顺序将卡片合并为一篇笔记
> 插件分类：[' 白板相关 ', 'obsidian 插件 ']
> 插件项目地址：[点我跳转](https://github.com/Quorafind/Obsidian-Canvas-Copy-Selection)

## 效果&特性

![](https://cdn.pkmer.cn/images/202312201152541.gif!pkmer)

## 使用

依次加选卡片后，调用命令面板，运行命令 copy selection

![](https://cdn.pkmer.cn/images/202312201152542.png!pkmer)

## 安装

> 插件作者提供了两种方案：
> 1. 用 QuickAdd 插件执行的==脚本==（更推荐）
> 2. Obsidian 社区==插件==

### 添加 QuickAdd 脚本

首先，你需要安装一个插件：[[quickadd]]

另外你需要用下方的代码创建一个 js 文件放入你的 Obsidian 库中（位置随意），或者下载这个 js 文件：[[canvas-copy-selection.js]]

```javascript
// Save this code into a javascript file.
module.exports = async (params) => {
	const canvas = app.workspace.activeLeaf.view?.canvas;
	if(!canvas) return;

	const selection = canvas.selection;

	if(selection.size === 0) return;

	// Copy the selection to the clipboard
	// @ts-ignore
	const nodes = Array.from(selection.values()).filter((node)=> node.text != undefined);
	// @ts-ignore
	const text = nodes.map((node)=> node.text).join("\n\n");

	navigator.clipboard.writeText(text);
}
```

然后打开 QuickAdd 的设置页面，创建一个 Macro

![](https://cdn.pkmer.cn/images/202312201152543.png!pkmer)

点击设置

![](https://cdn.pkmer.cn/images/202312201152544.png!pkmer)

创建 Macro

![](https://cdn.pkmer.cn/images/202312201152545.png!pkmer)

配置 Macro

![](https://cdn.pkmer.cn/images/202312201152546.png!pkmer)

选择脚本并添加

![](https://cdn.pkmer.cn/images/202312201152547.png!pkmer)

点击闪电标志注册为命令

![](https://cdn.pkmer.cn/images/202312201152548.png!pkmer)

此时你已经可以在命令面板看见这个命令了

![](https://cdn.pkmer.cn/images/202312201152550.png!pkmer)

### 编译并安装插件

参照官方的指南：

<https://github.com/obsidianmd/obsidian-sample-plugin>

- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/your-plugin-name` folder.
    将您的 repo 克隆到本地开发文件夹中。为方便起见，您可以将此文件夹放在 `.obsidian/plugins/your-plugin-name` 文件夹中。
- Install NodeJS, then run `npm i` in the command line under your repo folder.
    安装 NodeJS，然后在仓库文件夹下的命令行中运行 `npm i` 。
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
    运行 `npm run dev` ，将插件从 `main.ts` 编译为 `main.js` 。

    > [!Tip] 如果不修改源代码，用 `npm run build` 即可

- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
    更改 `main.ts` （或创建新的 `.ts` 文件）。这些更改应自动编译到 `main.js` 中。

    > [!Tip]
    > - 这一段是针对 `npm run dev`。
    > - 直接在插件文件夹下创建一个新文件夹（名称最好参照 `manifest.json` 中 `id` 的值）
    > - 将编译出的 `main.js`、`manifest.json`、`styles.css` 放入该文件夹

- Reload Obsidian to load the new version of your plugin.
    重新加载 Obsidian 以加载新版本的插件。
- Enable plugin in settings window.
    在设置窗口中启用插件。
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.
    要更新 Obsidian API，请在您的 repo 文件夹下的命令行中运行 `npm update` 。