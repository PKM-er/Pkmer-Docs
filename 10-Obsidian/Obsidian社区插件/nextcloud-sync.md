---
uid: 1786577080904002
title: 'Obsidian 插件：Nextcloud Sync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: '利用基于哈希的变更检测功能，实现Obsidian和Nextcloud之间的双向同步。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nextcloud Sync

> [!Note] 插件名片
> - 插件名称：Nextcloud Sync
> - 插件作者：Daisuke ITO
> - 插件说明：利用基于哈希的变更检测功能，实现Obsidian和Nextcloud之间的双向同步。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/siosig/obsidian-nextcloudsync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nextcloud-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/siosig/obsidian-nextcloudsync/master/README.md)



## 概述

### Nextcloud Sync插件总结
1. **主要功能**：实现Obsidian Vault与Nextcloud之间的双向同步，基于哈希检测变化，也能在一定程度上与标准WebDAV服务器同步。
2. **适用场景**：适用于在多台桌面设备和移动设备上使用Obsidian进行写作的用户，方便不同设备间笔记数据的实时同步。
3. **核心特色**：
    - 数据安全：即使同一笔记在多设备同时编辑，合并逻辑也能让Vault保持干净、一致，避免写作内容丢失。
    - 同步高效：借助Nextcloud的快速差异同步，让同步几乎不占用时间。
    - 兼容性好：专门为Nextcloud设计，利用其API实现安全、快速、流畅的同步，在API不可用时也能降级为普通WebDAV同步。
4. **使用建议**：首次安装需等待Vault索引完成。该插件尚处发展阶段，若使用中遇到问题、有功能需求或使用感受，可通过GitHub Issues反馈问题，通过GitHub Discussions提出功能请求或分享感受。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


