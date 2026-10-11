---
uid: 1791709368987000
title: 'Obsidian 插件：Open Ontologies'
tags: ['数据处理', '编程与脚本', '数据分析', 'obsidian插件']
description: 'Validate, reason over, SHACL-check and SPARQL-query ontology files and your vault as RDF, powered by the full Open Ontologies engine. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Open Ontologies

> [!Note] 插件名片
> - 插件名称：Open Ontologies
> - 插件作者：fabio rovai
> - 插件说明：Validate, reason over, SHACL-check and SPARQL-query ontology files and your vault as RDF, powered by the full Open Ontologies engine. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编程与脚本', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fabio-rovai/obsidian-open-ontologies)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-ontologies)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fabio-rovai/obsidian-open-ontologies/master/README.md)



## 概述

**插件名称**：Open Ontologies

**1. 主要功能**
该插件将完整的 Open Ontologies 引擎集成至 Obsidian，支持对本体文件（如 .ttl, .owl, .rdf, .jsonld）进行验证、推理、SHACL 检查、差异对比及 Lint 检查。同时，它提供 SPARQL 控制台，允许用户直接查询本体数据或整个知识库。

**2. 适用场景**
适用于需要构建结构化知识图谱、进行语义推理或管理复杂本体数据的用户。特别适合在笔记中建立严格逻辑关系，并希望通过 RDF 标准查询笔记间隐含联系的进阶用户。

**3. 核心特色**
*   **Vault 转 RDF**：自动将笔记映射为 RDF 图，笔记成为个体，Frontmatter 中的 `type` 映射为 `rdf:type`，内联字段映射为对象属性，标签映射为 SKOS 概念。
*   **推理能力**：不仅能查看显式链接，还能通过推理引擎发现笔记间隐含的逻辑连接。
*   **自动化管理**：首次运行自动下载并校验引擎二进制文件，支持保存时自动验证本体文件，提供本体树视图和带历史的 SPARQL 控制台。

**4. 使用建议**
仅支持桌面端。建议确保网络畅通以完成首次引擎下载。若已安装本地引擎，可在设置中指定二进制路径。适合对数据结构和逻辑一致性有较高要求的知识管理场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


