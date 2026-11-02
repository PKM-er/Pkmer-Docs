---
uid: 1793625615166000
title: "Obsidian 插件：Mail Drop"
tags: ["文件管理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Save dropped Apple Mail and Outlook .eml files beside the target note with an attachment log. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mail Drop

> [!Note] 插件名片
> - 插件名称：Mail Drop
> - 插件作者：Viggo Meesters
> - 插件说明：Save dropped Apple Mail and Outlook .eml files beside the target note with an attachment log. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viggomeesters/obsidian-mail-drop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?outlook-drop-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viggomeesters/obsidian-mail-drop/master/README.md)



## 概述

Mail Drop 允许你将 Apple Mail 或 Outlook 中的邮件直接拖入 Obsidian 笔记，自动在目标笔记旁保存原始 .eml 文件，并生成包含回形针标题、链接及折叠预览的标准化条目。它还能智能处理邮件附件，将图片嵌入笔记，为 PDF 和文档创建链接，支持通过日期前缀和短横线命名规则保持文件命名的一致性，确保邮件内容在本地完整留存且易于检索。

典型场景包括将客户发来的项目更新邮件拖入对应的项目笔记，插件会自动记录时间戳、发件人及邮件正文预览，方便日后回溯沟通细节；或者在整理会议记录时，将包含数据表格的 Outlook 邮件拖入，插件会自动提取附件并建立链接，无需手动下载和重命名文件，极大简化了从邮件客户端到知识库的归档流程。

相比其他邮件导入工具，Mail Drop 的核心特色在于完全本地化处理，不依赖云端解析或后台网络请求，保护隐私的同时确保原始邮件字节完整保留。它支持重复导入去重，相同邮件会复用现有文件，不同内容则自动添加后缀，避免覆盖冲突。此外，它与 Attachment Link Rules 插件深度协作，允许用户精细控制附件的嵌入或链接方式，同时提供可选的 macOS 原生拖拽接收器，实现更流畅的邮件拖放体验。

使用前需注意，原生邮件拖拽功能仅支持 macOS 13 及以上系统，且需手动安装独立的接收器程序，新安装默认关闭此功能。该插件目前为早期版本，仅支持桌面端，移动端不可用。如果你需要自动同步邮箱、执行 HTML 渲染或处理非 .eml 格式的复杂邮件结构，此插件可能无法满足需求，它更侧重于将静态邮件文件安全、规范地归档到本地笔记库中。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


