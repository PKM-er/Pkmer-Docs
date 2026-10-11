---
uid: 1791709368055000
title: 'Obsidian 插件：Link Title on Paste'
tags: ['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Pastes a bare URL as a Markdown link with the page title, fetched in the background and undone in one step. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link Title on Paste

> [!Note] 插件名片
> - 插件名称：Link Title on Paste
> - 插件作者：siulved54
> - 插件说明：Pastes a bare URL as a Markdown link with the page title, fetched in the background and undone in one step. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/link-title-on-paste)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-title-on-paste)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/link-title-on-paste/master/README.md)



## 概述

**1. 主要功能**
自动将粘贴的纯网址转换为带有页面标题的 Markdown 链接（如 `[标题](URL)`）。插件在后台静默获取标题，无需手动操作，且支持一键撤销恢复为原始网址。

**2. 适用场景**
适用于需要频繁在笔记中插入网页引用、保持链接可读性，且希望保持键盘流（不离开键盘）高效工作的用户。

**3. 核心特色**
*   **智能触发**：仅当剪贴板为单一网址且无选中文本时生效，避免干扰代码块、维基链接或已选文本。
*   **隐私安全**：仅请求 `http/https` 地址，严禁访问本地/内网地址；支持配置跳过特定域名；无第三方数据收集。
*   **容错机制**：若页面无法访问或无标题，保留原始网址；若粘贴后继续输入，链接仍会准确定位。

**4. 使用建议**
建议在设置中配置“跳过域名”以排除不信任或频繁访问的站点。若担心网络请求，可关闭自动获取功能，仅使用手动命令触发。注意该插件会向目标网站发送请求，请确保粘贴的链接安全合规。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


