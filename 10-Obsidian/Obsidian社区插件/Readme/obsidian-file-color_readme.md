---
uid: 2023080322181075
title: Obsidian 插件：File Color
tags: ['obsidian插件', 'readme']
description: 一个Obsidian插件，用于在文件树中为文件夹和文件设置颜色。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：File Color

> [!Note] 插件名片
> - 插件名称：File Color
> - 插件作者：ecustic
> - 插件说明：一个 Obsidian 插件，用于在文件树中为文件夹和文件设置颜色。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ecustic/obsidian-file-color)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-file-color)

## 概述

一个 Obsidian 插件，用于在文件树中为文件夹和文件设置颜色。

![File Color](https://cdn.pkmer.cn/covers/obsidian-file-color.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ecustic/obsidian-file-color/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-file-color]] 插件的自述翻译

# Obsidian 文件颜色

![Obsidian文件颜色横幅](./docs/images/hero-rounded.png)

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，它允许您为文件和文件夹在文件浏览器中选择颜色。

## 使用方法

通过在文件资源管理器中右键单击文件或文件夹并选择“设置颜色”来设置文件或文件夹的颜色。这将打开一个模态框，您可以在其中选择插件调色板中定义的所有颜色。

![设置颜色](./docs/images/set-color-rounded.gif)

### 更改调色板

要向调色板中添加颜色，请打开插件设置，并点击“+”按钮。然后使用颜色选择器选择颜色，并输入颜色的名称。之后，它将出现在“设置颜色”模态框中。您可以根据需要添加任意数量的颜色。

![添加颜色](./docs/images/add-color-rounded.gif)

## 兼容性

此插件已与其他几个社区插件进行了测试：

* [Icon Folder](https://github.com/FlorianWoelki/obsidian-icon-folder)
  * 应该可以直接使用，并且颜色也会自动应用到图标上。
* [Folder Note](https://github.com/aidenlx/folder-note-core)
  * 也可以直接使用，但是添加到文件上的下划线不会被着色。
  * 我个人在本地使用以下 CSS 代码片段：

    ```css
    .nav-folder.alx-folder-with-note>.nav-folder-title>.nav-folder-title-content {
      text-decoration-style: dotted;
      text-decoration-color: inherit;
    }
    ```

    这将使下划线使用此插件定义的颜色。结果如下所示：

    ![带有图标和文件夹注释的示例](./docs/images/icons-notes-rounded.png)

---

<div align="center">
  <a href="https://www.buymeacoffee.com/ecustic">
    <img src="https://media2.giphy.com/media/7ssLleBvWvESbx0BuG/giphy.gif" />
  </a>
</div>



