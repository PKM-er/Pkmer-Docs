---
uid: 1793625620009001
title: "Obsidian 插件：PDF Reply Export"
tags: ["图片与PDF", "文字处理", "效率工具", "obsidian插件"]
description: "Export PDF review comments and their replies as a Markdown note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Reply Export

> [!Note] 插件名片
> - 插件名称：PDF Reply Export
> - 插件作者：theluckystrike
> - 插件说明：Export PDF review comments and their replies as a Markdown note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/pdf-reply-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-reply-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/pdf-reply-export/master/README.md)



## 概述

PDF Reply Export 将本地 PDF 文件中原生的审阅批注及其回复，直接转换为结构清晰的 Markdown 笔记。它通过读取 PDF 内部保存的注释记录，提取作者、日期、文本内容及所在页码，并保留原有的回复层级关系。这一功能解决了在 Obsidian 中难以直接利用 PDF 内嵌讨论的问题，让你无需依赖外部服务，即可将分散在文档中的对话整合进知识库，实现文档内容与讨论记录的同步管理。

典型场景包括设计评审或合同讨论。例如，当团队在 PDF 合同上留下多轮修改意见时，你可以使用插件预览这些对话，并一键生成一份 Markdown 笔记。笔记会以嵌套列表形式呈现讨论脉络，每条回复都链接回 PDF 的具体页面，方便后续查阅。另一个场景是整理技术文档的反馈，将不同作者的批注按时间顺序整理，形成一份独立的评审记录，便于归档和追踪修改历史。

相比其他仅能导出纯文本的插件，该工具的核心特色在于对复杂对话结构的精准还原。它能自动识别父级批注与子级回复的关系，即使存在缺失父级或循环引用等异常情况，也会将其归类到特定分组并保留内容，确保数据不丢失。此外，免费版即可使用核心导出功能，而 Pro 版则增加了按作者或日期范围筛选、以及批量导出整个文件夹 PDF 讨论的高级能力，适合需要精细管理大量文档讨论的用户。

使用前需注意，该插件仅读取保存在 PDF 文件内部的注释，无法处理存储在外部服务或独立 Markdown 文件中的评论。导出操作是生成新文件，不会修改原 PDF，也不会自动合并之前导出的笔记，因此重复导出会产生多个独立文件。此外，插件未针对移动端、加密 PDF 或大型生产级 PDF 档案库进行测试，若你的工作流依赖这些环境或需要处理外部协作平台的评论，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


