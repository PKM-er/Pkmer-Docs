---
uid: 1786577081708004
title: 'Obsidian 插件：Publish to WordPress'
tags: ['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
description: '直接通过REST API或者自定义网络钩子，把当前激活的笔记作为WordPress草稿发布。——Obsidian官方人员尚未手动审核此插件。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Publish to WordPress

> [!Note] 插件名片
> - 插件名称：Publish to WordPress
> - 插件作者：DevidCode
> - 插件说明：直接通过REST API或者自定义网络钩子，把当前激活的笔记作为WordPress草稿发布。——Obsidian官方人员尚未手动审核此插件。
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/devidcode/obsidian-publish-to-wordpress)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?publish-to-wordpress)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/devidcode/obsidian-publish-to-wordpress/master/README.md)



## 概述

### 《Publish to WordPress插件总结》
1. **主要功能**：可将Obsidian中当前激活的笔记直接发布为WordPress草稿，支持通过WordPress REST API或自定义Webhook实现。
2. **适用场景**：适用于在Obsidian写作，希望快速将内容发布到WordPress的用户，避免手动复制粘贴。
3. **核心特色**：有 ribbon 图标和命令方便操作；默认采用WordPress REST后端，使用应用密码，无需在WordPress端额外安装；支持自定义Webhook后端用于高级流程；能将笔记内容转换为HTML并添加特色图片。
4. **使用建议**：使用WordPress后端时，先在WordPress创建应用密码，需HTTPS环境；在插件设置中配置好后端、网站URL、用户名和应用密码；在笔记中添加标记行（默认“**Post final :**”），标记行之后的内容为文章主体；点击 ribbon 图标或运行命令发布，标题优先取前置元数据 `wp_title`，特色图片优先取前置元数据 `image:`。若出现 `Request failed, status 401` 错误，检查用户名和应用密码是否正确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


