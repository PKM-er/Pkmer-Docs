---
uid: 1791709365383000
title: 'Obsidian 插件：Assets Offloader'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Upload vault attachments to S3-compatible storage and swap links; localize them back. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Assets Offloader

> [!Note] 插件名片
> - 插件名称：Assets Offloader
> - 插件作者：marchell
> - 插件说明：Upload vault attachments to S3-compatible storage and swap links; localize them back. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/marchellll/obsidian-assets-offloader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?assets-offloader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/marchellll/obsidian-assets-offloader/master/README.md)



## 概述

**Assets Offloader** 是一款将 Obsidian 笔记附件（图片、视频、PDF 等）上传至 S3 兼容存储（如 Cloudflare R2）并替换为公网链接的插件。

**适用场景**：适合希望减轻本地 Vault 体积、实现云端备份或跨设备同步大型媒体文件的用户，尤其适用于使用 Cloudflare R2 等低成本对象存储的场景。

**核心特色**：
1. **链接转换**：自动将本地嵌入链接重写为公网 URL，保持笔记轻量。
2. **本地化回滚**：支持将云端文件重新下载回本地，恢复离线访问。
3. **安全配置**：API 密钥存储在 Obsidian Secret Storage 中，不写入明文配置。
4. **灵活上传**：支持单篇笔记、当前文件夹及递归子文件夹上传，可选上传后自动删除本地原文件。

**使用建议**：
1. 需 Obsidian 1.13.0+ 版本。
2. 预先配置好 S3 存储桶及公开访问域名，确保 CORS 设置正确。
3. 使用“从 URL 猜测”功能快速填充 Endpoint 等参数。
4. 务必通过 Secret Storage 管理密钥，避免明文泄露。
5. 递归上传前请确认文件夹结构，防止误操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


