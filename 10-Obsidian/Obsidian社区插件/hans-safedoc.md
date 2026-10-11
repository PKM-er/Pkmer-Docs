---
uid: 1791709367438000
title: 'Obsidian 插件：Hans SafeDoc'
tags: ['安全与隐私', '数据处理', '文件管理', 'obsidian插件']
description: 'Read-only local pseudonymization for MD, TXT, CSV, DOCX, and XLSX with manual review. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hans SafeDoc

> [!Note] 插件名片
> - 插件名称：Hans SafeDoc
> - 插件作者：Hans Lin 林思翰
> - 插件说明：Read-only local pseudonymization for MD, TXT, CSV, DOCX, and XLSX with manual review. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hansai-art/hans-safedoc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hans-safedoc)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hansai-art/hans-safedoc/master/README.md)



## 概述

**1. 主要功能**
Hans SafeDoc 是一款 Obsidian 电脑版插件，提供本地、只读的文件去标识化服务。它支持 MD、TXT、CSV、DOCX 及 XLSX 格式，通过检测并替换敏感信息（如姓名、电话、邮箱）生成安全副本，同时保留原始文件不变。

**2. 适用场景**
适用于需要在本地处理含个人敏感信息（PII）文档的场景，如法律、医疗或研究数据整理。特别适合希望在不上传云端的前提下，对笔记或办公文档进行匿名化处理的用户。

**3. 核心特色**
*   **本地安全**：数据全程本地处理，不上传云端，加密对照表独立存储。
*   **人工审核**：强制用户逐项确认疑似敏感内容，支持自定义词典，确保去标识化准确性。
*   **严格校验**：对文件编码、结构及潜在风险（如宏、外部链接）进行严格阻断，防止数据泄露或格式损坏。
*   **可还原性**：通过作业密码机制，允许在需要时还原敏感信息。

**4. 使用建议**
*   **备份优先**：处理正式数据前务必保留原始文件备份。
*   **人工复核**：插件不能保证100%识别所有敏感信息，务必逐项人工确认。
*   **熟悉流程**：建议先使用合成文件测试，熟悉审核与还原流程。
*   **注意限制**：仅支持电脑版，不支持 PDF 直接解析（需先转为 MD）及旧版 Office 格式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


