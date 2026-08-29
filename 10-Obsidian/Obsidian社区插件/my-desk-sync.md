---
uid: 1786577080809000
title: 'Obsidian 插件：My Desk Sync'
tags: ['第三方工具集成', '效率工具', '数据处理', '备份与恢复', 'obsidian插件']
description: '在“我的桌面”（My Desk）和你的仓库之间同步知识笔记 —— 无需 GitHub 仓库或访问令牌。需要拥有订阅了知识库服务的“我的桌面”账户；插件本身是免费的。 - Obsidian 工作人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：My Desk Sync

> [!Note] 插件名片
> - 插件名称：My Desk Sync
> - 插件作者：Thinkingfanny
> - 插件说明：在“我的桌面”（My Desk）和你的仓库之间同步知识笔记 —— 无需 GitHub 仓库或访问令牌。需要拥有订阅了知识库服务的“我的桌面”账户；插件本身是免费的。 - Obsidian 工作人员尚未对该插件进行人工审核。
> - 插件分类：['第三方工具集成', '效率工具', '数据处理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/betheone314/my-desk-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?my-desk-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/betheone314/my-desk-sync/master/README.md)



## 概述

### My Desk Sync插件总结
1. **主要功能**：在My Desk和Obsidian库之间直接同步知识笔记，无需GitHub仓库和访问令牌。笔记以Markdown格式在两者间双向流动。
2. **适用场景**：适用于拥有My Desk图书馆订阅账户，希望在My Desk和Obsidian间便捷同步笔记的用户。
3. **核心特色**：
    - 直接同步，无需GitHub相关配置。
    - 文件格式与旧的GitHub同步方式一致，无需迁移。
    - 采用三方合并算法处理同步，能区分新增、删除和编辑情况，避免编辑被静默覆盖。
    - 冲突时按编辑时间解决，本地文件在一秒内优先。
    - 保留用户添加的前置元数据。
4. **使用建议**：
    - 通过社区商店或BRAT安装插件。
    - 在My Desk中生成插件令牌并粘贴到插件设置里。
    - 可通过命令面板手动同步或设置间隔自动同步（最小间隔5分钟）。需注意，生成令牌会暂停旧的GitHub同步，本地`obsidian - git`备份不受影响。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


