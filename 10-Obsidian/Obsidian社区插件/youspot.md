---
uid: 1791709371212000
title: 'Obsidian 插件：YouSpot'
tags: ['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
description: 'Two-way sync between a vault folder and your YouSpot Brain. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：YouSpot

> [!Note] 插件名片
> - 插件名称：YouSpot
> - 插件作者：YouSpot
> - 插件说明：Two-way sync between a vault folder and your YouSpot Brain. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/onstartups/youspot-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?youspot)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/onstartups/youspot-obsidian/master/README.md)



## 概述

**YouSpot 插件中文总结**

**1. 主要功能**
实现 Obsidian 指定文件夹与 YouSpot Brain 的双向同步。Vault 中的笔记自动映射为 Brain 对象，笔记间的链接转为连接关系，标签同步为 Brain 标签；同时，Brain 中的联系人、公司、项目等实体也会反向写入 Vault 指定目录，并保留连接信息。

**2. 适用场景**
适合需要统一管理个人知识网络（PKM）与 CRM/项目数据的用户。特别适用于希望将 Obsidian 作为前端编辑界面，同时利用 YouSpot 进行实体关系管理和可视化的场景。

**3. 核心特色**
*   **双向实时同步**：支持从笔记到实体、从实体到笔记的双向数据流动。
*   **智能身份保持**：首次同步时将 ID 写入 Frontmatter，确保重命名文件时仅移动对象而非创建重复项。
*   **局部同步**：仅同步用户选定的文件夹，不影响 Vault 其他部分。
*   **安全存储**：Token 采用 Obsidian 本地 SecretStorage 存储，保障账户安全。

**4. 使用建议**
*   建议在 YouSpot 设置中生成 Token 并粘贴至 Obsidian 插件设置中完成连接。
*   初次使用请选择一个较小的文件夹进行同步测试，确认无误后再扩大范围。
*   可通过命令面板执行“Sync now”或点击侧边栏大脑图标手动触发同步。
*   注意每次安装需单独连接，升级插件后请重新连接以保留本地数据一致性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


