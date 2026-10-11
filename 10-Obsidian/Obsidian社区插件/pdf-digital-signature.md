---
uid: 1791709369161000
title: 'Obsidian 插件：PDF Digital Signature'
tags: ['图片与PDF', '安全与隐私', '效率工具', 'obsidian插件']
description: 'Zero-dependency cryptographic digital signing (PAdES/PKCS#7) and custom running footer stamping for exported PDFs in Obsidian. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Digital Signature

> [!Note] 插件名片
> - 插件名称：PDF Digital Signature
> - 插件作者：Benjamín Alcalde G.
> - 插件说明：Zero-dependency cryptographic digital signing (PAdES/PKCS#7) and custom running footer stamping for exported PDFs in Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/benhaman9/obsidian-pdf-digital-signature)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-digital-signature)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/benhaman9/obsidian-pdf-digital-signature/master/README.md)



## 概述

**1. 主要功能**
该插件为 Obsidian 导出的 PDF 提供零依赖的加密数字签名（PAdES/PKCS#7）及自定义页脚盖章功能。它利用 X.509 证书对文档进行签名，确保内容未被篡改，并可在每页底部添加签名者姓名及页码。

**2. 适用场景**
适用于需要向外部发送正式文档、合同或报告的场景，特别是当用户希望在不安装额外软件（如 Python、OpenSSL）的情况下，直接通过 Obsidian 生成具备法律效力或可信度标记的 PDF 文件时。

**3. 核心特色**
*   **零依赖便携**：纯 TypeScript/JavaScript 实现，内置所有库，无需终端命令或外部工具。
*   **独立控制**：可单独配置签名、签名者姓名和页码，且记忆默认设置。
*   **多语言支持**：界面支持英、西、葡、意、法五种语言。
*   **安全性**：采用真正的加密签名，可检测内容变更（注意：自签名证书需读者手动信任）。

**4. 使用建议**
建议用户准备有效的 `.pfx` 或 `.p12` 格式证书。需注意，数字签名仅用于验证完整性，不能防止 PDF 被编辑；若使用自签名证书，接收方需在阅读器中手动添加信任才能看到有效签名状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


