---
uid: 20230601235029
title: Obsidian 插件：Longform 如何使用 Obsidian 完成一本自己的小说创作
tags: [Obsidian, 插件, Longform, 小说创作, 剧本创作]
description: Obsidian 插件：Longform 如何使用 Obsidian 完成一本自己的小说创作
author: OS
type: practice
draft: false
editable: false
modified: 20230603010640
---

# Obsidian 插件：Longform 如何使用 Obsidian 完成一本自己的小说创作

## 引言

作为一名多产的作者，能够比大多数人更快地测试和调整自己的协作方法，快速建立自己的工作流程和最佳实践。

我曾经使用过 Scrivener 进行撰写和格式编排书籍约七年时间，也是使用过 Word，当然还有 Vellum，以及 WordPress，不断切换生产力工具或者复合使用它们的主要原因是，每个工具都有它独立的特点，让人难以割舍。

## 为什么选择 Markdown

首先，Markdown 是纯文本，以及添加了一些字符或符号，用于克制的格式化为 HTML 或其他格式。【克制，聚焦】

其次，作为纯文本文件，它们非常小，不太可能被损坏。每个文件写一个场景或一个章节也会使它们非常小，并且可以在瞬间打开。由于它们是用纯文本编写的，因此可以在任何平台上使用常规的文本处理器或文字处理器进行编辑，并且经得起未来的考验，纯文本永远不会过时。【向后兼容】

下面介绍的是目前最适合我的方法。随着其他工具的出现，这种情况可能会发生变化和调整，但我打算保留 Markdown 作为主要文件格式。这个工作流或一套工具中，有任何适合你的，都可以孤立的去叠加到你现在自己的流程中。

## 版本控制和文件备份

我使用 Dropbox 在我所有的设备上同步我所有的数据文件，包括版本控制，所以我可以在任何时候回滚任何文件版本，如果它被损坏，覆盖，或者其他灾难性的事情发生，比如硬盘故障。

我还使用 Mac OS Time Machine 备份到四个不同的硬盘驱动器，这样我就总有额外的副本可以回滚。当我积极地起草一本新书时，我也会每隔几天编辑并保存一份备份。

## Longform 插件

Obsidian 插件——Longform，是一款专为写作者和写作团队而设计的插件。它可以帮助用户创建和管理大型文学项目，例如书籍、小说、论文等。它可以将大文本拆分成更小的部分，例如章节、段落和场景，并提供基本编辑和组织工具。

> [!Note] 插件名片
> - 插件名称：Longform
> - 插件版本：2.0.3
> - 插件作者：Kevin Barrett
> - 插件描述：
> - 插件项目地址：[点我跳转]（<https://github.com/kevboh/longform）>

## 我的小说文件夹结构

- 写作
	- 我的书籍
		- 系列文件夹（对应一个 Obsidian 仓库））
			- 小说文件夹 （Longform 项目文件夹）
				- 归档 旧的草稿/版本文件）
				- 备份 （每隔几天进行的书籍编译备份）
				- 草稿 （Longform 草稿文件夹）
					- 草稿 1 … 2 … 3 …
				- 编辑或编译笔记 （需要稍后查看/编写/审核的任务、格式、需要注意的问题等）
				- 营销元数据 （后封面描述、产品列表、标签、主题、竞争分析等。）
				- 图形 （封面、促销图形、广告等。）
				- 筹备 - 预先规划 - 雪花、大纲、角色素描、书宣等。
				- 出版 （这本小说的 Vellum 输出文件夹）
				- 研究和笔记
			- 模板 （角色笔记、雪花模板、待办事项查询模板、字数统计）
			- 系列百科全书 （比如链接的 “圣经系列”）

## 开始写作

在普通文本中撰写手稿非常简单，我假设如果你正在阅读本文，且已经基本了解 Markdown 标记语言（例如：段落之间使用双回车，使用 _下划线_ 表示斜体等等）。

我不会在本文中为使用 Longform 或任何其他插件提供教程数据。你可以在其他地方找到相关文档，这里更像是一个写作指南。

## 最佳实践

以下是我使用 Markdown 文件进行草稿撰写的“最佳实践”，最终会在 Vellum 中使用。它们可能适用于你，但也可能为你自己的系统提供一个节点或者组成部分。

