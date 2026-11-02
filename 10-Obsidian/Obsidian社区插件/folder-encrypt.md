---
uid: 1793625613076000
title: "Obsidian 插件：Folder Encrypt"
tags: ["安全与隐私", "文件管理", "数据处理", "obsidian插件"]
description: "Encrypt notes including their file names, or whole folders at once. A companion to Meld Encrypt that uses the same file format. Notes are only decrypted in memory. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Folder Encrypt

> [!Note] 插件名片
> - 插件名称：Folder Encrypt
> - 插件作者：archiwizzard
> - 插件说明：Encrypt notes including their file names, or whole folders at once. A companion to Meld Encrypt that uses the same file format. Notes are only decrypted in memory. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/archiwzzard/Obsidian-Folder-Encrypt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-encrypt)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/archiwzzard/Obsidian-Folder-Encrypt/master/README.md)



## 概述

Folder Encrypt 旨在解决 Obsidian 中仅加密笔记内容而文件名仍暴露隐私的痛点。它不仅能加密笔记正文，还能对文件名及整个文件夹进行加密，生成随机命名的文件以隐藏真实标题。该插件与 Meld Encrypt 兼容，使用相同的文件格式，确保加密后的笔记内容依然可读，且无需额外安装 Meld Encrypt 即可独立运行。

典型场景包括保护敏感项目或隐私笔记。例如，你可以将包含个人财务数据的文件夹整体加密，此时文件夹内的子目录和笔记都会获得随机名称，真实名称仅存储在加密文件中。解锁后，笔记在常规 Markdown 编辑器中正常打开和保存，侧边栏和标签页会显示真实名称以便浏览，而磁盘上始终只保留随机文件名，防止通过文件列表泄露信息。

相比同类插件，其特色在于“内存解密”机制，即解密后的内容仅存在于内存中，不会在磁盘上写入任何明文，极大提升了安全性。此外，它支持链接自动更新，确保加密笔记之间的引用依然有效，并具备崩溃恢复功能，能在意外中断后修复状态。插件还允许手动或基于闲置时间自动锁定，进一步保障数据安全。

使用前需注意，该插件仅支持 Markdown 和 Meld Encrypt 格式的文件，PDF、图片等其他文件无法加密且保持可见。书签内容不会被加密，搜索、图谱和反向链接功能也无法索引加密内容。若忘记密码，数据将无法恢复。因此，它不适合需要频繁通过全局搜索查找加密笔记，或希望加密非文本附件的用户。移动端支持尚未经过真机充分测试，建议主要在桌面端使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


