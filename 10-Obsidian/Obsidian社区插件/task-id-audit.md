---
uid: 1793625622117001
title: "Obsidian 插件：Task ID Audit"
tags: ["任务管理", "数据处理", "效率工具", "obsidian插件"]
description: "Find duplicate task IDs, missing dependency targets, and dependency cycles. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task ID Audit

> [!Note] 插件名片
> - 插件名称：Task ID Audit
> - 插件作者：theluckystrike
> - 插件说明：Find duplicate task IDs, missing dependency targets, and dependency cycles. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/notemods/task-id-audit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-id-audit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/notemods/task-id-audit/master/README.md)



## 概述

Task ID Audit 专为使用 Markdown 复选框管理任务的用户设计，核心功能是自动扫描笔记中的任务依赖关系。它通过识别带有特定标识符的任务行，检测重复的任务 ID、指向不存在目标的依赖、自引用错误以及复杂的依赖循环。该插件仅读取文本进行分析，不会修改任何笔记内容，确保数据安全性。

典型场景包括项目评审前的最终检查，或复制任务模板后的快速验证。例如，当你从模板库复制了一批任务后，插件能立即指出哪些 ID 发生了冲突，或哪些依赖指向了尚未创建的任务。报告提供具体的文件路径和行号，点击即可直接跳转至编辑器中的对应位置，方便快速定位并修复问题。

相比其他任务管理插件，Task ID Audit 不依赖 Tasks 插件即可独立运行，且对 ID 格式有严格定义（支持字母、数字、下划线和连字符）。其特色在于支持按文件夹过滤审计范围，同时保留外部依赖的解析能力，确保跨文件夹引用的准确性。此外，它采用迭代算法处理长依赖链，避免递归调用导致的性能问题，适合处理大规模任务库。

使用前需注意，YAML 前置元数据、代码块及 HTML 注释中的内容会被忽略，若任务格式不规范可能被标记为“跳过输入”，导致审计结果不完整。该插件仅用于诊断，不具备自动修复依赖或生成 ID 的功能。对于不需要依赖关系管理，或仅使用简单待办事项的用户，此插件可能显得过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


