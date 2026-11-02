---
uid: 1793625611141000
title: "Obsidian 插件：Compile Loss Check"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Find source paragraphs that do not match a compiled manuscript. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Compile Loss Check

> [!Note] 插件名片
> - 插件名称：Compile Loss Check
> - 插件作者：theluckystrike
> - 插件说明：Find source paragraphs that do not match a compiled manuscript. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/compile-loss-check)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?compile-loss-check)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/compile-loss-check/master/README.md)



## 概述

Compile Loss Check 专为使用 Longform 插件进行长篇写作的用户设计，核心功能是检测编译后的手稿是否遗漏了源文件中的内容。它通过对比 Longform 项目中的场景文件与最终编译出的 Markdown 笔记，精准列出那些在源文件中存在、但在编译结果中缺失的段落。插件会直接读取索引笔记中的场景顺序，无需重新运行编译过程，即可快速定位丢失的文字及其所在的场景路径和行号，帮助作者确保最终成稿的完整性。

典型使用场景包括长篇小说或学术著作的出版前校对。例如，当你将分散在多个笔记中的章节合并为一本电子书时，可以运行该插件检查是否有段落因格式调整而被意外删除；或者在多次修改源文件后重新编译，用它来确认新增或修改的内容是否已正确同步到最终文档中，避免手动逐字比对带来的繁琐与疏漏。

相比其他简单的文本对比工具，该插件具备针对 Longform 结构的深度解析能力。它能智能处理 YAML 前置属性、主题分隔线以及嵌套的场景列表，并严格区分标点符号差异（如弯引号与直引号）。若某段文字在源文件中出现多次但仅部分匹配，插件会标记为“不确定”并提示可能的原因，如引号变更或段落合并。此外，Pro 版本支持保存对比配置文件，允许排除特定场景或文本，并支持同时检查多个编译版本（如纸质版与电子版），极大提升了复杂项目的管理效率。

使用前需注意，该插件采用严格匹配机制，任何细微的标点或空格差异都会导致不匹配报告，因此建议结合报告中的提示进行人工复核。它不适合用于非 Longform 结构的项目，也不支持在移动端或平板设备上运行。对于超过 2000 个场景或 2000 万字符的超大项目，检查可能会因性能限制而中断。此外，插件仅读取数据并生成新的报告笔记，不会修改你的原始文件，但需确保 Obsidian 版本在 1.13.4 及以上。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


