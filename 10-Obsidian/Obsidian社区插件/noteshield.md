---
uid: 1791709368901000
title: 'Obsidian 插件：NoteShield'
tags: ['安全与隐私', '数据处理', '效率工具', 'obsidian插件']
description: 'Finds sensitive data in your vault — national identifiers, bank accounts, cards, API keys — with checksum validation, fully offline. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NoteShield

> [!Note] 插件名片
> - 插件名称：NoteShield
> - 插件作者：Jessie Kano
> - 插件说明：Finds sensitive data in your vault — national identifiers, bank accounts, cards, API keys — with checksum validation, fully offline. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vypeoux-glitch/noteshield)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?noteshield)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vypeoux-glitch/noteshield/master/README.md)



## 概述

**NoteShield** 是一款完全离线运行的 Obsidian 隐私安全插件，旨在帮助用户在本地库中快速定位并验证敏感数据，防止隐私泄露。

**主要功能**：自动扫描笔记中的身份证号、银行账号、支付卡号、API 密钥及密码等敏感信息。其核心优势在于采用**校验和验证机制**（如 PESEL、IBAN 的 Mod-97、Luhn 算法等），确保只有符合算术规则的“真实”数据才会被报告，极大降低了误报率。

**适用场景**：适用于经常同步、备份至云端、共享或发布为数字花园的用户，特别是那些在笔记中临时粘贴客户 ID、发票账号或开发密钥的场景。

**核心特色**：
1. **高精准度**：通过数学验证区分真实敏感数据与随机数字，避免将订单号误报为身份证号。
2. **绝对隐私**：全程本地处理，无网络请求、无遥测，不上传任何数据。
3. **安全报告**：扫描结果自动脱敏（如 `44•••••••59`），报告文件可安全地作为附件提交或提交至版本控制。

**使用建议**：建议定期执行“Scan vault”命令进行全库体检，或在分享笔记前使用“Scan current note”进行即时检查。发现敏感信息后，应及时清理或替换为占位符，以确保数据同步后的安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


