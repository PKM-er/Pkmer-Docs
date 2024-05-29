---
uid: 2024052909142837
title: Obsidian 插件：Simple File Push
tags: ['编辑工具', '第三方工具集成', '安全', 'obsidian插件']
description: 将Markdown文件推送到API端点。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Simple File Push

> [!Note] 插件名片
> - 插件名称：Simple File Push
> - 插件作者：Kim Hudaya
> - 插件说明：将 Markdown 文件推送到 API 端点。
> - 插件分类：[' 编辑工具 ', ' 第三方工具集成 ', ' 安全 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/huedaya/obsidian-simple-file-push)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-file-push)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/huedaya/obsidian-simple-file-push/main/README.md)

## 概述

这是一个 Obsidian 插件，可以将 Markdown 文件推送到 API 端点。用户需要提供一个能够接收以下 JSON 数据的简单 POST API 端点：

{

    "file_name": "{{将填充为文件名}}",

    "content": "{{将填充为文件内容}}"

}

API 必须通过 Bearer Authorization `Bearer YOUR_TOKEN` 进行保护。插件设置包括输入 POST 端点 URL 和 API 密钥。用户可以通过点击笔记并选择“Sync file to my Blog”来创建新的要发布的文件。如果请求失败，可以打开开发者窗口进行调试。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



