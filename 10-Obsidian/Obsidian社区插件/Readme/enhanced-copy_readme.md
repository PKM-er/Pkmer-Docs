---
uid: 2024042221321839
title: Obsidian 插件：【Readme】Enhanced Copy
tags: ['obsidian插件', 'readme']
description: 复制您的选择并添加一些编辑以粘贴到其他markdown软件中。允许在阅读视图中保留markdown，编辑时删除wikilinks，从锁定的画布复制，等等！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Enhanced Copy

> [!Note] 插件名片
> - 插件名称：Enhanced Copy
> - 插件作者：Mara-Li
> - 插件说明：复制您的选择并添加一些编辑以粘贴到其他 markdown 软件中。允许在阅读视图中保留 markdown，编辑时删除 wikilinks，从锁定的画布复制，等等！
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Lisandra-dev/obsidian-enhanced-copy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?enhanced-copy)

## 概述

复制您的选择并添加一些编辑以粘贴到其他 markdown 软件中。允许在阅读视图中保留 markdown，编辑时删除 wikilinks，从锁定的画布复制，等等！

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lisandra-dev/obsidian-enhanced-copy/master/README.md)

---

## Readme(翻译）

下面是 [[enhanced-copy]] 插件的自述翻译

# 在 Markdown 中复制阅读内容

在保持 Markdown 格式的同时复制阅读视图中的选定内容

## 🛠️ 使用方法

- 选择您想要复制的文本
- 打开命令面板
- 选择 `Copy selected text`

> **注意**
> 目标是替换 Obsidian 的原生复制功能。您可以将命令设置为 <kbd>CTRL</kbd> + <kbd>C</kbd>（在 MacOS 上为 <kbd>⌘</kbd>+<kbd>C</kbd>）
> 有些选择在 Obsidian 的原生复制中不起作用，但我没有找到在插件中处理原生复制功能的方法。

## ⚙️ 设置

您可以在设置中调整内容复制的方式。

首先，您需要设置要使用的视图模式。您可以在以下选项中选择：

- `reading`：仅编辑阅读视图中选择的文本
- `editing`：仅编辑编辑视图中选择的文本
- `all`：选择的文本将在两个视图中进行编辑

您还可以选择为每种复制模式添加一个命令。它将为以下内容创建一个命令：

- 阅读视图（带有 checkCallback）
- 编辑视图
- 非 markdown 视图（画布，数据库插件...）

最后，您可以选择覆盖默认复制（从菜单和 <kbd>CTRL</kbd>/<kbd>⌘</kbd> + <kbd>C</kbd>）。对于移动设备非常有用！

> [!注意]
> 画布上默认的复制功能已禁用，因此我建议您使用命令分隔符为“其他”视图设置热键/按钮，并在 markdown 视图（阅读和 LP/source 模式）上使用默认复制。

阅读视图和编辑视图具有大致相同的设置，但您需要分别设置它们。这将允许为每个视图设置不同的复制设置。

您可以为每个视图启用覆盖原生复制功能，因此它可以在阅读视图中禁用，并在编辑视图中启用（反之亦然）。

您可以创建“配置文件”，这将在重新加载 Obsidian 后添加一个命令，因此您可以为在 Discord 上复制创建一个配置文件，并在某些时候使用它。

### 通用设置

这些设置对两个视图都是相同的。由于它们对每个视图都是分开的，如果您想在两个视图中进行一些编辑，您需要将它们设置两次。

这是有意为之的，以防止在编辑视图中使用插件时出现意外，但不希望进行一些更改。

> **信息**
> 第一个选项卡中的“复制”按钮将允许您将一个视图的设置复制到另一个视图。

- 您可以更改链接的外观：
  - `保留`：不更改链接（因此它们将以 `[link](url)` 格式显示）
  - `删除所有`：删除所有链接，仅保留别名（因此 `[link](url)` 将变为 `link`）
  - `仅删除内部链接`：仅删除内部链接（因此 `[link](url)` 将变为 `link`，但 `[link](https://example.com)` 将保持为 `[link](https://example.com)`）
