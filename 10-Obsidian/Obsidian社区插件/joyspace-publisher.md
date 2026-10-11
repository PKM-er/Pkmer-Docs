---
uid: 1791709367869000
title: 'Obsidian 插件：JoySpace Publisher'
tags: ['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
description: 'Publish, update, and import Markdown documents with JoySpace. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：JoySpace Publisher

> [!Note] 插件名片
> - 插件名称：JoySpace Publisher
> - 插件作者：cynthia-ding
> - 插件说明：Publish, update, and import Markdown documents with JoySpace. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cynthia2023xy/obsidian-joyspace-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?joyspace-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cynthia2023xy/obsidian-joyspace-publisher/master/README.md)



## 概述

**1. 主要功能**
JoySpace Publisher 是一款用于在 Obsidian 与京东 JoySpace 之间同步 Markdown 文档的插件。它支持将当前笔记发布到指定文件夹、更新已绑定的 JoySpace 页面（自动跳过未变更内容），以及从 JoySpace 链接导入文档至本地文件夹。

**2. 适用场景**
适用于需要频繁在个人知识库（Obsidian）与团队协作平台（JoySpace）间共享文档的用户，特别是依赖京东内部或相关生态系统的办公场景。

**3. 核心特色**
*   **智能同步**：通过 Frontmatter 自动记录页面 ID 和同步哈希，实现精准增量更新。
*   **灵活定向**：支持通过 Frontmatter 字段 `joyspace-target-page-url` 自定义发布目标。
*   **环境依赖明确**：需手动安装 Python 3 及 `browser_cookie3`，并依赖已登录 JoySpace 的 Chrome 浏览器及 `webcli` 工具。

**4. 使用建议**
*   **前置准备**：确保已安装 Python 依赖并配置好浏览器登录状态，修改环境后务必在插件设置中点击“Recheck environment”。
*   **操作规范**：首次发布后，插件会自动写入同步元数据，请勿手动删除 Frontmatter 中的 `joyspace-*` 字段，以免丢失绑定关系。
*   **版本限制**：仅支持 Obsidian 桌面版，移动端用户暂无法使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


