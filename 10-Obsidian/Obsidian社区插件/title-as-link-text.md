---
uid: 2025042920525863
title: Obsidian 插件：Title As Link Text
tags: ['文件管理', '编辑工具', '模板与链接处理', 'obsidian插件']
description: 自动更新链接文本，用笔记标题替代文件名。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Title As Link Text

> [!Note] 插件名片
> - 插件名称：Title As Link Text
> - 插件作者：Lex Toumbourou
> - 插件说明：自动更新链接文本，用笔记标题替代文件名。
> - 插件分类：['文件管理', '编辑工具', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lextoumbourou/obsidian-title-as-link-text)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?title-as-link-text)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lextoumbourou/obsidian-title-as-link-text/main/README.md)



## 概述

Title As Link Text 是一款 Obsidian 插件，它能自动将笔记链接中的文件名替换为更具可读性的标题，支持 Markdown 链接和 Wikilinks 两种格式。该插件通过智能检测机制优先使用笔记的 Frontmatter 标题，若无则回退到 H1 标题或文件名，并支持自定义别名匹配和模糊搜索，适用于使用时间戳命名文件的 Zettelkasten 用户、需要特殊字符标题的写作者以及追求整洁笔记库的用户。插件会在保存或重命名文件时自动更新链接，提供"更新全部链接"和"更新当前文件链接"两个命令，但使用时需注意它会修改多个关联文件，建议提前备份。安装可通过 BRAT 添加测试版，推荐搭配 Wikilinks To Markdown 和 Front Matter Title 插件使用，开发环境需 Node 16。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



