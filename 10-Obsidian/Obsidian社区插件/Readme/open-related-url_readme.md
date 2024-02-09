---
uid: 2023120719394690
title: Obsidian 插件：【Readme】Open Related Url
tags: ['obsidian插件', 'readme']
description: 在笔记的YAML前言中打开URL。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Open Related Url

> [!Note] 插件名片
> - 插件名称：Open Related Url
> - 插件作者：Dan Pickett
> - 插件说明：在笔记的 YAML 前言中打开 URL。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dpickett/open-related-url)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-related-url)

## 概述

在笔记的 YAML 前言中打开 URL。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dpickett/open-related-url/master/README.md)
>

---

## Readme(翻译）

下面是 [[open-related-url]] 插件的自述翻译

# 打开相关 URL - 一个 Obsidian 插件

一个 Obsidian 插件。在任何给定的笔记中，您可以使用它来打开在笔记的 [YAML前置元数据](https://help.obsidian.md/Advanced+topics/YAML+front+matter) 中提到的 URL。

用例

Obsidian 非常适合做笔记，我经常需要将我的笔记与任务列表或一组文件进行关联。如果你遵循 Tiago Forte 的 [PARA](https://fortelabs.co/blog/para/) 方法，他建议你在所有系统中都有类似的文件夹结构。

对我来说，最有用的两个关联事项是任务和文件。如果你提供一个 `tasksUrl`，可能指向 Asana 或 Clickup，你可以在几秒钟内打开相关的 URL。如果你提供一个 `filesUrl`，可能指向 Google Drive 或 Dropbox 文件夹，也是如此。

## 概述视频

[![概述视频](https://cdn.pkmer.cn/covers/open-related-url_1_0.jpeg!pkmer)](https://www.youtube.com/watch?v=S-1r0Z7nPgo)

打开相关 URL 命令

假设您有一个 Obsidian 笔记，其中包含以下 YAML 前置信息：

```yaml
alias: "构建小部件"
taskUrl: https://clickup.com
fileUrl: https://drive.google.com
```

当您打开命令面板并调用“打开相关 URL”命令时，它将搜索您的前置信息以查找以 `Url` 结尾的键（默认情况下：这是您可以在设置中覆盖的设置）。

然后，插件将向您呈现满足上述条件的所有选项。当您选择一个选项时，它将打开相应的 URL。

## 快速导航

如果您在笔记元数据中始终使用相同的 URL 前置键，您可以添加 Obsidian 键绑定以快速导航到这些 URL。

在 Open Related URL 的插件设置中，以逗号分隔的列表形式提供常见键的名称。不要包含 Url 后缀。我的设置为 `task, file`，这样我就可以分别为 `taskUrl` 和 `fileUrl` 键配置快速 URL。

### 映射您的按键绑定

在指定了您的快速链接之后，您可以通过在“打开相关 URL”旁边的热键按钮上按下来映射按键绑定，该按钮位于您的社区插件菜单中。

触发您的按键绑定

当在一个具有您之前配置的快速 URL 的笔记中时，使用新分配的按键绑定快速导航到您想要去的地方。
