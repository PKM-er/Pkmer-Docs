---
uid: 1793625615983000
title: "Obsidian 插件：Mathfolio"
tags: ["学习与教育", "编辑工具", "学术与科研", "obsidian插件"]
description: "Edit and calculate mathematical worksheets with the Mathfolio engine. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mathfolio

> [!Note] 插件名片
> - 插件名称：Mathfolio
> - 插件作者：Harry Lee
> - 插件说明：Edit and calculate mathematical worksheets with the Mathfolio engine. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '编辑工具', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/glaysia/obsidian-mathfolio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mathfolio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/glaysia/obsidian-mathfolio/master/README.md)



## 概述

Mathfolio 将专业的数学工作表编辑与计算引擎引入 Obsidian，允许用户直接在笔记库中创建、编辑 `.mathfolio` 文件。它基于 Rust 构建的本地计算 Worker，能够实时处理公式、单位换算及矩阵运算，无需依赖外部服务器或复杂的开发环境。插件支持自动或手动保存，并能将工作表导出为矢量 PDF 或 MCDX 格式，同时兼容旧版 `.mathcraft` 和 `.mcdx` 文档，为数学内容的数字化管理提供了完整的闭环体验。

典型使用场景包括物理或工程类笔记的整理。例如，你可以直接在笔记中嵌入一个包含复杂力学公式的工作表，点击空白处输入变量，执行计算后结果即时更新，无需切换到外部计算器。另一个场景是制作教学材料，你可以设计好包含矩阵运算的练习页，计算验证无误后，直接导出为高清 PDF 分享给学生，确保公式渲染的精确性与美观度。

相比其他仅支持静态公式渲染的插件，Mathfolio 的核心优势在于其“可计算”特性。它不仅仅展示公式，还能在本地执行逻辑运算，且所有数据均保留在本地，不上传任何内容或遥测数据，隐私安全性高。此外，插件具备完善的数据保护机制，当检测到外部文件冲突或保存失败时，会自动在 Vault 中生成恢复副本，防止未保存的工作丢失，这一能力在频繁编辑复杂数学文档时尤为实用。

需要注意的是，该插件目前仅支持桌面端，移动端用户无法使用。虽然它提供了强大的计算功能，但并非通用的科学计算软件，不适合需要大规模数值模拟或图形化编程的复杂工程需求。此外，由于涉及本地文件写入，建议用户定期备份 Vault，特别是在处理重要数学推导时，以防极端情况下的数据异常。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


