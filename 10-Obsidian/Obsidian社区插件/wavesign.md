---
uid: 1793625624344000
title: "Obsidian 插件：WaveSign"
tags: ["图片与PDF", "安全与隐私", "数据处理", "obsidian插件"]
description: "Create and verify tamper-evident authentication packages for images and PDFs. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WaveSign

> [!Note] 插件名片
> - 插件名称：WaveSign
> - 插件作者：roloport
> - 插件说明：Create and verify tamper-evident authentication packages for images and PDFs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '安全与隐私', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/roloport/wavesign-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wavesign)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/roloport/wavesign-obsidian/master/README.md)



## 概述

WaveSign 专为 Obsidian 用户打造，旨在为库中的图片和 PDF 文件提供防篡改的认证保护。它通过在文件内部嵌入不可见的数字信号，并生成强制性的 `sig.json` 验证元数据，来确保文件内容的完整性。需要明确的是，这并非传统意义上的可见水印或电子签名工具，而是一种基于技术底层的真实性验证机制，帮助你在分享或存档重要文档时，提供可被第三方验证的“未修改”证明。

典型的使用场景包括保护具有法律或学术价值的证据图片，以及确保重要 PDF 文档在流转过程中未被恶意替换。例如，当你需要向客户发送一份合同扫描件时，可以使用 WaveSign 对其进行签名，对方随后通过插件验证文件是否保持原样。另一个场景是长期归档个人照片或重要记录，通过定期验证签名，你可以确认这些数字资产在存储多年后依然保持原始状态，未被意外或人为篡改。

相比同类插件，WaveSign 的核心特色在于其“不可见性”与严格的元数据绑定。它不改变文件的视觉外观，而是依赖配套的 `sig.json` 文件和用户每次操作时输入的密码进行联合验证。值得注意的是，签名后的 PDF 会被转换为栅格化图像格式，这意味着原始的文本搜索、表单交互及注释功能将不再保留。此外，该插件采用云端验证机制，所有签名和验证请求均通过 HTTPS 发送至 WaveSign 服务器处理，本地仅存储可撤销的集成令牌，不保留任何服务器端凭证。

在使用前需注意，该插件目前处于早期测试阶段，仅经过 Windows 环境验证，macOS、Linux 及移动端尚未通过测试，建议先在独立的测试库中试用。由于签名后的 PDF 会丢失文本层，不适合需要保留可编辑性或复杂交互功能的文档。此外，验证过程依赖网络，若 `sig.json` 元数据丢失则无法重新生成，且单次上传媒体文件限制在 25 MiB 以内。如果你需要完全离线、本地化的签名方案，或对 PDF 的文本结构有严格要求，WaveSign 可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


