---
uid: 2023080322200519
title: Obsidian 插件：Icon Shortcodes
tags: ['效率', '编辑器', 'obsidian插件', 'readme']
description: 插入 emoji 表情符号和带短码的自定义图标。（图标支持多种格式：.bmp, .png, .jpg, .jpeg, .gif, .svg, and .webp)）
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Icon Shortcodes

> [!Note] 插件名片
> - 插件名称：Icon Shortcodes
> - 插件作者：AidenLx
> - 插件说明：插入 emoji 表情符号和带短码的自定义图标。（图标支持多种格式：.bmp, .png, .jpg, .jpeg, .gif, .svg, and .webp)）
> - 插件分类：[' 效率 ', ' 编辑器 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidenlx/obsidian-icon-shortcodes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-icon-shortcodes)

## 概述

插入 emoji 表情符号和带短码的自定义图标。（图标支持多种格式：.bmp, .png, .jpg, .jpeg, .gif, .svg, and .webp)）

![Icon Shortcodes](https://cdn.pkmer.cn/covers/obsidian-icon-shortcodes.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aidenlx/obsidian-icon-shortcodes/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-icon-shortcodes]] 插件的自述翻译

# 图标短代码

![演示](https://user-images.githubusercontent.com/31102694/141667129-a6bd215d-cd12-4663-bb95-364c3f3c80c9.gif)

使用短代码插入表情符号和自定义图标

- 轻松导入和管理自定义图标（支持 `.bmp`、`.png`、`.jpg`、`.jpeg`、`.gif`、`.svg` 和 `.webp` 格式）
- 在编辑器中渲染自定义图标（通过 [Codemirror选项](https://github.com/nothingislost/obsidian-codemirror-options) 支持传统编辑器）
- 内置 Unicode 13.1 表情符号，支持 [Lucide](https://lucide.dev)
- 可通过下载使用 [Font Awesome](https://fontawesome.com/) 和 [Remixicon](https://github.com/Remix-Design/RemixIcon)
- [API](#for-developer) 可供其他插件集成
- 模糊搜索：输入 `:book` 以查找📖(`:open_book:`) 和📗(`:green_book:`)

灵感来自 [obsidian-emoji-shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes)、[obsidian-icon-folder](https://github.com/FlorianWoelki/obsidian-icon-folder)、[obsidian-icons](https://github.com/visini/obsidian-icons-plugin) 和 [remark-emoji](https://github.com/rhysd/remark-emoji)。

注意：自 v0.7.0 起，为了减小捆绑包大小并加快加载速度，不再将 Font Awesome 和 RemixIcon 作为内置图标包捆绑。请前往设置选项卡下载它们。

注意：此插件可能与 [obsidian-emoji-shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes) 冲突，请在使用此插件之前禁用它。

如何使用

### 插入图标

该插件支持 GitHub 喜欢的表情符号简码，完整列表可以在这里找到：[表情符号速查表](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

- 要在编辑器中插入图标，请输入 `:`/`：：`，然后输入搜索查询以获取建议，例如 `:book`
  - 对于多个关键词，请在单词之间添加 `+`，例如 `:open+book`
  - 您可以在设置选项卡中禁用建议功能
- 默认情况下，表情符号以字符形式插入，而不是简码形式，这在编辑器和预览中都可见，您可以在设置选项卡中更改此行为

## 添加自定义图标

<https://user-images.githubusercontent.com/31102694/141667026-cbb0e668-ecbd-493e-9648-27ca7dfaa118.mp4>

> 支持的图标格式：`.bmp`、`.png`、`.jpg`、`.jpeg`、`.gif`、`.svg`、`.webp`

1. 进入设置选项卡
2. 在“自定义图标”部分，输入新图标包的名称，并点击添加按钮（最好简短，作为图标包的 ID 和所有图标简码的前缀）
3. 添加新的图标包条目，拖动支持的文件或点击“选择文件导入”按钮选择文件以导入自定义图标
4. 您可以通过点击“管理”图标来访问图标管理器。每个图标都有以下按钮：
   - “星星”：去除“_1”后缀，在存在多个备选图标时很有用
   - “删除”、“重命名”

## 备份和恢复自定义图标

> 需要 v0.6.0+ 版本

自 v0.6.0 版本开始，所有自定义图标都存储在配置目录（通常是 `.obsidian/icons`）下的 `icons` 文件夹中，您可以：

- 打开文件夹（仅限桌面版）
- 将所有图标/选定的图标包备份到 zip 文件中（将存储在根目录下的 vault 文件夹中）
- 从 zip 文件中恢复图标

![custom-icon-buttons](https://user-images.githubusercontent.com/31102694/143665662-76ed8478-2e81-4006-a8a9-696258a268ce.png)

![custom-icon-backup-pack-button](https://user-images.githubusercontent.com/31102694/143665678-2ff7bf4c-3f21-41b1-87f9-b22e41895d59.png)

## 图标样式化

为了自定义图标以改变它们的颜色、大小等，您应该创建一个 CSS 片段。

1. 进入 设置 -> 外观 -> CSS 片段
2. 打开 CSS 片段选项，然后点击文件夹导航到它的文件夹。
3. 创建一个名为 icons.css 的新文件
4. 用您喜欢的文本编辑器打开 icons.css
5. 添加以下内容：

   ```css
   .isc-icon > *:first-child {
     /** 对所有图标的更改。 */
   }
   .isc-icon.icon-emoji-icon > *:first-child {
     /** 对表情图标的更改。 */
   }
   .isc-icon.isc-fas > *:first-child {
     /* 对特定图标包中的图标的更改 */
     /* （在此示例中为font awesome soild） */
   }
   ```

6. 返回 设置 -> 外观 -> CSS 片段
7. 点击重新加载按钮
8. 一个名为 "icons" 的按钮应该出现，打开它。

您的更改现在将被应用，并且您可以在需要时编辑该文件。

对于开发者

### 使用 API

1. 在你的插件目录中运行 `npm i -D @aidenlx/obsidian-icon-shortcodes`
2. 导入 API（添加 `import { getApi } from "@aidenlx/obsidian-icon-shortcodes"`）
3. 使用 API
   1. 检查是否已启用：`getApi() !== undefined` 或 `getApi(YourPluginInstance) !== undefined`
   2. 访问 API：`getApi()` / `getApi(YourPluginInstance)`

要查看所有公开的 API 方法，请参考 [api.ts](src/typings/api.ts)。

## 兼容性

所需的 API 功能仅适用于 Obsidian v1.0.0+。

## 安装

### 来自 BRAT

要安装预发布版本，请下载并启用 [Obsidian42 BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件，添加 beta 存储库 `aidenlx/obsidian-icon-shortcodes`，然后让 BRAT 检查更新。

### 来自 GitHub

1. 从 GitHub 存储库的 Releases 部分下载最新版本
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/obsidian-icon-shortcodes`
3. 重新加载 Obsidian
4. 如果提示安全模式，您可以禁用安全模式并启用插件。
   否则，前往设置，第三方插件，确保安全模式关闭，
   然后从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您应该能够按下 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。

### 来自 Obsidian

> 尚不可用

1. 打开“设置”>“第三方插件”
2. 确保安全模式处于**关闭**状态
3. 点击“浏览社区插件”
4. 搜索此插件
5. 点击“安装”
6. 安装完成后，关闭社区插件窗口，插件即可使用。



