---
uid: 20230803212106
title: Obsidian 插件：【Readme】Checklist Reset
tags: ['obsidian插件', 'readme']
description: 添加一个命令来重置文档中任何清单的状态
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Checklist Reset

> [!Note] 插件名片
> - 插件名称：Checklist Reset
> - 插件作者：Luke Hansford
> - 插件说明：添加一个命令来重置文档中任何清单的状态
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/lhansford/obsidian-checklist-reset)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-checklist-reset)

## 概述

添加一个命令来重置文档中任何清单的状态



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lhansford/obsidian-checklist-reset/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-checklist-reset]] 插件的自述翻译



# Obsidian清单重置

该插件在Obsidian中添加了一个命令，用于重置文档中的任何清单的状态。

使用方法

从包含已勾选项目的清单文档中，访问命令面板并选择“Checklist Reset: Reset checklists”。这将取消选中打开文档中的所有已勾选清单项目。

开发

### 部署

- 在 package.json、manifest.json 和 versions.json 中更新版本号
- 在 Github 上创建发布版本
- 构建应用程序，并将 `main.js` 和 `manifest.json` 附加到发布版本中。

### 本地开发

1. `npm run dev`
2. `mv ~/Dropbox/notes/.obsidian/plugins/obsidian-checklist-reset/main.js ~/Dropbox/notes/.obsidian/plugins/obsidian-checklist-reset/main.js.bak`
3. `ln -s /Users/luke/Documents/Development/obsidian-checklist-reset/main.js ~/Dropbox/notes/.obsidian/plugins/obsidian-checklist-reset/main.js`
4. 在 Obsidian 中重新加载插件

要恢复：

1. `rm ~/Dropbox/notes/.obsidian/plugins/obsidian-checklist-reset/main.js`
2. `mv ~/Dropbox/notes/.obsidian/plugins/obsidian-checklist-reset/main.js.bak ~/Dropbox/notes/.obsidian/plugins/obsidian-checklist-reset/main.js`



