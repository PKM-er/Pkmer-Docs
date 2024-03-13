---
uid: 2024022121240586
title: Obsidian 插件：【Readme】Set View Mode per Note
tags: ['obsidian插件', 'readme']
description: 使用YAML前置元数据来为每个笔记指定一个视图模式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Set View Mode per Note

> [!Note] 插件名片
> - 插件名称：Set View Mode per Note
> - 插件作者：Alex Davies
> - 插件说明：使用 YAML 前置元数据来为每个笔记指定一个视图模式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AlexDavies8/obsidian-frontmatter-viewmode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-viewmode)

## 概述

使用 YAML 前置元数据来为每个笔记指定一个视图模式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AlexDavies8/obsidian-frontmatter-viewmode/main/README.md)

---

## Readme(翻译）

下面是 [[frontmatter-viewmode]] 插件的自述翻译

# 在每个笔记中设置 Obsidian 的视图模式

这个插件允许你在打开特定笔记时设置视图模式。无需配置，只需在任何笔记的顶部设置一个属性。

这可以通过 `prefer-view` 属性来实现，该属性可以取值 `read`、`edit`、`edit-source` 或 `edit-preview`。

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A8U5GAJ)

```yaml
---
prefer-view: 阅读
---
This note will open in reading mode.
```

```yaml
---
prefer-view: 编辑
---
This note will open in the preferred editing mode specified in 'Settings > Editor > Default editing mode'.
```

```yaml
---
prefer-view: 编辑源码
---
This note will open in Source mode for editing.
```

```yaml
---
prefer-view: 编辑预览
---
This note will open in Live Preview mode for editing.
```