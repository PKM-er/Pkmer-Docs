---
uid: 1791709371172000
title: 'Obsidian 插件：XU Number Headings'
tags: ['样式与美化', '编辑工具', '文字处理', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：XU Number Headings

> [!Note] 插件名片
> - 插件名称：XU Number Headings
> - 插件作者：xcloud-ai
> - 插件说明：
> - 插件分类：['样式与美化', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xcloud-ai/xu-number-headings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?xu-number-headings)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xcloud-ai/xu-number-headings/master/README.md)



## 概述

**1. 主要功能**
XU Number Headings 插件旨在为 Markdown 标题自动生成多级数字编号（如 1.1.1）。它支持自定义起始/结束层级（默认 H2-H6）、起始值及分隔符，并能根据文档编辑或打开状态自动重新编号。

**2. 适用场景**
适用于需要严格层级结构的学术写作、技术文档、书籍大纲或长篇报告。特别适合那些希望跳过文档主标题（H1），仅对正文子标题进行规范化编号的用户。

**3. 核心特色**
*   **灵活区间控制**：通过双滑条设定连贯的编号层级范围，避免干扰文档大标题。
*   **Frontmatter 覆盖机制**：支持在文档头部通过一行代码（如 `number headings: 1.1`）单独覆盖全局设置，或写 `off` 一键豁免该文档。
*   **智能自动重编**：基于事件驱动，编辑或打开文档后按可配置延迟自动更新，无需轮询。
*   **无损操作**：采用单事务提交，不污染撤销栈；支持一键清除所有编号前缀，保留原文。

**4. 使用建议**
建议从社区插件目录直接安装。默认设置（H2-H6）适合大多数场景，若需特殊格式，请在文档 Frontmatter 中配置覆盖规则。注意插件会自动剥离旧编号再重新生成，确保编号逻辑的一致性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


