---
uid: 2024022121205309
title: Obsidian 插件：【Readme】Orgmode (CM6)
tags: ['obsidian插件', 'readme']
description: 编辑Orgmode文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Orgmode (CM6)

> [!Note] 插件名片
> - 插件名称：Orgmode (CM6)
> - 插件作者：Benoit Bazard
> - 插件说明：编辑 Orgmode 文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/bbazard/obsidian-orgmode-cm6)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?orgmode-cm6)

## 概述

编辑 Orgmode 文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/BBazard/obsidian-orgmode-cm6/master/README.md)
>

---

## Readme(翻译）

下面是 [[orgmode-cm6]] 插件的自述翻译

【机翻】

# 黑曜石 Orgmode CM6

[Orgmode](https://orgmode.org) 适用于 [Obsidian](https://obsidian.md)。

![屏幕截图](https://cdn.pkmer.cn/covers/orgmode-cm6_2_0.png!pkmer)

此插件使用一个单独的 [codemirror 6](https://codemirror.net) 实例，具有自定义的 [lezer](https://lezer.codemirror.net) 语法（并非所有内容都已实现）。

灵感来自 <https://github.com/ryanpcmcquen/obsidian-org-mode> 和 <https://github.com/nothingislost/obsidian-cm6-attributes。>

## 特点

- 可折叠的标题
- 在设置中可自定义待办关键字
- 可通过 css 自定义颜色（使用 [styles.css](./styles.css) 作为 [css片段](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) 并进行调整）

## 开发

```
git clone https://github.com/bbazard/obsidian-orgmode-cm6
cd obsidian-orgmode-cm6
npm install
npm run build
npm test
cp main.js styles.css manifest.json "$OBSIDIAN_VAULT"/.obsidian/plugins/obsidian-orgmode-cm6/
```