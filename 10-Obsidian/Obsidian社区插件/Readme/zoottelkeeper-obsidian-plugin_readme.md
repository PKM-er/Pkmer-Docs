---
uid: 2023080322295671
title: Obsidian 插件：Zoottelkeeper Plugin
tags: ['笔记文件处理', 'obsidian插件', 'readme']
description: 会自动更新所有文件夹的索引文件：如果你创建/删除/移动一个笔记，索引文件将自动更新。可以自定义特殊的文件夹页面
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Zoottelkeeper Plugin

> [!Note] 插件名片
> - 插件名称：Zoottelkeeper Plugin
> - 插件作者：Akos Balasko
> - 插件说明：会自动更新所有文件夹的索引文件：如果你创建/删除/移动一个笔记，索引文件将自动更新。可以自定义特殊的文件夹页面
> - 插件分类：[' 笔记文件处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/akosbalasko/zoottelkeeper-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zoottelkeeper-obsidian-plugin)

## 概述

会自动更新所有文件夹的索引文件：如果你创建/删除/移动一个笔记，索引文件将自动更新。可以自定义特殊的文件夹页面

![Zoottelkeeper Plugin](https://cdn.pkmer.cn/covers/zoottelkeeper-obsidian-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/akosbalasko/zoottelkeeper-obsidian-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[zoottelkeeper-obsidian-plugin]] 插件的自述翻译

# Obsidian Zoottelkeeper

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/akosbalasko/zoottelkeeper-obsidian-plugin?style=for-the-badge&sort=semver)](https://github.com/akosbalasko/zoottelkeeper-obsidian-plugin/releases/latest)

![GitHub All Releases](https://img.shields.io/github/downloads/akosbalasko/zoottelkeeper-obsidian-plugin/total?style=for-the-badge)

## v.0.18.0 的变化

- 改进了包含/排除文件夹功能：现在需要使用绝对路径，不论其第一个字符是什么（可以是 '/'，或者只是以要包含/排除的文件夹名称开头）。
- 引入了特定字符：如果您在文件夹末尾输入 '*'，则表示该文件夹及其子文件夹（递归地）将被包含或排除。

假设您的保险库根目录下有以下目录：

```
Notes
Notes/Daily
Articles
Articles/Science
```

如果您想要包括 Notes 目录及其内部的 Daily 目录，并且还要包括 Articles 目录，但是要排除 Articles/Science 目录，您应该将 include 属性设置为：

```
Notes/* 
Articles
```

并将 exclude 属性设置为：

```
Articles/Science
```

最新版本（v0.17.0）的更新内容：

- 可以为索引文件设置**模板**选项
- 索引链接中的数字按正确顺序排序（bug：<https://github.com/akosbalasko/zoottelkeeper-obsidian-plugin/issues/45）>
- 前置元数据分隔符可配置（默认为 '---'）

最新版本（v0.16.1）有很多你们提出的新功能！从 0.16.1 版本开始，你可以：

- 在索引文件内容中使用**节**（'---' 行），它们在内容更新时不会被删除
- 标签中的**方括号**是可选的
- 在预览中**嵌入子索引笔记**（在配置中的“在预览中嵌入子索引内容”选项）
- 选择要**包含或排除的文件夹**（由插件处理）
- 手动**触发索引**（在配置中查看“立即生成索引”按钮）
- 对索引链接进行**排序**（升序或降序）（在配置中查看“索引链接顺序”）
- 可以为每一行设置**表情符号**，文件夹和文件可以分别表示（在配置中的“表情符号”部分）

新功能（v0.10.0）

**可自定义的索引注释**：从现在开始，您可以自定义索引文件，不会更新整个内容，而只会更新注释列表（如果设置了标签元数据，则还会更新标签元数据）。

为了实现这一点，我添加了两个额外的自动生成的文本，用于将要更新的注释列表与索引文件的其他部分分开。它们只在编辑模式下显示。

它们分别是：

- “Zoottelkeeper：自动生成的索引文件列表的开头”
- “Zoottelkeeper：自动生成的索引文件列表的结尾”

请不要删除它们。

## 1. 总体思路

遵循 Nick Milo 和 [LYT](https://www.linkingyourthinking.com/)（链接您的思维）概念的思路，一种令人惊叹的方法可以通过使用**内容地图**（MOCs）来为您的文件、文件夹和思维带来结构。因为尽管 Obsidian 通常建立在超越文件夹结构的思想上，但您通常仍然需要一种系统来存储所有那些有价值的见解。

1. 它是如何工作的？
ZoottelKeeper 监视以下内容：

- 在 rootFolder 及其子文件夹中创建文件
- 在 rootFolder 及其子文件夹中删除文件
- 将文件从 rootFolder 移动到子文件夹中
- 在子文件夹之间移动文件

### 2.1 简介

因此，Zoottelkeeper 的想法是帮助您自动生成这些地图的基本形式。它通过索引位于文件夹中的所有文件和文件夹，从而创建文件与其所有内容之间的链接。

![image](https://user-images.githubusercontent.com/46029522/126865703-c3a3d12f-a88f-42d1-806a-415d9e1afa53.png) --> ![image](https://user-images.githubusercontent.com/46029522/126865758-883888d3-8cf1-496a-aa04-58ae6a4c69a6.png) --> ![image](https://user-images.githubusercontent.com/46029522/126865823-84272e62-8f4f-417c-8af1-e624a02963be.png)

**(1)** 显示当前文件夹结构。该插件在每个文件夹中生成一个索引文件，显示其包含的所有文件和文件夹。主文件夹显示了一个示例列表 **(2)**，但子文件夹包含类似的文件。根据您的偏好，每个索引文件都被标记 **(3)**。然后，这导致了图形视图，其中显示了“文件夹” **(4)**（实际上是连接的索引文件，但看起来像文件夹）及其相应的文件 **(5)**。

### 2.2 这其中有什么很酷的地方吗？

到目前为止，我们已经见过这种情况了。真正好的地方是，如果我现在将*文件夹 B*移动到*文件夹 A*中**(6)**，那么索引文件将会自动更新**(7)**，从而得到所需的图形视图**(8)**。

![image](https://user-images.githubusercontent.com/46029522/126866100-be3717da-cae6-4550-9e52-7719d00e49f7.png) --> ![image](https://user-images.githubusercontent.com/46029522/126866120-b2b8d0b1-2334-4be9-88d8-84bb825705a6.png) --> ![image](https://user-images.githubusercontent.com/46029522/126866136-ba068748-5698-4ca7-aeff-562ab0c435a0.png)

### 2.3 免责声明和其他使用的插件

您可能已经注意到，在视图**(1)**和**(6)**中，您无法看到文件夹中的索引文件，这是因为我没有为索引文件添加前缀（因此它的名称与文件夹相同），并且我还使用了**Folder Note**插件，只是为了隐藏文件夹中的文件，当它们的名称与文件夹相同时，点击文件夹时显示它们（这对于这里的 MOC 目的也非常好）。

请注意，手动创建的文件夹注释可能会被 Zottelkeeper 覆盖，请使用**Templater**插件设置您的模板。

这个插件能替代思考结构的需要吗？不。但它可以减轻你在想要将文件分配到一个广泛的类别时必须进行的繁琐工作，更重要的是，它将减轻你手动浏览所有文件并在主题变得太大或想要将其移动到其他地方时更改它们的“父类别”的痛苦。基本上，你只需要将事物保存在它们应该属于的位置，插件将为你绘制出基本结构。然后，你可以根据需要添加任何 MOC、索引或标签逻辑。

## 3. 安装和设置

与其他插件类似，可以在 Obsidian 中下载该插件。然后，在启用插件后，您将能够在其配置界面中配置 Zoottelkeeper。

![image](https://user-images.githubusercontent.com/46029522/126864195-4a8c7dd6-54ca-435e-a0bf-5a6520083609.png)

### 3.1 选择您的列表样式

您可以选择以下三种不同类型的列表样式：

- 纯黑曜石链接
- 列表项（圆点）
- 带有复选框的链接

### 3.2 选择索引前缀

根据您的偏好，您可以为索引文件设置任何前缀（或者不设置前缀）。请注意，前缀必须是唯一的，否则，具有相同笔记名称的普通笔记可能会被识别为索引文件，在这种情况下它们将被更新！

### 3.3 启用元标签

您可以选择将 YAML 元标签添加到自动生成的索引文件中。

### 3.4 设置自定义元标签

您可以设置一个或多个自定义元标签。由于它们以 YAML 格式显示，因此您不需要添加“＃”。

如果要设置多个标签，请确保用逗号分隔它们。

### 3.5 其他事项

- 文件和文件夹不再在索引文件中列出。

### 3.6 模板

1. 安装 Templater 插件（<https://github.com/SilentVoid13/Templater）>
2. 在 Templater 的设置页面中：
   1. 设置模板文件夹
   2. 创建一个模板文件（基于下面的示例）并将其分配给由 Zottelkeeper 处理的文件夹
   3. 设置 Templater 在文件创建时触发
3. 在 Zoottelkeeper 的设置页面中，指定模板位置的完整路径，例如 'templates/zoottel_template.md'。该模板可以由 **Templater** 插件管理。

为了防止 Zoottelkeeper 的元数据在实际创建的文件中泛化，请使用以下模板作为基础，仅在文件名以父文件夹的名称结尾时（因此是索引文件/文件夹笔记），才放置 Zoottelkeeper 的占位符：

```markdown
---

tags: 

---

<%* if (tp.file.title.endsWith(tp.file.folder())) { %>

%% Zoottelkeeper: 自动生成的索引文件列表开始  %%
%% Zoottelkeeper: 自动生成的索引文件列表结束  %%

<%* } %>

警告：请确保在将占位符（以 %% Zottelkeeper 开头的行）粘贴到 Obsidian 中时，每行末尾的 '%%' 字符之前有两个空格，否则它们将无法被识别，因此整个索引文件将被重新生成，删除自定义文本！
  
```

## 发布说明

感谢支持和反馈

欢迎提供任何反馈或功能请求，请随时在 Zoottelkeeper 的存储库页面上 [创建问题](https://github.com/akosbalasko/zoottelkeeper-obsidian-plugin/issues/new)！

如果您喜欢这个插件，请通过在 GitHub 上为它点亮一颗星来让我知道：[![GitHub Repo stars](https://img.shields.io/github/stars/akosbalasko/zoottelkeeper-obsidian-plugin?style=social)](https://github.com/akosbalasko/zoottelkeeper-obsidian-plugin/stargazers)

或者您可以

免责声明

与每个插件一样，存在数据丢失的风险，我不提供任何保证或承担任何责任。
