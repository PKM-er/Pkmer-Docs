---
uid: 1791709369098000
title: 'Obsidian 插件：Outcrop'
tags: ['发布工具', '第三方工具集成', '安全与隐私', 'obsidian插件']
description: 'Share individual notes publicly on your own domain via a self-hosted Outcrop server. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Outcrop

> [!Note] 插件名片
> - 插件名称：Outcrop
> - 插件作者：Sanket Saurav
> - 插件说明：Share individual notes publicly on your own domain via a self-hosted Outcrop server. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sanketsaurav/outcrop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?outcrop)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sanketsaurav/outcrop/master/README.md)



## 概述

Outcrop 是一款允许用户通过自托管服务器，将 Obsidian 笔记以独立网页形式发布在自有域名下的插件。

**主要功能**：支持一键分享、更新或取消分享笔记，自动处理图片附件上传与去重，并将内部链接转换为可用的公共链接。
**适用场景**：适合需要向公众展示个人知识库、技术文档或博客文章，且希望保持数据主权与隐私控制的开发者或知识工作者。
**核心特色**：
1. **高保真渲染**：直接调用 Obsidian 渲染器，完美保留 Callouts、Mermaid 图表及代码高亮样式。
2. **安全可控**：默认生成不可猜测的链接，支持自定义 Slug、链接轮换（旧链接失效）及易记口令保护。
3. **自动化运维**：编辑后几秒内自动同步更新；自动管理 SEO 元数据、预览图及站点地图；支持访客端主题切换。
4. **轻量架构**：服务端仅需一个 Go 二进制文件加 SQLite 数据库，部署简单，支持 HTTPS。

**使用建议**：需具备基本的自托管能力（如 Docker 部署）并配置 HTTPS 域名。建议利用“链接轮换”功能定期更新敏感笔记的 URL，并善用口令保护功能管理私密内容的公开访问权限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


