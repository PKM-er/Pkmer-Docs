---
uid: 2024022121233999
title: Obsidian 插件：【Readme】Reference Generator
tags: ['obsidian插件', 'readme']
description: 将链接转换为类似于哈佛、MLA、APA等风格的参考文献。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Reference Generator

> [!Note] 插件名片
> - 插件名称：Reference Generator
> - 插件作者：Kadison McLellan
> - 插件说明：将链接转换为类似于哈佛、MLA、APA 等风格的参考文献。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kadisonm/obsidian-reference-generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reference-generator)

## 概述

将链接转换为类似于哈佛、MLA、APA 等风格的参考文献。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kadisonm/obsidian-reference-generator/master/README.md)
>

---

## Readme(翻译）

下面是 [[reference-generator]] 插件的自述翻译

【机翻】

<h1 align="center">
<sub>
<img src="https://github.com/kadisonm/obsidian-reference-generator/assets/134670047/d8b5fa31-7ba8-47c1-b1ca-aeecf52f3568" width="45">
</sub>
Reference Generator
</h1>

<h4 align="center">An plugin that quickly generates bibliographies from links in any style including Harvard, MLA, APA and more.</h4>

---

This plugin is **not** an official Obsidian plugin.

To track the development, please visit the [project page](https://github.com/users/kadisonm/projects/2/).

## 生成速度

请注意，在当前版本（1.0.0）中，插件的生成时间可能会相当慢。这是因为依赖第三方 API 获取引用数据，每个链接的速度都不同。该 API 还使用了一个过时的 [Zotero翻译服务器](https://github.com/zotero/translation-server) 版本。请考虑这些因素，并准备好在链接数量较多时生成速度较慢。

好消息是，有一个解决方法。希望在 1.1.0 版本中计划并可能实现对翻译服务器的不同实现，所以请保持关注。

## 这个插件提供

- 为一个选择中的多个链接生成引用
- 超过 2000 种样式可供选择
- 各种自定义和设置选项

## 安装

- 下载 [最新版本](https://github.com/kadisonm/obsidian-reference-generator/releases)，并手动将 `main.js`、`manifest.json`、`styles.css` 等资源添加到 `your-vault\.obsidian\plugins\reference-generator` 中。

## 网络使用

此插件需要以下互联网访问权限：

- 为了收集作者、标题等数据，必须向 [Citoid API](https://www.mediawiki.org/wiki/Citoid/API) 发出请求。
- 为了使用引文样式和区域设置，必须在每次生成时向 [Citation Style Language - Style Repository](https://github.com/citation-style-language/styles) 和 [Citation Style Language - Locales Repository](https://github.com/citation-style-language/locales) 发出请求以获取 CSL 文件和 XML 文件。

## 如何使用

### 默认样式

可以在插件设置中选择默认的引用样式。这样可以在每次生成参考文献时无需选择样式。建议为 IEEE 和 MLA 等样式启用“按字母顺序排序”。

### 生成参考资料

右键单击链接以打开上下文菜单并显示生成选项。您可以选择样式，也可以使用默认样式（根据您的偏好，可以通过设置禁用其中一个）。或者，也可以使用命令。

### 一次生成多个参考文献

选择多个链接，右键单击并按照生成参考文献的相同步骤进行操作。每个链接大约需要 1-3 秒来生成，但可能需要更长时间。未链接的文本会被保存，但无论链接之间的文本是什么，它都会将所有链接视为参考文献。如果您想要两个分别排序的参考文献，最好分别生成它们。

![image](https://cdn.pkmer.cn/covers/reference-generator_1_0.png!pkmer)

*图片：选择多个链接以生成的示例*

### 为什么我收到“错误：无法连接到站点”

这是因为无法访问所请求的站点。这可能是由于网络连接问题，或者所请求的页面在站点上不存在（404 错误）。

## 贡献者

感谢 @FeralFlora 和 @mariomui 在将这个项目引向正确方向方面的帮助。特别是提出使用 Citeproc-js 和 Zotero 翻译器的想法。

## 表示支持

如果您想支持我，可以在这里这样做，但请知道这并不是必须的，这个插件是完全免费的。

[<img src="https://github.com/kadisonm/obsidian-reference-generator/assets/134670047/826ead37-1265-42b1-b171-928d1e17035f" width="200">](https://www.buymeacoffee.com/kadisonm)

非常感谢您使用我的插件。
