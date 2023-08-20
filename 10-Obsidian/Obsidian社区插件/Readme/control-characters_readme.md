---
uid: 2023080322163058
title: Obsidian 插件：【Readme】Control Characters
tags: ['obsidian插件', 'readme']
description: 在编辑模式下显示控制/不可打印字符
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Control Characters

> [!Note] 插件名片
> - 插件名称：Control Characters
> - 插件作者：Johannes Theiner
> - 插件说明：在编辑模式下显示控制/不可打印字符
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joethei/obsidian-control-characters)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?control-characters)

## 概述

在编辑模式下显示控制/不可打印字符

![Control Characters](https://cdn.pkmer.cn/covers/control-characters.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joethei/obsidian-control-characters/master/README.md)
>

---

## Readme(翻译）

下面是 [[control-characters]] 插件的自述翻译

# 控制字符

[Obsidian](https://obsidian.md) 的插件

![维护](https://shields.joethei.xyz:/maintenance/yes/2022)
![最低应用版本](https://shields.joethei.xyz/github/manifest-json/minAppVersion/joethei/obsidian-control-characters?label=最低支持的应用版本)
[![libera宣言](https://shields.joethei.xyz/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)
---

在编辑模式下显示控制字符。

![演示截图](https://i.joethei.space/Obsidian_136foBrkZM.png)

## 仅在选择中显示字符

默认情况下，插件会在笔记中显示所有字符。

但是您可以配置它仅在选择文本时显示控制字符。

您还可以在前言中使用 `cc-selection` 键覆盖此行为。

## 覆盖笔记的设置

您还可以通过使用 [Frontmatter](https://help.obsidian.md/Advanced+topics/YAML+front+matter) 更改单个笔记的设置。

例如，以下笔记将只包含新的换行符。

```yaml
---
cc: true
cc-tab: false
cc-newline: true
cc-space: false
---
Quo usque tandem abutere, Catilina, patientia nostra?

Lorem ipsum dolor sit amet, consectetur adipisici elit.
```

## 自定义

您可以使用 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 插件自定义大部分样式。

---

此插件适用于新的编辑器，不适用于旧的 _legacy_ 编辑器。

如果您真的想使用旧的编辑器，您将需要使用 [Show whitespace](https://github.com/deathau/cm-show-whitespace-obsidian) 插件。

---

感谢 [@nothingislost](https://github.com/nothingislost) 提供的所有参考插件。
