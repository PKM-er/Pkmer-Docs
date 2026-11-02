---
uid: 1793625607863000
title: "Obsidian 插件：Batch Export"
tags: ["图片与PDF", "文件管理", "效率工具", "obsidian插件"]
description: "Export a folder of notes to a single PDF with an outline, contents page, cross-references and unfolded callouts. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Batch Export

> [!Note] 插件名片
> - 插件名称：Batch Export
> - 插件作者：dingzy53
> - 插件说明：Export a folder of notes to a single PDF with an outline, contents page, cross-references and unfolded callouts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dingzy53/obsidian-batch-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?batch-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dingzy53/obsidian-batch-export/master/README.md)



## 概述

Batch Export 旨在解决将 Obsidian 笔记库中的特定文件夹批量转换为单一 PDF 文件的痛点。它不仅能导出笔记内容，还会自动生成包含页码的目录页、可点击的笔记间交叉引用，以及展开后的 Callout 样式。此外，生成的 PDF 具备完整的文档大纲结构，支持从笔记标题到二级、三级标题的层级导航，让导出的文档具备专业出版物的阅读体验。

典型使用场景包括整理课程讲义或项目文档。例如，当你完成一个包含多篇关联笔记的项目后，可以直接将该文件夹导出为一份带有目录和内部链接的 PDF，方便分享给同事或归档。另一个场景是制作个人知识库的离线副本，通过勾选需要导出的笔记，插件会自动处理笔记间的引用关系，确保生成的 PDF 中所有链接均可正常跳转，避免死链。

相比其他仅支持单篇导出的插件，Batch Export 的核心特色在于对“文件夹级”导出的深度优化。它会根据索引笔记中的链接顺序自动排列笔记，并智能处理文件夹外的关联笔记，允许将其作为附录加入。特别值得注意的是，插件会高亮显示那些被勾选笔记引用但未勾选的笔记，防止导出后出现无法点击的死链接。此外，它强制使用浅色主题输出，确保 PDF 打印效果清晰，且完全只读，不会修改你的 Vault 数据。

使用前需注意，该插件仅支持 Obsidian 桌面版，且依赖 Obsidian 1.13.1 或更高版本。如果你需要导出包含 TikZ 图表的笔记，建议安装配套的 TikZ 插件以确保图表在浅色主题下正常显示。该插件不适合需要频繁导出单个笔记、或希望保留深色主题背景的用户。对于仅需简单文本复制粘贴，或对 PDF 排版无特殊要求的场景，使用 Obsidian 内置的打印功能可能更为便捷。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


