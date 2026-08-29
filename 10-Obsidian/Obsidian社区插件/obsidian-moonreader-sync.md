---
uid: 1786577080730006
title: 'Obsidian 插件：MoonReader Note Sync'
tags: ['第三方工具集成', '数据处理', '文件管理', '学习与教育', '效率工具', 'obsidian插件']
description: '通过WebDAV同步月亮阅读（MoonReader）的读书笔记，并将 .an 文件直接解析到你的仓库中。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MoonReader Note Sync

> [!Note] 插件名片
> - 插件名称：MoonReader Note Sync
> - 插件作者：seeyou2night
> - 插件说明：通过WebDAV同步月亮阅读（MoonReader）的读书笔记，并将 .an 文件直接解析到你的仓库中。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '数据处理', '文件管理', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/seeyou2n1ght/obsidian-MoonReaderNoteSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-moonreader-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/seeyou2n1ght/obsidian-MoonReaderNoteSync/master/README.md)



## 概述

### MoonReader Note Sync插件总结
1. **主要功能**：通过WebDAV同步并导入Moon+ Reader的高亮和笔记（`.an`文件）到Obsidian本地库。
2. **适用场景**：适用于使用Moon+ Reader阅读并做笔记，希望将笔记整合到Obsidian进行管理和编辑的场景。
3. **核心特色**：
    - 增量同步：对比WebDAV元数据，仅下载和解析修改过的文件。
    - 原生安全存储：使用Obsidian的`SecretStorage` API，WebDAV密码存于系统级钥匙串。
    - 离线缓存：网络或服务器不可用时自动使用本地缓存数据。
    - 插入模式多样：可选择在光标处插入、追加到特定文件、覆盖特定文件。
    - 模板构建器：通过拖放式UI编辑器自定义高亮和注释格式。
4. **使用建议**：先从GitHub Releases下载相关文件，放入Vault的`.obsidian/plugins/obsidian - moonreader - sync`文件夹。在Obsidian设置中启用插件。使用时点击左侧丝带的书同步图标或使用“Sync Notes (Smart)”命令，选择书籍后按`Enter`触发默认插入动作，按`Shift + Enter`可在插入前打开模板编辑器。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


