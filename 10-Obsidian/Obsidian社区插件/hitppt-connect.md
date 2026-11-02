---
uid: 1793625613751001
title: "Obsidian 插件：HitPPT Connect"
tags: ["第三方工具集成", "效率工具", "文字处理", "obsidian插件"]
description: "Use selected Markdown notes as temporary reference materials for HitPPT presentations. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HitPPT Connect

> [!Note] 插件名片
> - 插件名称：HitPPT Connect
> - 插件作者：joker
> - 插件说明：Use selected Markdown notes as temporary reference materials for HitPPT presentations. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/joker-1030/hitppt-connect)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hitppt-connect)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joker-1030/hitppt-connect/master/README.md)



## 概述

HitPPT Connect 旨在解决 Obsidian 笔记与 HitPPT 演示文稿制作工具之间的数据孤岛问题。其核心功能是允许用户将选定的 Markdown 笔记作为临时参考资料，直接同步至 HitPPT 平台。通过该插件，你可以在 HitPPT 中浏览已授权的 Obsidian 文件夹，选择特定笔记，并在内容离开本地库前进行确认。此外，它也支持从 Obsidian 端主动将当前笔记或选中的多篇笔记发送至 HitPPT，实现双向的内容流转，让笔记内容能更便捷地转化为演示素材。

典型的使用场景包括快速制作基于现有文档的汇报。例如，当你完成了一份详细的项目复盘笔记，需要向团队展示时，无需手动复制粘贴文本，只需通过插件将该笔记发送至 HitPPT，即可利用其 AI 能力快速生成结构化的幻灯片。另一个场景是日常知识分享，你可以将多篇相关的读书笔记或技术文档打包发送，作为演讲的底层素材库，HitPPT 会基于这些内容辅助构建演示逻辑，大幅减少从文字到 PPT 的转换时间。

相比其他单纯的导出插件，HitPPT Connect 的特色在于其“临时快照”机制与精细的权限控制。它并非永久上传所有笔记，而是创建具有 48 小时有效期的临时引用，过期后自动清理正文内容以保护隐私。同时，插件支持在 Obsidian 设置中明确指定允许访问的文件夹范围，未授权路径和隐藏文件均被严格排除。这种设计既保证了数据流转的灵活性，又通过最小化授权原则降低了数据泄露风险，适合对隐私有一定要求的用户。

使用前需注意，该插件仅支持 Obsidian 桌面版，且必须拥有 HitPPT 账号。它依赖网络连接与 HitPPT 服务器通信，若网络不稳定可能导致连接中断。此外，单次传输有大小限制（单篇 512 KiB，单次最多 20 篇），且不支持自动抓取嵌入的本地图片或远程图片。如果你需要完全离线使用，或者希望将笔记永久存储于第三方云端而非临时引用，此插件可能不适合你的需求。建议仔细阅读隐私政策，了解数据在生成演示过程中的处理规则。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


