---
uid: 1786577083710008
title: 'Obsidian 插件：Webdav PQC Sync'
tags: ['安全与隐私', '备份与恢复', '第三方工具集成', '数据处理', 'obsidian插件']
description: '用后量子加密技术对仓库数据进行加密，还能和WebDAV进行数据同步或恢复。文件内容和文件名都会加密哦。 - 这个插件还没经过Obsidian官方人员的手动审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Webdav PQC Sync

> [!Note] 插件名片
> - 插件名称：Webdav PQC Sync
> - 插件作者：obsync
> - 插件说明：用后量子加密技术对仓库数据进行加密，还能和WebDAV进行数据同步或恢复。文件内容和文件名都会加密哦。 - 这个插件还没经过Obsidian官方人员的手动审核呢。
> - 插件分类：['安全与隐私', '备份与恢复', '第三方工具集成', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/normanify/obsync_webdav_gpg)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsync-webdav-gpg)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/normanify/obsync_webdav_gpg/master/README.md)



## 概述

### Webdav PQC Sync 插件总结
1. **主要功能**：使用后量子加密算法（ML - KEM - 768）对 Obsidian 保险库数据（包括文件内容和文件名）进行加密，然后同步到 WebDAV 服务器或从服务器恢复数据。
2. **适用场景**：适用于需要将笔记数据安全同步到云端，且对数据安全性有较高要求，担心量子计算威胁传统加密算法的用户。
3. **核心特色**：采用后量子加密算法 ML - KEM - 768，具备量子抗性，能抵御未来量子计算机攻击；实现端到端加密，服务器只能看到随机乱码；使用纯 JS 实现，无 WASM 和原生依赖。
4. **使用建议**：v2.0.0 版本有重大更新，不向后兼容。升级后需在设置中生成新密钥对（无需密码），并删除 WebDAV 服务器上旧的加密数据（或使用空目录）。密钥格式从 OpenPGP 装甲变为 base64，设置字段 `privateKey` 重命名为 `secretKey`。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


