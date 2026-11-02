---
uid: 1793625614722000
title: "Obsidian 插件：Lattice"
tags: ["图谱", "数据处理", "效率工具", "obsidian插件"]
description: "Compiles a note into a navigable semantic IR (nodes, typed edges, evidence). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lattice

> [!Note] 插件名片
> - 插件名称：Lattice
> - 插件作者：Manas Gedam
> - 插件说明：Compiles a note into a navigable semantic IR (nodes, typed edges, evidence). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图谱', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/maanaaasss/lattice)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?semantic-ir-compiler)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/maanaaasss/lattice/master/README.md)



## 概述

Lattice 将笔记文本转化为可导航的语义中间表示，核心功能是把非结构化内容拆解为带有类型标签的节点和关系边。它自动将文本分段，并分类为声明、观察、决策、记忆、情绪、事件或价值观等七种节点类型，同时提取节点间的语义关系，如支持、矛盾、因果或依赖。每个节点和关系都附带原文中的逐字证据片段，确保所有推断都能追溯回源文本，形成一张结构清晰、可验证的知识图谱。

该插件特别适合处理日记、会议记录或法律叙事类文本。例如，在整理会议笔记时，它能自动识别出“决定”节点与“观察”节点之间的依赖关系，并标记出哪些观点相互矛盾；在处理个人日记时，它能提取情绪节点与具体事件之间的因果联系，帮助梳理心理变化轨迹。对于包含大量交叉引用或复杂章节结构的长文档，其表现可能不如短文本稳定。

相比同类插件，Lattice 的最大特色在于其“证据驱动”的设计。它不仅输出关系，还强制要求提供支撑该关系的原文片段，避免了大模型常见的“幻觉”问题。此外，它结合了基于文档顺序的规则关系（如前驱关系）和大模型提取的语义关系，并在最终组装前对结果进行源文本验证，提高了图谱的可靠性。这种双重机制使得生成的图谱既包含逻辑顺序，又具备深层语义连接。

使用前需注意，该插件需配置外部 LLM API 端点，笔记内容会被发送至该服务进行处理，因此涉及隐私敏感的内容需谨慎使用。API 密钥存储在本地，但若使用 iCloud 或 Git 同步库，密钥可能随之同步，需自行管理安全。目前插件尚不支持对具有复杂标题层级或大量交叉引用的技术文档（如论文、规格书）进行精细处理，因为其分块机制是扁平且基于句子的，缺乏对标题结构的感知。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


