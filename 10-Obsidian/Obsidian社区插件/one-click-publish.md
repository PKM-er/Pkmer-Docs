---
uid: 1791709368967000
title: 'Obsidian 插件：One-Click Publish'
tags: ['发布工具', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Publish the active Obsidian note with one click after a one-time Cloudflare setup, including linked pages and local assets. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：One-Click Publish

> [!Note] 插件名片
> - 插件名称：One-Click Publish
> - 插件作者：jinhefeng
> - 插件说明：Publish the active Obsidian note with one click after a one-time Cloudflare setup, including linked pages and local assets. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jinhefeng/One-Click-Publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?one-click-publish)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jinhefeng/One-Click-Publish/master/README.md)



## 概述

**主要功能**
One-Click Publish 允许用户通过 Cloudflare 一键将当前 Obsidian 笔记发布为独立网站。它自动包含指定深度的关联笔记，上传本地图片等资产，并生成稳定的 `/s/{siteId}` 访问链接。发布后会自动复制 URL，并将分享信息写入笔记 Frontmatter。

**适用场景**
适合需要快速将个人知识库、技术文档或博客文章分享给他人，但不想维护传统博客系统的用户。尤其适用于希望保留笔记间链接关系、且拥有 Cloudflare 账号的场景。

**核心特色**
1. **一键发布**：无需复杂配置，点击即发，支持 WikiLinks、代码块、表格等丰富格式。
2. **资产同步**：自动处理本地图片上传，保持外部链接不变，确保页面完整性。
3. **稳定链接**：更新内容时保持 URL 不变，方便分享。
4. **域名绑定**：支持绑定自定义域名，同时保留 Worker 地址作为备用。

**使用建议**
1. 首次使用需在插件设置中完成 Cloudflare 的一次性授权。
2. 建议在发布前检查“关联页面深度”设置，避免意外发布过多无关笔记。
3. 若需专业外观，可绑定自定义域名；否则可直接使用生成的稳定链接。
4. 注意该插件未经 Obsidian 官方人工审核，建议先在测试笔记中验证效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


