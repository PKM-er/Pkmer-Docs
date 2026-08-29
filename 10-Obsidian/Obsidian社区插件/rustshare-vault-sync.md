---
uid: 1786577082370001
title: 'Obsidian 插件：RustShare Vault Sync'
tags: ['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
description: '把本地仓库同步到RustShare。RustShare与Dynalist公司没有关联，也未得到其认可或赞助。——此插件尚未经过Obsidian官方人员人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：RustShare Vault Sync

> [!Note] 插件名片
> - 插件名称：RustShare Vault Sync
> - 插件作者：RustShare
> - 插件说明：把本地仓库同步到RustShare。RustShare与Dynalist公司没有关联，也未得到其认可或赞助。——此插件尚未经过Obsidian官方人员人工审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zoorpha/rustshare-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rustshare-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zoorpha/rustshare-obsidian-plugin/master/README.md)



## 概述

### RustShare Vault Sync插件总结
1. **主要功能**：将本地Obsidian库同步至RustShare，支持手动同步（全库扫描并检测SHA - 256变化）、增量同步（文件创建、修改、删除、重命名时自动上传/下载），具备冲突解决、离线队列、墓碑支持、内容寻址存储等功能，还有实时同步状态显示。
2. **适用场景**：适用于使用Obsidian桌面版（v0.15.0及以上），且有RustShare实例并开启Vault Sync API的用户，需要在不同设备间同步本地Markdown库的场景。
3. **核心特色**：不静默覆盖文件，创建冲突副本；离线时可缓存更改，恢复连接后同步；能正确跟踪已删除文件；通过SHA - 256去重，保证内容字节级一致。
4. **使用建议**：该插件未在Obsidian社区插件市场上架，需手动安装，按步骤构建、创建目录、复制文件并在Obsidian中启用。配置时在设置中填入RustShare URL、设备名和Vault ID。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


