---
uid: 2023120719320129
title: Obsidian 插件：【Readme】Kindle Highlights
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 使用您的亚马逊登录或上传您的“我的剪辑”文件来同步您的Kindle书籍突出显示
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Kindle Highlights

> [!Note] 插件名片
> - 插件名称：Kindle Highlights
> - 插件作者：Hady Osman
> - 插件说明：使用您的亚马逊登录或上传您的“我的剪辑”文件来同步您的 Kindle 书籍突出显示
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/hadynz/obsidian-kindle-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-kindle-plugin)

## 概述

使用您的亚马逊登录或上传您的“我的剪辑”文件来同步您的 Kindle 书籍突出显示

![Kindle Highlights](https://cdn.pkmer.cn/covers/obsidian-kindle-plugin_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hadynz/obsidian-kindle-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-kindle-plugin]] 插件的自述翻译

# Obsidian Kindle 插件

![CI/CD 状态](https://github.com/hadynz/obsidian-kindle-plugin/actions/workflows/main.yml/badge.svg)

![GitHub 发布 (最新日期)](https://img.shields.io/github/v/release/hadynz/obsidian-kindle-plugin)

将您的 Kindle 笔记和标注直接同步（和重新同步）到您的 [Obsidian][1] 保险库中。您可以选择使用以下两种方法进行同步：

### 亚马逊的 Kindle 阅读器

从云端同步你直接从亚马逊购买的任何电子书。该插件将从 [亚马逊的 Kindle 阅读器][4] 中抓取你的亮点，并持续保持同步。

这种方法无法适用于从亚马逊以外购买的书籍、文章、PDF 和个人文档的亮点（请参考下一种方法）。

### Kindle 设备（我的剪辑）

通过上传存储在您的 Kindle 设备上的 `My Clippings.txt` 文件，同步您的亮点。

无论是否通过亚马逊购买，此文件都包含了您在 Kindle 上任何书籍的亮点、书签和笔记。

您可以通过使用 USB 将其连接到计算机来提取您的 `My Clippings.txt` 文件。

![](https://cdn.pkmer.cn/covers/obsidian-kindle-plugin_1_2.gif!pkmer)

## 特点

- **持续、自动同步** — 通过 [亚马逊的 Kindle 阅读器][4]，按下一个按钮即可使用您的亚马逊账户同步您的亮点。

  后续的同步将进行智能差异比较，并将任何新的亮点带入，而不会影响您对亮点文件所做的任何编辑。

- **同步非亚马逊图书** — 通过上传您的 Kindle 设备上的 `My Clippings.txt` 文件来同步您的亮点。
- **丰富的元数据** — 通过从 Amazon.com 下载有关您的书籍的额外元数据信息来丰富您的笔记。
- **强大、灵活的模板化与预览** — 通过配置自己的模板，使用 ([Nunjucks][2]) 模板语言进行自定义高亮和文件名，同时提供实时预览。

## 使命宣言

受到 Obsidian 的“你的数据存放在本地文件夹中”和“再也不要让你的一生工作被托管在云端”的原则的启发，这个插件试图做到同样的事情，即处理你珍贵的 Kindle 笔记和亮点。为什么你要费力地访问自己的数据，或者支付第三方服务来访问你拥有的信息呢？

已知的考虑因素

### 安全性

如果您选择通过亚马逊的在线 Kindle 阅读器同步您的亮点，重要的是要注意，通过 Obsidian 登录您的亚马逊帐户后，您的亚马逊会话将在您的存储库中的任何其他插件中可用，直到会话过期。

您可以通过在每次同步后注销（从设置中）或使用离线同步方法，即上传您的 `My Clippings.txt` 文件来减轻这种风险。

### 导出限制

由于多种原因（请参见 [这里][5] 和 [这里][6]），Kindle 平台有时会限制从特定书籍中导出的高亮文本的数量。这个限制因书籍而异，无论是从亚马逊购买的书籍还是有 DRM 保护。目前还没有已知的替代方法来解决这个问题。

如果您喜欢这个插件并想请我喝杯咖啡，您可以！

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="140">](https://www.buymeacoffee.com/hadynz)

[![GitHub Sponsors](https://img.shields.io/github/sponsors/hadynz?style=social)](https://github.com/sponsors/hadynz)

## 许可证

[MIT](LICENSE)

[1]: <https://obsidian.md>
[2]: <https://mozilla.github.io/nunjucks>
[3]: <https://github.com/pjeby/hot-reload>
[4]: <https://read.amazon.com/notebook>
[5]: <https://help.readwise.io/article/47-why-are-my-kindle-highlights-truncated-ellipses#:~:text=Publishers%20require%20Amazon%20to%20place,the%20book%20will%20be%20truncated.>
[6]: <https://brian.carnell.com/articles/2018/route-around-amazon-kindles-ridiculous-limits-on-highlights-exporting-with-bookcision/>



