---
uid: 2023102611090305
title: Obsidian 插件：【Readme】Zotero Sync
tags: ['obsidian插件', 'readme']
description: 将Zotero API客户端同步您的Zotero图书馆到您的保险库中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Zotero Sync

> [!Note] 插件名片
> - 插件名称：Zotero Sync
> - 插件作者：Frithjof Gressmann
> - 插件说明：将Zotero API客户端同步您的Zotero图书馆到您的保险库中
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/frthjf/obsidian-zotero-sync-client)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zotero-sync-client)

## 概述

将Zotero API客户端同步您的Zotero图书馆到您的保险库中



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/frthjf/obsidian-zotero-sync-client/main/README.md)
> 

---

## Readme(翻译）

下面是 [[zotero-sync-client]] 插件的自述翻译


# Obsidian Zotero同步客户端

该插件利用Zotero Sync API将您的Zotero库作为Markdown文件在Obsidian中进行镜像。

由于数据直接从Zotero的Web API获取，因此不需要安装Zotero - 您只需要[Zotero API密钥](https://www.zotero.org/settings/keys/new)和在同步时的互联网连接。

请注意，根据设计，同步是*只读*的，不会修改您的Zotero库。对Markdown文件的任何更改都将丢失并且*不会*同步回Zotero。这样做的原因是通过笔记链接和搜索实现无缝的Zotero集成，同时将所有文献数据保留在Zotero中。
### 替代方案

如果你对在Obsidian中链接和搜索你的Zotero图书馆的只读版本感兴趣，那么这个插件就适合你。如果你对以下内容感兴趣，请查看以下替代方案：

- 在Zotero中直接进行笔记（与Obsidian进行双向同步）：[Zotero Better Notes](https://github.com/windingwind/zotero-better-notes)
- 按需将引用导入Obsidian：[Obsidian Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration) 或 [Obsidian Citation Plugin](https://github.com/hans/obsidian-citation-plugin)
- 通过ZotServer API与Zotero集成：[Zotero Bridge](https://github.com/vanakat/zotero-bridge)
- [建议其他替代方案](https://github.com/frthjf/obsidian-zotero-sync-client/issues) ...
使用方法

安装插件并在设置中启用。生成一个[Zotero API密钥](https://www.zotero.org/settings/keys/new)，并在插件设置中填入。

插件将增量同步和缓存所有Zotero数据，以最小化API使用。

在初始同步之后（可能需要一些时间），所有的Zotero笔记应该会出现在配置的保险库文件夹中。
移动设备

虽然此插件仅适用于桌面，但生成的Zotero Markdown文件将与其他文件一样同步到连接的移动客户端。
### 自定义模板

默认情况下，Markdown文件是使用标准模板生成的，可以在设置中预览和修改，从而完全控制文件生成过程。

https://github.com/frthjf/obsidian-zotero-sync-client/assets/5411942/81a58562-af7a-4d74-a1c8-459dc78e116f

注意：该插件使用了优秀的[retorquere/zotero-sync](https://github.com/retorquere/zotero-sync)包来进行Zotero API集成。



