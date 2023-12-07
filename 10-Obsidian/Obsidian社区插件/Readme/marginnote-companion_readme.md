---
uid: 2023120719360426
title: Obsidian 插件：【Readme】MarginNote Companion
tags: ['obsidian插件', 'readme']
description: 一个Obsidian插件，用于连接MarginNote 3和Obsidian
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】MarginNote Companion

> [!Note] 插件名片
> - 插件名称：MarginNote Companion
> - 插件作者：AidenLx
> - 插件说明：一个 Obsidian 插件，用于连接 MarginNote 3 和 Obsidian
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidenlx/marginnote-companion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?marginnote-companion)

## 概述

一个 Obsidian 插件，用于连接 MarginNote 3 和 Obsidian

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aidenlx/marginnote-companion/master/README.md)
>

---

## Readme(翻译）

下面是 [[marginnote-companion]] 插件的自述翻译

# MarginNote Companion

一个用于连接 MarginNote 3 和 Obsidian 的 Obsidian 插件

![demo](https://cdn.pkmer.cn/covers/marginnote-companion_2_0.webp!pkmer)

## 特性

- 从 MarginNote 3 导入笔记/选中文本
  - 支持链接到 MarginNote 的反向链接
  - 支持导入摘录图片
  - 支持导入视频笔记（需要安装 [media-extended](https://github.com/aidenlx/media-extended)）
- 从 PDF 导入笔记层级树/目录
- 多种快速将 MarginNote 数据插入到 Obsidian 笔记的方式
  - 通过在 MarginNote 中选择 - 在 Obsidian 中粘贴来插入笔记（仅桌面版支持）
  - 通过命令插入笔记：快捷键、移动工具栏按钮和/或滑动手势（需要配置）
  - 自动粘贴：在 MarginNote 3 中选择笔记/PDF 文本时，自动插入到 Obsidian 的活跃笔记中
- 模板支持：指定如何插入 MarginNote 3 的笔记/选中文本/目录
  - 通过编辑器中的上下文菜单选项
  - 通过命令（启用 `show in command`）
- 导入元数据：将 MarginNote 3 中的标题链接转换为 Obsidian 中的 `aliases`，并添加返回到源 MarginNote 笔记的按钮

前往 [MarginNote Companion wiki](https://github.com/aidenlx/marginnote-companion/wiki) 查看更多详细信息

所需的 API 功能仅适用于 Obsidian v0.12.17+。

安装插件之前：

1. 从 [obsidian-bridge 的 GitHub Release](https://github.com/aidenlx/obsidian-bridge/releases) 下载最新的 `.mnaddon` 安装程序
2. 按照 [说明](https://github.com/aidenlx/obsidian-bridge#installation-%E5%AE%89%E8%A3%85) 在 MarginNote 3 中安装和启用 obsidian-bridge（打开笔记本/文档时在屏幕一侧显示的桥图标，单击图标以启用它）

### 来自 Obsidian

1. 打开 `设置`>`第三方插件`
2. 确保安全模式为**关闭**
3. 点击 `浏览社区插件`
4. 搜索此插件
5. 点击 `安装`
6. 安装完成后，点击 `启用`
7. 关闭社区插件窗口，插件即可使用。

### 来自 GitHub

1. 从 [GitHub仓库的Releases部分](https://github.com/aidenlx/marginnote-companion/releases) 下载最新版本的 `marginnote-companion.zip`。
2. 将 `marginnote-companion.zip` 中的文件（`main.js`，`manifest.json`，`styles.css`）放入您的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/marginnote-companion`。
3. 重新加载 Obsidian。
4. 如果提示安全模式，请禁用安全模式并启用插件。否则，请前往设置，第三方插件，确保关闭安全模式，并从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。

---

1. 从 [此插件GitHub仓库的Releases](https://github.com/aidenlx/marginnote-companion/releases) 下载 `marginnote-companion.zip`。
2. 将 `marginnote-companion.zip` 中的三个文件（`main.js`，`manifest.json`，`styles.css`）放入对应 Vault 的插件文件夹中：`<vault>/.obsidian/plugins/marginnote-companion`。
3. 重新加载 Obsidian。
4. 如果有关安全模式的提示，请禁用安全模式并启用插件。否则，请前往设置，第三方插件，确保关闭安全模式，并从那里启用插件。

> 注意，`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+.` 来在 Finder 中显示该文件夹。