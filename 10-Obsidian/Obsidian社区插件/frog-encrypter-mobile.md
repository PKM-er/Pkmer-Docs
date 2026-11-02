---
uid: 1793625613213000
title: "Obsidian 插件：Frog Encrypter Mobile"
tags: ["安全与隐私", "移动端优化", "文件管理", "obsidian插件"]
description: "Encrypt text fragments, notes, and files in your vault on mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frog Encrypter Mobile

> [!Note] 插件名片
> - 插件名称：Frog Encrypter Mobile
> - 插件作者：rainfr0g
> - 插件说明：Encrypt text fragments, notes, and files in your vault on mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '移动端优化', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rainfr0g/frog-encrypter-mobile)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frog-encrypter-mobile)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rainfr0g/frog-encrypter-mobile/master/README.md)



## 概述

Frog Encrypter Mobile 允许直接在 Obsidian 库内对选中文本、整篇笔记及任意文件进行加密。它采用 AES-256-GCM 算法与 PBKDF2 密钥派生，确保数据在存储时处于不可读状态。无论是临时记录敏感片段，还是保护整个文档，该插件都能提供端到端的加密保护，让你无需离开 Obsidian 界面即可管理私密信息。

典型场景包括在手机上快速加密一段会议记录或密码列表，以及将包含个人信息的 Markdown 笔记转为加密文件。例如，你可以选中一段敏感文字直接加密，或者在文件资源管理器中长按笔记选择“加密笔记”，使其变为 `.mdenc` 文件。解密时，只需短按锁形图标输入密码即可恢复内容，支持直接编辑或复制到剪贴板，操作流畅且符合移动端交互习惯。

相比桌面版，该插件专为移动端优化，同时保持与桌面版 Frog Encrypter 的完全兼容，实现跨设备无缝解密。其特色在于支持加密状态下预览 22 种常见格式（如图片、音频、视频），无需解密即可查看。此外，内置的密码管理器可缓存近期密码以加速解密，并支持按文件扩展名配置 DEFLATE 压缩策略，在安全性与存储效率间取得平衡。

需注意，PBKDF2 的高迭代次数导致首次解密存在明显延迟，若内存中缓存超过 10 个密码，解密速度会显著下降。建议保持密码缓存数量精简，或关闭“记住密码”功能以换取速度。该插件不适合对实时性要求极高、需频繁切换大量不同密码文件的场景，也不支持 PDF 和 Canvas 文件的加密预览，这两类文件必须完全解密后才能查看。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


