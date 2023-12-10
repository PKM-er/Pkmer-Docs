---
uid: 2023120719250938
title: Obsidian 插件：【Readme】Colored Tags Wrangler
tags: ['obsidian插件', 'readme']
description: 为标签分配颜色。与其他插件（如看板）集成。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Colored Tags Wrangler

> [!Note] 插件名片
> - 插件名称：Colored Tags Wrangler
> - 插件作者：AndreasSasDev
> - 插件说明：为标签分配颜色。与其他插件（如看板）集成。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/code-of-chaos/obsidian-colored_tags_wrangler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?colored-tags-wrangler)

## 概述

为标签分配颜色。与其他插件（如看板）集成。

![Colored Tags Wrangler](https://cdn.pkmer.cn/covers/colored-tags-wrangler.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/code-of-chaos/obsidian-colored_tags_wrangler/master/README.md)
>

---

## Readme(翻译）

下面是 [[colored-tags-wrangler]] 插件的自述翻译

Obsidian - 彩色标签整理器

该插件允许用户为不同的标签应用不同的颜色。

标签是在插件的“设置”选项卡中应用的。

## 特点

- 使用颜色选择器定义具有唯一颜色的标签的能力
  - 您还可以启用选项，将文本颜色和背景颜色分离，并为一个标签选择两种不同的颜色。
- 与 Canvas 卡片的集成。
  - 设置将标签颜色应用于具有该标签的 Canvas 卡片。
- 与 [Kanban](https://github.com/mgmeyers/obsidian-kanban) 插件的集成。
  - 设置将标签颜色应用于具有该标签的 Kanban 卡片。
  - 设置将标签颜色应用于 Kanban 列表，当标题中存在标签时。
  - 设置在 Kanban 视图中省略标签中的 `#` 符号。
- 与 Folder Notes 属性中的标签的集成
  - 设置如果文件的属性中的标签有颜色，则将颜色应用于文件夹。
  - *当前缺陷*：当您更改文件属性中的标签时，您必须手动按下设置中的 `detect` 按钮。
  - 这与单个插件没有真正的关联。我使用 [AidenLX的FolderNote](https://github.com/aidenlx/alx-folder-note) 来实现这一点，但任何与其所在文件夹同名的文件都可以工作。

### 功能示例

| 功能                                                                                                                                                                                                                                                     | 图片                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 标签设置 <br>（注意：我已经启用了一行中的多个标签，用分号 `;` 分隔，并且还启用了“启用单独的背景颜色”选项。第一个颜色选择器用于文本颜色，第二个用于背景颜色。） | ![tags_setting.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_0.png!pkmer)             |
| 彩色标签                                                                                                                                                                                                                                                | ![tags_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_1.png!pkmer)             |
| Canvas 集成                                                                                                                                                                                                                                              | ![canvas_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_2.png!pkmer)         |
| 看板集成                                                                                                                                                                                                                                                | ![kanban_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_3.png!pkmer)         |
| 文件夹笔记集成 <br>（注意：目前您需要在设置中手动按下“检测”按钮。）                                                                                                                                                                                            | ![foldernote_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_4.png!pkmer) |

已知问题

以下是已知问题列表。如果您知道如何修复它们，欢迎提供帮助。

- 如果看板卡片、画布卡片或文件夹注释中有多个彩色标签，CSS 选择给定颜色的原因并不总是清楚。
支持
如果你喜欢这个插件，并且想要支持它的开发。你可以在 [twitch](https://www.twitch.tv/andreassasdev) 上支持我，或者在 [Ko-fi](https://www.twitch.tv/andreassasdev) 上捐赠。
所有的捐赠都受欢迎，但请不要感到压力去给予。



