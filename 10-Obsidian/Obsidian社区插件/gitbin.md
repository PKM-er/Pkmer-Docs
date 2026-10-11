---
uid: 1791709367277000
title: 'Obsidian 插件：Gitbin'
tags: ['文件管理', '备份与恢复', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Sync your vaults across devices using Git. Conflicts are resolved automatically using CRDTs, so you can work offline and sync when you reconnect. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Gitbin

> [!Note] 插件名片
> - 插件名称：Gitbin
> - 插件作者：thiago
> - 插件说明：Sync your vaults across devices using Git. Conflicts are resolved automatically using CRDTs, so you can work offline and sync when you reconnect. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thiagomajesk/gitbin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitbin)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thiagomajesk/gitbin/master/README.md)



## 概述

**Gitbin** 是一款基于 Git 的 Obsidian 跨设备同步插件，主要功能是利用 Git 仓库在多台设备间自动同步笔记与附件，支持离线工作并在重连时自动合并。

**适用场景**：适合需要在电脑、平板或手机等多终端间无缝切换，且经常处于离线或弱网环境下的用户。它也适用于希望在一个 Git 仓库中管理多个 Vault 的场景。

**核心特色**：
1. **CRDT 自动合并**：利用 CRDT 技术自动解决并发文本编辑冲突，无需手动处理；附件则按完整版本解析。
2. **灵活同步**：支持自动或手动同步，提供“扫码同步”功能快速配置新设备。
3. **空间优化**：支持按需下载文件，节省本地存储空间。
4. **历史追溯**：可浏览同步历史，对比本地、远程及合并后的文件差异。

**使用建议**：
1. 配置时需输入具有读写权限的 Git 仓库 HTTPS URL 及凭证。
2. **严禁**在 Vault 中使用符号链接（Symlinks）或联接（Junctions），否则可能导致同步异常。
3. 移动端支持目前处于实验阶段，建议在物理设备上测试前谨慎使用。
4. 若启用按需下载，文件在搜索或反向链接前需先下载内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


