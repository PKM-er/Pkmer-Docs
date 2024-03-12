---
uid: 20240312193744
title: Obsidian 插件：【Readme】Contextual Sidecar
tags: ['obsidian插件', 'readme']
description: Add a context-dependent sidecar panel.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Contextual Sidecar

> [!Note] 插件名片
> - 插件名称：Contextual Sidecar
> - 插件作者：Matthew Turk
> - 插件说明：Add a context-dependent sidecar panel.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/matthewturk/obsidian-sidecar-panel)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contextual-sidecar)

## 概述

Add a context-dependent sidecar panel.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/matthewturk/obsidian-sidecar-panel/main/README.md)

---

## Readme(翻译）

下面是 [[contextual-sidecar]] 插件的自述翻译

【机翻】

# Obsidian 的侧边栏上下文面板

这是一个插件，可以让您根据 `sidebar-panel` 前置属性的内容，为特定文件显示上下文侧边栏。

这些文件被呈现为来自设置了该属性的文件；这使您可以使用诸如 [obsidian-meta-bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) 之类的插件，创建绑定到父级而不是面板源本身的 `INPUT` 字段。

一个使用案例，激励我制作这个插件的原因是，我经常希望有不同的上下文按钮或元数据输入列表显示在侧边，这样当我编辑文件时，我不必滚动到顶部来更改，例如，会议的参与者。或者，这样我可以有一些按钮，比如“添加另一个 TODO”之类的东西。

![显示侧边栏面板的屏幕截图。](https://cdn.pkmer.cn/covers/contextual-sidecar_2_0.png!pkmer)

## 如何使用

有两种方法可以将侧边栏面板与文件关联起来。第一种方法是在文件中设置属性 `sidecar-panel`（也许在模板中！）以启用它。第二种方法是在标签（例如 `#daily-note`）和侧边栏面板文件（例如 `daily-note-editor.md`）之间添加映射。标签和面板文件之间的映射可以在侧边栏面板的“设置”中完成。当打开并聚焦具有该设置的文件时，右侧面板将包括该侧边栏面板。

例如，如果您的 Vault 中有 `mysidecar.md` 文件，内容如下：

```
`INPUT[number:somenumber]`

`INPUT[list:somelist]`
```

然后另一个文件 `example.md`，属性 `sidecar-panel` 设置为 `[[mysidecar.md]]`，当您打开它时，侧边栏面板将显示该组小部件，关键是！-- 将修改 `example.md` 而不是 `mysidecar.md`。现在您有一个小部件，它将始终可见，可以根据每个文件设置，以保持方便的按钮和其他可见物。

## 多面板文件

可以设置多个级联文件，使得您有多个文件连接成一个辅助文件。可以通过多个标签映射或通过具有标签映射和 `sidecar-panel` 属性来实现。这些文件将按照标签映射的顺序和 `sidecar-panel` 文件的顺序进行连接和显示。

## 路线图

- [ ] 为 [metadatamenu](https://github.com/mdelobelle/metadatamenu) 添加支持，以应用 `sidecar-panel` 属性跨查询的 `fileClass`。
- [x] 添加按标签支持，这样不是所有文件都必须修改其属性才能受益。
- [ ] 更好地支持属性和打开文件的 sidecar 文件的更改。

## 许可证

该模板可在 [MIT许可证](LICENSE) 下使用。请随意修改并使用它来创建您自己的 Obsidian 插件。

# 资助

如果您发现这个插件有用，请考虑捐赠给 [囊性纤维化基金会](https://give.cff.org/)。
