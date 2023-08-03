---
uid: 20230803212747
title: Obsidian 插件：【Readme】Meld Build
tags: ['obsidian插件', 'readme']
description: 编写并执行（沙盒化）JavaScript以渲染模板，查询DataView并创建动态注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Meld Build

> [!Note] 插件名片
> - 插件名称：Meld Build
> - 插件作者：meld-cp
> - 插件说明：编写并执行（沙盒化）JavaScript以渲染模板，查询DataView并创建动态注释。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/meld-cp/obsidian-build)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?meld-build)

## 概述

编写并执行（沙盒化）JavaScript以渲染模板，查询DataView并创建动态注释。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/meld-cp/obsidian-build/master/README.md)
> 

---

## Readme(翻译）

下面是 [[meld-build]] 插件的自述翻译



# Meld Build - 一个 Obsidian 插件

编写并执行（沙盒化的）JavaScript 代码来渲染模板、查询 DataView 并创建动态笔记。

基本上，将一个笔记转化为一个小而简单的可运行的东西。



## 快速入门
- 安装并启用插件
- 将下面的 Markdown 粘贴到一个新的笔记中。
- 如果你在阅读或实时预览模式下，请点击“运行”按钮。如果你在源代码模式下，请从命令面板中选择“Meld Build: Run”。
````md

```meld-build-toolbar
```

```js meld-build
const ans = await $.ui.ask('What should I call you?');
await $.ui.message( `From this day forth you shall be known as ${ans}` );
```
````

## 文档

- [用户指南](/docs/user-guide.md)
- [API](/docs/api.md)

- [猜数字游戏](/docs/examples/guess-the-number.md)
- [猜数字游戏（使用标记）](/docs/examples/guess-the-number-marker.md)
- [简单发票生成器](/docs/examples/invoice-builder.md)

## 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/meld-build/` 中。



