---
uid: 1793625608676000
title: "Obsidian 插件：Boot Booster"
tags: ["移动端优化", "效率工具", "界面优化", "obsidian插件"]
description: "Less waiting. Faster access to your notes. Speed up Obsidian startup on Android with cached file lists, workspace display hints, and responsive background verification. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Boot Booster

> [!Note] 插件名片
> - 插件名称：Boot Booster
> - 插件作者：kgway
> - 插件说明：Less waiting. Faster access to your notes. Speed up Obsidian startup on Android with cached file lists, workspace display hints, and responsive background verification. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['移动端优化', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kgway/boot-booster)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?boot-booster)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kgway/boot-booster/master/README.md)



## 概述

Boot Booster 专为解决 Android 设备上大型 Obsidian 库启动缓慢的问题而设计。它通过复用上次保存的文件列表，大幅减少启动时的扫描工作量，让你能更快进入笔记界面。该插件利用缓存机制优化工作区恢复过程，并针对大型插件文件读取进行了专门加速，从而显著缩短从点击图标到可编辑状态的等待时间，实现“少等待，快访问”的核心目标。

想象一下，当你拥有一个包含数千篇笔记和众多插件的庞大库时，以往每次打开应用都需要漫长的加载过程。使用 Boot Booster 后，首次启动会记录文件清单，后续启动则直接利用这份清单快速展示界面。例如，在通勤路上快速查阅某篇笔记，或在会议间隙临时记录想法，你不再需要盯着加载进度条，而是能立即开始阅读或编辑，真正实现了随开随用的高效体验。

与同类优化插件相比，Boot Booster 的特色在于其“后台验证”机制。它在快速展示界面的同时，会在后台静默核对实际文件状态，确保数据一致性。此外，它特别优化了大型插件文件的读取路径，且不改变其他插件的执行顺序，避免了常见的兼容性问题。所有数据均保留在本地设备，不涉及外部传输，既保证了隐私安全，又提供了可观察的启动时间对比，让你直观看到优化效果。

需要注意的是，在后台验证完成前，搜索和查询结果可能暂时不完整。如果验证失败，建议将设置中的“文件列表优化”关闭并重启应用。此外，该插件不锁定外部应用对文件的写入，因此不适合对文件实时同步有极高要求、且依赖外部工具频繁修改库文件的场景。它主要服务于追求启动速度的个人用户，而非需要严格文件锁定的团队协作环境。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


