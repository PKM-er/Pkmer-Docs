---
uid: 1793625617103000
title: "Obsidian 插件：MySecret"
tags: ["安全与隐私", "文件管理", "数据处理", "obsidian插件"]
description: "Encrypt your Obsidian notes and files with AES-256-GCM and Argon2id. Absolute privacy: no one but you will be able to see the content of your notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MySecret

> [!Note] 插件名片
> - 插件名称：MySecret
> - 插件作者：abismalmx
> - 插件说明：Encrypt your Obsidian notes and files with AES-256-GCM and Argon2id. Absolute privacy: no one but you will be able to see the content of your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/abismalmx/MySecret)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mysecret)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/abismalmx/MySecret/master/README.md)



## 概述

MySecret 为 Obsidian 提供全库自动加密功能，采用 AES-256-GCM 算法与 Argon2id 密钥派生，在文件写入磁盘的瞬间完成加密。它像一面单向镜，让你在 Obsidian 内部正常查看笔记、使用图谱和搜索，而硬盘上的数据则呈现为不可读的数学噪声。这种零知识架构确保只有你能访问内容，连插件开发者也无法读取你的笔记，彻底解决了明文文件被窃取或云端泄露的风险。

典型场景包括日常笔记同步与设备丢失保护。例如，当你使用 Obsidian Sync 同步笔记时，MySecret 能确保云端存储的是密文，避免传统加密插件导致的同步冲突或无限重下载循环。另一个场景是移动办公，在 Android 或 Windows 设备上，你可以通过指纹或面部识别快速解锁库，无需手动挂载虚拟磁盘，既保证了安全性，又维持了流畅的使用体验。

相比 Meld Encrypt 等逐条加密插件，MySecret 的最大特色是“透明性”。它不会破坏 Obsidian 的核心功能，全文搜索、反向链接和 Canvas 画布在解锁状态下完全可用，而传统插件往往将笔记变成无法搜索的乱码块。此外，它支持二进制附件（如图片、PDF）的加密，并提供 24 词 BIP-39 恢复短语，解决了忘记密码导致数据永久丢失的痛点，比外部工具如 Cryptomator 更贴合 Obsidian 生态。

使用前需注意，该插件尚未通过 Obsidian 官方人工审核，且采用 PolyForm Noncommercial 许可证，禁止商业使用。它不适合需要多人实时协作编辑同一笔记的场景，因为加密机制主要面向个人隐私保护。如果你依赖某些特定插件对文件系统的直接底层操作，可能会遇到兼容性问题，建议先在非核心库中测试。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


