---
uid: 1793625618617000
title: "Obsidian 插件：NoteCloud Sync"
tags: ["第三方工具集成", "备份与恢复", "文件管理", "obsidian插件"]
description: "Sync notes with a NoteCloud account, preserve folders, and read or share notes on the web. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NoteCloud Sync

> [!Note] 插件名片
> - 插件名称：NoteCloud Sync
> - 插件作者：yinds0270
> - 插件说明：Sync notes with a NoteCloud account, preserve folders, and read or share notes on the web. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yinds0270/NoteCloud)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notecloud-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yinds0270/NoteCloud/master/README.md)



## 概述

NoteCloud Sync 旨在解决 Obsidian 笔记在多设备间同步及网页端访问的需求。它通过连接 NoteCloud 账号，实现本地仓库与云端的双向同步，完整保留文件夹层级结构。除了支持 Markdown、TXT、Canvas 及常见媒体文件外，该插件还允许用户直接在网页版阅读笔记、管理分享链接，并查看云端容量与公告，让笔记管理不再局限于本地应用。

典型场景包括跨设备无缝编辑与在线分享。例如，你在电脑上整理完一篇长文，插件会在编辑停止后自动同步至云端，随后你在手机上打开 Obsidian 即可继续编辑，无需手动传输文件。若需向他人展示内容，你可以登录 NoteCloud 网页版，将特定笔记生成分享链接发送给对方，对方无需安装 Obsidian 即可在浏览器中阅读，实现了从个人知识库到轻量级内容发布的平滑过渡。

相比官方 Obsidian Sync，NoteCloud Sync 提供了更灵活的网页端交互能力，如公开投稿与链接分享的区别管理，以及针对 Markdown 冲突的三方合并尝试。其特色在于支持手动或自动双向同步，并在自动模式下具备智能防抖机制，编辑暂停约 2 秒后触发同步，持续编辑时最长 10 秒检查一次，兼顾了实时性与性能。此外，插件内置了额度兑换、续费提醒及反馈通道，方便用户管理账号状态，且明确区分了“仅链接分享”与“公开到首页”两种权限，避免误操作导致隐私泄露。

使用前需注意，同步并非独立备份，首次使用务必先备份仓库，并建议先用少量笔记验证同步结果。该插件不适合对端到端加密有严格要求的用户，因为传输虽经 HTTPS 保护，但服务器端并非加密存储，运维人员理论上可读取内容。此外，若你依赖完全离线环境，或希望使用 Obsidian 官方同步服务以获取其特定的安全承诺，此插件可能不是最佳选择。切换账号会清除同步基线但不删除本地笔记，操作前请确认目标账号权限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


