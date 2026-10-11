---
uid: 1791709369840000
title: 'Obsidian 插件：SecretSpans'
tags: ['安全与隐私', '编辑工具', '文字处理', 'obsidian插件']
description: 'Encrypt inline secrets in Markdown notes; copy mixed selections as plaintext. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SecretSpans

> [!Note] 插件名片
> - 插件名称：SecretSpans
> - 插件作者：blueloop46
> - 插件说明：Encrypt inline secrets in Markdown notes; copy mixed selections as plaintext. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/blueloop46/secret-spans)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?secret-spans)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/blueloop46/secret-spans/master/README.md)



## 概述

**SecretSpans** 是一款 Obsidian 插件，用于在 Markdown 笔记中加密内联敏感信息。

**主要功能**：支持对笔记中的特定片段进行局部加密，磁盘文件仅存储密文。解锁后，选中包含明文与密文的混合区域，一次复制即可获得完整明文，确保剪贴板中无密文残留。

**适用场景**：适用于需要记录 API 密钥、密码等敏感数据，同时希望保持笔记其余部分为普通 Markdown 格式的用户。

**核心特色**：
1. **局部加密**：仅加密选定值，其余内容保持明文。
2. **混合复制**：支持跨明文与密文区域的一次性复制解密。
3. **内存安全**：解锁后明文仅存于内存，不落盘，关闭或锁定即清除。
4. **双视图支持**：兼容实时预览与阅读模式，并支持原地编辑密文。

**使用建议**：
1. **风险自负**：密码无备份机制，丢失即永久无法解密；未经安全审计，勿用于极高价值机密。
2. **安全插入**：务必使用“在光标处插入秘密”功能，通过模态框输入，避免明文经过编辑器缓冲区。
3. **定期备份**：鉴于软件尚处早期，建议对含密文笔记进行额外备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


