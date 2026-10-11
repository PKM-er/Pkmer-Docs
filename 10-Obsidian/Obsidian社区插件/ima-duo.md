---
uid: 1791709367708000
title: 'Obsidian 插件：IMA Duo Sync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：IMA Duo Sync

> [!Note] 插件名片
> - 插件名称：IMA Duo Sync
> - 插件作者：zhechen
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zeriehan/ima-duo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ima-duo)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zeriehan/ima-duo/master/README.md)



## 概述

**1. 主要功能**
实现 Obsidian 与腾讯 IMA 的双向同步。支持将本地文件/文件夹推送至 IMA 知识库或个人笔记，也能将 IMA 内容（含 Markdown、PDF、图片等原件）拉回本地 Vault。

**2. 适用场景**
适用于需要在个人知识管理工具（Obsidian）与云端协作/存储平台（IMA）间频繁交换数据的用户，特别是需要多知识库分发或批量归档文件的场景。

**3. 核心特色**
*   **双向全类型支持**：不仅同步文本，还能下载 IMA 中的各类二进制文件原件。
*   **分身配置机制**：支持创建多套独立的“推送/拉取分身”，实现同一源文件分发至不同目标，或不同来源归档至不同本地目录，互不干扰。
*   **版本化更新策略**：因 IMA 接口限制，修改后的文件会以版本号（如 `@v2`）另存，避免覆盖冲突。
*   **隐私安全**：无遥测，凭证仅用于官方接口，支持本地文件读取凭证。

**4. 使用建议**
*   **及时拉取**：文件下载链接约 8 小时失效，建议一次性拉取完毕，勿长期保存临时链接。
*   **手动清理**：插件不自动同步删除操作，旧版本文件需在 IMA 客户端手动清理。
*   **注意路径**：推送时默认保留源文件夹层级，可根据需求在分身设置中调整“保留源文件夹本身”开关以控制目录结构。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


