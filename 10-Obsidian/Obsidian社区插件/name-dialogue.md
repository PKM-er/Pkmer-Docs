---
uid: 1793625617111000
title: "Obsidian 插件：Name Dialogue"
tags: ["样式与美化", "文字处理", "编辑工具", "obsidian插件"]
description: "An Obsidian plugin that adds formatting to dialogue in scripts. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Name Dialogue

> [!Note] 插件名片
> - 插件名称：Name Dialogue
> - 插件作者：Charles Qiang
> - 插件说明：An Obsidian plugin that adds formatting to dialogue in scripts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/qiangcharles/Name-Dialogue)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?name-dialogue)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/qiangcharles/Name-Dialogue/master/README.md)



## 概述

Name Dialogue 是一款专为剧本写作设计的 Obsidian 插件，旨在解决对话排版单调、角色区分度低的问题。它通过解析特定的命名空间格式，自动为不同角色的台词添加视觉标识，如颜色区分和引号包裹，让非正式剧本的阅读体验更加清晰直观。核心功能包括通过角色列表弹窗管理角色名称、别名及配色，并支持在编辑器中直接查看原始文本进行编辑，无需手动调整格式。

典型使用场景适用于快速记录剧情或创作非正式剧本。例如，在描写“爱丽丝和鲍勃在公园相遇”的场景时，你只需输入“Alice: '你好，鲍勃。'”，插件便会自动识别角色并应用预设样式。若角色带有情绪描述，如“Bob: (happily) '我很好！你呢？'”，插件也能正确解析并保留括号内的动作提示，使对话流自然流畅，无需额外标记。

相比其他通用文本格式化插件，Name Dialogue 的特色在于其轻量级与专注性。它不依赖复杂的模板系统，而是通过简单的正则表达式解析 `[name]:[options]:[dialogue]` 结构，支持“thought”（思考）和“right”（右对齐）等选项。此外，插件允许用户自定义角色颜色，并在编辑器中选中命名空间时显示原始文本，方便修改别名或调整内容，这种设计既保持了写作的自由度，又确保了视觉呈现的一致性。

需要注意的是，该插件目前定位为“barebones”（基础版），主要服务于非正式剧本写作，不适合需要严格遵循行业标准格式（如好莱坞剧本规范）的专业用户。虽然计划中包含了导出转换功能，但目前尚未实现。此外，角色管理目前仅支持单列列表，暂不支持拖拽排序或图像芯片展示，且未保存的更改需手动确认，对于追求高度自动化或复杂视觉定制的用户，可能需要等待后续版本更新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


