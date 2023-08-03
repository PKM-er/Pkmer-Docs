---
uid: 20230803231105
title: Obsidian 插件：Tagged Documents Viewer
tags: ['obsidian插件', 'readme']
description: 打开一个模态窗口，其中包含所有包含特定标签或标签的文档的可滚动内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232457
---

# Obsidian 插件：Tagged Documents Viewer

> [!Note] 插件名片
> - 插件名称：Tagged Documents Viewer
> - 插件作者：Marcus Geduld
> - 插件说明：打开一个模态窗口，其中包含所有包含特定标签或标签的文档的可滚动内容。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mgeduld/obsidian-tagged-documents-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-tagged-documents-viewer)

## 概述

打开一个模态窗口，其中包含所有包含特定标签或标签的文档的可滚动内容。

![Tagged Documents Viewer](https://cdn.pkmer.cn/covers/obsidian-plugin-tagged-documents-viewer.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mgeduld/obsidian-tagged-documents-viewer/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-plugin-tagged-documents-viewer]] 插件的自述翻译

# Obsidian 标签文档查看器插件

关于

该插件允许您在一个单独的可滚动模态框中查看具有给定标签或一组标签的所有文档。我可以想象出这个插件的各种用途，但我创建它是为了一个特定的工作流程，我每个工作日都会记录日志，使用标签来链接重复出现的主题。然后，我可能会发现我想要浏览我曾经写过的关于 CSS 的所有内容（例如），而不必逐个点击每个文档。

![image modal](./images/modal.png)

使用方法

有两种使用插件的方式：

1. 通过点击标签。这将打开模态框，显示包含该标签的所有文档的内容。在内容上方，模态框的顶部，您会看到一个文本输入框，您可以通过添加更多的标签来修改显示的文档。
2. 通过点击带有井号图标的带子，这将弹出文本输入框。您可以在其中输入任何标签，然后按 ENTER 键或点击 OK 按钮来显示匹配的文档。

在输入标签列表时，请使用空格进行分隔，例如 `home cooking food`。不要包含井号符号。

要排除某些文档的显示，可以在标签前加上感叹号。例如，输入 `programming code !javascript` 将显示包含标签 `#programming` 或 `#code` 的所有文档，*但不包含* 同时包含 `#javacript` 的文档。

点击任何文档的标题将关闭模态框并跳转到该文档。

## 设置

有三个可切换的设置：

- **显示带标签图标**（默认开启）。将此设置关闭将会从带带标签的带子中移除标签图标。
- **点击时打开模态框**（默认开启）。将此设置关闭将会禁用在点击标签时打开模态框。
- **需要按下 Alt/Option 键**（默认关闭）。将此设置开启将会使模态框只在按住 ALT 或 OPTION 键的同时点击标签时打开。

![图像设置](./images/settings.png)

## 可能的未来发展

- 更复杂的查询，例如允许搜索 `(home AND cooking) !pasta` 这样的查询，可能还可以允许日期范围的查询，以便用户可以搜索所有在 2021 年之前写的带有标签 `taxes` 的文档。
- 排序选项
- 将可滚动内容保存为新文档
- 显示文档创建日期
- 在模态框中编辑文档的能力
- 在关闭模态框时保存模态框状态的能力
- 保存查询的能力
- 允许在文本输入中输入带或不带井号的标签
- 允许使用通配符，例如 `work-*` 将显示包含 `#work-project-ongoing` 或 `#work-project-completed` 的文档。



