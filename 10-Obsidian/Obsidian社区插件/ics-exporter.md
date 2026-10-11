---
uid: 1791709366918000
title: 'Obsidian 插件：Export as .ics'
tags: ['日历与时间', '文件管理', '效率工具', 'obsidian插件']
description: 'Takes the current note and export it as a .ics file, ready to be imported in your favourite calendar app. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Export as .ics

> [!Note] 插件名片
> - 插件名称：Export as .ics
> - 插件作者：berenluth
> - 插件说明：Takes the current note and export it as a .ics file, ready to be imported in your favourite calendar app. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/berenluth/obsidian-ics-exporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ics-exporter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/berenluth/obsidian-ics-exporter/master/README.md)



## 概述

**1. 主要功能**
该插件可将当前笔记转换为 `.ics` 日历文件。它读取笔记 Frontmatter 中的 `deadline` 属性，若格式无效则提示用户选择日期并回写。生成的文件可直接导入任意日历应用，实现从笔记到日程的无缝转换。

**2. 适用场景**
适用于需要管理截止日期、任务或会议的个人及团队。特别适合依赖 Obsidian 进行知识管理，同时希望将重要时间节点同步至系统日历（如 Apple Calendar、Google Calendar）的用户。

**3. 核心特色**
- **完全离线**：无需账号或外部服务，数据保留在 Vault 内。
- **智能去重**：重新导出同一笔记时更新现有事件，避免重复。
- **跨平台优化**：桌面端可自动打开默认应用，移动端支持通过分享面板直接发送至日历 App。
- **灵活配置**：可自定义事件描述内容（笔记链接、正文或两者），并选择是否将手动选择的日期回写至笔记。

**4. 使用建议**
建议在笔记 Frontmatter 中规范使用 `deadline` 字段（格式：`YYYY-MM-DD` 或 `YYYY-MM-DDTHH:mm`），以减少手动选择日期的步骤。可绑定快捷键以提升效率，并定期检查导出文件夹（默认 `.ics/`）以清理不再需要的旧文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


