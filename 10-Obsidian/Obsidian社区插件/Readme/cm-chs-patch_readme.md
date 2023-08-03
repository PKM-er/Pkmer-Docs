---
uid: 20230803231105
title: Obsidian 插件：Word Splitting for Simplified Chinese in Edit Mode and Vim Mode
tags: ['obsidian插件', 'readme']
description: 加强文本编辑器中文分词功能
author: AI
type: readme
draft: false
editable: false
modified: 20230803232610
---

# Obsidian 插件：Word Splitting for Simplified Chinese in Edit Mode and Vim Mode

> [!Note] 插件名片
> - 插件名称：Word Splitting for Simplified Chinese in Edit Mode and Vim Mode
> - 插件作者：AidenLx
> - 插件说明：加强文本编辑器中文分词功能
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidenlx/cm-chs-patch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cm-chs-patch)

## 概述

加强文本编辑器中文分词功能

![Word Splitting for Simplified Chinese in Edit Mode and Vim Mode](https://cdn.pkmer.cn/covers/cm-chs-patch.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aidenlx/cm-chs-patch/main/README.md)
>

---

## Readme(翻译）

下面是 [[cm-chs-patch]] 插件的自述翻译

# 在编辑模式和 Vim 模式下的简体中文分词

为 Obsidian 内置的 CodeMirror 编辑器增加补丁，以支持编辑模式和 Vim 模式下的简体中文分词。

特别感谢 [@fengkx](https://github.com/fengkx) 提供的 [jieba-wasm模块](https://github.com/fengkx/jieba-wasm)。

注意：从 v1.8.0 开始，默认的分词引擎已从结巴分词更改为系统自带的分词引擎。结巴分词不再是必需组件。如果您需要与 [omnisearch](https://github.com/scambier/obsidian-omnisearch) 插件配合使用，或者仍然需要使用结巴分词提供的更准确的分词结果，以及新词发现和自定义词库功能，请在打开选项后按照弹出窗口的提示进行安装（如果系统没有提供分词引擎，无论选项是否打开，该插件都会提示安装结巴分词）。

手动安装结巴分词组件：在设置中启用结巴分词后，从 [CDN](https://unpkg.com/jieba-wasm@0.0.2/pkg/web/jieba_rs_wasm_bg.wasm) 下载 `jieba_rs_wasm_bg.wasm` 文件，并将 wasm 文件放置在 Obsidian 库的 `.obsidian` 或其他指定的配置文件夹中，然后重新启动 Obsidian。

## 演示

| Obsidian 的默认分词 | 安装插件后 |
| ------------------ | ----------- |
| ![ob-default-splitting](https://img.aidenlx.top/img/ob-default-splitting.gif)                   | ![ob-patched-splitting](https://img.aidenlx.top/img/ob-patched-splitting.gif)            |

所需的 API 功能仅适用于 Obsidian v0.15.0+。

## 安装

### 来自 Obsidian

1. 打开 `设置`>`第三方插件`
2. 确保安全模式为**关闭**
3. 点击 `浏览社区插件`
4. 搜索此插件 `Word Splitting for Simplified Chinese in Edit Mode and Vim Mode`
5. 点击 `安装`
6. 安装完成后，关闭社区插件窗口，补丁即可使用。

### 来自 GitHub

1. 从 GitHub 仓库的 Releases 部分下载最新版本
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/cm-chs-patch`
3. 重新加载 Obsidian
4. 如果提示安全模式，请禁用安全模式并启用插件。否则，请前往设置，第三方插件，确保关闭安全模式，并从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示文件夹。