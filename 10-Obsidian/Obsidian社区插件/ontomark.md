---
uid: 1793625619201000
title: "Obsidian 插件：Ontomark"
tags: ["数据处理", "学术与科研", "自动化与AI", "效率工具", "obsidian插件"]
description: "Ontologies in Markdown: index typed notes, run local OWL 2 EL reasoning and SPARQL, apply reviewed frontmatter edits, and optionally extract facts with a model you choose. Offline by default - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ontomark

> [!Note] 插件名片
> - 插件名称：Ontomark
> - 插件作者：DreamLab AI
> - 插件说明：Ontologies in Markdown: index typed notes, run local OWL 2 EL reasoning and SPARQL, apply reviewed frontmatter edits, and optionally extract facts with a model you choose. Offline by default - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '学术与科研', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dreamlab-ai/ontomark-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ontomark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dreamlab-ai/ontomark-obsidian/master/README.md)



## 概述

Ontomark 将你的 Obsidian 笔记库转化为机器可理解的语义本体，核心在于通过简单的 frontmatter 标记建立类型化知识图谱。它允许你在不改变 Markdown 写作习惯的前提下，为笔记添加类型和层级关系，并内置本地 OWL 2 EL 推理引擎。这意味着系统能自动推导隐含逻辑，例如从“Rex 是狗”和“狗是动物”中推断出“Rex 是动物”，让笔记从单纯的文本关联升级为具备逻辑结构的知识网络。

典型场景适用于笔记库规模超出个人记忆负荷，或需要让 AI 工具精准理解笔记内容的情况。例如，当你想查询“库中有哪些动物”时，无需手动搜索，SPARQL 查询即可直接返回所有被推理为动物的实体。另一个例子是构建复杂的分类体系，通过可视化图谱查看实体的继承关系，其中实线代表你明确写入的关系，虚线则代表引擎自动推导出的隐含关系，帮助快速理清知识脉络。

相比仅靠反向链接建立弱关联的传统方式，Ontomark 提供了精确的结构化查询能力，支持在笔记内直接渲染 SPARQL 查询结果。其特色在于“审查式编辑”，所有由推理或辅助摄入产生的变更都会以 diff 形式展示，需用户确认后才写入，确保数据一致性。此外，它默认完全离线运行，所有推理均在本地完成，只有在你主动配置并调用外部模型进行事实提取时，数据才会离开设备，且模型建议需经过引擎严格校验。

使用前需注意，该插件主要服务于结构化知识管理，不适合仅用于纯文本记录或无需逻辑推理的场景。若笔记内容高度非结构化，标记成本可能较高。此外，虽然辅助摄入功能允许连接外部模型，但需自行配置可信端点，且插件无法完全保证重定向行为的安全性。对于不需要复杂本体推理、仅依赖简单标签或文件夹组织的用户，此插件可能显得过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


