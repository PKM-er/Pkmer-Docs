---
uid: 2023080322252168
title: Obsidian 插件：【Readme】Quick snippets and navigation
tags: ['obsidian插件', 'readme']
description: 键盘导航上/下标题-可配置的默认代码块和回调-通过键盘快捷键复制代码块
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quick snippets and navigation

> [!Note] 插件名片
> - 插件名称：Quick snippets and navigation
> - 插件作者：@aciq
> - 插件说明：键盘导航上/下标题 - 可配置的默认代码块和回调 - 通过键盘快捷键复制代码块
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aciq/obsidian-keyboard-shortcuts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-snippets-and-navigation)

## 概述

键盘导航上/下标题 - 可配置的默认代码块和回调 - 通过键盘快捷键复制代码块

![Quick snippets and navigation](https://cdn.pkmer.cn/covers/quick-snippets-and-navigation.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ieviev/obsidian-keyboard-shortcuts/main/README.md)
>

---

## Readme(翻译）

下面是 [[quick-snippets-and-navigation]] 插件的自述翻译

# Obsidian 的快速片段和导航

- 键盘导航上/下标题
- 可配置的默认代码块和 callout 快捷方式
- 通过键盘快捷键复制代码块
- 快速切换扩展

安装时没有设置快捷键，您必须自己配置。

## 转到上一个/下一个标题

- 注意：仅在编辑模式下有效

![](https://github.com/aciq/obsidian-keyboard-shortcuts/blob/main/_resources/obs-go-to-heading.gif?raw=true)

- 复制代码块：显示代码块列表，允许您搜索和复制其中一个
- 复制下一个代码块：复制光标最近的下一个代码块

## 切换器扩展

> 注意：这些需要您在插件设置中配置“默认模态命令”：

> 对于以下演示，我使用了 [Another Quick Switcher插件](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher)，它支持标签，并将“默认模态命令”设置为：

```
obsidian-another-quick-switcher:search-command_recent-search
```

### 切换器扩展/按标签搜索

允许进行两步搜索，首先通过标签对笔记进行过滤。

### 切换器扩展/按标签折叠搜索

使用标签搜索：

- 展开标签
- AND 查询

![](https://github.com/aciq/obsidian-keyboard-shortcuts/blob/main/_resources/folded-search-by-tag.gif?raw=true)

<!-- ![](_resources/folded-search-by-tag.gif) -->

### Switcher 扩展/使用标签 1 打开切换器

打开已经添加到查询中的文件中的第一个标签的切换器。

![](https://github.com/aciq/obsidian-keyboard-shortcuts/blob/main/_resources/obs-with-tag-1.gif?raw=true)

> 注意 2：如果您想找到另一个切换器命令的命令 ID，请按 Ctrl+Shift+I 打开开发者控制台并运行此行。

```
app.commands.listCommands().map(x => x.id);
```

![](_resources/command-ids.png)

- 在使用后，还将光标移动到代码块内部/标题后面
- 代码块的默认语言可以在设置中进行配置
- 默认的注释类型也可以在设置中进行配置

# 发展

## 依赖项

- dotnet 6.0 sdk
- npm

安装 Node 和 Dotnet 依赖项

```
npm i
npm run install
```

将 F#编译为 js

```
npm run build
```

发布到 dist/

```
npm run publish
```