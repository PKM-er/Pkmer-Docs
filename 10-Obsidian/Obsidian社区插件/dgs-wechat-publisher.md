---
uid: 1791709366515000
title: 'Obsidian 插件：DGS WeChat Publisher'
tags: ['发布工具', '第三方工具集成', '文字处理', 'obsidian插件']
description: 'Create a WeChat Official Account draft from the current Markdown note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DGS WeChat Publisher

> [!Note] 插件名片
> - 插件名称：DGS WeChat Publisher
> - 插件作者：d0u9
> - 插件说明：Create a WeChat Official Account draft from the current Markdown note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/d0u9/obsidian-dgs-wechat-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dgs-wechat-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/d0u9/obsidian-dgs-wechat-publisher/master/README.md)



## 概述

**1. 主要功能**
该插件可将 Obsidian 中的 Markdown 笔记一键转换为微信公众号草稿箱文章。它自动处理排版，生成符合微信编辑器规范的 HTML，并支持图片上传（包括本地及远程图片）。

**2. 适用场景**
适用于使用 Obsidian 进行内容创作，并需要定期向微信公众号发布中文或英文文章的创作者、博主及自媒体运营者。

**3. 核心特色**
*   **安全隔离**：凭据（AppID/Secret）存储在 Vault 外的 `.env` 文件中，绝不写入笔记库，确保隐私安全。
*   **仅存草稿**：只创建草稿箱内容，不直接发布或群发，提供二次确认机会。
*   **智能排版**：基于 `dgs-wechat-publisher` 引擎，自动优化中英文字体样式，支持 Frontmatter 配置标题、摘要、封面等元数据。
*   **图片兼容**：支持 Markdown 标准语法及 Obsidian 嵌入语法，自动处理相对路径及远程图片下载重传，符合微信 1MB 图片限制。

**4. 使用建议**
*   务必将 `.env` 文件放在 Vault 外部，并在插件设置中填写完整绝对路径（不支持 `~`）。
*   需在微信公众平台后台配置服务器 IP 白名单，并开通素材/草稿接口权限。
*   建议在笔记 Frontmatter 中明确指定 `lang`（zh/en）以获取最佳排版效果，发布前务必先运行“预检并预览”功能检查渲染结果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


