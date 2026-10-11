---
uid: 1791709369336000
title: 'Obsidian 插件：Proofread'
tags: ['文字处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Highlights proofreading findings in a note, with the rule behind each, and lets you fix them in place. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Proofread

> [!Note] 插件名片
> - 插件名称：Proofread
> - 插件作者：Codomaniac
> - 插件说明：Highlights proofreading findings in a note, with the rule behind each, and lets you fix them in place. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/codomaniac/obsidian-proofread)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?proofread)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/codomaniac/obsidian-proofread/master/README.md)



## 概述

**1. 主要功能**
该插件本身不进行校对，而是可视化展示由外部工具（如 Claude Code 的 `proofread` 技能）生成的校对报告。它在笔记中直接高亮显示语法、标点及用词错误，用户可悬停查看具体规则，点击即可原位修正文本并标记完成。

**2. 适用场景**
适用于需要高质量文字输出的写作场景，特别是当用户结合使用 Obsidian 与 AI 辅助编程/写作工具（如 Claude Code）时，适合在本地笔记库中进行细致的文本润色与错误排查。

**3. 核心特色**
*   **原位工作流**：直接在笔记正文中高亮问题，无需切换至聊天窗口，保持写作沉浸感。
*   **规则透明**：每个高亮均附带具体的语法或风格规则依据（源自经典写作指南）。
*   **非侵入式**：插件仅负责展示和修正交互，不自动改写句子；词汇建议仅提供单词及定义，尊重作者原意。
*   **分类清晰**：通过不同颜色区分机械错误、风格问题等四类发现。

**4. 使用建议**
需同时安装本插件及配套的 Claude Code 技能。在 Vault 根目录运行 `/proofread` 命令生成 JSON 报告，插件会自动检测并渲染高亮。建议修改后重新运行命令以更新报告，确保反馈实时同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


