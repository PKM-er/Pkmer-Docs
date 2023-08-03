---
uid: 2023080322211101
title: Obsidian 插件：【Readme】Kroki
tags: ['图表生成', 'obsidian插件', 'readme']
description: 渲染Kroki图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Kroki

> [!Note] 插件名片
> - 插件名称：Kroki
> - 插件作者：Greg Zuro
> - 插件说明：渲染Kroki图。
> - 插件分类：['图表生成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/gregzuro/obsidian-kroki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-kroki)

## 概述

渲染Kroki图。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gregzuro/obsidian-kroki/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-kroki]] 插件的自述翻译


# Obsidian Kroki

在 [Obsidian](https://obsidian.md) 中渲染 [Kroki](https://kroki.io) 图表。

该插件默认使用 [Kroki](https://kroki.io) 服务器进行渲染，但建议通过该插件的选项指定其他服务器。

如果找不到其他服务器，您可以按照[这里的说明](https://kroki.io/#install)自己搭建服务器。

该插件是 Johannes Theiner 的 [obsidian-plantuml](https://github.com/joethei/obsidian-plantuml) 插件的修改和稍作扩展的版本。

## 用法
使用kroki支持的其中一种图表类型作为语言创建一个带有围栏的代码块。
请参阅[Kroki网站](https://kroki.io)以获取支持的图表类型的完整列表。
在代码块中指定您的图表代码。

请参阅 [kroki-test.md](kroki-test.md) 以查看当前支持的每种图表类型的示例。

安装

### 在 Obsidian 内部

`设置 > 第三方插件 > 社区插件 > 浏览` 并搜索 `Kroki`。

### 手动安装插件

- 克隆此存储库
- 运行 `npm i` 或 `yarn` 安装依赖
- 运行 `npm run build`
- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/obsidian-kroki/` 目录下。



