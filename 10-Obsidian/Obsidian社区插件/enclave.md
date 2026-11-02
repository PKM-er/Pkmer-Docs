---
uid: 1793625612553001
title: "Obsidian 插件：Enclave"
tags: ["安全与隐私", "文件管理", "obsidian插件"]
description: "Encrypt notes and whole folders with a vault password or their own password. Locked notes keep their names and links, lock again automatically, and can be decrypted for good at any time. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Enclave

> [!Note] 插件名片
> - 插件名称：Enclave
> - 插件作者：flo-wolf
> - 插件说明：Encrypt notes and whole folders with a vault password or their own password. Locked notes keep their names and links, lock again automatically, and can be decrypted for good at any time. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/flo-wolf/obsidian-enclave)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?enclave)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/flo-wolf/obsidian-enclave/master/README.md)



## 概述

Enclave 旨在解决 Obsidian 笔记在同步、备份或云端存储时的隐私泄露风险。它利用 AES-256 标准对笔记内容进行加密，确保只有你在 Obsidian 中输入正确密码后，才能看到明文。无论是日记、健康记录还是敏感的工作资料，一旦锁定，磁盘上仅保留乱码，其他应用或同步服务无法读取。解锁后你可以像平常一样编辑，完成操作后插件会自动重新加密，实现“阅后即焚”般的保护机制。

典型场景包括保护个人私密日记或处理客户敏感数据。例如，你可以将“健康记录”文件夹整体锁定，其中新建的笔记也会自动处于加密状态；或者为某篇特别重要的笔记设置独立密码，与日常使用的库密码区分开来。在手机上切换应用时，Enclave 会立即锁定当前笔记，防止后台被窥视。这种设计让你无需手动反复操作，即可在保持笔记链接、搜索和图谱功能正常的前提下，实现高强度的隐私隔离。

相比同类插件，Enclave 的特色在于其“无感”的安全性与灵活性。它支持单密码或为特定笔记设置独立密码，且锁定后的笔记仍保留文件名，确保内部链接和双向链接不断裂。此外，它具备严格的防错机制，输入错误密码会被直接拒绝而非用错误密码加密笔记，避免数据永久丢失。若搭配 Envoy 同步插件，还能确保笔记仅在加密状态下上传，并在多设备冲突时支持内存解密合并，进一步提升了跨平台使用的安全性。

使用前需特别注意：Enclave 不存储密码，一旦遗忘，加密笔记将永久无法打开，因此务必为重要数据做好离线备份。此外，加密仅覆盖笔记文本和属性，文件名、文件夹名及图片、PDF 等附件并不加密。如果你需要隐藏笔记的存在本身（即文件名保密），或希望附件也完全加密，此插件可能不完全满足需求。同时，在笔记解锁期间，明文会暂时存在于磁盘，若使用 iCloud 等实时同步服务，需留意该时间窗口内的上传风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


