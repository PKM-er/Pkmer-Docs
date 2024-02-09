---
uid: 2023120719241175
title: Obsidian 插件：【Readme】Canvas CSS class
tags: ['白板相关', '样式工具', 'obsidian插件', 'readme']
description: 给画布添加一个CSS类，还有其他属性。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Canvas CSS class

> [!Note] 插件名片
> - 插件名称：Canvas CSS class
> - 插件作者：Lisandra-dev
> - 插件说明：给画布添加一个 CSS 类，还有其他属性。
> - 插件分类：[' 白板相关 ', ' 样式工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Lisandra-dev/obsidian-canvas-css-class)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-css-class)

## 概述

给画布添加一个 CSS 类，还有其他属性。

![Canvas CSS class](https://cdn.pkmer.cn/covers/canvas-css-class.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lisandra-dev/obsidian-canvas-css-class/master/README.md)
>

---

## Readme(翻译）

下面是 [[canvas-css-class]] 插件的自述翻译

# Canvas CSS Class

这个插件有两个功能：

- 在每个画布文件的 DOM 中添加类 `.canvas-file`，并添加属性 `[data-canvas-path="filepath"]`
- 允许您使用模态输入框向画布添加自定义 CSS 类。显然，您也可以使用插件的设置或命令模态框来删除 CSS 类。

---

是的，就是这样。

> **注意**
> 实际上，该插件不会在您的画布中加载任何 CSS。您需要编写自己的 CSS，并将其添加到 `.obsidian/snippets` 文件夹中。
> 在 [这里](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) 获取有关片段的更多信息。

# 用法

该插件将在命令模态框中添加两个命令：

- `添加CSS类`：向当前画布文件添加 CSS 类
- `移除CSS类`：从当前画布文件中移除 CSS 类
- `在body和workspace之间切换追加模式`：允许选择插件的行为。默认情况下，插件将 CSS 类添加到画布文件的 `workspace-leaf-content` 中。有 3 个命令允许更改此行为：
  - `快速切换body和view-content`：反转当前画布的行为。
  - `切换到view-content模式`：将当前画布转换为 workspace-leaf-content 行为。
  - `切换到body模式`：将当前画布转换为 body 行为。

您还可以使用设置来向当前画布文件添加或移除 CSS 类。

此外，设置还允许您使用文件的文件路径为未打开的画布文件添加 CSS 类。即使您没有打开它，也可以向画布文件添加 CSS 类。

![](https://cdn.pkmer.cn/covers/canvas-css-class_2_0.png!pkmer)

> **警告**
> 如果编辑了文件路径（即移动或重命名文件），则 CSS 类将不再应用。您将需要在设置中编辑文件路径。

在设置中，您还可以：

- 移除所有 CSS 类
- 移除特定的 CSS 类
- 编辑 CSS 类（重命名）
- 在 body 和 workspace 之间更改添加行为

![](https://cdn.pkmer.cn/covers/canvas-css-class_2_1.png!pkmer)

> **注意**
> - 您不需要将 `.canvas` 添加到文件路径中。插件会为您添加
> - 对于类名，当添加 CSS 类时，`.` 将自动添加。
> - 同样地，类名中的空格将转换为 `-`，并转换为小写。

附加行为

默认情况下，该插件将向画布文件的 `.workspace-leaf-content` 添加 css 类，但可以通过插件的设置进行更改。

这样在切换焦点文件时可以更好地兼容，因为 css 类将被保留。问题是，当您导出为图像时，css 类不会被保留和导出。

将行为更改为 Obsidian 的 `body`，可以在导出图像时保留 css 类，但如果您切换焦点文件，css 类将被删除。

我的建议：

- 使用宏在导出图像时切换到 `body` 行为（您可以使用 [Quick Add](https://github.com/chhoumann/quickadd) 实现）。注意：您需要添加延迟，至少 30 秒，以使其正常工作。
- 使用 [commander](https://github.com/phibr0/obsidian-commander) 创建一个按钮，以快速在两种行为之间切换。

> **注意**
> 如果您将相同的类添加到同时打开的两个不同文件中，一个在 body 上，另一个在 view-content 上，该类将被“全局”应用，因此在此处不会发生焦点移除。

# 安装

- 使用社区插件管理器安装插件（尚未添加）
- 使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 使用此链接：`https://github.com/Lisandra-dev/obsidian-canvas-css-class`
- 手动解压缩最新版本到 `.obsidian/plugins` 文件夹中。

# :robot: 开发中

你可以使用 npm 帮助我开发插件！

- 首先使用 git clone `git@github.com:Lisandra-dev/canvas-css-class.git` 将项目克隆到你的电脑上
- 进入 `canvas-css-class` 目录
- 运行 `npm install`
- 运行 `npm run dev` 以在 Obsidian 中实时开发（你需要在 `.obsidian/plugins` 中安装插件）以查看实时更改。由于可能会破坏 Obsidian Sync，我建议你使用一个测试库。
- 运行 `npm run build` 以构建插件。

一些注意事项：

- 我使用 Conventional Commit 生成提交消息，请遵守格式！
- 不要忘记记录你的函数！

我使用 i18n 来为插件添加翻译。如果你想帮助我翻译插件，可以按照以下步骤进行：

- [Fork这个项目](https://github.com/Lisandra-dev/obsidian-canvas-css-class/fork)
- 克隆新的 fork 到你的电脑上，或者用 Github Dev 打开它（将 URL 中的 `.com` 替换为 `.dev`）
- 创建一个名为 `translation` 的新分支
- 在 `plugin/i18n/locales/` 文件夹中克隆 `en.ts` 文件，并将其重命名为语言代码（例如 `fr.ts` 表示法语）
- 翻译文件
- 在 [index](plugin/i18n/index.ts) 中：
    1. 使用 `import <language> from "./locales/<language>";` 导入语言文件
    2. 在编辑 localeMap 之前，你需要知道 Obsidian 在你的语言中使用的确切名称。你可以使用 `<% tp.obsidian.moment.locale() %>`（如果你有 templater）或者打开开发者控制台（使用 CTRL+MAJ+I）并输入 `moment.locale()` 来找到它。
    3. 使用语言代码和语言名称编辑 `LocaleMap`。你需要有 `obsidian-code-language : language`（例如 `fr : french`，或者对于中文 `"zh-cn":cn`）。

- 提交你的更改并将其推送到你的 fork
- 创建一个新的 pull request 到主项目


---

如果你觉得这个插件不错，可以给我买杯咖啡：<br/>
