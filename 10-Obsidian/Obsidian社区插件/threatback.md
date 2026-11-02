---
uid: 1793625623089000
title: "Obsidian 插件：Threatback"
tags: ["导航与状态栏", "图谱", "效率工具", "obsidian插件"]
description: "Follow your navigation trail and discover likely paths through your notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Threatback

> [!Note] 插件名片
> - 插件名称：Threatback
> - 插件作者：Dario Simpson
> - 插件说明：Follow your navigation trail and discover likely paths through your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '图谱', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dariusbarbus/threatback)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?threatback)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dariusbarbus/threatback/master/README.md)



## 概述

Threatback 旨在解决在复杂笔记网络中迷失方向的问题，通过可视化你的导航轨迹和推断出的潜在路径，帮助你在笔记间快速回溯。它核心功能包括显示当前标签页的点击历史，以及基于笔记间链接关系自动计算出的“祖先”路径。这些路径以面包屑形式展示在笔记上方，支持实时预览、源码和阅读模式，且不会修改你的 Markdown 源码，让你能直观地看到自己是如何到达当前笔记的，以及可能存在的其他逻辑入口。

想象一下，当你深入阅读一篇关于“机器学习”的笔记时，Threatback 会在顶部显示你从“人工智能”到“深度学习”再到当前笔记的完整路径。如果你是通过搜索直接打开的，它也会根据链接结构推断出可能的上级笔记，比如“神经网络基础”。这种场景特别适合在构建大型知识库时，当你忘记某篇笔记是从哪个主题分支延伸出来的，或者想快速找到某篇笔记的“概览页”时，它能提供清晰的上下文线索，减少在文件树中盲目查找的时间。

与仅记录历史或简单显示反向链接的插件不同，Threatback 引入了本地启发式算法和图排名机制。它能利用周围文本和列表位置来区分真正的“父级”笔记和普通引用，并独立惩罚双向链接和绕路路径，优先推荐那些拥有广泛出链的概览笔记。此外，它允许用户设置文件夹排除和深度限制，确保推断路径的准确性与相关性，避免被无关链接干扰，提供了比单纯链接列表更智能的导航辅助。

需要注意的是，导航历史仅保存在内存中，重启 Obsidian 或重新加载插件后会清空，每个标签页最多记录 50 条笔记。推断路径是基于链接结构的建议，而非绝对层级，对于链接关系模糊或包含大量双向引用的笔记，可能会产生缺失或不准确的路径。此外，它不支持内联嵌入、Canvas 或悬停预览的面包屑显示，且部分键盘操作或延迟导航可能会重置轨迹。如果你需要持久化的历史记录或严格的层级结构管理，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


