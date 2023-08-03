---
uid: 2023080322290326
title: Obsidian 插件：【Readme】URI Commands
tags: ['链接处理', '文件重构', '效率', 'obsidian插件', 'readme']
description: 该插件允许你将自定义URI命令添加到命令面板。可以通过预设你习惯的URI 命名方式来让 Obsidian 识别。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：URI Commands

> [!Note] 插件名片
> - 插件名称：URI Commands
> - 插件作者：kzhovn
> - 插件说明：该插件允许你将自定义URI命令添加到命令面板。可以通过预设你习惯的URI 命名方式来让 Obsidian 识别。
> - 插件分类：['链接处理', '文件重构', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kzhovn/uri-commands-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?uri-commands)

## 概述

该插件允许你将自定义URI命令添加到命令面板。可以通过预设你习惯的URI 命名方式来让 Obsidian 识别。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kzhovn/uri-commands-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[uri-commands]] 插件的自述翻译


## 概述
该插件允许您将自定义URI命令添加到命令面板。可以与[Obsidian URI scheme](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI)以及您的计算机支持的任何其他URI scheme一起使用。

### 占位符
您可以在URI中使用以下占位符。除非您关闭URL编码，否则所有这些占位符都已为您进行了[URL编码](https://en.wikipedia.org/wiki/Percent-encoding)，因此您不需要担心您的文本中是否有任何未转义的非法或保留字符。

当没有活动文件时，所有带有占位符的命令都会隐藏。

| 占位符              | 描述                                                                                                                                                                                                                                                                                                                                             |     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| {{fileName}}        | 文件的基本名称，不包括文件路径或文件扩展名。                                                                                                                                                                                                                                                                                                      |     |
| {{filePath}}            | 相对于存储库的当前文件的路径。例如 `FolderName/filename.md`                                                                                                                                                                                                                                                                                                                             |     |
| {{fileText}}        | 文件的全部内容，包括正文。仅适用于Markdown文件。                                                                                                                                                                                                                                                                                                                               |     |
| {{selection}}       | 您当前的选择。如果没有选择任何内容，则占位符将被替换为空字符串。                                                                                                                                                                                                                                         |     |
| {{line}}            | 当前行。                                                                                                                                                                                                                                                                                                                                       |     |
| {{vaultName}}            | 当前存储库的名称。                                                                                                                                                                                                                                                                                                               |     |
| {{meta:FIELD_NAME}} | 对应于FIELD_NAME的元数据字段的值。请注意，如果一个字段中有多个值（作为逗号分隔的列表或[数组]），则字段中的值将作为逗号分隔的列表插入到URI中。需要MetaEdit。 |     |

## 例子

### Obsidian
- 打开工作保险库：`obsidian://open?vault=work%20vault`
- 在我的保险库中打开笔记“快捷键参考”：`obsidian://open?vault=my%20vault&file=hotkey%20reference`
- 将所选内容追加到今天的日记笔记中（需要高级URI插件）：`obsidian://advanced-uri?vault=&daily=true&data={{selection}}&mode=append`
- 打开此插件的设置页面（需要Hotkey Helper插件）：`obsidian://goto-plugin?id=uri-commands&show=config`

### 其他程序
- 在邮件客户端中打开当前笔记的草稿邮件：`mailto:friend@example.com?subject={{fileName}}&body={{fileText}}`
- [将当前笔记发送到Roam](http://www.sendtoroam.com/)：`mailto:me@sendtoroam.com?subject={{fileName}}&body={{fileText}}`
- 打开 Spotify 专辑：`spotify:album:4niKC11eq7dRXiDVWsTdEy`
- 打开一个新的 [HackMD](https://hackmd.io/) 协作 Markdown 文档：`https://hackmd.io/new`
    - 注意，对于网站，你必须以 `https://` 或 `http://` 开头，而不是 `www.`
- 打开 YAML 字段 "topic" 对应的维基百科页面：`https://en.wikipedia.org/wiki/{{meta:topic}}`
- 在 Calibre 图书馆中查找你的选择：`calibre://search/_?q={{selection}}`
- 打开 "external-link" 元数据字段中的 URL：`{{meta:external-link}}`
    - 注意，为了使其正常工作，URL 编码必须关闭。

## 相关插件
- [高级URI](https://github.com/Vinzent03/obsidian-advanced-uri)：为每日笔记启用URI，将文本附加到文件中，跳转到标题，搜索和替换等功能
- [快捷键助手](https://github.com/pjeby/hotkey-helper)：为插件的README、设置和快捷键配置启用Obsidian URI

## 帮助
有关Obsidian中URI的更多信息，请参阅[Obsidian文档](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI)。其他URI方案的不完整列表可以在[这里](https://en.wikipedia.org/wiki/List_of_URI_schemes)找到。

感谢
这段代码的部分内容，尤其是图标选择器，大量借鉴了[phibr0](https://github.com/phibr0)的插件，包括[Obsidian Macros](https://github.com/phibr0/obsidian-macros)和[Customizable Sidebar](https://github.com/phibr0/obsidian-customizable-sidebar)。



