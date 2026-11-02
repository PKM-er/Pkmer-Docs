---
uid: 1793625623775000
title: "Obsidian 插件：trip2g sync"
tags: ["发布工具", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Publish a site from your vault and share the parts you choose with friends, colleagues or subs. Self-hosted CMS with a Obsidian admin panel. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：trip2g sync

> [!Note] 插件名片
> - 插件名称：trip2g sync
> - 插件作者：Alexey Yurchenko
> - 插件说明：Publish a site from your vault and share the parts you choose with friends, colleagues or subs. Self-hosted CMS with a Obsidian admin panel. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/trip2g/ttgsync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ttgsync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/trip2g/ttgsync/master/README.md)



## 概述

trip2g sync 将你的 Obsidian 笔记库转化为自托管的个人网站，核心功能是将指定文件夹内的笔记及附件同步至 trip2g 服务器并自动发布。它充当了一个轻量级的内容管理系统，让你无需离开 Obsidian 即可管理线上内容。通过简单的配置，你可以选择性地推送带有特定 Frontmatter 标记的笔记，实现从本地写作到线上分享的无缝衔接，同时保留对发布内容的完全控制权。

典型场景包括个人博客维护或团队内部知识库共享。例如，你可以将标记为 `publish: true` 的技术文章同步到服务器，生成公开页面供读者访问；或者将标记为 `free: true` 的文档设为公开，其余笔记保持私有，仅允许管理员或订阅者查看。这种机制非常适合那些希望将 Obsidian 作为唯一写作入口，同时需要向外部受众展示部分内容的用户。

相比其他同步插件，trip2g sync 的最大特色是深度集成自托管服务器，支持双向同步、实时拉取以及保存时自动同步。它不仅能处理 Markdown 文件，还支持 Canvas、Excalidraw 等 Obsidian 特有格式，并具备冲突解决视图，允许用户在本地与服务器版本发生冲突时手动选择保留哪一方。此外，服务器端保留所有历史版本，即使笔记被覆盖也可随时恢复，提供了比单纯文件同步更完善的数据安全保障。

使用前必须自行部署 trip2g 服务器或申请沙箱账号，插件本身不包含服务器功能。API 密钥以明文形式存储在本地配置文件中，请注意保护隐私。双向同步默认关闭，开启前务必备份笔记库，因为该功能可能会将服务器删除的文件移至本地回收站。此插件不适合需要完全离线使用、或希望使用 iCloud/Git 等通用同步方案且不愿维护独立服务器的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


