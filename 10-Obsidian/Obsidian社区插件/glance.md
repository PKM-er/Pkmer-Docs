---
uid: 1793625613379000
title: "Obsidian 插件：Glance"
tags: ["样式与美化", "界面优化", "第三方工具集成", "obsidian插件"]
description: "Turn standalone web links into source-pure rich cards. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Glance

> [!Note] 插件名片
> - 插件名称：Glance
> - 插件作者：Mario Miletta
> - 插件说明：Turn standalone web links into source-pure rich cards. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mariomile/obsidian-glance)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?glance)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mariomile/obsidian-glance/master/README.md)



## 概述

Glance 将笔记中独立的网页链接转化为包含图标、域名及预览图的富媒体卡片，同时保持 Markdown 源码的纯净性。它通过获取 Open Graph 元数据，在视觉上丰富链接呈现，但不会像传统插件那样重写你的笔记文本。这种“源纯”渲染机制确保了你的笔记始终是可编辑的标准 Markdown，避免了因插件渲染导致的格式混乱或数据丢失风险，让阅读体验与编辑自由度得以兼得。

典型场景包括整理资料时，将大量参考链接直接粘贴在列表中，Glance 会自动将其渲染为紧凑的卡片，保留列表结构的同时提升可读性；或者在记录社交媒体内容时，粘贴 X（Twitter）帖子链接，插件会直接展示作者、日期、完整文本及媒体内容，替代了原本可能无法加载的 iframe 嵌入。此外，你可以通过简单的标记或卡片控件，灵活切换卡片的展开与紧凑模式，甚至将卡片替换为实时网页嵌入，以查看动态内容。

相比同类插件，Glance 的核心特色在于其非侵入式的编辑体验。当光标移入卡片所在行时，卡片会即时还原为可编辑的 Markdown 文本，实现无缝切换；而卡片上的编辑、刷新或尺寸调整控件，仅在点击时才将变更写回源码，避免了误操作。此外，它完全遵循 Obsidian 的主题令牌，确保卡片颜色与字体随主题自动适配，并在桌面端和移动端的实时预览及阅读模式下均保持一致的跨平台体验。

使用前需注意，Glance 仅对独立成行的链接或标准 Markdown 链接生效，句子中的内联链接不会被转换。对于 X 帖子，插件会通过公共 API 获取数据，这意味着帖子 ID 会被发送至该服务。此外，若网站禁止 iframe 嵌入（如银行或社交网络），嵌入模式可能显示为空白，此时需使用“在浏览器中打开”作为备选。如果你需要复杂的链接管理或自动抓取全文功能，此插件可能无法满足，它更侧重于视觉呈现与源码纯净的平衡。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


