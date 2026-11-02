---
uid: 1793625618528000
title: "Obsidian 插件：Note Name Generator"
tags: ["文件管理", "自动化与AI", "效率工具", "obsidian插件"]
description: "Create or rename notes with a generated name: a random GUID, or the output of any external program that can read the note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Name Generator

> [!Note] 插件名片
> - 插件名称：Note Name Generator
> - 插件作者：Robert Graf
> - 插件说明：Create or rename notes with a generated name: a random GUID, or the output of any external program that can read the note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/meph24/obsidian-note-name-generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-name-generator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/meph24/obsidian-note-name-generator/master/README.md)



## 概述

Note Name Generator 旨在解决笔记命名僵化的问题，核心功能是为新建或重命名的笔记自动生成名称。默认情况下，它使用随机 GUID 作为文件名，确保每个笔记拥有唯一标识。更关键的是，它允许用户配置任意外部程序来生成名称，将“何时命名”与“如何命名”解耦，让你无需修改插件代码即可自由切换命名规则，实现高度定制化的文件管理。

典型场景包括快速创建无标题笔记或整理 Zettelkasten 体系。例如，你可以设置命令提取笔记中的第一个标题作为文件名，让笔记名称直接反映内容主题；或者配置时间戳生成器，在创建笔记时自动打上精确到秒的时间标记。对于已有笔记，插件支持一键重命名，并自动更新库内所有指向该笔记的链接，避免断链，极大提升了批量整理笔记的效率。

相比其他硬编码单一命名方案的插件，本插件的最大特色在于其灵活的“生成器委托”机制。它通过标准输入、环境变量和占位符向外部脚本传递笔记路径和内容，支持 PowerShell、Python 等任意能读取输入的程序。此外，它还能接管 Obsidian 原生的“新建笔记”流程，无论是通过快捷键、侧边栏按钮还是 Tray 插件创建，都能统一应用生成规则，同时智能保护每日笔记不被误改。

使用前需注意，外部生成器仅支持桌面端，移动端会自动回退为随机 GUID。若依赖外部脚本，需确保命令执行环境正确且响应及时，否则超时或报错会导致操作中止。该插件不适合需要严格遵循固定日期格式（如 YYYY-MM-DD）且不希望被外部逻辑干扰的用户，也不适合完全依赖移动端进行复杂命名管理的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


