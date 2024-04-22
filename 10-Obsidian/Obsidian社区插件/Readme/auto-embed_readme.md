---
uid: 2024042221330681
title: Obsidian 插件：【Readme】Auto Embed
tags: ['obsidian插件', 'readme']
description: 帮助使用markdown而不是iframe嵌入链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Embed

> [!Note] 插件名片
> - 插件名称：Auto Embed
> - 插件作者：GnoxNahte
> - 插件说明：帮助使用 markdown 而不是 iframe 嵌入链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/GnoxNahte/obsidian-auto-embed)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-embed)

## 概述

帮助使用 markdown 而不是 iframe 嵌入链接。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/GnoxNahte/obsidian-auto-embed/main/README.md)

---

## Readme(翻译）

下面是 [[auto-embed]] 插件的自述翻译

# 黑曜石自动嵌入

[Obsidian](https://obsidian.md/) 插件，可以帮助自动嵌入链接，而不是使用 iframes

## 开始使用

Obsidian 插件链接：<https://obsidian.md/plugins?id=auto-embed>

### 嵌入链接

1. 粘贴一个链接
2. 选择“创建嵌入”
3. （可选）添加 [选项](#custom-options)
4. 完成！等待嵌入加载

![GIF showing example on how to embed links](readme-assets/Auto-Embed%20Getting%20Started.gif)

使用与 Obsidian 相同的语法 - [嵌入网页](https://help.obsidian.md/Editing+and+formatting/Embed+web+pages)。语法：`![options](link)`

## 特点

自动嵌入网站，如：[Imgur](https://imgur.com/)，[CodePen](https://codepen.io/)，[Steam](https://store.steampowered.com/)。完整的 [支持的网站列表](#supported-websites)。

### 支持的网站

- [X](https://x.com) *
- [Reddit](https://www.reddit.com/) *
- [Imgur](https://imgur.com/)
- [CodePen](https://codepen.io/)
- [Steam](https://store.steampowered.com/)
- [Spotify](https://open.spotify.com/) *

> [!WARNING]
> 那些带有 `*` 的网站意味着它们有某种限制。查看 [当前限制和已知问题](#current-limitations--known-bugs) 获取更多信息

有关网站外观示例的列表，请参阅 [支持的网站列表](SupportedWebsiteList.md)

## 自定义选项

如何添加选项：

- 在方括号 `[在这里添加选项]` 之间，添加您的选项。
- 如果您不确定有哪些选项可用，请参考下面的表格。

### 所有选项

| 选项 | 描述 | 示例 Markdown |
|---|---|---|
|noembed|禁用此链接的嵌入。如果可能，请尝试使用 `[](link)` 代替。相同的语法，只是没有 '!'|`![noembed](https://example.com)`
|w:`value` / width:`value`|设置嵌入的宽度|`![w:100%](https://example.com)`
|h:`value` / height:`value`|设置嵌入的高度|`![h:500px](https://example.com)`

<!---
TODO: 暗黑模式

TODO: 找出如何格式化大小。宽度和高度之间的分隔符是"x"。与"px"冲突
|size: `value`x`value`|设置嵌入的宽度和高度。使用[CSS单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)|`[size:100%x300px](example.com)`
--->

在适用的情况下使用 [CSS单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。

## 插件如何工作

关于插件如何工作的简要概述，包括一些步骤。*不需要使用插件*，只是为了那些好奇的人。根据您是在**阅读视图**还是**实时预览**，某些步骤会有所不同。但是，当您处于源模式时，插件不会产生任何影响。

1. 搜索文档中的语法所在位置。
	- 在**阅读视图**中：<br>
		搜索由 Obsidian 生成的 `<img>` 标签，当您使用这种格式时：`![](link)`
	- 在**实时预览**中：<br>
		搜索 `![](link)` 并从中获取 [选项](#custom-options) 和 URL。
2. 从中获取 URL，并将其转换为嵌入等效物。通常在 URL 的某个地方添加 `/embed/`。结果是相同的网站，但仅关注内容。没有标题、页脚等。
	- 例子：<br><https://codepen.io/jh3y/pen/LYNZwGm> 转换为 <https://codepen.io/jh3y/embed/LYNZwGm?default-tab=result&editable=true>
3. 用 `<iframe>` 替换这些标签，并应用选项（宽度、高度、暗模式等）。
4. 一些网站如 Twitter、Reddit 或 Imgur，会发送调整大小的消息。插件使用这些信息来调整嵌入内容的大小。

## 路线图

- [ ] 为其他网站添加支持（如果您想要其他网站，请创建一个问题或给我留言）
	- [ ] 谷歌地图
	- [ ] 谷歌文档
	- [ ] 谷歌日历
	- [ ] Notion
	- [ ] 其他网站。[Iframely](https://iframely.com/domains) 列出了可以嵌入的网站列表。
- [ ] 添加测试
- [ ] 更新 README.md
	- [ ] 改善可读性。欢迎提出建议，特别是如果有什么不清楚的地方。
	- [ ] 添加图片/ GIF 来展示示例
	- [ ] 添加安装说明
- [ ] 提交到 Obsidian 插件目录？

### 当前限制和已知问题

- 一般
	- **实时预览**：仍处于实验阶段，可能存在 bug。
	- **移动端**：尚未测试
- 特定网站
	- **Reddit**：当同一视图中出现多个 Reddit 嵌入时，Reddit 嵌入的大小调整不正确。<br><u>临时修复方法：</u>
		- 将 Reddit 嵌入间隔开，以避免在视图中出现多个嵌入
		- 通过选项手动设置高度：`![h:240px](Reddit链接)`
	- **Spotify**：只能播放歌曲的前 30 秒。Spotify 只允许用户在浏览器中登录时播放，而在 Obsidian 中这是不可能的。
	- **Twitter & YouTube**：由于 [Obsidian支持](https://help.obsidian.md/Editing+and+formatting/Embed+web+pages)，我不会干涉。但这意味着 [选项](#custom-options) 不受支持。我可能能够用我的嵌入替换 Obsidian 的嵌入，但这只能在*实时预览*中工作，而不是*阅读模式*。这会导致用户体验不一致，但如果您想要这个功能，请联系我/创建一个拉取请求。
	- **Twitter / X**：Obsidian 支持<https://twitter.com>但不支持<https://x.com>。这个插件只是帮助嵌入 X。如果您将 Twitter 替换为 x，或反之，则会导致相同的推文/帖子。通常在从移动应用复制时，是 X。在从网页复制时，是 Twitter。

请 [发送任何问题](https://github.com/GnoxNahte/obsidian-auto-embed/issues) 给我！

## 常见问题

### 嵌入内容未显示

1. 你是否 [启用了插件](https://help.obsidian.md/Extending+Obsidian/Community+plugins#Enable+a+community+plugin)?
2. 你是否遵循这个语法？`![](链接)`<br>
	例如：`![]()`

## 联系我

我刚开始使用 Obsidian，这是我的第一个插件。<br>
如果您有任何问题、功能请求或问题，请随时 [创建一个问题](https://github.com/GnoxNahte/obsidian-auto-embed/issues/new) 或联系我！<br>

电子邮件 - gnoxnahte@gmail.com<br>
Discord 私信 - <https://discordapp.com/users/222261096738717696> <br>

如果这个插件帮助了您，并且想要支持它的开发，请考虑在 [Ko-fi](https://ko-fi.com/gnoxnahtedev) 上支持我。

## 鸣谢

- 受到 Sam Warnick 的 [Simple Embed](https://github.com/samwarnick/obsidian-simple-embeds) 启发。尽管从中改变了很多东西。