### 文件名

每个 Markdown 文件只写一章。它可能包含 1-3 个场景。我喜欢使用具有描述性的文件名来命名章节，以便我可以快速找到我想要的内容并从一个场景跳到另一个场景。它们按顺序编号，因此可以在任何文件查看器或编辑器中按顺序排序。（如果我在 Mac Finder 或 iphone dropbox 应用程序中查看它们，则它们是按顺序排列的。）有些应用程序会支持手动排列章节的顺序，因此可以将它们拖动到适合心仪的位置。一旦确定了顺序，建议给它们编号。通常是按顺序撰写，但有时我会写三四章节而没有编号，以防止突然决定添加或移动场景，然后一旦确定了序列再进行编号。当然，你始终可以移动内容并稍后重新编号。

提示：如果你发现 Longform 重新排列了你的场景（有时我切换计算机时似乎会这样做），将它们拖回正确的顺序可能需要很长时间，特别是是有 50 多个章节。如果你的文件已编号，并且打开 Longform index.md 文件并对章节进行排序，则它们将自动在 Longform 中重新排序。我在 Mac 上使用 PopClip，它有一个排序扩展，因此我只需选择场景块并告诉它排序即可。

### FRONT MATTER

我在每个 MD 文件的前置部分中添加可搜索的元数据。这有许多不同的方法，取决于你要将哪个编辑器用作主要的 Markdown 编辑器。Obsidian 中可以参考这里 [[Obsidian的YAML和Frontmatter]]。这些元数据是辅助信息，出版时会“注释掉”，因此它不会在最终文件中，但可以在草稿阶段中用于快速查找场景或必要信息。以下是四种注释的方法。

```使用YAML
---
metadata
---
```

推荐使用 YAML 方式书写的好处时，可以和 Obsidian 的另一个插件 [[dataview]] 联动使用，将会意想不到的辅助书写妙用。

```使用HTML
<!-- metadata -->
```

### 信息的使用

```假设你使用YAML
---
Character:: ;Kiara
Character:: ;Malachi
Character:: ;Nurse
Setting:: ~Doctor
POV:: Kiara
Day:: 1
Note::  
Draft:: 2
Grammarly:: √
Critique: √
TTS: √
---
```

我在角色名称前加上;!，在场景名称前加上~，以便我可以从任何文件浏览器快速搜索/筛选它们。为什么不只搜索 Malachi 而不是 ;Malachi？因为我不想引起每一场中提到 Malachi 的搜索结果，只想找到他是场景中的主要角色的那些。

我只在有多个视角的书中使用 POV。如果书中只有一个视角，我不需要跟踪它。同样，如果书中的每个场景都使用 Joe Blow 的视角，那么我不会将 ;Joe 包括在角色列表中。他将在每一个场景中列出，并且永远不需要过滤他。

Day 可以帮助我跟踪一周或一个月的日期、场景之间的时间长度等，以便我以后不必回过头来计算天数。

Note 是我需要记住的任何东西。

Draft 是草稿编号

Grammarly 会指示我是否已经通过 Grammarly 运行了场景。是的——你可以复制并粘贴 Markdown 文本到 Grammarly 中进行检查，它不会像许多格式那样破坏段落间距、斜体等。你可以检查文件，然后将结果粘贴回 Markdown 文件中，一切都仍然会正确格式化。

更新：你也可以使用新的 Grammarly 桌面应用程序在 Obsidian 文件中检查拼写和语法，而无需将其复制并粘贴回编辑器。它仍然有些不稳定，所以我又回到了将文本复制粘贴到 Web 应用程序中进行拼写和语法检查。

Critique 意味着这一章已经过评论，TTS 表示我使用 Text to Speech 进行了校对。

除了让我在任何文件浏览器中搜索或过滤这些变量外，我还可以使用 Obsidian Dataview 插件生成表格摘要，类似于以下内容：

### 与 dataview 联动

