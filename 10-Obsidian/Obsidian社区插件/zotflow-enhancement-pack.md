---
uid: 1791709371275000
title: 'Obsidian 插件：ZotFlow Enhancement Pack'
tags: ['zotero', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Provides optional offline resources for ZotFlow reading features. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ZotFlow Enhancement Pack

> [!Note] 插件名片
> - 插件名称：ZotFlow Enhancement Pack
> - 插件作者：Xianpi Duan
> - 插件说明：Provides optional offline resources for ZotFlow reading features. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['zotero', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/duanxianpi/zotflow-enhancement-pack)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zotflow-enhancement-pack)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/duanxianpi/zotflow-enhancement-pack/master/README.md)



## 概述

**1. 主要功能**
ZotFlow Enhancement Pack 是 ZotFlow 插件的可选离线资源伴侣。它主要提供结构化文档文本（SDT）生成等阅读功能所需的大型离线资源包。该插件本身不包含资源 API 或索引，仅作为资源载体，允许用户保持禁用状态而不影响核心功能。

**2. 适用场景**
适用于使用 ZotFlow 进行文献阅读且需要离线处理文档结构的用户。特别是在网络不稳定或需要严格版本控制、确保文档解析一致性的学术或专业工作流中，该插件能提供稳定、可验证的离线支持。

**3. 核心特色**
*   **离线资源封装**：通过构建过程将固定的 Document Worker 归档下载、验证并嵌入到 `main.js` 中，确保资源与特定版本严格匹配。
*   **版本锁定机制**：基于 `document-worker.lock.json` 进行精确版本控制，防止资源漂移。
*   **自动化发布流程**：支持 CI/CD 自动同步 ZotFlow 主库的资源更新，自动验证构建并创建草稿发布，确保稳定性。
*   **自描述格式**：资源目录包含 JSON 描述及固定页脚，便于程序识别和校验。

**4. 使用建议**
*   若无需离线 SDT 功能，可保持插件禁用状态，不影响 ZotFlow 其他功能。
*   开发者应使用 `npm run build` 获取最新验证过的资源包，避免手动修改资源文件。
*   关注 `dev` 分支以预览 Beta 版本，生产环境请使用 `master` 分支的稳定发布版。
*   确保 ZotFlow 主插件与本资源包的版本兼容，特别是在 ZotFlow 更新 Document Worker 后，需同步更新本插件以获取最新资源。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


