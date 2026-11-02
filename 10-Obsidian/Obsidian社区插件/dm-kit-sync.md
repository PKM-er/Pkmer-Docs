---
uid: 1793625612158000
title: "Obsidian 插件：DM Kit Sync"
tags: ["第三方工具集成", "效率工具", "自动化与AI", "obsidian插件"]
description: "Send selected notes to DM Kit so your campaign tools and Lorekeeper can use them. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DM Kit Sync

> [!Note] 插件名片
> - 插件名称：DM Kit Sync
> - 插件作者：Emanuele
> - 插件说明：Send selected notes to DM Kit so your campaign tools and Lorekeeper can use them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emanuele-moricci/dm-kit_obsidian-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dm-kit-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emanuele-moricci/dm-kit_obsidian-sync/master/README.md)



## 概述

DM Kit Sync 旨在解决 Obsidian 笔记与 DM Kit 跑团工具间的数据孤岛问题，核心功能是将你选定的 Markdown 笔记单向同步至 DM Kit 平台。同步过程完全手动触发，确保没有任何内容在你未审查和确认前离开本地库，让 DM Kit 的战役工具和 Lorekeeper 助手能直接调用这些资料。

典型场景包括：你为 D&D 战役编写了详细的 NPC 背景故事和地图设定，希望 Lorekeeper 在对话中能引用这些细节；或者你维护着一份庞大的魔法物品清单，需要同步到 DM Kit 以便在战斗准备阶段快速检索。只需在设置中勾选对应文件夹，运行同步命令，这些内容即可被 AI 助手理解和使用。

相比其他同步插件，DM Kit Sync 强调隐私与安全，连接密钥存储在 Obsidian 的秘密存储中而非笔记库内，且插件本身不含任何广告、分析或遥测代码。它支持批量同步大库，自动处理重试机制，若某条笔记被服务器拒绝，会跳过并报告错误，而不影响其余笔记的正常同步，保证了同步过程的稳健性。

使用前需注意，该插件仅支持桌面版 Obsidian，且必须拥有免费的 DM Kit 账号才能工作。它不适合需要双向同步或自动实时同步的用户，因为数据流向是单向的（Obsidian 到 DM Kit），且每次更新都需手动执行“审查与同步”命令。此外，单次同步限制为 2000 条笔记，每条不超过 2MB，超出部分需分批处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


