---
uid: 2023080322254859
title: Obsidian 插件：Redirect
tags: ['obsidian插件', 'readme']
description: 通过允许为任何文件设置别名，特别是非标记文件的管理更加容易。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Redirect

> [!Note] 插件名片
> - 插件名称：Redirect
> - 插件作者：Jacob Levernier
> - 插件说明：通过允许为任何文件设置别名，特别是非标记文件的管理更加容易。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jglev/obsidian-redirect)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-redirect)

## 概述

通过允许为任何文件设置别名，特别是非标记文件的管理更加容易。

![Redirect](https://cdn.pkmer.cn/covers/obsidian-redirect.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jglev/obsidian-redirect/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-redirect]] 插件的自述翻译

# Obsidian 重定向

[Obsidian](https://obsidian.md) 插件，用于方便管理非 Markdown 文件，允许在任何文件上设置 [别名](https://help.obsidian.md/How+to/Add+aliases+to+note)。

## 动机

Obsidian 在管理 Markdown 笔记和描述它们的元数据方面功能丰富。然而，它目前在附件（即非 Markdown 文件）管理方面的功能不够丰富。

该插件允许扩展 Obsidian 现有的元数据管理功能和工具，使其适用于其他文件，包括二进制文件。

该插件可能特别适用于与 [Obsidian二进制文件管理插件](https://github.com/qawatake/obsidian-binary-file-manager-plugin) 一起使用，该插件会自动为存储库中的每个二进制文件创建一个 Markdown 文件。

使用方法

### YAML 前置元数据

该插件会监视包含 `redirect` 或 `redirects` 元素的 Markdown 文件的 [YAML前置元数据](https://help.obsidian.md/Advanced+topics/YAML+front+matter)。两者都可以是单数或复数形式。例如：

```md
---
redirect: "path/to/file/in/vault.png"
---

Lorem ipsum...
```

或者...

```md
---
redirects: 
  - "path/to/file/in/vault.png"
  - "path/to/second/file/in/vault.png"
---

Lorem ipsum...
```

该插件还会监视 [`alias`和`aliases`前置元数据元素](https://help.obsidian.md/How+to/Add+aliases+to+note)。

<video src='https://user-images.githubusercontent.com/3667562/174501169-d48127a1-74ca-4685-a802-999e419dbeb5.mp4' ></video>

为了方便创建 `redirect` / `redirects` YAML 前置元数据条目，该插件提供了一个命令，`Redirect: Insert redirected file path`，允许在存储库中搜索文件：

<video src='https://user-images.githubusercontent.com/3667562/174501175-56b8eb57-c611-4d65-9827-d1abbbc18851.mp4' ></video>

### 链接到文件

在撰写 Markdown 笔记时，键入 `r[` 将会弹出一个可搜索的建议界面，该界面根据文件名、包含对它们的 `redirect` / `redirects` YAML 前置信息引用的文件以及这些文件的别名来列出文件。图像文件会显示在列表中，方便查找所需的图像：

<video src='https://user-images.githubusercontent.com/3667562/174501184-c303d823-2d70-4e2a-ab0b-93986951f1ed.mp4' ></video>

### 打开文件

#### 命令

使用“Redirect: Open redirected file”命令可以打开文件的类似可搜索列表：

<video src="https://user-images.githubusercontent.com/3667562/174501122-5e74d89a-19dd-462e-8ad2-e5800b950f6b.mp4" ></video>

“Redirect: Open redirect origin file”命令将呈现类似的界面，但会打开配置了重定向的 Markdown 文件。

#### 文件菜单

![](img/right-click-menu-item.png)

右键单击重定向的文件将显示“打开重定向源文件”选项，该选项将打开配置了重定向的文件，或者会询问要打开哪个文件。

#### 从系统文件浏览器中删除文件

![](img/status-bar.png)

该插件添加了一个状态栏按钮，名为“Redirect drop”。

在“标准”模式下，Obsidian 的工作方式与正常相同。然而，在“打开”模式下，当在打开的编辑器窗口上删除文件时，如果文件已经在 Vault 中并且是一个重定向文件，Obsidian 将打开配置了重定向的文件，或者询问要打开哪个文件。这种行为可以方便使用系统的文件浏览器来辅助文件管理。

<video src="https://user-images.githubusercontent.com/3667562/174783239-46bb9d2b-f431-4e37-ba9f-83d9c4a0fcf2.mp4"></video>

在“打开”模式下，如果删除的文件既不属于 Vault，也没有设置重定向，将不会执行任何操作。

可以通过单击状态栏按钮或运行“Redirect: Change mode”命令来更改删除模式。

在桌面和移动设备上，将鼠标悬停/长按在图像上将会暂时扩大该图像，使用户能够更好地查看。

安装

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的笔记库 `VaultFolder/.obsidian/plugins/obsidian-redirect/` 目录下。

### 来自社区插件列表

1. 在 Obsidian 的社区插件浏览器中搜索“Redirect”。
2. 在 Obsidian 的设置中启用该插件（在“Community plugins”下找到“Redirect”）。
3. 检查“Redirect”设置选项卡。添加一个或多个模式。
4. （可选）在“Hotkeys”设置选项卡中，为任何“Redirect...”命令添加一个热键。

## 开发

克隆仓库，运行 `yarn` 安装依赖，然后运行 `yarn dev` 编译插件并监听文件变化。

请参阅 <https://github.com/obsidianmd/obsidian-api> 获取 Obsidian 的 API 文档。

## 许可证

该插件的代码和文档以 [BSD 3-Clause许可证](./LICENSE) 发布。

# 待办事项

目前该代码库中没有包含自动化测试。特别欢迎使用 [Obsidian端到端测试方法](https://github.com/trashhalo/obsidian-plugin-e2e-test) 来提供帮助！
