---
uid: 1791709368578000
title: 'Obsidian 插件：Meld Syncthing Conflicts'
tags: ['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Open all Syncthing conflicts in the vault as Meld tabs, then choose which conflict files to delete. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Meld Syncthing Conflicts

> [!Note] 插件名片
> - 插件名称：Meld Syncthing Conflicts
> - 插件作者：Oskar Kraak
> - 插件说明：Open all Syncthing conflicts in the vault as Meld tabs, then choose which conflict files to delete. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/oskarkraak/obsidian-meld-syncthing-conflicts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?syncthing-meld)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/oskarkraak/obsidian-meld-syncthing-conflicts/master/README.md)



## 概述

**1. 主要功能**
该插件用于解决 Obsidian 库中由 Syncthing 同步产生的文件冲突。它自动扫描所有 `*.sync-conflict-*` 文件，调用外部工具 Meld 将每个冲突文件与其原始文件并排展示在独立标签页中，方便用户进行合并。关闭 Meld 后，插件提供检查清单，让用户选择删除已处理的冲突文件。

**2. 适用场景**
适用于使用 Syncthing 进行多设备同步的 Obsidian 桌面用户。当同步过程中因多端编辑导致文件冲突时，可快速批量处理这些冲突，避免手动查找和对比文件的繁琐过程。

**3. 核心特色**
*   **集成 Meld**：利用 Meld 强大的差异对比功能，直观展示冲突差异。
*   **批量处理**：一次性打开所有冲突文件，按时间戳排序，提高效率。
*   **安全删除机制**：通过检查清单确认删除，支持“保留所有”或“删除选中”，防止误删未处理的文件。
*   **智能预判**：自动勾选与原始文件一致或已被编辑的冲突文件，减少手动操作。

**4. 使用建议**
*   **仅限桌面端**：因需启动外部程序，不支持移动端。
*   **前置准备**：必须单独安装 Meld，并在插件设置中配置正确的 Meld 可执行文件路径（特别是 Windows/macOS 非 PATH 环境）。
*   **操作注意**：合并后记得保存对原始文件的修改；若中途关闭 Meld，未处理的冲突文件将保留，下次运行命令时可继续处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


