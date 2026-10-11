---
uid: 1791709367286000
title: 'Obsidian 插件：GitHub Image Host'
tags: ['第三方工具集成', '图片与PDF', '效率工具', 'obsidian插件']
description: 'Upload pasted or dropped images to a GitHub repository and insert the public link into your note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitHub Image Host

> [!Note] 插件名片
> - 插件名称：GitHub Image Host
> - 插件作者：rocky
> - 插件说明：Upload pasted or dropped images to a GitHub repository and insert the public link into your note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rockychang7/obsidian-github-image-host)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-image-host)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rockychang7/obsidian-github-image-host/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户将粘贴或拖入的图片自动上传至指定的 GitHub 仓库，并在笔记中插入对应的公共链接。它实现了图片存储与笔记内容的分离，确保 Vault 中不保留二进制附件文件。

**2. 适用场景**
适用于希望保持 Obsidian 仓库轻量、避免二进制文件膨胀的用户；适合需要利用 GitHub 作为静态图片托管服务，以便在网页或其他平台直接引用图片链接的场景。

**3. 核心特色**
*   **极简认证**：支持 GitHub 设备流（Device Flow），无需手动创建 Token，只需点击按钮并在网页输入代码即可连接。
*   **权限最小化**：仅请求 `public_repo` 权限，从机制上杜绝了对私有仓库的读写风险。
*   **自动维护**：访问令牌支持后台自动续期（有效期6个月），减少手动维护成本。
*   **灵活配置**：也支持使用细粒度个人访问令牌（Fine-grained PAT），可进一步限制权限至特定仓库。

**4. 使用建议**
目前该插件尚未收录于社区插件市场，需手动下载 `main.js` 等文件至 `.obsidian/plugins` 目录启用。建议优先使用“浏览器流”进行连接，因其操作最简便且安全性由 GitHub 机制保障；若对权限有极致要求，可选用仅限特定仓库的细粒度 Token。注意，图片必须存储在公开仓库中才能生成可直接渲染的 Raw URL。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


