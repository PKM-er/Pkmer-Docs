---
uid: 20230817224053
title: Obsidian 插件：Daf Yomi
tags: ['链接处理', 'obsidian插件', 'readme']
description: 准备达夫读书笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Daf Yomi

> [!Note] 插件名片
> - 插件名称：Daf Yomi
> - 插件作者：lyonsquark
> - 插件说明：准备达夫读书笔记
> - 插件分类：[' 链接处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lyonsquark/obsidian-daf-yomi)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-daf-yomi)

## 概述

准备达夫读书笔记

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lyonsquark/obsidian-daf-yomi/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-daf-yomi]] 插件的自述翻译

# Obsidian Daf Yomi

*请参阅 Obsidian 论坛上的 [此帖子](https://forum.obsidian.md/t/new-plugin-daf-yomi/22075) 以获取最新消息。*

这个 [Obsidian](https://obsidian.md) 插件的目的是为当天的*Daf Yomi*（希伯来语，意为“每日一页”）准备一个笔记页面。

[Daf Yomi](https://en.wikipedia.org/wiki/Daf_Yomi)，被称为“世界上最大的读书俱乐部”，是按照一套时间表每天学习一页 [塔木德](https://en.wikipedia.org/wiki/Talmud)（这里有一个很好的介绍 [链接](https://steinsaltz.org/talmud/)）的做法。需要 7.5 年（一个“周期”）才能阅读完 2711 页。第一个周期始于 1923 年。我们现在正处于第 14 个周期，该周期始于 2020 年 1 月 5 日。Daf Yomi 参与者的社群估计有超过 35 万人，包括虔诚的犹太人和非犹太人。

塔木德是公元 200-500 年编纂的，是拉比犹太教和犹太宗教法的基础，其中不仅包含法律，还包含围绕法律的详尽争论。通过 Daf Yomi，人们可以更多地了解这些法律，了解这种“塔木德式”的思维方式，以及很久以前的生活是什么样子的（提示：庆幸卫生纸已经改进了很多！）。

有很多资源可以帮助学习 Daf Yomi，包括播客和评论。该插件在 Obsidian 中为当天的 Daf 准备了一个笔记页面，并提供了一些资源的链接和文本（见下文）。它在命令面板中引入了两个命令：“Daf Yomi: Add Daf Yomi page by date”和“Daf Yomi: Add Daf Yomi page by tractate/daf”。

- 按日期：输入日期，插件将确定所在的书卷和页数（请参阅下面的限制）
- 按书卷/页数：从下拉列表中选择书卷名称，并输入页码（daf）。当前日期的值已经填写好了。如果您想要的书卷不在下拉列表中，请提出问题。

目前，该插件将创建一个包含以下内容的笔记页面（您可以从插件设置中选择所需内容）...

- 链接到当天的 [Koren Talmud Bavli](https://www.steinsaltz-center.org/home/doc.aspx?mCatID=68446) 的 PDF 文件，由 Steinsaltz 提供。
- 下载上述 PDF 并将其插入到 Obsidian 笔记中
- 链接到 [Sefaria](https://www.sefaria.org/daf-yomi) 上的 Daf 页面
- 链接到 Steinsaltz Center 提供的评论
- 链接到 [My Jewish Learning](https://www.myjewishlearning.com/category/study/jewish-texts/talmud/) 的评论
- 链接到 [Daf Yomi Digest](https://www.dafdigest.org)
- 链接到 [Hadran](https://hadran.org.il) 的评论
- 链接到 [Living Greengrass](https://livinggreengrass.home.blog) 博客

请注意，该插件不会检查链接是否有效。如果评论或帖子尚未发布，您可能需要稍后再查看。

如果您使用了这些资源中的任何资源，我相信提供资源的组织（例如 Steinsaltz Center、Sefaria、My Jewish Learning）会感激您的捐赠！

该插件还会为书卷创建一个“摘要”页面，其中包含每个 Daf 页面的链接（请参阅下面的设置）。

如果您希望添加其他资源，请提出问题，或者更好的是，通过必要的代码更改提交拉取请求。

## 设置

**重要提示：**在 1.5 版本中，设置发生了重要的变化。请重新阅读本节。

您可以使用几个设置来配置此插件：

- `Daf Yomi目录模板` - 这必须包含您的存储 Daf Yomi 页面的 vault 目录。您还可以分别指定 `{tractate}` 和 `{perek}` 作为章节（perek）名称和章节（perek）编号。`{tractate}` 是唯一性的必需项，如果您在设置中不包含它，那么模板将不会被填充，您将在末尾默默地得到 `{tractate}`。插件将根据需要创建此目录。以下是一些示例：
  - 如果您希望目录类似于 */Judaism/Daf Yomi/Sukkah*，则输入 `/Judaism/Daf Yomi/{tractate}` 或 `/Judaism/Daf Yomi`（它将自动添加 tractate）
  - 如果您希望目录类似于 */Judaism/Daf Yomi/Tractate Sukkah*，则输入 `/Judaism/Daf Yomi/Tractate {tractate}`
  - 如果您希望目录类似于 */Judaism/Daf Yomi/Sukkah/Perek 3*（按章节组织），则输入 `/Judaism/Daf Yomi/{tractate}/Perek {perek}`
  - 如果您执行以下操作：`/Judaism/Daf Yomi/{perek}`，您将得到类似于 */Judaism/Daf Yomi/{perek}/Sukkah* 的目录（`{perek}` 将不会被填充）。那可能不是您想要的。请确保在模板中包含 `{tractate}` 以避免此问题。
- `页面文件名模板` - 这是用于 Daf 笔记文件名的模板。您可以分别指定 `{tracate}`，`{perek}` 和 `{page}` 作为章节名称，章节（perek）编号和页码。`{page}` 是唯一性的必需项，如果您在此设置中不包含它，那么模板将被忽略，您将得到 `Daf Yomi {tractate} {page}`。请**不要**在设置中放置 `.md`。以下是一些示例：
  - 如果您希望页面名称为 `Sukkah 5.md`，则输入 `{tractate} {page}`
  - 如果您希望页面名称为 `Daf Yomi Sukkah 5.md`，则输入任何不包含 `{page}` 的内容。
  - 如果您希望页面名称为 `Sukkah_1_5.md`（1 是章节编号），则输入 `{tractate}_{perek}_{page}`
- `页面标题模板` - 这是用于页面的 H1 标题的模板。它可以是任何您想要的内容。您可以分别指定 `{tracate}`，`{perek}` 和 `{page}` 作为章节名称，章节（perek）编号和页码。请**不要**在设置中放置 `#`（插件将为您添加）。
  - 如果您希望类似于 `# Sukkah, Perek 1, Daf 5` 的内容，则输入 `{tractate}，Perek {perek}，Daf {page}`
  - 如果您希望类似于 `# The awesome page 5 of Sukkah` 的内容，则输入 `The awesome page {page} of {tractate}`
- `创建章节`（默认未设置）- 如果未设置此项，则资源将在笔记页面中逐行列出。如果设置了此项，则每个资源将位于自己的 H2 子部分中。
- `资源` - 接下来的设置是选择要添加的资源链接。

如上所述，插件还将创建一个类似于 `/Judiasm/Daf/Sukkah/Tractate Sukkah` 的页面（如果需要，将添加 perek），其中包含每个 Daf 的链接。您可以向此页面添加更多信息，但请记住，Daf 链接将添加到末尾。

限制

一些资源仅适用于今天的 Daf 和过去几周。**插件不会检查链接是否实际可用**，所以最好选择当前日期或过去几周的日期。未来的日期可能不起作用。

我还预计在新的 Tractate 的第一天会出现问题，因为在那天之前，一些网站如何命名他们的链接还不清楚。我会尽力在这些日子里进行修复并发布新版本。

这里的资源是我使用的资源。再次，如果您希望添加某些内容，请提出问题或拉取请求。如果您希望我编写代码，可能需要我几天的时间来处理。

这是我的第一个 Obsidian 插件。我很乐意让大家查看我的代码，并告诉我如何更好地做事。我主要参考了 [obsidian-pluck](https://github.com/kevboh/obsidian-pluck) 作为一个很好的例子。下载和编写 PDF 的代码有些难以理解。所有的操作都在 `main.ts` 文件中进行。

让我知道进展如何！

如果你发现任何问题，请提出一个问题。如果你发现这个插件有用，请也提出一个问题并让我知道！我很想知道这是否对不止我一个人有趣 :-)
