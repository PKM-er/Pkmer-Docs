---
uid: 1793625613353000
title: "Obsidian 插件：GitHub Enterprise Sync"
tags: ["第三方工具集成", "备份与恢复", "效率工具", "obsidian插件"]
description: "Sync notes with GitHub or GitHub Enterprise Server through the GitHub REST API, with no Git binary required. Signs in with OAuth device flow, so it works with enterprise SSO and on mobile, including iOS. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitHub Enterprise Sync

> [!Note] 插件名片
> - 插件名称：GitHub Enterprise Sync
> - 插件作者：Wandermyz
> - 插件说明：Sync notes with GitHub or GitHub Enterprise Server through the GitHub REST API, with no Git binary required. Signs in with OAuth device flow, so it works with enterprise SSO and on mobile, including iOS. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wandermyz/obsidian-github-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-enterprise-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wandermyz/obsidian-github-sync/master/README.md)



## 概述

GitHub Enterprise Sync 通过 GitHub REST API 实现笔记与 GitHub 或 GitHub Enterprise Server 仓库的双向同步。它无需依赖本地 Git 二进制文件或原生代码，仅通过 HTTPS 连接即可工作，因此完美支持包括 iOS 在内的移动端设备。插件采用 OAuth 设备流进行身份验证，能够无缝复用浏览器中已有的企业 SSO 会话，解决了传统 Git 插件在移动设备上因缺少 Git 环境或无法处理重定向而失效的问题。

典型场景适用于那些笔记必须保留在特定 GitHub 实例内、无法使用 Obsidian 官方同步服务的用户。例如，在办公室电脑上编辑笔记后，可以在手机上通过 Safari 完成登录并同步最新内容；或者在多台设备间协作时，插件会自动拉取远程变更并推送本地修改，确保所有设备上的笔记版本一致，且无需手动执行复杂的 Git 命令。

相比其他依赖 `isomorphic-git` 或系统 Git 的插件，该插件的核心优势在于其纯 API 实现带来的跨平台兼容性，特别是在 iOS 上的稳定表现。此外，它具备完善的完整性验证机制，每次写入后都会校验文件哈希，确保数据一致性；冲突处理采用“保留本地副本”策略，生成带时间戳的冲突文件供用户手动合并，而非直接覆盖，极大降低了数据丢失风险。

需要注意的是，该插件目前处于早期阶段，仅支持同步指定文件夹内的 Markdown 文件，不支持同步 `.obsidian` 配置目录或 `.trash` 等系统文件夹。如果你需要实时协作编辑、复杂的分支管理功能，或者依赖 Git 子模块的高级特性，此插件可能无法满足需求。此外，由于依赖网络 API，在离线状态下无法进行同步操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


