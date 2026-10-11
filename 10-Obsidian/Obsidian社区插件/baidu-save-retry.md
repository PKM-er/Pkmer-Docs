---
uid: 1791709365519000
title: 'Obsidian 插件：Baidu Netdisk Sync Notice'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Retry transient EBUSY save failures caused by Baidu Netdisk and control sync-lock notices. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Baidu Netdisk Sync Notice

> [!Note] 插件名片
> - 插件名称：Baidu Netdisk Sync Notice
> - 插件作者：杲源
> - 插件说明：Retry transient EBUSY save failures caused by Baidu Netdisk and control sync-lock notices. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gaoyuan239164/baidu-netdisk-sync-notice)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?baidu-save-retry)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gaoyuan239164/baidu-netdisk-sync-notice/master/README.md)



## 概述

**1. 主要功能**
专为将 Obsidian 库存储在百度网盘同步空间的用户设计。该插件自动重试因文件被占用导致的短暂 `EBUSY` 保存失败，并允许用户自定义同步锁定提醒的显示方式。

**2. 适用场景**
主要适用于 Windows 系统下，使用 Obsidian 桌面版（1.13.7+）且笔记库位于百度网盘同步文件夹的用户。

**3. 核心特色**
*   **智能重试**：自动处理短暂的资源锁定错误，减少保存失败。
*   **通知定制**：可独立控制同步锁定通知的开关、透明度（0-100%）及样式（原始技术报错或简洁中文提示），不影响其他系统通知。
*   **多窗口支持**：兼容主窗口、设置窗口及弹出窗口。
*   **隐私安全**：无遥测、无网络请求、不访问账户凭证或笔记内容，完全本地运行。

**4. 使用建议**
*   在插件设置中预览并选择适合的通知样式。
*   **重要警示**：插件仅能缓解短暂锁定，无法保证持续锁定文件的保存成功。若将透明度设为 0% 或关闭通知，真实保存失败将不可见。
*   务必保留独立备份；若遇到持续的文件锁定错误，建议在编辑期间暂停百度网盘同步客户端。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


