---
uid: 2023120522250753
title: Obsidian 插件：【Readme】File Tree Generator
tags: ['obsidian插件', 'readme']
description: 使用Obsidian的callouts生成一个文件树。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】File Tree Generator

> [!Note] 插件名片
> - 插件名称：File Tree Generator
> - 插件作者：Unarray
> - 插件说明：使用Obsidian的callouts生成一个文件树。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Unarray/FileTreeGenerator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-tree-generator)

## 概述

使用Obsidian的callouts生成一个文件树。

![File Tree Generator](https://cdn.pkmer.cn/covers/file-tree-generator.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Unarray/FileTreeGenerator/main/README.md)
> 

---

## Readme(翻译）

下面是 [[file-tree-generator]] 插件的自述翻译


# 文件树生成器
一个 Obsidian 插件，允许你使用 [Obsidian Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts) 生成文件树！

![obsidian dark-mode example](meta/example-dark.png)
![obsidian light-mode example](meta/example-light.png)
如何使用？
在编辑Obsidian笔记时，您可以使用“生成文件树”命令或使用生成文件树功能区图标。</br>

![生成文件树面板](meta/pannel.png)

> [!NOTE]
> 如果您在桌面上，可以通过按文件路径输入旁边的额外按钮导入文件夹

---

如您所见，您可以在设置选项卡中忽略文件/文件夹的模式。</br>
这些模式遵循[gitignore规范2.22.1](https://git-scm.com/docs/gitignore/2.22.1)

![生成文件树面板](meta/settings.png)
## 注意
该插件仅在桌面版中使用FS来从本地目录加载文件。
## 安装
在你的 vault 文件夹中，进入 `./.obsidian/plugins/file-tree-generator/`
然后你可以：

克隆这个仓库并运行 `npm run build`，或直接下载包含 `main.js`、`manifest.json` 和 `styles.css` 的最新插件版本。

> [!NOTE]
> 如果你是开发者，克隆这个仓库 -> 运行 `npm i` -> 使用 `npm run dev` 开始编码（为了在 Obsidian 中热重载插件，请安装 [Hot-Reload 插件](https://github.com/pjeby/hot-reload)）。



