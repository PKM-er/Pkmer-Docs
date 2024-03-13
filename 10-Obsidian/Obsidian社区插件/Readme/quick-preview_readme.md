---
uid: 2024022121232688
title: Obsidian 插件：【Readme】Quick Preview
tags: ['obsidian插件', 'readme']
description: Quickly preview a suggestion before selecting it in link suggestions & quick swicher.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Quick Preview

> [!Note] 插件名片
> - 插件名称：Quick Preview
> - 插件作者：Ryota Ushio
> - 插件说明：Quickly preview a suggestion before selecting it in link suggestions & quick swicher.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RyotaUshio/obsidian-quick-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-preview)

## 概述

Quickly preview a suggestion before selecting it in link suggestions & quick swicher.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RyotaUshio/obsidian-quick-preview/main/README.md)

---

## Readme(翻译）

下面是 [[quick-preview]] 插件的自述翻译

【机翻】

# Obsidian 快速预览

这个 [Obsidian.md](https://obsidian.md) 插件为以下功能添加了一个***快速预览***功能：

- [链接建议](https://help.obsidian.md/Linking+notes+and+files/Internal+links),
- [快速切换器](https://help.obsidian.md/Plugins/Quick+switcher),
- 甚至 [快速切换器++](https://github.com/darlal/obsidian-switcher-plus).

按住 `Alt`/`Option` 键（默认情况下）可以在实际选择之前快速预览建议。

### 链接建议 ([文件](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20file)/[标题](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20heading%20in%20a%20note)/[块](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note))

![Screen Recording 2023-12-13 at 18 27 42](https://cdn.pkmer.cn/covers/quick-preview_1_0.gif!pkmer)

### 快速切换器 / 快速切换器 ++

![Screen Recording 2023-12-13 at 18 24 34](https://github.com/RyotaUshio/obsidian-quick-preview/assets/72342591/4eaae76b-b0fa-425f-a3ff-857b70e9a02a)

> [!tip]
> - 您可以通过 [样式设置](https://github.com/mgmeyers/obsidian-style-settings) 调整快速预览的字体大小。
> - **其他插件也可以通过 API 利用快速预览功能**。有关更多详细信息，请参见 [下文](#using-the-api)。

## 安装

由于这个插件仍处于测试阶段，所以还没有出现在社区插件浏览器中。

但是你可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装最新的测试版：

1. 安装 BRAT 并启用它。
2. 进入 `选项`。在 `Beta插件列表` 部分，点击 `添加Beta插件` 按钮。
3. 在弹出的提示框中复制粘贴 `RyotaUshio/obsidian-quick-preview`，然后点击**添加插件**。
4. *(可选但强烈建议)* 在页面顶部打开 `启动时自动更新插件`。
5. 进入 `社区插件 > 已安装插件`。你会在列表中找到“Quick Preview”。点击切换按钮以启用它。

## 使用 API

该插件提供了一个 API，允许其他插件将快速预览功能添加到它们的自定义建议器中。支持的建议器类型包括：

- [`SuggestModal`](https://docs.obsidian.md/Reference/TypeScript+API/SuggestModal)
- [`PopoverSuggest`](https://docs.obsidian.md/Reference/TypeScript+API/PopoverSuggest)，包括：
  - [`EditorSuggest`](https://docs.obsidian.md/Reference/TypeScript+API/EditorSuggest)
  - [`AbstractInputSuggest`](https://docs.obsidian.md/Reference/TypeScript+API/AbstractInputSuggest)

### 安装

```
npm install -D obsidian-quick-preview
```

### 用法示例

```ts
import { Plugin, EditorSuggest, SuggestModal, TFile, SectionCache } from "obsidian";
import { registerQuickPreview } from "obsidian-quick-preview";

class MyCustomEditorSuggest extends EditorSuggest<{ file: TFile }> { ... }

class MyCustomSuggestModal extends SuggestModal<{ path: string, cache: SectionCache }> { ... }

export default MyPlugin extends Plugin {
    excludedFiles: string[];

    onload() {
        registerQuickPreview(this.app, this, MyCustomEditorSuggest, (item) => {
            // - `linktext` can be any string representing a proper internal link,
            //   e.g. "note", "note.md", "folder/note", "folder/note.md", "note#heading", "note#^block-id" etc
            // - `sourcePath` is used to resolve relative links. In many cases, you can just pass an empty string.
            return { linktext: item.file.path, sourcePath: "" };
        });
        // or
        registerQuickPreview(this.app, this, MyCustomSuggestModal, (item) => {
            if (this.excludedFiles.contains(item.path)) {
                // Return `null` when you don't want to show a quick preview for the item.
                return null;
            }
            // Add a `line` parameter to focus on a specific line.
            return { linktext: item.path, sourcePath: "", line: item.cache.position.start.line };
        });
    }
}

```

## 支持开发

如果您发现我的插件有用，请通过给我买杯咖啡来支持我的工作！
