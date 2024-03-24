---
uid: 20240324130939
title: tw5-obsidian-vault
tags: 
description: 在 TiddlyWiki5 中导入 Obsidian 或 Markdown Vault
author: 明玥
type: other
draft: false
editable: false
modified: 
---

<https://github.com/tiddly-gittly/tidgi-obsidian-manager>

# tw5-obsidian-vault

> Obsidian Vault 发布工具 by NodeJS TiddlyWiki
>
> NodeJS 版 TiddlyWiki 插件。在 TW 中导入 Obsidian Vault 管理（添加，更新，清空）或作为发布方式

- [x] 提供清除写入（导入）文件的清空操作。
- [x] 提供对 md 和 ob 链接和附件语法的适配。
- [x] 支持 obsidian callout 语法。
- [x] 支持 ob 存储库的 ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'] 文件。
- [x] 提供写入文件的记录功能。
- [x] 提供筛选文件和忽略文件夹功能。
- [x] 支持多个仓库导入，提供转写 obsidian 文件系统目录树展示的功能。
- [x] 支持删除单个仓库。
- [x] 提供多库列表同步和删除功能。
- [x] 支持 obsidian 风格硬换行，由 tiddlywiki/markdown 提供。
- [ ] 提供保留修改功能，默认则与 ob 知识库文件同步。

使用说明、参考手册和预览链接：<https://tiddly-gittly.github.io/tidgi-obsidian-manager/>

若页面没有更新，可以使用 Ctrl + F5 强制刷新缓存即可看到最新内容。

## 插件要求

- TiddlyWiki：core-version >= 5.2.0
- 需要太记 TidGi 或 NodeJS 版本的 TiddlyWiki。
- 若 TidGi ≥ v0.8.0 版本，需要在**工作区设置** - **博客和服务器设置**中 - 启用 **HTTP API** 并 关闭 **凭证鉴权选项**。
- 更新笔记库，需要先点清除在点导入。（**慎重**，会删除笔记库中修改的数据）

### 依赖插件：kookma/shiraz-callout

shiraz-callout 提供 callout 核心支持。

**本插件，目前已经支持 obsidian callout 语法了**

![[Pasted image 20240324131136.png]]

<https://tiddly-gittly.github.io/tidgi-obsidian-manager/>

### 依赖插件：tiddlywiki/markdown

支持的语法包括但不限于：

```
*这是倾斜的文字*
**这是加粗的文字**
***这是倾斜加粗的文字***
==这是加高亮的文字==
~~这是加删除线的文字~~
<u>这是加下划线的文字</u>
```

支持 obsidian 风格硬换行格式，在插件 ui/settings 面板设置是否启用（默认启用）。修改设置需要刷新页面之后生效。

#### 硬换行

> <https://talk.tiddlywiki.org/t/hard-linebreaks-while-entering-lists-in-wikitext/2494/2>
> <https://spec.commonmark.org/0.30/#hard-line-breaks>

```
两种硬换行符：<space><space><newLine>或者<backslash>
例如：

这是空格换行符  (注意这里有两个空格和一个\n)
这是<backslash>换行符\  (注意这里有一个<backslash>和一个\n)

都可以达到同样的硬换行效果。
```