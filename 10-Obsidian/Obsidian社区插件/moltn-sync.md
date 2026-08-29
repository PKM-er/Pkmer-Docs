---
uid: 1786577080715005
title: 'Obsidian 插件：Moltn Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: '把你Moltn里已完成的笔记导入到这个仓库，还能（可选）把选好的笔记作为上下文信息共享出去。文件始终归你所有。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Moltn Sync

> [!Note] 插件名片
> - 插件名称：Moltn Sync
> - 插件作者：zeniadev
> - 插件说明：把你Moltn里已完成的笔记导入到这个仓库，还能（可选）把选好的笔记作为上下文信息共享出去。文件始终归你所有。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/affluency-dev/obsidian-moltn-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?moltn-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/affluency-dev/obsidian-moltn-sync/master/README.md)



## 概述

### Moltn Sync插件总结
1. **主要功能**：从Moltn安装处拉取已完成笔记到Obsidian库中，还可选择将指定笔记作为上下文分享回Moltn，且文件所有权归用户。
2. **适用场景**：适用于需要将Moltn中的笔记同步到Obsidian，以及希望为Moltn提供上下文信息辅助其构建或回答的场景，支持桌面和移动设备。
3. **核心特色**：使用Obsidian跨平台API，文件安全有保障，Moltn仅在插件写入笔记前暂存，之后即删除；笔记写入时不会覆盖，重名会添加数字后缀。
4. **使用建议**：
    - 构建：在obsidian - plugin目录下执行`npm install`和`npm run build`。
    - 安装：将`manifest.json`、`main.js`和`styles.css`复制到库的`.obsidian/plugins/moltn - sync/`目录，在Obsidian中启用插件。
    - 配置：在Moltn复制库令牌并开启同步，在插件设置中粘贴Moltn安装URL、库令牌，选择目标文件夹，可选择上下文文件夹，点击“Synka nu”完成同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


