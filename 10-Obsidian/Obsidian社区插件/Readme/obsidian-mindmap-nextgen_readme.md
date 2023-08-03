---
uid: 20230803231105
title: Obsidian 插件：Mindmap Nextgen
tags: ['obsidian插件', 'readme']
description: 一个插件，用于将笔记预览为Markmap思维导图
author: AI
type: readme
draft: false
editable: false
modified: 20230803232501
---

# Obsidian 插件：Mindmap Nextgen

> [!Note] 插件名片
> - 插件名称：Mindmap Nextgen
> - 插件作者：VeroCloud Pty Ltd (original by James Lynch)
> - 插件说明：一个插件，用于将笔记预览为 Markmap 思维导图
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/verocloud/obsidian-mindmap-nextgen)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-mindmap-nextgen)

## 概述

一个插件，用于将笔记预览为 Markmap 思维导图

![Mindmap Nextgen](https://cdn.pkmer.cn/covers/obsidian-mindmap-nextgen.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/verocloud/obsidian-mindmap-nextgen/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-mindmap-nextgen]] 插件的自述翻译

# Mindmap NextGen

![GitHub工作流状态](https://img.shields.io/github/actions/workflow/status/verocloud/obsidian-mindmap-nextgen/release.yml?logo=github&style=for-the-badge)

![GitHub发布（最新的语义化版本）](https://img.shields.io/github/v/release/verocloud/obsidian-mindmap-nextgen?style=for-the-badge&sort=semver)

Obsidian 插件，使用 [Markmap](https://markmap.js.org/) 将您的笔记显示为思维导图。

类似的插件也适用于 [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode)。

## 目录

+ [使用方法](#usage)
+ ["更多选项"菜单](#more-options-menu)
  + [固定/取消固定](#pinunpin)
  + [复制截图](#copy-screenshot)
  + [全部折叠](#collapse-all)
  + [切换工具栏](#toggle-toolbar)
+ [前言](#frontmatter)
+ [设置](#settings)
  + [着色方法](#coloring-approaches)
  + [线条粗细](#line-thickness)
  + [突出显示内联markmaps](#highlight-inline-markmaps)
  + [使用标题作为根节点](#use-title-as-root-node)
  + [Markmap设置](#markmap-settings)
+ [其他功能](#other-features)
  + [复选框](#checkboxes)
  + [LaTeX](#latex)
+ [安装](#installing)
+ [贡献](#contributing)

## 用法

打开命令面板（cmd/ctrl-p）并开始输入其中一个 2 个命令的名称。

<img width="720" alt="Command palette commands" src="https://user-images.githubusercontent.com/10291002/216599311-75ec8e62-3e99-4e09-abc3-86ff125ab308.png">

固定和非固定思维导图有什么区别？固定的思维导图与单个 Markdown 文档链接。非固定的思维导图将根据您最后点击的文档进行更新。

您还可以使用标记为“markmap”的 Markdown 代码块在文档中插入思维导图。例如：

~~~
```markmap

# 思维导图

思维导图

“更多选项”菜单

这是每个选项卡右上角的菜单。

<img width="104" alt="image" src="https://user-images.githubusercontent.com/10291002/217636599-1b33270b-4887-4153-aa07-468255ccf5f2.png">

将选项卡切换为未固定状态，或将其固定到活动文档。

复制思维导图的PNG格式到剪贴板。
背景和文本颜色可以在设置或文档的前言中进行配置。

### 折叠全部

关闭所有思维导图节点，只保留根节点可见。

### 切换工具栏

显示或隐藏位于思维导图右下角的工具栏

其他特点

复选框将在思维导图中显示如下：

# 家务劳动

## 主要任务
- [x] 洗碗
- [ ] 清洁浴室
- [x] 更换灯泡
- [ ] 其他事情

![思维导图复选框示例](images/mind-map-checkboxes.png)

### LaTeX
LaTex表达式将在您的思维导图中呈现。在表达式的两侧使用一个美元符号来表示内联表达式。

`$\frac{\partial f}{\partial t}$`

或者使用两个美元符号来表示多行表达式。
```
$$
\frac{\partial f}{\partial t}
$$
```

## 前置设置

可以在每个文档的前置设置中设置一些设置。当设置时，前置设置优先于全局设置。

该插件将使用[markmap的设置](https://markmap.js.org/docs/json-options)中的任何设置，除了`extraJs`和`extraCss`。

**示例：**
```markdown
---
markmap:
  screenshotTextColor: #28F48D
  highlight: true
  titleAsRootNode: true
---
```

## 设置

### 着色方法
有三种方法可以选择为思维导图的分支着色，可以在插件设置或每个文档的前置元数据中进行选择。

#### 分支着色
该模式将为每个分支选择随机颜色。"颜色冻结级别"决定了分支在何深度停止改变颜色。

#### 深度着色
在这种模式下，分支根据它们在思维导图中的深度进行着色。您可以选择前三个层级的颜色，以及超过三个层级的默认颜色。

单色模式下，所有分支都是相同的颜色。

### 线条粗细
为前三个深度级别设置线条粗细，并为超过这些级别的级别设置默认粗细。

### 强调内联标记地图

前置设置：`highlight`

为内联标记地图添加背景，使其与页面的其他部分区分开来。

### 将标题用作根节点

前置设置：`titleAsRootNode`

生成思维导图时，将标题放在底层，以避免重复标题。

### 屏幕截图设置

前置设置：`screenshotTextColor`，`screenshotBgColor`

决定屏幕截图功能将使用的颜色。

通过["更多选项"菜单](#more-options-menu)进行屏幕截图。

### Markmap设置

插件设置中有一个部分用于调整思维导图的不同部分的形状和大小。一开始可能会感到困惑。您需要尝试不同的设置组合来使其符合您的喜好。

安装

在Obsidian设置中的Community Plugins部分搜索“Mindmap NextGen”。

### 兼容性

我测试过的 Obsidian 版本是 **v1.0.3**，建议至少使用 **v1.0.0** 版本。

### 手动安装

1. 下载[最新版本](https://github.com/MasterTuto/obsidian-mindmap-vb/releases/latest)
2. 从压缩包中提取`obsidian-mindmap-nextgen`文件夹到你的笔记库的插件文件夹：`<vault>/.obsidian/plugins/`  
   注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，你可以按下`Command+Shift+Dot`来在Finder中显示该文件夹。
3. 重新加载Obsidian
4. 如果提示安全模式，你可以禁用安全模式并启用插件。

### 夜间安装

在开始之前，您需要在您的计算机上安装以下工具：
* [NodeJS](https://nodejs.org/en/)
* NPM（随 NodeJS 一起安装）
* Git（可选）

1. 打开 Obsidian。
2. 转到“设置”>“社区插件”。
3. 在“已安装的插件”中，您可以在末尾找到一个文件夹图标，点击它：

![Obsidian 打开插件文件夹图标](https://user-images.githubusercontent.com/21978588/206907799-7a79e2fa-3535-4c51-9604-dc45cb5bd21e.png)

4. 保持此文件夹打开。
5. 您可以直接点击[此处](https://github.com/AdrianSimionov/obsidian-mindmap-nextgen/archive/refs/heads/main.zip)下载 zip 文件。或者您可以转到[此存储库](https://github.com/AdrianSimionov/obsidian-mindmap-nextgen/)，点击绿色图标“CODE”，然后点击“Download ZIP”。
6. 转到您的下载文件夹，或者您下载的任何位置。
7. 解压缩 zip 文件。
8. 将解压缩的文件夹复制到您在步骤 3 中打开的文件夹中。
9. 转到解压缩的文件夹，并在终端中打开它（在 Windows 上，您可以使用“Shift + 右键单击”，然后选择“在此处打开命令提示符”或“在此处打开 PowerShell”，在 Linux 上只需“右键单击”并点击“在此处打开终端”）。
10. 运行 `npm install`。
11. 运行 `npm run dev`。
12. 转到 Obsidian 的“设置”>“社区插件”。
13. 重新加载插件文件夹，然后启用“Mindmap NextGen”。

## 贡献

欢迎和感谢大家提供拉取请求和问题。😀

如果您想要为该插件的开发做出贡献，请按照[CONTRIBUTING.md](CONTRIBUTING.md)中提供的指南进行操作。



