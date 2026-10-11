---
uid: 1791709369294000
title: 'Obsidian 插件：Preserve Frontmatter Formatting'
tags: ['编辑工具', '样式与美化', '效率工具', 'obsidian插件']
description: 'Keeps the formatting of your YAML front matter - comments, quoting, blank lines, indentation and inline lists - when any plugin edits a property. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Preserve Frontmatter Formatting

> [!Note] 插件名片
> - 插件名称：Preserve Frontmatter Formatting
> - 插件作者：Michael Naumov
> - 插件说明：Keeps the formatting of your YAML front matter - comments, quoting, blank lines, indentation and inline lists - when any plugin edits a property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-preserve-frontmatter-formatting)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?preserve-frontmatter-formatting)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-preserve-frontmatter-formatting/master/README.md)



## 概述

**1. 主要功能**
该插件旨在解决 Obsidian 在通过 API 编辑笔记属性时，重写整个 YAML Front Matter 块并破坏原有格式的问题。它能确保当其他插件修改属性时，仅重写被修改的那一行，从而保留注释、引号、空行、缩进及内联列表等原始格式。

**2. 适用场景**
适用于所有依赖 `app.fileManager.processFrontMatter()` 接口编辑元数据的场景，包括 Obsidian 自身的部分编辑操作以及基于 `obsidian-dev-utils` 开发的第三方插件。特别适合对笔记头部格式有严格排版要求或依赖特定 YAML 结构（如内联列表）的用户。

**3. 核心特色**
*   **精准局部重写**：仅更新发生变化的属性，未触及的属性保持原样，即使无实质变更也不写入文件。
*   **格式无损**：完美保留注释、空行、引号及内联列表（如 `[a, b]` 不会强制换行）。
*   **零配置**：无需设置，安装即生效，禁用则恢复 Obsidian 默认行为。
*   **高覆盖率**：100% 测试覆盖率，兼容主流插件生态。

**4. 使用建议**
建议所有使用自动化插件修改笔记元数据的用户安装此插件，以避免手动维护的格式被意外破坏。由于无设置项，安装后即可直接使用；若遇到兼容性问题，可随时禁用以恢复默认行为。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


