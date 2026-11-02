---
uid: 1793625610901001
title: "Obsidian 插件：Claudian Thinking Translator"
tags: ["自动化与AI", "文字处理", "效率工具", "obsidian插件"]
description: "Translate Claudian's thinking into Chinese as it streams, only when you expand a block. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claudian Thinking Translator

> [!Note] 插件名片
> - 插件名称：Claudian Thinking Translator
> - 插件作者：chengmiaofan
> - 插件说明：Translate Claudian's thinking into Chinese as it streams, only when you expand a block. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/serena-sheng/claudian-thinking-translator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claudian-thinking-translator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/serena-sheng/claudian-thinking-translator/master/README.md)



## 概述

Claudian Thinking Translator 专为解决 Claudian 插件中 AI 思考过程语言障碍而设计。它能在你展开思考块时，实时将英文思维流式翻译为中文，默认仅显示译文，点击即可切回原文。该插件采用旁挂 DOM 技术，无需修改 Claudian 源码，且默认使用免费机翻引擎，无需配置任何 API 密钥，即可实现低门槛的中文阅读体验。

典型场景如：当你使用 Claudian 进行复杂代码调试或逻辑推演时，AI 会输出大段英文思考过程。此时展开该块，插件会自动分段翻译，让你无需逐句对照即可快速理解 AI 的推理路径。若内容本身已是中文，插件会智能识别并跳过翻译请求，避免无效网络消耗。

相比其他翻译工具，其核心特色在于“按需触发”与“零干扰”。仅在展开块时发起请求，折叠状态下完全静默，不产生任何网络流量。此外，它支持术语白名单，可保留特定技术词汇不翻译，确保专业语境下的准确性。对于对翻译质量有更高要求的用户，还可切换至 DeepSeek 引擎，但需自行配置密钥。

需注意，该插件仅支持桌面端 Obsidian，且强依赖 Claudian 插件的存在。若 Claudian 更新导致 DOM 结构变化，插件可能失效。此外，机翻质量存在局限，关键决策前建议切换至更精准的引擎。若你的思考内容涉及敏感数据，请务必在展开前确认隐私政策，或选择禁用插件，因为翻译过程会将文本发送至第三方服务器。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


