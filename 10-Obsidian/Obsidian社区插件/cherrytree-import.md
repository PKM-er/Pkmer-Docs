---
uid: 1793625609336000
title: "Obsidian 插件：CherryTree Import"
tags: ["第三方工具集成", "文件管理", "数据处理", "obsidian插件"]
description: "Convert CherryTree XML documents into nested Markdown notes with links and images. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CherryTree Import

> [!Note] 插件名片
> - 插件名称：CherryTree Import
> - 插件作者：theluckystrike
> - 插件说明：Convert CherryTree XML documents into nested Markdown notes with links and images. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/cherrytree-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cherrytree-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/cherrytree-import/master/README.md)



## 概述

CherryTree Import 专为解决 CherryTree 笔记向 Obsidian 迁移的难题而设计。它直接读取未加密的 `.ctd` XML 文件，将复杂的节点树结构转换为 Obsidian 中带有层级文件夹、双向链接及嵌入图片的 Markdown 笔记。整个过程在本地运行，无需上传数据，基础导入功能完全免费，旨在帮助用户平滑过渡到 Obsidian 生态，保留原有的知识架构。

典型场景包括整理长期积累的 CherryTree 项目文档。例如，当你有一个包含“项目规划”父节点和“具体步骤”子节点的文档时，插件会将其转换为 `Projects.md` 和 `Projects/Plan.md`，并自动建立内部链接。若文档中包含代码块或表格，插件也能将其转换为带语言标签的代码围栏和标准 Markdown 表格，确保内容在 Obsidian 中依然清晰可读。

相比其他迁移工具，该插件在格式还原上更为细致。它支持将 CherryTree 特有的节点链接转换为 Obsidian 的 Wikilinks，并将 Base64 编码的 PNG 图片提取为独立附件文件嵌入笔记。此外，Pro 版本提供了额外能力，如将节点标签转为 Frontmatter 属性、生成父级索引笔记，以及允许用户仅导入选定的子树分支，而非强制全量迁移，这为大型文档的局部迁移提供了灵活性。

使用前需注意，输入文件必须是未加密的 `.ctd` 格式，SQLite 格式的 `.ctb` 文件需先在 CherryTree 中导出为 XML。目标文件夹必须不存在，以防止与现有笔记合并导致数据混乱。若写入失败，结果可能是部分完成的，需检查后更换新文件夹重试。该插件不适合需要保留 CherryTree 特有颜色、字体对齐或加密文档的用户，也不支持直接读取 `.ctb` 文件，这些需求需通过其他预处理手段解决。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


