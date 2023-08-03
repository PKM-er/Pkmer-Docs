---
uid: 2023080322230356
title: Obsidian 插件：【Readme】Note Synchronizer
tags: ['obsidian插件', 'readme']
description: 这是一个插件，用于将Obsidian笔记与Anki等基于笔记的软件同步，更严格地遵循Zettelkasten的原则，并将每个Obsidian文件视为一个笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Note Synchronizer

> [!Note] 插件名片
> - 插件名称：Note Synchronizer
> - 插件作者：Songchen Tan
> - 插件说明：这是一个插件，用于将Obsidian笔记与Anki等基于笔记的软件同步，更严格地遵循Zettelkasten的原则，并将每个Obsidian文件视为一个笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tansongchen/obsidian-note-synchronizer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-synchronizer)

## 概述

这是一个插件，用于将Obsidian笔记与Anki等基于笔记的软件同步，更严格地遵循Zettelkasten的原则，并将每个Obsidian文件视为一个笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tansongchen/obsidian-note-synchronizer/master/README.md)
> 

---

## Readme(翻译）

下面是 [[note-synchronizer]] 插件的自述翻译


# Obsidian Anki 同步器

请点击[这里](README.zh.md)查看中文说明文档。

## 特点

- 通过将Anki笔记类型导入为Obsidian笔记模板，支持任意的Anki笔记类型
- Anki笔记与Obsidian笔记、Anki卡组与Obsidian文件夹、Anki标签与Obsidian标签之间存在1:1的对应关系
- 将Obsidian内部链接转换为Markdown链接（Obsidian URL）

该插件有两种工作模式：

- Markdown模式：将Markdown内容原样导入Anki，而不进行HTML渲染。为了在Anki中查看渲染后的内容，您需要安装[Markdown and KaTeX Support](https://ankiweb.net/shared/info/1087328706)或类似的Anki插件以实现实时渲染。
- HTML模式：将渲染后的HTML导入Anki。

## 安装

通过 Obsidian 社区插件市场搜索 "Note Synchronizer" 进行安装。

设置

在运行此插件之前，请确保满足以下要求：

### 启用 Obsidian 插件 "Templates"

该插件依赖于核心插件 "Templates"。您需要启用它才能使该插件正常工作。前往 Obsidian 设置的 "核心插件" 选项卡，启用 "Templates"。

安装和配置Anki Connect

以与其他Anki插件相同的方式安装[Anki Connect](https://ankiweb.net/shared/info/2055492159)。安装完成后，导航到`工具 -> 插件 -> AnkiConnect -> 配置`，粘贴以下文本：

```json
{
  "apiKey": null,
  "apiLogPath": null,
  "webBindAddress": "127.0.0.1",
  "webBindPort": 8765,
  "webCorsOrigin": "http://localhost",
  "webCorsOriginList": ["http://localhost", "app://obsidian.md"]
}
```

重新启动Anki并导航到所需的配置文件。

重新启动Anki并选择要与Obsidian同步的配置文件。目前，您只能选择一个Anki配置文件与Obsidian同步。

使用方法

### 导入笔记类型

运行命令 `Import Note Types` 将所有可用的笔记类型导入到当前存储库的模板文件夹中，为每个笔记类型生成一个模板 markdown 文件。所有生成的模板 markdown 文件都有以下 YAML 前置内容：

```yaml
mid: 16xxxxxxxxxxx
nid: 0
tags: []
date: {{date}} {{time}}
```

其中 `mid` 是表示 Anki 中笔记类型 ID 的数字。如果该笔记类型恰好有3个或更多字段，则第三个字段和之后的所有字段将在 markdown 文件中显示为 `h1` 标题。

### 编辑说明

在使用生成的模板文件创建笔记时，请将第一个字段的内容写入文件名中，将第二个字段放在YAML前置元数据之后，将其他字段放在对应的`h1`标题下方。

Obsidian中组织笔记的方式将在Anki中使用卡组进行镜像。例如，文件`/learning/note.md`将同步到Anki中的`learning`卡组，文件`/learning/project 1/note.md`将同步到Anki中的`learning::project 1`卡组。顶层文件将同步到一个特殊的卡组`Obsidian`中。如果在Anki中不存在应该同步的卡组，将会创建该卡组。

### 同步笔记

运行命令`Synchronize`。如果出现意外行为，请切换到开发者控制台并在那里报告输出结果。



