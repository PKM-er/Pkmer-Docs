---
uid: 20231114190856
title: ZotLit：Obsidian 与 Zotero 联动，有 \[@ 就够了
tags: [Obsidian, 插件, Zotero, 导入]
description: ZotLit插件让用户能以非常方便快捷的方式将Zotero文献笔记导入Obsidian中，兼具便利性和灵活性，是Obsidian和Zotero联动的又一利器。
author: alephpiece
type: other
draft: false
editable: false
modified: 20231114213203
---

# ZotLit：Obsidian 与 Zotero 联动，有 \[@ 就够了

用 Obsidian 做笔记，同时又用 Zotero 管理各种文献的同学可能需要两者相互连接。

Obsidian 和 Zotero 的插件开发者们已经提供了很多解决方案，比如：

- [[obsidian-zotero-desktop-connector|Zotero Integration]]
- [[obsidian-citation-plugin_readme|Citations]] 配合 Zotero Mdnotes

只要爱折腾，反正总有办法。

曾以为要一直这样折腾下去，直到我遇到了由 AidenLx 大佬开发的 [[zotlit|Obsidian ZotLit]]，才发现它能完美满足我的需求。

![[Pasted image 20231114200341.png|500]]

## 联动需求

我想要的 Obsidian + Zotero 工作流是这样的：

- 用 Zotero 阅读电子书、RSS，做注释、做笔记；
- 用 Obsidian 做其他任何笔记，记录想法；
- 所有笔记都可在 Obsidian 这边访问；
- 可在 Obsidian 中插入文献引用、导入 Zotero 笔记和注释。

就这点需求，用 ZotLit 非常舒服。

下面简单说说这个插件的功能和设置。

## 基本信息

插件的基本信息如下（来自 [[zotlit|Obsidian ZotLit]]）。

> [!Note] 插件名片
> - 插件名称：ZotLit
> - 插件作者：AidenLx
> - 插件说明：与 Zotero 集成的插件，可以创建文献笔记，并从 Zotero 库中插入引用。
> - 插件分类：['obsidian 插件 ', ' 格式化排版 ', 'word']
> - 项目地址：[点我访问](https://github.com/PKM-er/obsidian-zotlit)
> - 国内下载地址：[下载安装](https://github.com/PKM-er/obsidian-zotlit)

## 两键引用

1. 在 Obsidian 笔记中输入两个键：`[@`
2. 在弹出的搜索框中搜索文献，回车！

![[ZotLit_insert_citation.gif|700]]

引用格式可自定义。

## 两步导入

1. 打开命令面板选择 "ZotLit: Open quick switcher for literature notes"，回车！
2. 弹出搜索框，搜索文献，回车！

![[ZotLit_import_literature_note.gif|700]]

立马跳转到 Zotero 导出内容（如果不存在会立即创建并导出）。

## 公式也能正常显示

导出的注释都是 Markdown，放在引用块中，公式显示完全没问题。

![[Pasted image 20231114194522.png|700]]

## 注释装进侧面板

1. 打开命令面板，选择 "ZotLit: Open Zotero annotation view in side panel"，回车！
2. 在右边侧面板中选择注释链接模式。
3. 弹框，搜索，回车！

注释全部出现在侧面板，还有颜色！

![[Pasted image 20231114194710.png|700]]

在 Zotero 中修改注释会实时更新到 Obsidian。

![[ZotLit_sync_zotero_annotations.gif|700]]

从 Obsidian 可跳转到 Zotero PDF 注释所在页面。

![[ZotLit_obsidian跳转zotero.gif|700]]

## 笔记可分别导出

1. 打开命令面板选择 "ZotLit: Import note"，回车！
2. 弹框，搜索，回车！
3. 选择要导出的笔记，回车！

有多个 Zotero 笔记时可以选择导出其中一个。

![[Pasted image 20231114194904.png|700]]

## 自用配置

详细配置方法在 ZotLit 官方文档中都能找到，附上两个有用的链接：

- [[zotlit|Obsidian 插件：ZotLit 最完美的 Zotero 和 Obsidian 联动插件]]
- [基本用法 – ZotLit (aidenlx.top)](https://zotlit.aidenlx.top/zh-CN/getting-started/basic-usage)

下面分享一下我自己的配置。

### 安装

- Zotero 中，安装以下两个插件：
	- [Obsidian Note for Zotero](https://zotlit.aidenlx.top/zh-CN/getting-started/install/zotero)；
	- [Better BibTex for Zotero](https://github.com/retorquere/zotero-better-bibtex)。
- Obsidian 中，在社区插件里找到 "ZotLit"，安装。

### ZotLit 模板文件

ZotLit 把从 Zotero 导出的包含笔记、注释等所有信息的 Markdown 称为**文献笔记（literature note）**。这个文献笔记的文件名、内容等都可以通过模板来调整。

PDF 注释的导出格式也可以通过模板调整，灵活度很高。

所有模板都可以从 ZotLit 设置的 "Template" 选项卡打开。

目前我主要用到这几个模板：

- 文献笔记名（Note filename），定义导出文献笔记的 Obsidian 笔记名。
- 文献笔记内容（Note content），定义导出文献笔记要包含哪些 Zotero 条目内容。
- 主要引用格式（Primary Markdown citation），定义在 Obsidian 中的 citation 格式。

![[Pasted image 20231114195441.png|700]]

![[Pasted image 20231114195447.png|700]]

### 文献笔记模板

所有模板都使用 Eta 编写，上手可能会遇到很多困难，可以参考官方文档 [模板基础知识 – ZotLit](https://zotlit.aidenlx.top/zh-CN/getting-started/basic-usage/template-basics) 和 [模板速查表 - ZotLit](https://zotlit.aidenlx.top/zh-CN/how-to/template-cheatsheet)。

下面的文献笔记模板可以导出作者、日期、Zotero 笔记、PDF 注释等信息。

```Eta
# <%= it.title %>

> [!INFO]
> - **Authors**: <%=
it.authors
.map(author => `[[${author}]]`)
.join(', ')
%>
> - **Date**: <%= it.date ?? it.year %>
> - **DOI**: <%= it.DOI %>
> - **Groups**: <%= it.collections %>
> - **Tags**: <%= it.tags
.map(tag => '#' + tag.toString().replaceAll(' ', '-'))
.join(', ')
%>
> - **Links**：[Zotero](<%= it.backlink %>), <%= it.fileLink %>

<% it.notes.forEach(note => { -%>
<%= `${note}` %>
<% }) %>
# 注释
<%~ include("annots", it.annotations) %>
```

导出文献笔记的效果如下。

![[Pasted image 20231114200217.png|700]]

## 后记

自从用了 ZotLit，满脑子都是 `[@ [@ [@ [@`，再也回不去了~

![[Pasted image 20231114200745.png|700]]