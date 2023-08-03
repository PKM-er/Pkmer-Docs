---
uid: 20230803231105
title: Obsidian 插件：Tweet to Markdown
tags: ['obsidian插件', 'readme']
description: 将推文保存为 Markdown 文件，以及它们的图像、投票等等。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232439
---

# Obsidian 插件：Tweet to Markdown

> [!Note] 插件名片
> - 插件名称：Tweet to Markdown
> - 插件作者：kbravh
> - 插件说明：将推文保存为 Markdown 文件，以及它们的图像、投票等等。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kbravh/obsidian-tweet-to-markdown)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tweet-to-markdown)

## 概述

将推文保存为 Markdown 文件，以及它们的图像、投票等等。

![Tweet to Markdown](https://cdn.pkmer.cn/covers/obsidian-tweet-to-markdown.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kbravh/obsidian-tweet-to-markdown/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-tweet-to-markdown]] 插件的自述翻译

<br />
<p align="center">
  <a href="https://github.com/kbravh/obsidian-tweet-to-markdown">
    <img src="https://raw.githubusercontent.com/kbravh/obsidian-tweet-to-markdown/main/images/obsidian-ttm-logo.svg" alt="Logo" height=200>
  </a>

  <h3 align="center">Tweet to Markdown</h3>

  <p align="center">
    一个Obsidian插件，可以快速将推文保存为Markdown格式。
    <br />
    <br />

    ·
    
  </p>
</p>

## ⚠️ 注意！⚠️

如果您的 API 密钥无法使用，您将需要申请一个 Twitter 承载令牌。

由于 Twitter API 的最近更改，下面列出的免费访问方法已于 2023 年 4 月 27 日停止工作。您必须注册自己的 Twitter 承载令牌才能使用此应用程序。

<!-- 关于项目 -->

## 关于该项目

该插件允许您快速以 Markdown 格式保存推文。它是基于新的 Twitter v2 API 构建的。

## 安装

在 Obsidian 的社区插件列表中找到此插件，并将其添加到您的应用程序中。您可以搜索“Tweet to Markdown”，或者在浏览器中复制并粘贴以下链接：`obsidian://show-plugin?id=obsidian-tweet-to-markdown`。

或者，如果您想手动安装它，请将此存储库克隆到您的保险库中的 `.obsidian/plugins/` 目录中，导航到您新克隆的文件夹，运行 `npm i` 或 `yarn` 以安装依赖项，然后运行 `npm run build` 或 `yarn build` 以编译插件。

<!-- USAGE EXAMPLES -->

## 设置

要使用此工具，您有两个选项：

- 从<https://ttm.kbravh.dev 免费获取 API 密钥（v2.0.0 中的新功能）>
- 通过 Twitter 开发者控制台注册 Bearer 令牌

从<https://ttm.kbravh.dev 免费获取 API 密钥是使用此插件的最简单方法，因为您不必经过 Twitter 的开发者申请流程。他们的申请流程很繁琐，而且他们并不总是批准请求。但是，您完全可以按照下面的指南从 Twitter 检索自己的 Bearer 令牌。这将为您的使用提供最大的控制、自由和安全性。>

### 免费的 TTM API 密钥（❌已禁用）

~~您可以通过使用 GitHub 或 Twitter 帐户登录<https://ttm.kbravh.dev 注册免费的 API 密钥，并转到您的帐户页面。一旦您登录并从帐户页面检索到您的 API 密钥，将其复制并粘贴到 Tweet> to Markdown 设置页面的 API 密钥/承载令牌字段中。如果您更希望更加保护令牌，您可以将其存储在环境变量 `TTM_API_KEY` 中。~~

请注意：在 Unix 机器上，请确保在您的配置文件（例如 `~/.bash_profile`）中设置此环境变量，以便 Obsidian 可以使用它。

### Twitter 开发者 Bearer 令牌

请注意：您需要至少拥有**基本**计划才能查找推文。**免费**计划不足够。

要从 Twitter 获取 Bearer 令牌，您需要在 [Twitter开发者仪表板](https://developer.twitter.com/en/portal/dashboard) 上设置一个应用程序。有关如何设置的指南，请参阅 [获取Bearer令牌](https://github.com/kbravh/obsidian-tweet-to-markdown/blob/main/BearerTokenGuide.md)。一旦您获得了 Bearer 令牌，您可以将其粘贴到 Tweet to Markdown 设置页面的 Bearer 令牌字段中。如果您希望更加保护令牌，可以将其存储在环境变量 `TWITTER_BEARER_TOKEN` 中。

请注意：在 Unix 机器上，请确保在您的配置文件（例如 `~/.bash_profile`）中设置此环境变量，以便 Obsidian 可以使用它。

### 下载推文

要么点击侧边栏中的 Twitter 图标，要么从命令面板中运行 `Download Tweet from URL` 命令。然后，只需粘贴推文链接并点击下载。

要下载推文线程，请粘贴线程中**最后一个**推文的链接，并切换到线程开关。

![下载新推文的模态框。](https://raw.githubusercontent.com/kbravh/obsidian-tweet-to-markdown/main/images/tweet_url_modal.png)

下载推文后，将出现一个窗口，用于设置将要创建的文件名。您可以在命名文件时使用变量 `[[handle]]`、`[[name]]`、`[[text]]`、`[[date]]` 和 `[[id]]`，这些变量将根据以下表格自动替换。文件扩展名 `.md` 将自动添加。

| 变量 | 替换 |
|:---:|---|
|`[[handle]]`|用户的句柄（跟在@符号后面的部分）|
|`[[name]]`|用户的名称|
|`[[id]]`|分配给推文的唯一 ID|
|`[[text]]`|推文的全部文本（根据操作系统文件名长度限制进行截断）|
|`[[date]]`|推文创建的日期|

如果提供了 `[[date]]` 变量，默认情况下将使用您在 [设置](https://github.com/kbravh/obsidian-tweet-to-markdown#date-format) 中定义的区域设置和时间格式（在本自述文件的底部）。

## 选项

在 Obsidian 中的 Tweet to Markdown 设置页面上，您可以自定义插件的工作方式，以更好地匹配您的存储库结构和工作流程。

### 自定义文件名

默认情况下，推文的文件名为 `[[handle]] - [[id]].md`。您可以在**文件名**字段中使用变量 `[[name]]`、`[[handle]]`、`[[text]]`、`[[date]]` 和 `[[id]]` 输入自己的格式，这些变量将根据以下表格自动替换。文件扩展名 `.md` 将自动添加。

| 变量 | 替换内容 |
|:---:|---|
|`[[handle]]`|用户的句柄（@符号后面的部分）|
|`[[name]]`|用户的名称|
|`[[id]]`|分配给推文的唯一 ID|
|`[[text]]`|推文的全部文本（根据操作系统文件名长度限制进行截断）|
|`[[date]]`|推文创建的日期|

如果提供了 `[[date]]` 变量，默认情况下将使用您在 [设置](https://github.com/kbravh/obsidian-tweet-to-markdown#date-format) 中定义的区域设置和时间格式（在本自述文件的底部）。

- 如果您想使用不同的格式，请在日期后面加上分号：`[[date:LL]]`。
- 如果您想使用不同的区域设置，请在格式后面加上另一个分号：`[[date:LL:es]]`。
- 如果您希望使用与设置相同的格式但不同的区域设置，请将格式部分留空：`[[date::es]]`。

请查看 `moment` 文档以获取所有可用的 [区域设置](https://github.com/moment/moment/tree/develop/src/locale) 和 [格式](https://momentjs.com/docs/#/displaying/format/) 的列表。

### 自定义文件路径

如果要将推文保存到除了您的存储库根目录之外的其他位置，请在**笔记位置**字段中输入新路径。如果该路径不存在，系统将递归创建该路径。

### 本地保存图片

想要真正地将整个推文保存到本地吗？您可以打开**下载图片**开关，以下载所有推文图片，而不仅仅是在网络上链接到这些图片。如果推文被删除或 Twitter 不可用，您仍然可以保留您的笔记。

推文图片将自动保存到目录 `assets/`。如果您想将资源保存到自定义目录，请在**图片位置**字段中输入该目录。

请注意：很遗憾，目前无法使用 v2 API 从推文中检索 gif 或视频。

### 下载后打开推文

一旦推文下载完成并创建了文件，这将决定文件将如何（或是否）被打开。您可以选择在新标签页中打开推文，替换活动标签页中的当前笔记，或根本不打开。默认情况下，推文将在新标签页中打开。

## 注意事项定制

有一些选项可以定制注意事项的输出。

### 前言

默认情况下，下载推文时将包含一个前言块。前言将显示：

- 作者
- 用户标识
- 来源（原始推文链接）
- 日期
- 点赞数
- 转发数
- 回复数

您可以关闭此前言块，以在下载推文时不包含它。

#### 标签

您可以在这里提供一个由空格分隔的标签列表。这些标签将作为 `tags: ["tag1", "tag2", ...]` 包含在前置元数据中，并可以通过 Obsidian 进行搜索。

#### cssclass

如果您在此处添加一个类名，它将作为 `cssclass: classname` 添加到前置元数据中，并且 Obsidian 将会将该类应用于您的每个新推文笔记。然后，您可以使用 CSS 对这些笔记进行样式设置，并针对该类名进行定位。

#### 自由格式的前置元数据

您是否有其他自定义的前置元数据字段，希望将其应用于所有的推文笔记？在这里输入这些字段中的任意一个，每行一个，它们将被添加到您的新推文笔记中。

```yaml
field: new field value
another: second value
```

### 紧凑的线程

在下载线程时，不再显示完整的、带有个人资料图片、日期等的单个推文，而是只显示一次标题，然后只显示推文正文，将推文线程表示为一个连贯的文本体。如果线程中出现不同的作者，例如在下载各种作者之间的对话时，将显示一个标题。

### 作者个人资料图片

默认情况下，下载的推文中将包含推文作者的个人资料图片。要排除它，请在插件设置中禁用**包括个人资料图片**选项。

### 作者个人资料图片尺寸

按照 [Obsidian文档](https://help.obsidian.md/How+to/Embed+files#Resize+images) 中的尺寸样式，您可以在这里定义自定义个人资料图片尺寸。例如，要将图像宽度设置为 200 像素，您可以在框中输入 `200`。

请注意：Twitter 个人资料图片尺寸为 48x48 像素。如果您设置的尺寸大于此值，图像将变得模糊。

### 包括图片

如果您想要一个精简的推文，您可以禁用此选项。它将从传入的推文中删除所有的图片嵌入（这不会影响作者的个人资料图片）。

### 图片尺寸

遵循 [Obsidian文档](https://help.obsidian.md/How+to/Embed+files#Resize+images) 中的尺寸样式，您可以在这里定义自定义的图片尺寸。例如，要将图片宽度设置为 200 像素，您可以在框中输入 `200`。

### 包含链接

禁用此选项将不会为任何提及、标签等创建超链接。原始推文中的任何链接仍将存在。

### 包括日期

默认情况下，根据下面定义的格式和语言环境，将包括推文的日期。要完全删除日期，请切换此功能。

### 日期格式

要自定义下载推文时保存日期的格式，您可以在插件设置中提供一个格式字符串。这些格式字符串可以在 [Moment.js文档](https://momentjs.com/docs/#/displaying/format/) 中找到。您还可以设置您的语言环境，默认为 `en`。默认格式为 `LLL`，它会生成一个类似于 `September 4, 1986 8:30 PM` 的日期，使用 `en` 语言环境。

## 粘贴链接

从 1.3.0 版本开始，您可以将 Twitter 链接粘贴到任何文件中，并自动将其转换为推文并嵌入到您的笔记中。✨

![粘贴推文链接的演示](https://raw.githubusercontent.com/kbravh/obsidian-tweet-to-markdown/main/images/link_paste_demo.gif)

您可以在插件设置面板中启用此设置，称为**粘贴时下载推文**。在设置中，您可以选择将推文直接嵌入到当前笔记中，还是将其链接为 Obsidian 嵌入（`![[note title]]`）。

**Nota bene 📢：**如果您还使用 [Auto Link Title插件](obsidian://show-plugin?id=obsidian-auto-link-title)，您可能会发现它在我们有机会处理之前首先捕捉到粘贴的链接。不幸的是，没有办法设置插件运行的顺序。解决方法是在您粘贴之前，在任何您希望此插件捕捉到的 Twitter 链接前面添加字母 `t`，就像这样：`thttps://twitter.com/...`。这将使 Auto Link Title 忽略它，以便我们可以处理它。您必须在粘贴链接之前添加 `t`；您不能在文档中输入 `t` 然后粘贴，因为 Auto Link Title 仍然会捕捉到它。

<!-- CONTRIBUTING -->

## 贡献

贡献是使开源社区成为一个令人惊叹的学习、激励和创造的地方的原因。我们非常感谢您所做的任何贡献。

## 许可证

本项目根据 MIT 许可证进行许可 - 有关详细信息，请参阅 [ `LICENSE` ](https://github.com/kbravh/obsidian-tweet-to-markdown/blob/main/LICENSE) 文件

<!-- 联系方式 -->

## 联系方式

Karey Higuera - [@kbravh](https://twitter.com/kbravh) - karey.higuera@gmail.com

项目链接：[https://github.com/kbravh/obsidian-tweet-to-markdown](https://github.com/kbravh/tweet-to-markdown)
