---
uid: 1791709368759000
title: 'Obsidian 插件：Named Links'
tags: ['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Fetch the title of a pasted or dropped URL and insert it as a markdown link. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Named Links

> [!Note] 插件名片
> - 插件名称：Named Links
> - 插件作者：Daniel Yim
> - 插件说明：Fetch the title of a pasted or dropped URL and insert it as a markdown link. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danyim/obsidian-named-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?named-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danyim/obsidian-named-links/master/README.md)



## 概述

**插件名称**：Named Links

**主要功能**
自动获取粘贴或拖入 Obsidian 的 URL 页面标题，并将其转换为带标题的 Markdown 链接（如 `[标题](URL)`）。支持批量处理、Vim 模式粘贴，以及为笔记中已有 URL 补全标题。

**适用场景**
适用于需要频繁引用网络资源、整理文献或构建知识库的用户，特别是那些希望快速生成规范引用格式，避免手动查找和输入标题的场景。

**核心特色**
1. **智能识别**：仅当粘贴内容纯为 URL 时触发，避免干扰代码块、Frontmatter 或图片。
2. **灵活兼容**：支持从浏览器直接复制“链接+文本”时直接使用该文本作为标题，无需联网获取，适用于登录页。
3. **维护活跃**：作为 Auto Link Title 的活跃分支，修复了原插件停止维护后的 Bug，并支持日文翻译及 FxTwitter 查询。
4. **可撤销**：支持标准 Undo 操作，可恢复原始 URL。

**使用建议**
建议开启“为现有 URL 添加标题”命令，以便批量处理旧笔记中的裸链接。若需保留原始 URL 格式，请使用纯文本粘贴（Ctrl/Cmd+Shift+V）。注意该插件未通过官方人工审核，建议关注社区反馈。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


