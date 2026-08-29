---
uid: 1786577077686005
title: 'Obsidian 插件：Ferusnet Security Audit'
tags: ['安全与隐私', '数据处理', '效率工具', 'obsidian插件']
description: '对你已安装的社区插件进行静态分析安全审计。标记出危险的应用程序编程接口（API），对照 GitHub 验证发布哈希值，并对插件风险进行评分。完全本地化——没有数据会离开你的仓库。 - 此插件尚未经过 Obsidian 工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ferusnet Security Audit

> [!Note] 插件名片
> - 插件名称：Ferusnet Security Audit
> - 插件作者：Ferusnet
> - 插件说明：对你已安装的社区插件进行静态分析安全审计。标记出危险的应用程序编程接口（API），对照 GitHub 验证发布哈希值，并对插件风险进行评分。完全本地化——没有数据会离开你的仓库。 - 此插件尚未经过 Obsidian 工作人员的人工审核。
> - 插件分类：['安全与隐私', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ferusnet/obsidian-ferus-plugin-auditor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ferus-plugin-auditor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ferusnet/obsidian-ferus-plugin-auditor/master/README.md)



## 概述

### Ferusnet Security Audit插件总结
1. **主要功能**：对已安装的Obsidian社区插件进行静态安全审计。扫描插件`main.js`文件中的危险API模式，验证其与GitHub发布版本的哈希值是否一致，并为每个插件给出0 - 100的风险评分。
2. **适用场景**：适用于关注Obsidian社区插件安全性，想要了解已安装插件潜在风险的用户。
3. **核心特色**：完全本地运行，仅向`api.github.com`进行必要调用获取发布元数据和资产哈希，无数据外传，无遥测、跟踪，无付费版本；规则为透明的正则模式。
4. **使用建议**：该插件仅提供审计报告，不会自动禁用插件，当发现问题时会引导你查看社区插件设置，需自行决定是否处理。它不是沙箱工具，不能隔离插件，仅作为审计参考。同时，它会检测新安装插件并提示扫描。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


