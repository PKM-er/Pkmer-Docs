---
uid: 1793625614417000
title: "Obsidian 插件：JUnit Failure Notes"
tags: ["数据处理", "编程与脚本", "效率工具", "obsidian插件"]
description: "Convert a local JUnit XML report into a note with test counts and folded failure logs. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：JUnit Failure Notes

> [!Note] 插件名片
> - 插件名称：JUnit Failure Notes
> - 插件作者：theluckystrike
> - 插件说明：Convert a local JUnit XML report into a note with test counts and folded failure logs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/junit-failure-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?junit-failure-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/junit-failure-notes/master/README.md)



## 概述

JUnit Failure Notes 将本地 JUnit XML 测试报告转化为 Markdown 笔记，直观展示测试总数、通过、失败、错误及跳过等统计信息。它不修改原始 XML 文件，而是生成一份包含折叠式失败日志的新笔记，方便你在 Obsidian 中直接查看具体的测试名称、类名及错误详情，实现测试结果与项目文档的无缝关联。

典型场景包括：在本地运行单元测试后，将生成的 XML 报告复制到 Vault 中，通过命令面板一键生成报告笔记，快速定位失败用例并阅读折叠的日志内容；或者在编写工作日志时，直接链接到该报告笔记，作为测试通过的证据存档。这种“报告即笔记”的方式，让测试数据成为知识库的一部分，便于后续回顾和引用。

相比其他仅展示简单统计的插件，该工具支持嵌套测试套件，并采用“实际用例数”而非“声明总数”进行统计，当两者不一致时会发出警告，避免被过时的摘要属性误导。此外，它具备严格的日志处理能力，能安全处理包含特殊字符的日志，并在日志过长时自动截断。Pro 版本还增加了批量处理文件夹和基于本地基线的失败对比功能，能清晰列出新增、已解决和保留的失败项，适合需要追踪测试回归的用户。

使用前需注意，该插件仅读取 Vault 内的本地文件，不支持从 CI 服务器自动拉取报告，需手动复制 XML 文件。它不支持带命名空间、DOCTYPE 或 ENTITY 声明的 XML 格式，且对文件大小（2 MiB）、用例数量（5,000 个）和日志长度（20,000 字符）有固定限制。如果你需要实时监控 CI 流水线状态，或处理超大规模、非标准格式的测试报告，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


