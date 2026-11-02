---
uid: 1793625615836000
title: "Obsidian 插件：Markdown X Publisher"
tags: ["发布工具", "第三方工具集成", "文字处理", "obsidian插件"]
description: "Preview Markdown notes and save X Article drafts using your Chrome session. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Markdown X Publisher

> [!Note] 插件名片
> - 插件名称：Markdown X Publisher
> - 插件作者：Ancle
> - 插件说明：Preview Markdown notes and save X Article drafts using your Chrome session. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zhangloveyan/obsidian-to-x)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-x-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhangloveyan/obsidian-to-x/master/README.md)



## 概述

Markdown X Publisher 旨在解决 Obsidian 笔记向 X 长文章迁移的繁琐问题。它允许用户在 Obsidian 内直接预览 Markdown 转换后的 X 文章效果，自动处理正文图片上传，并支持从笔记或本地选择封面进行裁剪。最终，插件利用你日常使用的 Chrome 浏览器登录状态，将内容保存为 X 草稿，无需配置复杂的开发者 API 密钥，也无需依赖 AI 服务，实现了从写作到发布的无缝衔接。

典型场景包括撰写技术博客或深度观点文章。例如，你在 Obsidian 中完成一篇包含代码块和多张截图的长文，通过插件预览确认排版无误后，直接保存为 X 草稿。随后，你可以在 X 网页端继续微调细节并正式发布。另一个场景是快速分享日常记录，只需简单调整标题和封面，即可将笔记转化为适合社交媒体传播的长文格式，大幅减少了在两个平台间复制粘贴和重新排版的时间。

相比同类工具，该插件的核心特色在于“沿用登录状态”与“中断后继续”机制。它直接连接你已登录 X 的 Chrome 会话，避免了繁琐的 OAuth 授权流程。此外，当保存过程因网络波动中断时，插件允许你在当前窗口继续处理已有草稿和已上传图片，而非从头开始。这种对长文本和图片上传过程的容错处理，使得处理包含大量媒体内容的文章更加稳定可靠。

使用前需注意，该插件仅支持桌面版 Obsidian，且依赖 Node.js 18+、Playwright MCP 及 Chrome 扩展，初始配置步骤相对较多。它仅负责保存草稿，最终发布需手动在 X 中完成。此外，Dataview 等复杂插件渲染效果及视频上传暂不支持，部分复杂列表结构可能需手动调整。如果你需要全自动发布、移动端支持或完全无需浏览器介入的方案，此插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