- 同样，您可以更改脚注设置：
  - `保留`：不更改脚注（因此它们将以 Obsidian turndown 的奇怪格式显示：`footnote[[1]](#fn-1-xxx)`）
  - `删除所有`：删除所有脚注，仅保留别名（因此 `footnote[[1]](#fn-1-xxx)` 将变为 `footnote`）
  - `格式为 [^1]`：将 `footnote[[1]](#fn-1-xxx)` 转换为 `footnote[^1]`
    这些设置还将修复“markdown 内容”，即文档末尾的脚注。

    > **信息**
    > 使用**格式**选项，如果您复制多个脚注，它们将变为 `[^1]:` `[^2]:` 等，而不是编号列表！

- 非常规的 markdown：
  - 高亮：删除高亮文本周围的 `==`
  - 修复 callout：
    - `Obsidian格式`：保持相同格式
    - `转换为粗体`：将所有内容转换为块引用，并将类型转换为粗体：`> [!info]` 将变为 `> **信息**`（类似于 GitHub Callout）
    - `简单块引用`：删除类型，保留标题并转换为块引用。
- 其他：
  - 严格的换行：在每行末尾添加两个空格
- 正则表达式替换：您可以通过打开一个模态框来添加更多替换内容。请注意，替换将在**所有其他更改之后**进行。

### 不常见的设置

#### 阅读视图

- 您可以复制为 HTML，但这将禁用所有其他选项。
- 空格数量：默认情况下，turndown 会将制表符转换为 4 个空格。您可以在这里更改此大小。
- 将 wikilinks 转换为 Markdown 链接：将 `[[link]]` 转换为 `[link](link)`。需要转换链接（如在阅读视图中）。
- 将制表符转换为空格并选择大小

## 📝 限制

- 由于某种奇怪的原因，引用块/列表/标注的第一行在 HTML 中并没有被完全正确地选中。如果你只想格式化其中的一部分，你需要选择前一行（或后一行）。你可以使用“不可见”字符，比如 `$~~$`。
- 不支持 Mathjax 复制（因为在阅读视图中无法选择它们）。
- 在阅读视图中，已经“HTML 编写”的内容不会被复制为 HTML（比如 `<b>…</b>`）。它们会被复制为 markdown，或者只有文本会被复制（如果不是基本的 HTML）。你可以通过在元素上使用 `data-type="html"` 属性来防止这种情况发生。例如，`b data-type="html"` 会被复制为 `<b>…</b>`。
- 选择带有图片的文本将复制图片的名称。如果你想复制图片，你需要选择图片本身（而不是文本）。

## 📥 安装

- [ ] 从 Obsidian 的社区插件中安装
- [x] 使用 BRAT 与 `https://github.com/Lisandra-dev/obsidian-enhanced-copy`
- [x] 从发布页面：
  - 下载最新版本
  - 在 `.obsidian/plugins/` 路径下解压 `obsidian-enhanced-copy.zip`
  - 在 Obsidian 设置中重新加载插件
  - 启用插件

## 🤖 开发中

要对此插件进行更改，请首先确保已安装了依赖项。首先，不要忘记您需要 Node。项目中使用的包管理器是 `pnpm`，因此您需要全局安装它。

```
npm i pnpm -g
pnpm install
```

要启动带有启用模式的插件构建，请运行以下命令：

```
pnpm run dev
```

> **注意**
> 如果您尚未安装热重载插件，系统将提示您安装。在开始热重载之前，您需要在 Obsidian vault 中启用该插件。您可能需要刷新插件列表才能看到它。
> 要开始发布构建，请运行以下命令：

```
pnpm run build
```

> **注意**
> 您可以使用 `.env` 文件，添加键 `VAULT_DEV` 来指定 Obsidian（开发）vault 的路径。这将允许您在不每次指定 vault 路径的情况下测试您的插件。

### 📤 导出

您可以使用 `npm run export` 命令将您的插件导出到 Obsidian 主库。为此，您需要包含以下内容的 `.env` 文件：

```dotenv
VAULT=path/to/main/vault
VAULT_DEV=path/to/dev/vault
```

### 🎼 语言

- [x] 英语
- [x] 法语

要添加翻译：

- Fork 该存储库
- 在 `src/i18n/locales` 文件夹中以语言名称命名添加翻译（例如：`fr.json`）
- 复制 [`en.json`](./src/i18n/locales/en.json) 文件的内容到新文件中
- 翻译内容
- 创建一个拉取请求

---

<sub>此插件由 生成</sub>
