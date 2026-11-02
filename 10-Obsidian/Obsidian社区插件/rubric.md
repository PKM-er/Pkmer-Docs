---
uid: 1793625620908000
title: "Obsidian 插件：Rubric"
tags: ["编辑工具", "数据处理", "效率工具", "obsidian插件"]
description: "Drive property autocomplete, option pickers, validation and migration from YAML note schemas kept in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rubric

> [!Note] 插件名片
> - 插件名称：Rubric
> - 插件作者：Anthirayas
> - 插件说明：Drive property autocomplete, option pickers, validation and migration from YAML note schemas kept in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jrayas/obsidian-rubric)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rubric)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jrayas/obsidian-rubric/master/README.md)



## 概述

Rubric 是一款基于 YAML 文件管理笔记属性的 Obsidian 桌面插件，旨在解决笔记库中属性混乱、格式不统一及缺乏规范的问题。它通过读取库内 `_schema` 文件夹中的纯文本定义，为核心笔记类型提供属性自动补全、选项选择器、数据校验以及可读性 ID 生成等功能。用户只需编辑 YAML 文件即可新增笔记类型、状态值或标签，无需编写代码或重启应用，实现了从“自由书写”到“结构化治理”的平滑过渡，让笔记库具备清晰的元数据标准。

典型使用场景包括构建个人知识库或项目管理库。例如，在创建“知识条目”时，插件会根据 schema 自动补全 `type` 和 `status` 属性，并阻止输入非法值；当需要为笔记生成唯一标识时，Rubric 能自动计算如 `KB-2026-0143` 这样的可读 ID，无需维护额外的计数器文件。此外，它还能自动维护 `created` 和 `modified` 时间戳，确保元数据随笔记内容变化而准确更新，特别适合需要长期维护、多人协作或严格遵循特定文档规范的用户。

相比同类插件，Rubric 的特色在于其“治理就绪”的设计哲学与灵活的域覆盖机制。它支持通过 `domain` 属性加载不同的覆盖文件，允许在数学、物理等不同领域下定制专属字段，而无需分叉整个 schema。此外，它提供了一键库检查功能，能报告缺失属性、无效值等十一类问题，并在修复前展示具体变更内容。所有修改均保留在 `archived_fields` 中，确保数据永不丢失，这种非破坏性的变更追踪机制是其显著优势。

使用前需注意，Rubric 主要面向 macOS 和 Windows 桌面端，移动端功能受限。它定位为辅助治理工具而非合规系统，锁机制仅为建议性质，真正的审计历史需依赖 Git 或备份。插件默认处于关闭状态，需手动启用自动化，适合对笔记结构有较高要求、愿意维护 YAML 配置的用户。若你偏好完全自由、无结构约束的笔记风格，或主要依赖移动端进行重度编辑，该插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


