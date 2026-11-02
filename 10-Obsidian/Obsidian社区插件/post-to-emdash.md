---
uid: 1793625620186000
title: "Obsidian 插件：Post To EmDash"
tags: ["发布工具", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Send notes to an EmDash site as blog posts, with images, tags and categories. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Post To EmDash

> [!Note] 插件名片
> - 插件名称：Post To EmDash
> - 插件作者：rietamura
> - 插件说明：Send notes to an EmDash site as blog posts, with images, tags and categories. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rietamura/Post-To-EmDash)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?post-to-emdash)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rietamura/Post-To-EmDash/master/README.md)



## 概述

Post To EmDash 旨在解决 Obsidian 笔记与 EmDash 博客站点之间的内容同步难题。它允许用户将本地编写的 Markdown 笔记直接发布为博客文章，支持自动上传正文中的图片，并同步分类、标签和摘要。插件提供了创建新文章的快捷命令，能自动生成包含必要字段的笔记模板，让用户专注于内容创作，无需手动处理复杂的 API 交互或格式转换。

典型场景包括日常技术博客更新：你可以先在 Obsidian 中完成文章撰写，通过“选择特色图片”功能从本地文件夹快速挑选封面，然后一键发送。若笔记中未指定封面，插件可生成包含标题和日期的自动缩略图。此外，它支持将笔记作为草稿发送，或在元数据中设置 `status: publish` 后直接发布，方便在后台预览后再决定上线时机。

相比通用发布工具，该插件深度适配 EmDash 生态，能智能处理 Markdown 中的标题、代码块、表格及 Obsidian 特有的 Callout 等元素，确保格式在博客端完美呈现。其特色在于“更新而非新建”机制：重复发送同一笔记会更新原有文章，若后台已手动修改则会提示确认，避免数据覆盖。此外，访问令牌存储在系统钥匙串中，而非插件配置文件，有效防止了通过同步库泄露敏感凭证的风险。

使用前需确保你的博客站点运行 EmDash 并配置好 API 令牌。该插件仅适用于 EmDash 用户，无法用于 WordPress 或其他 CMS。若站点未安装 Auto Thumbnail Design 插件，自动缩略图功能将不可用。另外，由于令牌存储在设备本地钥匙串中，在多设备间同步库时，需在新设备上重新输入令牌，无法通过文件同步自动迁移。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


