---
uid: 1793625623998000
title: "Obsidian 插件：Vault Connect Bridge"
tags: ["文件管理", "模板与链接处理", "效率工具", "obsidian插件"]
description: "Link between separate vaults on this computer without merging them. Local-only, no network. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Connect Bridge

> [!Note] 插件名片
> - 插件名称：Vault Connect Bridge
> - 插件作者：Ansu Samanta
> - 插件说明：Link between separate vaults on this computer without merging them. Local-only, no network. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/samantaansu2010/vault-connect-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-connect-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/samantaansu2010/vault-connect-bridge/master/README.md)



## 概述

Vault Connect Bridge 旨在解决多库用户无法直接跨库跳转的痛点，允许你在不合并数据的前提下，在不同 Obsidian 库之间建立双向链接。它通过记录目标库路径和笔记位置，实现点击链接即可在对应库中打开指定笔记。整个过程完全本地化，不依赖网络，也不涉及任何数据同步或上传，确保你的知识库保持独立且私密。

想象你维护着“工作”和“个人”两个独立库，在撰写工作周报时，需要引用个人库中的某篇技术笔记。安装该插件后，你只需在设置中添加个人库路径，即可在工作库中插入指向该笔记的链接。点击后，Obsidian 会自动切换并打开目标笔记。此外，你还可以使用专门的搜索窗口，在多个已连接库中快速查找笔记名称，并灵活开关特定库的搜索范围，提升跨库检索效率。

与同类插件相比，其核心特色在于“只读”与“隔离”机制。它严格限制对目标库的权限，仅读取文件名和文件夹结构，绝不修改、创建或删除其他库中的任何内容。链接采用唯一代码标识，即使重命名连接或移动库文件夹（通过“更改位置”功能），原有链接依然有效。这种设计既保证了数据安全性，又避免了因库结构变动导致的链接失效问题。

需要注意的是，该插件目前仅支持桌面端，且处于早期测试阶段，在实时预览或搜索窗口中点击链接可能存在兼容性问题。它无法追踪笔记移动或重命名后的新位置，若链接失效需手动更新。此外，连接信息基于本地路径，换电脑后需重新配置。如果你需要跨设备同步或复杂的块级引用功能，此插件可能无法满足需求，建议谨慎评估后再安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