![image.png](https://cdn.pkmer.cn/images/20230602005411.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230602005425.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230602005429.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230602005436.png!pkmer)

![image.png|739](https://cdn.pkmer.cn/images/20230602005441.png!pkmer)

### 其他特殊格式方面的注意事项

#### 使用 H1 做为章节标题

Vellum 可以自动识别 H1 标题作为章节标题。如果你使用 H1 标题，你的章节将在正确位置划分且在导入 Vellum 时保留它们的名称。其他方法有时会失败，无法正确划分每个章节。

Notebooks 可以选择使文件的第一行成为 H1 标题（默认情况下同步文件的第一行和文件名称）。Obsidian Longform 插件可以让你在编译过程中添加场景名称作为 H1 标题。

如果你使用其他工具，请通过输入#加上一个空格和你的头来创建 H1 标题。

#### 使用分割线来划分场景

如果你要导入 Vellum，且希望所有的场景分割线都被正确地标记。（你不会想在文件导入后手工输入所有的场景分割线！那简直是灾难）

如果你使用 *** 或 --- 来标记你的场景分割线，那么它们在转换为 HTML（正如我下面建议你做的）时会被转换成一个水平线 `<hr>`。而水平线在 Vellum 中不会被识别为场景分割线。

如果你使用 +++ 来标记你的场景分割线（你不需要将其居中），它将在转换为 HTML 时不会被转换为水平线。它将保留为 +++. 而 +++ 会被 Vellum 识别为场景分割线。

## 我的 Longform 插件配置

### 工作区布局

我可能并排几个窗格/标签组，还有一个单独的窗口，展示这本书的思维导图或看板。

![image.png](https://cdn.pkmer.cn/images/20230602103953.png!pkmer)

顶部左侧 - Obsidian 文件浏览器，搜索和 Longform 插件面板。我根据需要在它们之间切换。通常设置为 Obsidian 文件浏览器。

中央 - 编辑器 相当容易理解，他是我们书写的主要场景。

顶部右侧 - 链接提到某些系列中有 wiki 条目、研究文章等的人物、地点、魔法种族等时，它们将会出现在未链接提及面板中。这样设计能够让我只需单击即可跳转到引用。

注意：之后想删除链接，都可以让 Longform 插件从导出的手稿中删除它。

底部右侧 - 星标 我的收藏文件。我可以快速跳转到书中的待办事项列表、大纲、场景摘要、打开我的 Excel 单词计数电子表格以记录今天的计数等。在文件上进行 Cmd + 单击以将其打开到新标签页中。更新：我现在通常将这些打开到另一个选项卡组中，而不是使用收藏夹。

底部左侧 - 元数据 这就是我对 Scrivener Inspector 的回答。它只是我目前正在工作的文件，滚动到顶部，以便我可以查看和修改 yaml 头中的元数据。我可以制作或参考笔记，更改日期或变量等。我没有任何办法神奇地链接，使得主编辑器中的文件始终显示在此面板中。我只是切换到它，然后 Cmd-O，然后按回车键选择我上次工作的文档。

如果场景中有我需要回来检查或修复的内容，我经常在 yaml 头下方放置复选框任务项，如下所述。（如果将它们放在 yaml 头内部，则查询将无法找到它们。）

### 编辑样式

![image.png|748](https://cdn.pkmer.cn/images/20230602103849.png!pkmer)

### 预览样式

![image.png|748](https://cdn.pkmer.cn/images/20230602103855.png!pkmer)

### 对应 Snippets

```CSS
/* Font for the markdown source (edit) view */
.longform-leaf .cm-s-obsidian
{
    font-family: Atkinson Hyperlegible;
    font-size: 1.1em;
    line-height: 2em;
}

.longform-leaf .cm-hmd-frontmatter
{
    font-family: monospace;
    font-size: .8em;
    line-height: 1em;
    color: firebrick;
}

.longform-leaf .cm-comment
{
    font-family: monospace;
    font-size: .8em;
    line-height: 1em;
}

.longform-leaf .cm-header-1
{
  font-family: Garamond;
  font-size: 1.5em;
  line-height: 2em;
  font-weight: bold !important;
}

.longform-leaf .cm-header-2
{
  font-family: Garamond;
  font-size: 1.2em;
  line-height: 1.5em;
}

.longform-leaf .cm-header-4
{
  font-family: Garamond;
  font-size: 1em;
  line-height: 1em;
  font-weight: normal;
}

/* Font for the markdown preview view */
.longform-leaf .markdown-preview-view {
    font-family: Garamond;
    font-size: 1.2em;
		text-indent: 1em;
    text-align: justify;
}


.longform-leaf ul {
  list-style-position: outside;
}


.longform-leaf ol {
  list-style-position: outside;
}

.longform-leaf li {
    padding-left: 0em;
    padding-bottom: 2 em;
}

.longform-leaf h1 {
  font-family: Garamond;
  font-size: 2em;
  text-indent: 0em;
  margin-top: 1em;
}


.longform-leaf p {
  margin-bottom: -15px;
  line-height: 1.3em;
}

.longform-leaf .admonition-content p {
  margin-bottom: 0px;
  line-height: 1.3em;
  		text-indent: 0em;
}

.longform-leaf div.callout p {
  margin-bottom: 0px;
  line-height: 1.3em;
  		text-indent: 0em;
}

.longform-leaf .markdown-preview-sizer .markdown-preview-section {
    font-family: Garamond;
    font-size: .8em;
		text-indent: 0em;
    text-align: justify;
}

.longform-leaf {
  --background-primary: antiquewhite;
  --background-primary-alt: white;
  --background-secondary: white;
  --background-secondary-alt: white;
  --text-selection: #aaa;
  --text-normal: black;
	--text-faint: blue;
  color: black;
}

.longform-leaf .suggestion-item.is-selected {
  background-color: var(--text-accent);
}

.longform-leaf .markdown-preview-view blockquote {
    border-color: darkgrey;
    font-size: 95%;
    text-align: left;
    hyphens: auto;
    word-break: keep-all;
    color: black; # you need to define
    font-color: #aacdbe;
    line-height: 1.3;
    padding: 10px 2% 10px 2%;
    margin-top: 15pt;
    margin-bottom: 15pt;
}

/* Remove bullets from dataview table */

.dataview-result-list-li {
  list-style-type: none;
  padding: 0 !important;
  indent: 0em;
}

.list-view-ul {
  list-style-type: none;
  padding: 0 !important;
  indent: 0em;
}

.callout[data-callout-metadata="x"] .callout-title {
  display: none;
}
```

## 如何用任务驱动书写

通常情况下，我使用 Todoist 管理所有项目和任务，并将在 Obsidian 中记录的任何任务迁移到 Todoist 中。但是，对于书稿，我将编辑任务保留在 Obsidian 中。

对于每一份草稿，我都有一个 Todo 文档，类似于这样：

![image.png](https://cdn.pkmer.cn/images/20230602104654.png!pkmer)

任务也是划分区域的，顶部任务是适用于整本书的任务，他们总管全局，需要检查一致性或在完成当前草稿后进行更改的事情。在写第一稿时，我尽量让事情保持向前发展，不回头进行修正，直到该草稿完成。

中间部分是每个场景中未核对任务的查询。您可以看到场景名称，然后是在该场景中找到的复选框。

底部部分是我在将终稿发送给编辑之前需要完成的事项、需要与编辑讨论的事项等，以及在导入 Vellum 并将其准备好出版之前或之后需要完成的事项。最初的任务是我的 Todo 模板的一部分，我在写作时会添加任务。

## 和 Excalidraw 联动

你一定听过 [[obsidian-excalidraw-plugin]] 当然你也可以用 [[白板]]。这样的辅助文件，是为了让非线性叙事，多线并行，或者整理人物关系。

![image.png](https://cdn.pkmer.cn/images/20230602105055.png!pkmer)

## 和 Kanban 联动

看板是另一种可视化、管理任务等的方式。比普通大纲更清晰，因为它非常容易拖放和重新排序列表和卡片。您可以将其视为看板或 markdown 文件（带有任务的标题）。

![image.png](https://cdn.pkmer.cn/images/20230602105224.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230602105228.png!pkmer)

## 利用好 Hover editor

有时候我们并不需要直接跳转到一个文章，而是需要临时产看或者修正细节，那么 [[obsidian-hover-editor]] 是非常好的选择。

![image.png](https://cdn.pkmer.cn/images/20230602105839.png!pkmer)

## 参考

- [Writing a novel in Markdown - pdworkman.com](https://pdworkman.com/writing-a-novel-in-markdown/)
- [[obsidian-hover-editor]]
- [[obsidian-kanban]]
- [[obsidian-excalidraw-plugin]]