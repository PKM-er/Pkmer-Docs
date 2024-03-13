---
uid: 2024031219324689
title: Obsidian 插件：【Readme】PDF++
tags: ['obsidian插件', 'readme']
description: The most Obsidian-native PDF annotation tool ever.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】PDF++

> [!Note] 插件名片
> - 插件名称：PDF++
> - 插件作者：Ryota Ushio
> - 插件说明：The most Obsidian-native PDF annotation tool ever.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RyotaUshio/obsidian-pdf-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-plus)

## 概述

The most Obsidian-native PDF annotation tool ever.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RyotaUshio/obsidian-pdf-plus/main/README.md)

---

## Readme(翻译）

下面是 [[pdf-plus]] 插件的自述翻译

【机翻】

# Obsidian PDF++

这是一个用于改善 PDF 体验的 [Obsidian.md](https://obsidian.md) 插件。具体来说：

- 它将 PDF 文件中的反向链接转换为高亮注释，即您可以**通过链接到文本选择来使用高亮注释注释 PDF 文件**。
- 或者，您可以直接向 PDF 文件添加注释，以便在 Obsidian 之外也可见。
- 此外，它为内置的 PDF 查看器和 PDF 嵌入添加了许多**便利性改进**。因此，即使您不将其用作注释工具（甚至可以关闭注释功能！），它也很有用。

PDF++ 之所以脱颖而出，是因为具有以下特点：

- PDF++ 充当**Obsidian 本机 PDF 查看器的补充而非替代品**。它允许您将边注作为纯 markdown，因此只要 Obsidian 存在，即使插件停止工作，您也不会丢失注释。与 [Annotator](https://github.com/elias-sundqvist/obsidian-annotator) 不同，即使此插件将来停止工作，也不会留下一堆无法阅读的 JSON。
- PDF++ 使 Obsidian 成为**一个独立的 PDF 注释工具**。您可以使用 Obsidian 的丰富 markdown 编辑器无缝地注释您的 PDF，而无需在 Obsidian 和外部应用程序（如 Zotero 或 Marginnote）之间切换。
- 单个 PDF 的注释不再局限于单个文件，**可以分布在整个 vault 中**。它建立了一种新颖的、*Obsidianic* 的 PDF 注释方式。
- PDF++ 除了*可选的* `&color=...`/`&rect=...` 链接表示法之外，不引入依赖于插件的语法。

🚀 [安装](#installation)<br>
📖 [阅读文档](https://ryotaushio.github.io/obsidian-pdf-plus/)（注意：仍在进行中！）<br>
💬 [提问](https://github.com/RyotaUshio/obsidian-pdf-plus/discussions)<br>
❗ [报告错误](https://github.com/RyotaUshio/obsidian-pdf-plus/issues/new/choose)（提示：当某些功能不起作用时，请首先通过运行 `重新加载应用程序而不保存` 命令重新启动 Obsidian。）

> [!note]
> - 如果您喜欢这个插件，请不要忘记给这个存储库加星！如果您能 [支持我](#support-development)，我也会很感激。
> - 一些功能需要启用 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 插件。

> [!warning]
> - 该插件依赖于 Obsidian 的许多私有 API，因此**当 Obsidian 更新时，该插件可能会出现较高的风险**（[了解更多](https://github.com/RyotaUshio/obsidian-pdf-plus/discussions/48)）。出于这个原因，我希望 Obsidian 本身能够原生支持这个插件的功能，这样我们就不再需要这个插件了。
> - 尽管该插件几乎兼容移动设备，但某些功能，包括复制带有颜色调色板的链接，在移动设备上可能效果不佳。

## 入门

在这里，我只是简单介绍了 PDF++ 的功能。查看下面的内容和 Obsidian 中的插件设置，了解更多详情。

还请注意，每个功能都可以在插件设置中切换开关，这样您可以根据自己的使用情况定制此插件。

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/0a9c267d-b74a-4568-821b-a659e29fdac0>

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/72072345-3537-42e7-ad06-5e4a166f83f4>

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/8ef3bc62-70d7-449a-b6a7-0370a2b4a8d8>

### 与其他社区插件无缝集成

#### 使用 [Hover Editor](https://github.com/nothingislost/obsidian-hover-editor) 可以实现极快的工作流程

它也适用于小屏幕尺寸的笔记本电脑。

有关详细信息，请参见 [此处](https://github.com/RyotaUshio/obsidian-pdf-plus/wiki/Tips:-My-display-is-too-small!#blazingly-fast--smooth-workflow-with-hover-editor)。

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/cb292049-bd89-4cd1-9d72-a02828d765e0>

将 [backlinks pane](https://help.obsidian.md/Plugins/Backlinks) 转换为 [ZotLit](https://zotlit.aidenlx.top/)-like 注释视图，使用 [Better Search Views](https://github.com/ivan-lednev/better-search-views) 和 PDF++ callouts

详情请参见 [这里](https://github.com/RyotaUshio/obsidian-pdf-plus/wiki/Tips:-backlinks-pane)。

![image](https://cdn.pkmer.cn/covers/pdf-plus_1_0.png!pkmer)

### 高度可定制的复制格式

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/fb624769-4cc3-4d4e-9898-b17d0a5591e3>

### PDF 嵌入会自动裁剪

<img width="954" alt="image" src="https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/a2f93579-4126-4437-93d0-2b90d3ee49a3">

### `Ctrl`/`Cmd`+ 悬停在高亮显示上以预览或打开反向链接

取决于“悬停在高亮显示文本上时的操作”设置。

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/ea14d06a-70f6-45cf-a142-0213adb9749b>

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/5f3dded8-79ad-44cc-816f-dc697dc4a343>

### 通过页面筛选 [反向链接](https://help.obsidian.md/Plugins/Backlinks)

仅显示指向当前在 PDF 查看器中打开的页面的反向链接。

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/4147e634-7864-40b4-b916-a6db40b85f31>

### 在 PDF 查看器和反向链接窗格之间进行“悬停同步”

<https://github.com/RyotaUshio/obsidian-pdf-plus/assets/72342591/2285a837-0588-4a72-8193-da25a456bf84>

## 特点

每个特点都可以在插件设置中切换开启或关闭。

### 链接反向突出显示

通过链接到文本选择，可以在 PDF 文件中注释突出显示。您可以在工具栏中使用颜色调色板轻松复制选择的链接。有关详细信息，请参阅“颜色调色板”部分。

- **在 PDF 查看器中突出显示反向链接**：在 PDF 查看器中，任何引用的文本都将被突出显示以便于识别。
  - 默认情况下，所有反向链接都会被突出显示。但是，有一个选项可以让您仅突出显示链接文本中指定颜色的反向链接（请参见下文）。
  - 它不会修改 PDF 文件本身。它只是改变了文件内容在 Obsidian 中的显示方式。PDF++ 还提供了一个选项来 [直接向PDF添加突出显示](#editing-pdf-files-directly-experimental)。
- **自定义突出显示颜色**：在链接文本中添加 `&color=<COLOR NAME>` 以使用指定颜色突出显示选择。
  - `<COLOR NAME>` 是您在插件设置中注册的颜色之一。例如 `[[file.pdf#page=1&selection=4,0,5,20&color=red]]`
  - 颜色名称不区分大小写，即 `&color=red`、`&color=RED` 甚至 `&color=rEd` 都起同样的作用。
  - 您可以使用 PDF 工具栏中的颜色调色板轻松复制带有 `&color=...` 的链接。有关详细信息，请参阅“颜色调色板”部分。
  - 您还可以选择不使用此插件相关的表示法，并将单一颜色（“默认突出显示颜色”设置）应用于所有突出显示。
- **在 PDF 查看器中悬停在突出显示文本上时按 `Ctrl`/`Cmd`（默认情况下）轻松导航到反向链接**：您可以选择在悬停在突出显示文本上时发生的操作之间进行选择：
  - 打开反向链接
  - 弹出式预览反向链接
- **双击突出显示的文本以打开相应的反向链接**
PDF++ callouts

使用与突出显示颜色相同的颜色创建 [callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)，无需任何 CSS 片段脚本。

#### [Backlink pane](https://help.obsidian.md/Plugins/Backlinks) 改进

这些功能使 Obsidian 成为一个独特的 PDF 注释工具，将 PDF 文件与存储为 markdown 文件的想法紧密连接。

- **按页面筛选反向链接**：仅显示指向当前在 PDF 查看器中打开的页面的反向链接。
- **悬停同步（PDF 查看器 → 反向链接窗格）**：将鼠标悬停在突出显示的文本或注释上也会在 [反向链接窗格](https://help.obsidian.md/Plugins/Backlinks) 中突出显示相应的项目。
- **悬停同步（反向链接窗格 → PDF 查看器）**：在反向链接窗格中，将鼠标悬停在反向链接项目上，以突出显示 PDF 查看器中相应的文本或注释。

### 直接编辑 PDF 文件（实验性功能）

在 PDF 文件中添加、编辑和删除高亮和链接。

添加的注释将在 Obsidian 之外也可见，不像反向链接的高亮显示。

PDF++ 不会修改 PDF 文件本身，除非您明确允许。***作者对任何数据损坏不承担责任。请确保您有备份并自行承担风险。*** 如果遇到任何问题，请在 [此处](https://github.com/RyotaUshio/obsidian-pdf-plus/issues/new) 报告。

### PDF 页面合成器：PDF 版的“笔记合成器”核心插件

通过命令添加、插入、移除或提取 PDF 页面，并**自动更新**整个保险库中的相关链接。

添加、重命名、移动和删除 PDF 大纲项目（也称为目录/书签）

允许修改 PDF 并在 PDF 大纲上右键单击。

或者，您可以使用命令“添加到大纲”来添加新项目，或者拖放大纲项目以将其移动到另一个项目下方。

### 编辑页面标签

[了解更多](https://github.com/RyotaUshio/obsidian-pdf-plus/wiki/Page-labels)

### PDF 内部链接增强

使处理嵌入在 PDF 文件中的内部链接更加容易。

- **通过悬停 +command/ctrl 显示 PDF 内部链接的弹出预览**：有关高级 CSS 定制，请参见 [下文](#css-customization)。
- **启用 PDF 内部链接的历史导航**：启用后，单击“返回导航”（左箭头）按钮将带您返回到在单击 PDF 文件中的内部链接之前所查看的页面。
- **将 PDF 链接复制为 Obsidian 链接**：（需要启用自定义右键菜单）在 PDF 查看器中，右键单击 PDF 嵌入链接，然后单击“将 PDF 链接复制为 Obsidian 链接”。它将把 PDF 链接复制为 Obsidian 链接，您可以将其粘贴到 markdown 文件中。单击粘贴的链接将带您到与原始 PDF 链接相同的目的地。
- **“复制当前页面视图的链接”命令**：在查看 PDF 文件时运行此命令将复制一个链接，单击该链接将在当前滚动位置和缩放级别打开 PDF 文件。
- **将复制的链接粘贴到 PDF 文件中的文本选择**：（需要启用自定义右键菜单和 PDF 编辑）通过上述操作复制链接后，您可以将其“粘贴”到 PDF 中的选择中以创建 PDF 内部链接。要执行此操作，请右键单击选择并单击“将复制的链接粘贴到选择中”。

### 打开 PDF 文件的链接

#### 巧妙地打开 PDF 链接

- **不要在多个标签中打开单个 PDF 文件**：当在不按下任何 [修改键](https://help.obsidian.md/User+interface/Use+tabs+in+Obsidian#Open+a+link) 的情况下打开 PDF 文件的链接时，如果相同的文件已经在另一个标签中打开，则不会打开新的标签。这对于使用并排视图（“右侧分割”）注释 PDF 文件，将 PDF 文件显示在一侧，将 markdown 文件显示在另一侧非常有用。
  - 您可以选择突出显示现有标签以增强视觉反馈。
- **在现有 PDF 标签旁边打开 PDF 链接**：如果在一个标签中打开了一个 PDF 文件，点击 PDF 链接将首先在其旁边创建一个新标签，然后在创建的标签中打开目标 PDF 文件。当您垂直或水平拆分工作区并希望 PDF 文件始终在一侧打开时，这将特别有用。
- **在打开 PDF 链接后不要将焦点移动到 PDF 查看器**
- **使用外部应用程序打开 PDF 链接**：有关详细信息，请参见 [下文](#integration-with-external-apps-desktop-only)。

#### 其他选项

- **打开 PDF 链接时始终记录导航历史**: 默认情况下，只有在打开到不同 PDF 文件的链接时才记录历史。如果启用，即使打开到与当前 PDF 文件相同的链接，历史也将被记录下来，您可以通过单击左/右箭头按钮在单个 PDF 文件中来回浏览历史。
- **在目标 PDF 已经打开时，打开 PDF 链接而不显示弹出预览**: 悬停在 PDF 链接上时按下 `Ctrl`/`Cmd`，如果目标 PDF 已经在另一个标签页中打开，则实际打开它。
- **在一定时间后清除高亮显示**
- **忽略弹出预览中的 `height` 参数**: Obsidian 允许您通过在链接后附加 `&height=...` 来指定 PDF 嵌入的高度，这也适用于弹出预览。如果您想忽略弹出预览中的高度参数，请启用此选项。

### 复制 PDF 文件链接

#### 轻松复制链接

- **PDF 工具栏中的调色板**：将在 PDF 查看器的工具栏中添加一个调色板。在选择文本范围时点击颜色，将复制一个带有 `&color=...` 附加的链接到所选内容。
  - 您可以使用强大的模板系统自定义复制文本的格式（请参见 [下文](#link-copy-templates)）。
- **`复制链接到所选内容或注释` 命令**：此命令允许您通过快捷键快速触发 PDF 工具栏中下拉菜单中指定的复制链接操作。我建议使用 `Ctrl`+`Shift`+`C`/`Cmd`+`Shift`+`C`。
- **`复制并自动粘贴链接到所选内容或注释` 命令**：除了复制链接，此命令还会自动将复制的链接粘贴到您上次粘贴链接的笔记末尾。

  > 注意：这些命令无法从命令面板触发。请确保为它们设置自定义快捷键。

- **左侧功能菜单中的 `切换“选择文本以复制”模式` 图标**：当它打开时，每次在 PDF 查看器中选择文本范围时，`复制链接到所选内容或注释` 命令将自动触发，这意味着您甚至不必按快捷键即可复制链接。
查看 [这里](#pdf-internal-links-enhancement) 获取详细信息。

#### 链接复制模板

您可以自定义在将链接复制到 PDF 查看器中的选择或注释时使用的模板格式。模板中的每个 `{{...}}` 将被视为一个 JavaScript 表达式，其中有许多可用的变量。有关详细信息，请参阅插件设置。

- **自定义显示文本格式**
- **自定义颜色调色板操作**：自定义在选择 PDF 查看器中的文本范围时可以触发的命令。
- **当未选择文本时使用另一个模板**：例如，当没有选择时，您可以使用此功能复制到页面的链接。

#### 右键菜单选项

自定义 Obsidian 内置 PDF 视图中右键菜单的行为。

- **复制链接（带/不带显示文本）**：在复制 PDF 文件中的选择或注释的链接时，默认情况下 Obsidian 会在链接文本后附加 `|<PDF文件标题>，第<PAGE NUMBER>页`。如果您不喜欢这种行为，此插件允许您禁用它。
- **显示文本格式**：您可以自定义显示文本格式。
- **将 PDF 大纲中的内置右键菜单替换为自定义菜单**：这样可以通过在大纲中右键单击项目来复制一个带有自定义格式的部分链接。
- **拖放大纲项目以复制部分链接**：在大纲中抓取一个项目，然后将其拖放到一个 Markdown 文件中，以创建一个部分链接。
- **从 PDF 缩略图复制页面链接的链接**：这使您可以通过右键单击缩略图在 PDF 工具栏中指定的自定义显示文本格式中复制页面链接。

  > 注意：最小主题存在一个问题，即当与样式设置结合使用时，无法右键单击缩略图打开菜单（[详情](https://github.com/kepano/obsidian-minimal/issues/702)）。

- **拖放 PDF 缩略图以复制链接到部分**：抓取缩略图图像并将其拖放到一个 markdown 文件中以创建一个页面链接。

  > 注意：当禁用时，拖放将导致缩略图图像被粘贴为数据 URL，这似乎是 Obsidian 的一个 bug。

### 嵌入 PDF 文件

- **点击 PDF 嵌入以打开链接**：点击 PDF 嵌入将打开嵌入的文件。
- **修剪选择嵌入**：当嵌入 PDF 文件的选择时，只显示选择及其周围的内容，而不是整个页面。
  - 您也可以指定边距。
- **在指定页面的 PDF 嵌入中隐藏工具栏**：需要 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 插件。
- **永远不要在 PDF 嵌入中显示侧边栏**
- **不在“双页”布局中显示 PDF 嵌入或 PDF 弹出预览**：无论现有 PDF 查看器中的“双页”布局设置如何，PDF 嵌入和 PDF 弹出预览始终以“单页”布局显示。如果显示，您仍然可以通过单击工具栏中的“双页”按钮为每个嵌入打开它。
- **不要在文本选择嵌入中突出显示文本/不要在注释嵌入中突出显示注释**
- **不要清除选择/注释嵌入中的突出显示**
- **使 PDF 嵌入不可滚动**
- **放大 PDF 嵌入（实验性）**

### 快捷键命令

PDF++ 提供以下命令，通过为它们分配热键来减少在 PDF 工具栏上的鼠标点击次数。

- **显示大纲** / **显示缩略图**
- **关闭 PDF 侧边栏**
- **放大** / **缩小**
- **适合宽度** / **适合高度**
- **转到页面**：此命令将光标移到 PDF 工具栏中的页码输入字段。输入页码并按 Enter 键跳转到该页。
- **显示复制格式菜单** / 显示显示文本格式菜单：通过通过热键运行这些命令，然后使用箭头键，您可以快速从菜单中选择格式，而无需使用鼠标。
- **启用 PDF 编辑** / **禁用 PDF 编辑**
- **与外部应用程序集成（仅限桌面版）**
- **使用外部应用程序打开 PDF 链接**：使用操作系统定义的默认 PDF 文件应用程序打开 PDF 链接。您可以选择是否应该在 Obsidian 中打开相同的 PDF 文件。
- **将外部应用程序与 Obsidian 同步**：当您在 Obsidian 中专注于一个 PDF 文件时，外部应用程序也会专注于相同的文件。
- **在便签中渲染 Markdown**

## CSS 自定义

您可以使用 [CSS片段](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) 来自定义 PDF++ 的各种组件的样式。

这里是一些用于定位的 CSS 选择器列表：

- `.textLayer .mod-focused`：在打开 PDF 中的文本选择链接时显示的 Obsidian 原生文本选择高亮
- `.annotationLayer .mod-focused`：在打开 PDF 中注释链接时显示的 Obsidian 原生注释高亮
- `.pdf-plus-backlink-highlight-layer .pdf-plus-backlink`：PDF++ 从反向链接生成的 PDF 文本高亮
  - 使用 `.pdf-plus-backlink-highlight-layer .pdf-plus-backlink[data-highlight-color="<COLOR NAME>"]` 来定位特定颜色
- `.pdf-plus-backlink-highlight-layer .pdf-plus-backlink.hovered-highlight`：当您在反向链接窗格中悬停在项目上时，PDF++ 生成的 PDF 文本高亮

### 强调颜色

您在**强调颜色**设置中定义的突出显示颜色也可以作为 CSS 变量使用。

例如，一个名为“Yellow”的颜色将被转换为变量 `--pdf-plus-yellow-rgb`。其值是 RGB 值的元组，例如 `255, 208, 0`。

请注意，变量名称中的非字母数字字符将被替换为连字符。例如，一个名为“Super LONG name!!”的颜色将导致一个变量名 `--pdf-plus-super-long-name-rgb`。

此外，在**默认强调颜色**设置中指定的颜色也可以作为 `--pdf-plus-default-color-rgb` 使用。

您可以将这些 CSS 变量用于各种目的。

例如，您可以创建一个标注，其颜色与 PDF 查看器中的强调颜色匹配。

#### 1. 单个标注类型内的不同颜色

这里以标注类型“PDF”为例，但可以是任何你喜欢的东西。

**复制格式**:

```
> [!PDF|{{colorName}}] {{linkWithDisplay}}
> {{text}}
```

**结果示例**:

```
> [!PDF|yellow] [[file.pdf#page=1&selection=0,1,2,3&color=yellow|file, page 1]]
> Lorem ipsum

> [!PDF|red] [[file.pdf#page=1&selection=0,1,2,3&color=red|file, page 1]]
> Lorem ipsum

> [!PDF|] [[file.pdf#page=1&selection=0,1,2,3|file, page 1]]
> Lorem ipsum

或者在标注类型（“PDF”）后没有管道符（“|”）的情况下：

> [!PDF] [[file.pdf#page=1&selection=0,1,2,3|file, page 1]]
> Lorem ipsum
```

**CSS 片段**:

```css
.callout[data-callout="pdf"][data-callout-metadata="yellow"] {
    --callout-color: var(--pdf-plus-yellow-rgb);
}

.callout[data-callout="pdf"][data-callout-metadata="red"] {
    --callout-color: var(--pdf-plus-red-rgb);
}

.callout[data-callout="pdf"] {
    --callout-color: var(--pdf-plus-default-color-rgb);
}
```

#### 2. 根据标注类型着色

另一种方法是将每种高亮颜色与特定的标注类型（如“注释”或“重要”）关联起来。

**复制格式**:

```
> [!{{colorName}}] {{linkWithDisplay}}
> {{text}}
```

**结果示例**:

```
> [!note] [[file.pdf#page=1&selection=0,1,2,3&color=note|file, page 1]]
> Lorem ipsum

> [!important] [[file.pdf#page=1&selection=0,1,2,3&color=important|file, page 1]]
> Lorem ipsum
```

**CSS 代码片段**:

```css
.callout[data-callout="note"] {
    --callout-color: var(--pdf-plus-note-rgb);
}

.callout[data-callout="important"] {
    --callout-color: var(--pdf-plus-important-rgb);
}
```

### PDF 内部链接的弹出预览

有时候，您可能会发现预览弹出框太高了。

例如，假设您正在阅读一篇由 LaTeX 生成的论文。

您可以将鼠标悬停在内联引用（例如“作者等，2024 年”）上，以显示对应条目在参考文献部分的弹出预览。

由于参考文献条目并不那么高，弹出框通常有太多的垂直空间。

现在，使用以下 CSS 片段来移除额外的空间：

```css
.pdf-plus-pdf-internal-link-popover[data-dest^="cite."] {
    --my-height: 200px; /* 根据您的喜好更改此值 */
    height: var(--my-height) !important;
    top: calc(var(--popover-height) - var(--my-height)) !important;
}
```

`data-dest` 属性是内部链接指向的命名目标（即链接目标）的 ID，对于参考文献项目，它以 `cite.` 开头。

一般来说，您可以按照以下步骤获取 ID：

- 按下 `command`+`option`+`I`（macOS）/ `Ctrl`+`Shift`+`I`（windows）打开开发者工具。
- 点击开发者工具左上角的箭头图标进入检查模式。
- 点击要检查的 PDF 内部链接。然后，在开发者工具的“元素”选项卡中将突出显示一个 `<a>` 元素。
- `<a>` 元素的 `href` 属性是带有井号（`#`）前缀的目标 ID。

您还可以在论坛上找到一个 [很棒的教程](https://forum.obsidian.md/t/getting-comfortable-with-obsidian-css/133)。

## 安装

您可以从 Obsidian 的社区插件浏览器中安装此插件。

或者，您可以尝试使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 来安装最新的测试版。

1. 安装最新版本的 BRAT 并启用它。
2. *(可选但强烈建议)* 在 BRAT 设置中，在页面顶部打开 `启动时自动更新插件`。
3. 在浏览器中打开以下 URL：`obsidian://brat?plugin=RyotaUshio/obsidian-pdf-plus`。
4. 点击“添加插件”按钮。

## 鸣谢

PDF++ 是建立在 Obsidian 原生 PDF 查看器的基础上，由 [Mozilla's PDF.js](https://mozilla.github.io/pdf.js/) 提供支持，即使没有 PDF++，它本身已经相当不错了。

没有 Obsidian 团队和 PDF.js 维护者的出色工作，PDF++ 就不可能存在。

PDF++ 通过使用 [monkey-around](https://github.com/pjeby/monkey-around) 这个由 [PJ Eby](https://github.com/pjeby) 开发的出色补丁库来扩展原生查看器。

它被无数 Obsidian 插件使用，并作为基础设施帮助社区提供了 Obsidian 高度可扩展性的基础。

他还是几款热门的 Obsidian 插件的作者，包括 Tag Wrangler。

PDF++ 提供了两种在 PDF 中突出显示文本的方式：一种不涉及修改 PDF 文件，另一种直接将突出显示注释写入 PDF 文件。

后者由 pdf-lib 提供支持，这是一个用于创建和修改 PDF 文档的 JavaScript 库。[原始项目](https://github.com/Hopding/pdf-lib) 由 Andrew Dillon 创建。PDF++ 使用由 Cantoo Scribe 维护的 [分支版本](https://github.com/cantoo-scribe/pdf-lib)。

## 兼容性

我尽量保持 PDF++ 与以下插件兼容：

- [Hover Editor](https://github.com/nothingislost/obsidian-hover-editor)
- [Better Search Views](https://github.com/ivan-lednev/better-search-views)

以下插件改变了 Obsidian 的内部结构，可能会导致其他插件的某些功能无法正常工作，因此我不建议与此插件一起使用。

- [Close Similar Tabs](https://github.com/1C0D/Obsidian-Close-Similar-Tabs)

## 开发原则

- 始终围绕 Obsidian 内置的 PDF 查看器。
- 尽量不引入依赖插件的内容。
  - 只有在以下情况下才能容忍
    - 它带来了巨大的好处
    - 而且没有这个插件，不会留下任何变成随机混乱的东西。

## 支持开发

如果您发现 [我的插件](https://ryotaushio.github.io/the-hobbyist-dev/) 有用，请支持我的工作，以确保它们继续正常运行！
