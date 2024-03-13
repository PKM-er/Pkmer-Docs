---
uid: 2023080322213596
title: Obsidian 插件：Links
tags: ['obsidian插件', 'readme']
description: 操作链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Links

> [!Note] 插件名片
> - 插件名称：Links
> - 插件作者：MiiKey
> - 插件说明：操作链接
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mii-key/obsidian-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?links)

## 概述

操作链接

![Links](https://cdn.pkmer.cn/covers/links.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mii-key/obsidian-links/master/README.md)

---

## Readme(翻译）

下面是 [[links]] 插件的自述翻译

# Obsidian 链接 <!-- 在目录中省略 -->

操作 Obsidian 中的链接（<https://obsidian.md>）。

- [功能](#features)
  - [取消链接](#unlink)
  - [删除链接](#delete-link)
  - [将wikilink或html链接转换为markdown链接](#convert-wikilink-or-html-link-to-markdown-link)
  - [将markdown链接转换为Wikilink](#convert-markdown-link-to-wikilink)
  - [将markdown链接转换为autolink](#convert-markdown-link-to-autolink)
  - [将链接目标复制到剪贴板](#copy-link-destination-to-clipboard)
  - [从标题中删除链接](#remove-links-from-headings)
  - [编辑链接文本](#edit-link-text)
  - [编辑链接目标](#edit-link-destination)
  - [添加链接文本](#add-link-text)
  - [从选定内容创建链接](#create-link-from-selection)
  - [从剪贴板创建链接](#create-link-from-clipboard)
  - [将autolink转换为markdown链接](#convert-autolink-to-markdown-link)

# 特点

## 取消链接

取消单个链接或选择中的所有链接。

- 命令面板：**取消链接**
- 上下文菜单：**取消链接**

<details>
<summary>演示。单个链接。</summary>

![remove link](docs/img/unlink-link.gif)

</details>

<details>
<summary>演示。选择中的链接。</summary>

![remove link](docs/img/unlink-selection.gif)

</details>

## 删除链接

- 命令面板：**删除链接**
- 上下文菜单：**删除**

<details>
<summary>演示. Wiki链接</summary>

![delete link](docs/img/delete-wikilink.gif)

</details>

<details>
<summary>演示. Markdown链接</summary>

![delete link](docs/img/delete-markdown-link.gif)

</details>

<details>
<summary>演示. 自动链接（测试版 - 在设置中启用）</summary>

![delete link](docs/img/delete-autolink.gif)

</details>

## 将 wikilink 或 HTML 链接转换为 markdown 链接

将 wikilink 或 HTML 链接转换为 markdown 链接。如果 wikilink 包含空格，则 markdown 链接的目标将放在<>中。必须展开 HTML 链接。

- 命令面板：**转换为 markdown 链接**
- 上下文菜单：**转换为 markdown 链接**

<details>
<summary>演示。Wikilink</summary>

![将wikilink转换为markdown链接](docs/img/convert-wikilink-to-mdlink.gif)

</details>

<details>
<summary>演示。HTML链接</summary>

![将HTML链接转换为markdown链接](docs/img/convert-htmllink-to-mdlink.gif)

</details>

## 将 Markdown 链接转换为 Wikilink

- 命令面板：**转换为 Wikilink**
- 上下文菜单：**转换为 Wikilink**


<details>
<summary>演示</summary>

![将Markdown链接转换为Wikilink](docs/img/convert-to-wikilink.gif)

</details>

## 将 Markdown 链接转换为自动链接

（测试版 - 在设置中启用）

将带有绝对 URL 或电子邮件地址的 Markdown 链接转换为自动链接。

- 命令面板：**转换为自动链接**
- 上下文菜单：**转换为自动链接**


<details>
<summary>演示。带有绝对URL的Markdown链接。</summary>

![将Markdown链接转换为维基链接](docs/img/convert-markdown-url-link-to-autolink.gif)

</details>

<details>
<summary>演示。带有电子邮件地址的Markdown链接。</summary>

![将Markdown链接转换为维基链接](docs/img/convert-markdown-email-link-to-autolink.gif)

</details>

将链接的目标部分复制到剪贴板中

将 markdown、wiki 或 html 链接的目标部分复制到剪贴板中。

- 命令面板：**复制链接目标**
- 上下文菜单：**复制链接目标**

<details>
<summary>演示</summary>

![将链接目标复制到剪贴板](docs/img/copy-link-destination.gif)

</details>

从选择区域或整个笔记中删除标题中的链接。

- 命令面板：**从标题中删除链接**

<details>
<summary>演示</summary>

![从标题中删除链接](docs/img/remove-links-from-headings.gif)

</details>

## 编辑链接文本

选择链接文本并将光标放在文本末尾

- 命令面板：**编辑链接文本**
- 上下文菜单：**编辑链接文本**

<details>
<summary>演示</summary>

![编辑链接文本](docs/img/edit-link-text.gif)

</details>

## 编辑链接目标

选择链接文本并将光标放在文本末尾

- 命令面板：**编辑链接目标**
- 上下文菜单：**编辑链接目标**

<details>
<summary>演示</summary>

![编辑链接文本](docs/img/edit-link-destination.gif)

</details>

添加链接文本，选择它并将光标放在文本末尾。

链接文本取决于链接的类型。

对于本地笔记，文本可以是笔记的文件名或弹出窗口中建议的链接文本。标题分隔符可以在设置中指定。

对于外部 http[s] 链接，请求页面内容并将链接文本设置为页面的标题（`<title/>` 元素的内容）。

- 命令面板：**添加链接文本**
- 上下文菜单：**添加链接文本**

<details>
<summary>演示。链接到本地笔记</summary>

![链接到本地笔记](docs/img/add-link-text-local.gif)

</details>

<details>
<summary>演示。链接到本地笔记中的标题</summary>

![链接到本地笔记中的标题](docs/img/add-link-text-local-heading.gif)

</details>

<details>
<summary>演示。外部链接</summary>

![外部链接](docs/img/add-link-text-external.gif)

</details>

## 从选定文本创建链接

从选定的文本创建链接。

- 命令面板：**创建链接**
- 上下文菜单：**创建链接**


<details>
<summary>演示</summary>

![从选定文本创建链接](docs/img/create-wikilink-from-selection.gif)

</details>

## 从剪贴板创建链接

从系统剪贴板的文本内容创建链接。

- 命令面板：**从剪贴板创建链接**
- 上下文菜单：**从剪贴板创建链接**


<details>
<summary>演示</summary>

![从选择创建链接](docs/img/create-mdlink-from-clipboard.gif)

</details>

## 将自动链接转换为 Markdown 链接

（测试版 - 在设置中启用）

将自动链接转换为 Markdown 链接。

如果自动链接具有以 `http` 或 `https` 方案开头的绝对 URI，则将 `<page/>` 元素的内容设置为链接文本。如果请求失败或 URL 具有其他方案，则光标将放置在 Markdown 链接的 `[]` 内。对于电子邮件自动链接，将在电子邮件地址之前添加 `mailto` 方案。

<details>
<summary>演示。将自动链接转换为Markdown链接</summary>

![转换为Markdown链接](/docs/img/convert-autolink-to-markdown-link.gif)

</details>



