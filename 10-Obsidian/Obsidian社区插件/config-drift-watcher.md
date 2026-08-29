---
uid: 1786577077071001
title: 'Obsidian 插件：Config Drift Watcher'
tags: ['第三方工具集成', '数据处理', '效率工具', '自动化与AI', 'obsidian插件']
description: '能检测服务器的实际配置是否和你笔记里记录的内容不一致。通过 SFTP 只读访问。——Obsidian 官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Config Drift Watcher

> [!Note] 插件名片
> - 插件名称：Config Drift Watcher
> - 插件作者：rixct
> - 插件说明：能检测服务器的实际配置是否和你笔记里记录的内容不一致。通过 SFTP 只读访问。——Obsidian 官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rixct/config-drift-watcher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?config-drift-watcher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rixct/config-drift-watcher/master/README.md)



## 概述

### Config Drift Watcher插件总结
1. **主要功能**：检测服务器实际配置与笔记中记录的配置是否存在差异。通过SFTP以只读模式连接服务器，获取远程文件内容，与笔记中标记的代码块内容逐行对比。
2. **适用场景**：适用于记录服务器配置信息的场景，避免因服务器重启、手动修复或他人脚本修改等导致文档与实际配置不符却未被察觉的问题。
3. **核心特色**：只读模式，仅读取远程服务器文件内容，不执行命令，不向服务器写入数据；对比结果直观，能显示笔记和实际服务器中独有的行。
4. **使用建议**：在笔记中使用`drift`代码块，首行写`target: alias:/absolute/remote/path`指定目标服务器和文件路径，后续为文档化内容；代码块开头` ```drift `必须顶格；可在目标行后用`ignore:`指令覆盖全局忽略设置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


