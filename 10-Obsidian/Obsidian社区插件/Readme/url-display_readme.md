---
uid: 2023102611084880
title: Obsidian 插件：【Readme】URL Display
tags: ['obsidian插件', 'readme']
description: 提取并显示Obsidian笔记中的外部URL。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】URL Display

> [!Note] 插件名片
> - 插件名称：URL Display
> - 插件作者：Stephanie Lin
> - 插件说明：提取并显示 Obsidian 笔记中的外部 URL。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lin-stephanie/obsidian-url-display)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?url-display)

## 概述

提取并显示 Obsidian 笔记中的外部 URL。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lin-stephanie/obsidian-url-display/main/README.md)
>

---

## Readme(翻译）

下面是 [[url-display]] 插件的自述翻译

# Obsidian URL Display

这个 [Obsidian](https://obsidian.md/) 插件可以从当前笔记中提取外部链接，并在从 ribbon 打开的面板中显示它们。您可以通过 [插件设置](#settings) 调整面板中显示的内容。

这是它的 [效果](https://youtu.be/w5nlhg8Bq-0)。

![演示](https://github.com/lin-stephanie/obsidian-url-display/blob/main/docs/demo.png)

动机

我经常将一些博客文章剪切并粘贴到我的 Obsidian vault 中阅读和做笔记，有时我想提取笔记中的所有外部 URL 并在浏览器中打开它们，就像 Obsidian 的原生内部链接一样。所以我制作了这个插件，目前可以：

- 提取活动笔记中的外部 URL 并在面板中显示它们
- 选择像书签栏一样打开外部 URL

如果你有兴趣，可以去 [Polls](https://github.com/lin-stephanie/obsidian-url-display/discussions/1) 投票选择我下一步想要实现的新功能。

使用方法

### 安装

- 直接从 Obsidian Market 安装，或者：
- 下载最新版本。解压并将 3 个文件（main.js，styles.css，manifest.json）放入文件夹{{obsidian_vault}}/.obsidian/plugins/obsidian-url-display。

### 启用

- 将焦点移动到一个笔记中，然后：
- 在功能区中选择插件图标，或者：
- 打开命令面板并选择命令“URL 显示：打开或关闭窗格”

### 更新 URL 列表

- 在侧边栏中右键选择插件图标，然后选择“刷新列表”，或者：
- 打开命令面板，选择命令“URL 显示：刷新列表”

### 提示

- 通常情况下，当您在不同的笔记之间切换时，URL 列表将自动更新。
- 在您修改活动笔记中的 URL 后，您需要按照上述提到的方式手动刷新 URL 列表。

## 设置

|        项目                               |        描述                                                                                                                                                                                                                                   |     值                                    |        默认值             |
|:------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:---------------------------|
|        去重复 URL                   |       如果启用，笔记中的两个相同的 URL 只会显示一次。                                                                                                                                                                                    |     布尔值                                  |        true               |
|        使用别名                          |        默认情况下，使用 URL 元数据中的网站标题作为显示文本。如果启用，将使用方括号（[]）中的文本。                                                                                                              |     布尔值                                  |        false                |
|       显示网站图标                        |       如果禁用，面板将不会显示网站图标，只显示文本。                                                                                                                                                                            |     布尔值                                  |        true                |
|        缓存模式                         |        选择保存网站图标的缓存模式。只有在显示网站图标设置为 `true` 时才会生效。更多详情请参见 [详细信息](#about-cache-mode)。                                                                                                                                    |     磁盘缓存，内存缓存                 |        磁盘缓存          |
|      通知模式                          |      您可以自定义 URL 解析完成时的通知类型。                                                                                                                                                                          |     无，成功，失败，全部&nbsp;     |      全部                  |

细节

### 支持的 URL 格式

```md
https://example.org
[Alias](https://example.org)
[](https://example.org)
```

### 使用的 REST API

如果在插件设置中启用了 `显示favicon` 或禁用了 `使用别名`，插件将使用免费的 [MicroLink API](https://microlink.io) (`https://api.microlink.io?url=`) 来请求 URL 元数据，但有一个限制：每天 50 个请求。不用担心，插件会缓存元数据以避免对相同 URL 的重复请求。

请注意，请求 URL 元数据需要一定的时间（取决于笔记中 URL 的数量）。在此期间，您可以先做其他事情。如果 `通知模式` 未设置为 `无`，请求完成时会有一个通知。

如果您想尽快显示 URL 列表，建议禁用 `显示favicon` 并启用 `使用别名`。

### 关于缓存模式

如果您希望网站图标（favicon）加载更快，您可以选择“内存缓存”，但请注意这可能会影响当前的性能。如果您不关心速度且有很多 URL，建议选择“磁盘缓存”。

感谢以下出色的插件提供参考和灵感：

- [joethei/obsidian-link-favicon](https://github.com/joethei/obsidian-link-favicon)
- [Seraphli/obsidian-link-embed](https://github.com/Seraphli/obsidian-link-embed)

## 贡献

如果您在这个插件中发现任何错误或改进的空间，欢迎在 obsidian-url-display 存储库上开启 [问题](https://github.com/lin-stephanie/obsidian-url-display/issues) 或 [拉取请求](https://github.com/lin-stephanie/obsidian-url-display/pulls)。非常感谢您的贡献！

如果这个插件对您有价值，我会非常感谢您给这个存储库一个星星。😊
