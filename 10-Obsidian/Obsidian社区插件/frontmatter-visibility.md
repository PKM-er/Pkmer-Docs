---
uid: 1791709370430000
title: 'Obsidian 插件：Tidy YAML'
tags: ['样式与美化', '编辑工具', '界面优化', 'obsidian插件']
description: 'Keep YAML tidy by showing, collapsing, or hiding frontmatter. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tidy YAML

> [!Note] 插件名片
> - 插件名称：Tidy YAML
> - 插件作者：NameIsKyro
> - 插件说明：Keep YAML tidy by showing, collapsing, or hiding frontmatter. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nameiskyro/Tidy-YAML)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-visibility)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nameiskyro/Tidy-YAML/master/README.md)



## 概述

**Tidy YAML** 是一款用于管理 Obsidian 笔记 YAML 前置元数据（Frontmatter）的社区插件。

**主要功能**
该插件允许用户在不修改笔记实际内容的前提下，对 YAML 块进行“显示”、“折叠”或“隐藏”三种状态的切换。它支持 Source 模式、Live Preview 及阅读视图，且不影响 Obsidian 原生的属性侧边栏。

**适用场景**
适用于希望保持笔记界面整洁、减少 YAML 元数据视觉干扰，或需要批量快速管理大量笔记元数据可见性的用户。

**核心特色**
1. **状态记忆与持久化**：插件会按文件路径保存显示状态，文件重命名或移动时状态自动跟随，删除时自动清理。
2. **极简交互**：仅提供左侧栏眼睛图标（控制隐藏/显示）和顶部 YAML 条（控制折叠/展开）两个直观控件，支持键盘无障碍访问。
3. **全局命令**：提供 6 个命令，支持对当前文件进行切换，或对全库执行“全部隐藏/显示/折叠/展开”的确定性操作。
4. **源码安全**：采用 CodeMirror 装饰技术，仅改变视觉呈现，绝不编辑或修改 YAML 及 Markdown 源文件。

**使用建议**
建议将常用命令（如“隐藏全部”）绑定快捷键，以便在专注写作时快速清理界面。对于经常调整元数据的用户，可利用全库命令统一视图状态，提升浏览效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


