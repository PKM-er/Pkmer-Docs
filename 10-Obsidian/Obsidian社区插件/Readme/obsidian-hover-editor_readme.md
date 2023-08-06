---
uid: 2023080322195558
title: Obsidian 插件：【Readme】Hover Editor
tags: ['界面相关', '编辑工具', '笔记文件处理', 'obsidian插件', 'readme']
description: 将“页面预览”悬停弹出框转换为完全可用的编辑器实例
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Hover Editor

> [!Note] 插件名片
> - 插件名称：Hover Editor
> - 插件作者：NothingIsLost
> - 插件说明：将“页面预览”悬停弹出框转换为完全可用的编辑器实例
> - 插件分类：[' 界面相关 ', ' 编辑工具 ', ' 笔记文件处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nothingislost/obsidian-hover-editor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-hover-editor)

## 概述

将“页面预览”悬停弹出框转换为完全可用的编辑器实例

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nothingislost/obsidian-hover-editor/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-hover-editor]] 插件的自述翻译

## Obsidian 悬停编辑器

该插件通过将悬停弹出窗口转换为完整功能的编辑器实例，增强了核心的“页面预览”插件。

### 免责声明

该插件利用了 Obsidian 官方 API 中目前未公开的功能。因此，未来的 Obsidian 更新可能会引入破坏性的变化。

我将尽力确保该插件在 Obsidian 更新后仍能正常工作，但我的目标是要么将这个功能直接实现到 Obsidian 核心中，要么在官方 API 提供弹出窗口功能后切换使用官方 API。

### 特性

- 页面预览弹出框现在是一个实际的编辑器实例
  - 支持大部分编辑器功能，包括在不同模式之间切换
- 弹出框现在可以拖动和调整大小
- 弹出框现在可以固定，防止自动关闭
  - 拖动或调整大小时，弹出框会自动固定
  - 通过固定，可以同时打开多个弹出框
- 打开弹出框时，它将成为活动窗格并获得焦点
  - 这意味着您可以在触发弹出框后使用键盘快捷键，如 ctrl+e 切换模式
  - 当弹出框关闭时，焦点将恢复到先前的文档
- 弹出框现在有一个导航栏，包括文档标题和编辑器控件
- 双击顶部拖动手柄可以最小化弹出框
- 有一个插件设置，允许设置默认的编辑器模式
  - 选项有：" 在阅读模式中打开 "、" 在编辑模式中打开 " 或 " 与当前文档的模式匹配 "
- 当悬停在包含标题或块引用的链接上时，编辑器将打开并自动滚动到引用位置
- 当多个弹出框同时激活且重叠在一起时，当前活动的弹出框将保持在顶部

### 演示

<https://user-images.githubusercontent.com/89109712/160023366-7a1ca044-5725-4d30-a0a7-f7e0664281da.mp4>

### 安装

可以通过 Obsidian 社区插件浏览器找到并安装 Hover Editor。

### 通过 BRAT 安装

如果您想参与早期测试，可以使用 BRAT 安装插件。

通过 Obsidian 插件浏览器安装 BRAT 插件，然后添加 beta 仓库 "nothingislost/obsidian-hover-editor"。

### 手动安装插件

- 将 `main.js` 和 `manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/obsidian-hover-editor/` 目录下。

### 致谢

感谢 pjeby 为使 Hover Editors 与原生 Obsidian 组件正确互操作方面做出了大量核心功能的贡献。

感谢 boninall 为贡献“在新的弹出窗口中打开”功能。

感谢 murf、liam、obadiahcruz 和 javalent 进行早期测试和反馈。
