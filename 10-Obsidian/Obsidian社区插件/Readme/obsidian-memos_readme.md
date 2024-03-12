---
uid: 20231220112631
title: Obsidian 插件：【Readme】Thino
tags: ['界面相关', '笔记文件处理', '效率', 'obsidian插件', 'readme']
description: 快速捕捉备忘录，并在侧边栏中以热图的形式显示它们。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Thino

> [!Note] 插件名片
> - 插件名称：Thino
> - 插件作者：Boninall
> - 插件说明：快速捕捉备忘录，并在侧边栏中以热图的形式显示它们。
> - 插件分类：[' 界面相关 ', ' 笔记文件处理 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Quorafind/Obsidian-Thino)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-memos)

## 概述

快速捕捉备忘录，并在侧边栏中以热图的形式显示它们。

![Thino](https://cdn.pkmer.cn/covers/obsidian-memos.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Quorafind/Obsidian-Thino/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-memos]] 插件的自述翻译

> [!warning]
> From version 2.0.0, thino is not open-source anymore. You can still use it for free, but you need to buy a license to use some advanced features. You can buy a pro license from [here](https://thino.pkmer.net/).
>
> v1's source codebase is still open-source via MIT license, you can visit it here: [v1 source code](https://github.com/Quorafind/Obsidian-Memos/tree/v1).

> [!note]
> From version 2.0.0, obsidian-memos is renamed to thino, you can search thino in obsidian plugin market to install it.
>
> About the reason for the rename, please refer to [here](https://thino.pkmer.net/en/thino).

## 基本介绍

1. 所有 Thino 都是从您的笔记中获取的。如果您使用的是基本版本，则所有 Thino 都源自您的日记文件。有关更多信息，请访问 [链接](https://thino.pkmer.net/en/thino/01_thino-basic/01_thino-basic-tutorial/)。
2. 在日记模式下，它会访问指定标题下的内容或整个日记文本，并将其解析为 Thino。常见格式为 `- 12:00 abcd`。
3. 您输入的每个 Thino 都将插入到您指定标题的末尾或完整文本的末尾。

您可以从多个来源阅读 thinos，请访问 [链接](https://thino.pkmer.net/en/)。

## 附加功能

请参考我们的官方文档网站：[link](https://thino.pkmer.net/en/thino)。

## 如何使用

1. 您至少需要激活每日笔记核心插件（如果您是 thino pro 用户，可以在禁用日记模式时禁用每日笔记插件）。
2. 在使用之前，请至少配置两个设置：在日记模式下指定标题下的处理和插入在指定标题下。
3. 打开 Thino，输入内容，然后点击 `noteit` 按钮。
4. 您输入的内容将自动插入到您的日记文件中。

## 基本示例（日记模式）

您输入的内容将被转换为以下格式：

```markdown  
- 22:15 {您的输入内容}  
```  

以下的 markdown 文本格式将在日记模式下被正确解析：

```markdown  
- 19:00 abcd  
- [ ] 19:00 cdef  
```

## Thino Sync（尚未提供）

**Thino Sync** 是一项服务，允许您在设备之间同步您的 Thinos。这是一个付费服务。您可以从 [链接](https://thino.pkmer.net/en/) 购买许可证。

我们不会收集任何您的数据，也无法访问您的数据。

- 如果您使用 Thino（PKMer）Sync，我们会存储您的数据以提供服务。
- 如果您的 Sync 或 Publish 订阅到期，您的数据将在我们的服务器上存储一个月，然后永久删除。如果您自行取消订阅，您的数据将立即被删除。

## 专业版 vs 免费版

| 功能                                                                    | 免费版 | 专业版 |
|-------------------------------------------------------------------------|------|-----|
| 每日笔记模式                                                           | ✅    | ✅   |
| Thino 分享                                                              | ✅    | ✅   |
| 全局编辑器                                                             | ✅    | ✅   |
| [实时预览编辑器](https://thino.pkmer.net/en/thino/01_thino-basic/thino-editor/)                      | ✅*   | ✅   |
| [多重布局](https://thino.pkmer.net/en/thino/01_thino-basic/thino-multi-layout/)                             | ❌    | ✅   |
| [每日进度条](https://thino.pkmer.net/en/thino/01_thino-basic/thino-heatmap/)                       | ❌    | ✅   |
| [实时预览编辑器自定义建议](https://thino.pkmer.net/en/thino/01_thino-basic/thino-editor/) | ❌    | ✅   |
| [随机复习](https://thino.pkmer.net/en/thino/01_thino-basic/thino-review/)                            | ❌    | ✅   |
| [本地Thino服务器](https://thino.pkmer.net/en/)                       | ❌    | ✅   |
| [全局捕获](https://thino.pkmer.net/en/)                           | ❌    | ✅   |
| [多个Thino来源](https://thino.pkmer.net/en/thino/02_thino-advanced/thino-multi-souce/)                   | ❌    | ✅   |

*: 免费版中对实时预览编辑器的支持有限。

您可以购买许可证来使用以下功能：[链接](https://thino.pkmer.net/en/).

## 如何安装

| 源                                                                  | 描述                                                                                                                                                        |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Obsidian插件市场](https://obsidian.md/plugins?id=obsidian-memos) | 从 Obsidian 的插件市场安装。                                                                                                                             |
| [PKMer插件](https://pkmer.cn/products/plugin/pluginMarket/)         | 从 PKMer 插件安装。                                                                                                                                        |
| [GitHub](https://github.com/quorafind/obsidian-thino)                   | 下载最新版本。将三个文件（main.js、manifest.json、styles.css）提取并放入文件夹 `{{obsidian_vault}}/.obsidian/plugins/Obsidian-Thino` 中。 |
| BRAT                                                                    | 将 `Quorafind/Obsidian-Thino` 添加到 BRAT 中。                                                                                                                            |

## 表达感谢

如果你喜欢这个插件，请考虑购买许可证来支持我的工作和热情。你可以从 [这里](https://thino.pkmer.net/) 购买许可证。
