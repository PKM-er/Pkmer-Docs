---
uid: 1793625614686000
title: "Obsidian 插件：Lareia Read Listen and Study"
tags: ["第三方工具集成", "学习与教育", "多媒体", "obsidian插件"]
description: "Sends a note from your vault to Lareia, with its images, to read, listen to and study there. Resending updates the same text. Requires a Lareia account. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lareia Read Listen and Study

> [!Note] 插件名片
> - 插件名称：Lareia Read Listen and Study
> - 插件作者：Yuri Braz
> - 插件说明：Sends a note from your vault to Lareia, with its images, to read, listen to and study there. Resending updates the same text. Requires a Lareia account. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '学习与教育', '多媒体', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ybraz/lareia-read-listen-study)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lareia-read-listen-study)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ybraz/lareia-read-listen-study/master/README.md)



## 概述

Lareia Read Listen and Study 将 Obsidian 笔记连同嵌入图片同步至 Lareia 应用，供用户在移动端或桌面端进行阅读、收听及学习。它自动提取笔记的标题、作者、摘要及日期等元数据，并支持通过命令面板或文件菜单一键发送。首次发送时，插件会询问主题、阅读列表及语言偏好，并在本地记住各文件夹的最后选择，简化后续操作。

典型场景包括将长篇笔记转化为有声内容以便通勤时收听，或整理学习资料后发送至 Lareia 进行碎片化复习。例如，你可以将一篇包含图表的技术文档发送给 Lareia，在手机上边听边看；或者在修改笔记后重新发送，插件会智能更新 Lareia 中的同一文本，保留未变更段落的阅读进度和高亮，避免重复创建条目。

相比其他同步工具，该插件的核心特色在于“更新而非新建”机制，确保学习进度的连续性。它通过在前置元数据中写入唯一标识行来追踪笔记身份，即使重命名或移动文件，重新发送时仍会更新原有条目。此外，若误删 Lareia 中的文本，只要笔记仍在回收站（30天内），重新发送即可恢复。插件不扫描整个库，仅处理当前笔记，且明确告知哪些内容（如超大图片、PDF、音频）无法传输，提供清晰的反馈。

使用前需注册 Lareia 账号并完成设备配对，插件依赖网络连接与 Lareia API 通信。它不适合需要完全离线使用、或笔记包含大量视频、音频及超过 32 MiB 总大小的场景。插件会在笔记中写入一行标识代码，若删除该行，后续发送将创建新条目而非更新旧条目。此外，它不支持 HEIC 格式图片及超过 10 MiB 的单张图片，这些内容将被跳过并在通知中说明。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


