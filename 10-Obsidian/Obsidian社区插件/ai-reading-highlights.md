---
uid: 1793625605638000
title: "Obsidian 插件：AI Reading Highlights"
tags: ["自动化与AI", "文字处理", "效率工具", "obsidian插件"]
description: "Automatically highlights key sentences, terms, and concepts in your notes using an LLM you configure. Works in reading view and live preview, and never modifies note files. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Reading Highlights

> [!Note] 插件名片
> - 插件名称：AI Reading Highlights
> - 插件作者：joshwong
> - 插件说明：Automatically highlights key sentences, terms, and concepts in your notes using an LLM you configure. Works in reading view and live preview, and never modifies note files. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/joshwong1908/obsidian-ai-reading-highlights)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-reading-highlights)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshwong1908/obsidian-ai-reading-highlights/master/README.md)



## 概述

AI Reading Highlights 利用你配置的大语言模型，自动识别笔记中的关键句、核心术语及命名概念，并在阅读视图或实时预览中直接高亮显示。它专为中英文密集的技术笔记设计，帮助你在快速浏览时迅速定位作者结论、支撑论据及核心论点。插件采用非侵入式设计，所有标注仅存在于视觉层面，绝不会修改你的笔记文件，确保原始数据的安全与纯净。

想象你正在阅读一篇复杂的机器学习论文笔记，插件会自动用马克笔渐变效果标出每段的核心观点，用靛蓝色下划线强调值得记忆的领域关键词，并用青色点状下划线或胶囊背景突出特定的模型或定律。当你鼠标悬停在任意高亮处时，会弹出一个小标签提示该高亮的具体角色。这种视觉分层让你无需逐字阅读，就能在几秒钟内把握整篇笔记的逻辑脉络和重点分布。

相比同类插件，其最大特色在于“锚定”机制与主题自适应能力。高亮通过显著字符匹配进行锚定，即使你后续对文本加粗、添加链接或调整换行，高亮依然能准确保留，不会错位。此外，插件会实时测量背景亮度，自动调整高亮颜色的明度与强度，确保在浅色、深色或自定义主题下，文字对比度始终符合无障碍标准，阅读体验清晰舒适。

使用前需注意，API 引擎会将当前打开笔记的文本块发送至你配置的 OpenAI 兼容端点，这是插件唯一的网络访问行为，部分服务商可能按量收费。结果会缓存在插件目录中，未修改的块不会重复请求。如果你完全依赖离线环境且无法配置本地模型，或者需要插件直接修改笔记内容（如插入标签），则不适合使用此插件，因为它仅做视觉标注，不改变文件实体。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


