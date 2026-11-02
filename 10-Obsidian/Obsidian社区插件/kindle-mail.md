---
uid: 1793625614549000
title: "Obsidian 插件：Kindle Mail"
tags: ["第三方工具集成", "发布工具", "效率工具", "obsidian插件"]
description: "Export notes as EPUB and send them to Kindle using your own SMTP email account. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kindle Mail

> [!Note] 插件名片
> - 插件名称：Kindle Mail
> - 插件作者：James
> - 插件说明：Export notes as EPUB and send them to Kindle using your own SMTP email account. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cloud2025-art/kindle-mail)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kindle-mail)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cloud2025-art/kindle-mail/master/README.md)



## 概述

Kindle Mail 允许你将 Obsidian 笔记直接转换为 EPUB 格式，并通过你个人的 SMTP 邮箱账户发送至 Kindle。它解决了在 Obsidian 中整理文章后，难以便捷地在 Kindle 上阅读的问题。插件提供两个核心命令：一是“发送当前笔记到 Kindle”，直接在内存中构建 EPUB 并邮件发送；二是“导出当前笔记为 EPUB”，将文件保存至库内指定文件夹，无需联网即可使用。

典型场景包括：你在 Obsidian 中收藏并整理了一篇长文，想下班后在 Kindle 上阅读，只需运行发送命令，确认收件地址和附件信息后，即可在 Kindle 联网后收到文档。另一个场景是检查排版效果，你可以使用导出命令生成本地 EPUB 文件，用其他阅读器预览格式，而不必真正发送邮件。

相比其他同类插件，Kindle Mail 的特色在于它完全依赖用户自己的邮箱账户进行传输，而非依赖第三方云服务，这提供了更高的隐私控制权。此外，它对中文支持良好，能正确处理 UTF-8 文本、标准 Markdown 元素及本地图片。插件还具备严格的安全边界，例如自动排除远程图片、限制嵌入笔记的嵌套层级，并在发送前提供详细的文件列表和大小警告，确保传输内容符合预期。

使用前需注意，该插件仅支持 Obsidian 桌面版，不支持移动端。发送功能要求你的邮箱支持 SMTP 认证（如 Gmail 应用密码、QQ 或 163 邮箱），不支持仅使用 OAuth 的账户（如部分 Outlook 企业版）。此外，它不处理 SVG、WebP 或 PDF 等格式，且单次发送的 EPUB 大小限制在 25 MiB 以内。如果你需要复杂的交互式内容或依赖 Obsidian 特有插件（如 Dataview）渲染的笔记，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


