---
uid: 1793625615954000
title: "Obsidian 插件：MarkToGo"
tags: ["图片与PDF", "第三方工具集成", "发布工具", "obsidian插件"]
description: "Export shareable Markdown with PicList-hosted images while preserving local notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MarkToGo

> [!Note] 插件名片
> - 插件名称：MarkToGo
> - 插件作者：scstc
> - 插件说明：Export shareable Markdown with PicList-hosted images while preserving local notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/scstc/mark-to-go)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mark-to-go)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/scstc/mark-to-go/master/README.md)



## 概述

MarkToGo 旨在解决 Obsidian 笔记分享时图片链接失效的痛点。它通过 PicList、阿里云 OSS 或 AWS S3 将笔记中的本地图片上传至云端，并生成包含在线图片链接的 Markdown 文本。整个过程不会修改原始笔记，确保本地数据完整，让你能直接复制带有可访问图片的 Markdown 内容进行分享。

典型场景包括向博客平台投稿或在工作群中分享技术文档。例如，当你撰写一篇包含本地截图的技术文章时，只需右键点击笔记选择 MarkToGo，插件会自动上传截图并替换链接。你随后复制生成的文本，粘贴到任何支持 Markdown 的编辑器或聊天软件中，接收者即可直接看到图片，无需额外传输附件。

相比仅依赖单一图床工具的插件，MarkToGo 提供了更灵活的存储后端选择。除了 PicList，它还支持直接连接阿里云 OSS 和 AWS S3，无需安装额外的 Node.js 环境或 PicList 桌面端。这种直连方式利用内容哈希命名文件，避免重复上传相同图片，且生成的链接为永久有效，适合对稳定性和隐私有较高要求的用户。

使用前需注意，该插件目前仅支持 Windows 桌面端，macOS 和 Linux 尚未测试。若选择 OSS 或 S3 直连，需自行配置具有相应权限的密钥，并确保存储桶允许匿名读取图片，否则分享链接将无法显示。此外，插件不支持 STS 临时令牌或带签名的过期链接，也不适合需要频繁修改已分享图片内容的场景，因为每次导出都会生成新的云端副本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


