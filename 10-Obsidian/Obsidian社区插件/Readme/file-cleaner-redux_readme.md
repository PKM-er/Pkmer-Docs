---
uid: 2023120719280605
title: Obsidian 插件：【Readme】File Cleaner Redux
tags: ['obsidian插件', 'readme']
description: 帮助您清理保险库中的空文件和未使用的附件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】File Cleaner Redux

> [!Note] 插件名片
> - 插件名称：File Cleaner Redux
> - 插件作者：husjon
> - 插件说明：帮助您清理保险库中的空文件和未使用的附件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/husjon/obsidian-file-cleaner-redux)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-cleaner-redux)

## 概述

帮助您清理保险库中的空文件和未使用的附件。

![File Cleaner Redux](https://cdn.pkmer.cn/covers/file-cleaner-redux.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/husjon/obsidian-file-cleaner-redux/main/README.md)
>

---

## Readme(翻译）

下面是 [[file-cleaner-redux]] 插件的自述翻译

文件清理程序 Redux 是 Obsidian（<<https://obsidian.md）的插件，可根据几个简单的用户定义规则帮助删除未使用/空的> Markdown 文件和附件。>

基于<https://github.com/Johnson0907/obsidian-file-cleaner>

## 这个插件的功能

- 删除大小为 0 字节的 Markdown 文件。
- 删除用户定义的附件文件（例如：jpg、jpeg、png、gif、svg、pdf）。
- 支持清理仅包含特定 frontmatter 的空文件（可选）（参见：<https://github.com/husjon/obsidian-file-cleaner-redux/issues/16）。>
- 递归删除空文件夹（可选）。
- 文件夹排除/包含（可选）。
- 设置删除位置
  - 移动到系统垃圾箱
  - 移动到 Obsidian 垃圾箱（.trash 文件夹）
  - 永久删除
- 预览将被删除的文件和文件夹列表（可选）。
- 启动时运行（可选）。

### 如何使用插件

- 单击“文件清理器”功能区图标或为“清理文件”命令添加一个快捷键。

### 截图

#### 插件设置（显示默认值）

![选项](https://cdn.pkmer.cn/covers/file-cleaner-redux_2_0.png!pkmer)

#### 删除文件的预览

![预览已删除文件确认](https://cdn.pkmer.cn/covers/file-cleaner-redux_2_1.png!pkmer)

#### 快捷键

![快捷键](https://cdn.pkmer.cn/covers/file-cleaner-redux_2_2.png!pkmer)

### 已知问题

- ~~无法识别在 [Admonition](https://github.com/valentine195/obsidian-admonition) 代码块中使用的附件~~



