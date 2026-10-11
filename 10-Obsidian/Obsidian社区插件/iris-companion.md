---
uid: 1791709367830000
title: 'Obsidian 插件：Iris Companion'
tags: ['样式与美化', '界面优化', '自动化与AI', 'obsidian插件']
description: 'Distinguish agent-authored notes with a banner and explorer dot. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Iris Companion

> [!Note] 插件名片
> - 插件名称：Iris Companion
> - 插件作者：Markos Narinian
> - 插件说明：Distinguish agent-authored notes with a banner and explorer dot. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/markosnarinian/obsidian-iris)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?iris-companion)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/markosnarinian/obsidian-iris/master/README.md)



## 概述

**1. 主要功能**
Iris Companion 是一款用于识别“AI代理撰写笔记”的可视化插件。它通过顶部横幅和文件资源管理器中的圆点标记，帮助用户快速区分由 AI 生成的内容与人工笔记。

**2. 适用场景**
适用于混合使用 AI 助手（如 Copilot、ChatGPT 等）进行知识管理的 Obsidian 用户。特别适合需要审计 AI 生成内容、区分原始笔记与辅助生成内容的场景，便于在浏览和编辑时保持内容来源的透明度。

**3. 核心特色**
*   **双重视觉标识**：支持在阅读/编辑视图显示横幅，并在资源管理器中显示主题色圆点，两者可独立开关。
*   **隐私安全**：完全本地运行，无网络请求或遥测，不自动修改笔记，仅在手动执行命令时更新属性。
*   **灵活标记机制**：基于显式标签（`#agent-authored`）而非 AI 检测，支持嵌套标签且大小写不敏感。提供命令面板操作，可精准增删文件属性中的标签，不影响正文或内联标签。

**4. 使用建议**
*   **版本要求**：需 Obsidian 1.8.7 及以上版本，目前需从源码构建后手动安装至插件目录。
*   **标记规范**：建议在 AI 生成笔记时，通过命令面板添加 `agent-authored` 标签至文件属性（Properties），而非仅依赖内联标签，以便统一管理。
*   **兼容性**：标记颜色跟随主题，可与 Color Tags 插件共存，适合长期维护混合来源的知识库。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


