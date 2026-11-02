---
uid: 1793625609413000
title: "Obsidian 插件：Cipherfold"
tags: ["安全与隐私", "文件管理", "备份与恢复", "obsidian插件"]
description: "Encrypted notes and attachments in a dedicated vault, with a native editor and recoverable history. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cipherfold

> [!Note] 插件名片
> - 插件名称：Cipherfold
> - 插件作者：gkipon
> - 插件说明：Encrypted notes and attachments in a dedicated vault, with a native editor and recoverable history. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gkipon/obsidian-cipherfold)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cipherfold)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gkipon/obsidian-cipherfold/master/README.md)



## 概述

Cipherfold 专为桌面端 Obsidian 用户设计，旨在解决敏感笔记的本地加密存储问题。它要求在一个全新的独立库中运行，利用原生 Markdown 编辑器提供无缝的写作体验。核心功能是对笔记标题、内容及附件进行磁盘级加密，同时保留可恢复的历史版本和删除记录。解锁状态下，你可以像使用普通笔记一样进行链接和搜索，但所有数据在落盘时均处于加密状态，确保即使文件被窃取也无法直接读取明文。

典型使用场景包括记录个人隐私信息或处理敏感工作文档。例如，你可以创建一个名为“私人日记”的笔记本，在其中记录日常琐事或情绪波动，无需担心设备丢失导致隐私泄露；或者在撰写涉及商业机密的报告时，利用其加密附件功能安全存储相关凭证。由于插件支持原生编辑体验，你无需在专用加密软件与笔记应用之间切换，即可在熟悉的 Obsidian 界面中完成敏感内容的撰写与管理。

相比其他加密插件，Cipherfold 的特色在于其“追加式”历史保留机制，不仅加密当前内容，还保留修订和删除记录，防止数据被恶意篡改或意外丢失。它强制使用独立库运行，避免了与现有笔记库的冲突，并通过内存拦截元数据来减少明文暴露风险。此外，它支持可选的 CouchDB 同步，允许高级用户通过自托管服务器实现多设备间的加密副本同步，但本地使用完全离线，无需账户或网络连接。

使用前需注意，该插件仅支持桌面端，移动端被有意禁用。必须创建全新的空库，不能安装在现有笔记库中，否则会导致启动失败。密码一旦设置无法找回，请务必牢记至少 12 位的强密码。此外，插件依赖私有 API，Obsidian 升级后可能需要重新验证。它不适合需要频繁跨设备同步且无自托管能力的用户，也不适合希望将加密笔记混入日常笔记库的场景。建议先用合成笔记测试，并定期备份整个存储目录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


