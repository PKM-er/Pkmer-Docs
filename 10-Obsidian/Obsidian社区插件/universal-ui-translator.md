---
uid: 1791709370659000
title: 'Obsidian 插件：Universal UI Translator'
tags: ['界面优化', '第三方工具集成', '自动化与AI', 'obsidian插件']
description: 'Translate Obsidian core and community plugin UI with your own translation API. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Universal UI Translator

> [!Note] 插件名片
> - 插件名称：Universal UI Translator
> - 插件作者：feifei
> - 插件说明：Translate Obsidian core and community plugin UI with your own translation API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '第三方工具集成', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/garrettfynn/obsidian-universal-ui-translator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?universal-ui-translator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/garrettfynn/obsidian-universal-ui-translator/master/README.md)



## 概述

**主要功能**
Universal UI Translator 是一款界面文本中间件，通过拦截 Obsidian 核心及社区插件的英文界面文本，调用用户自定义的翻译 API 进行实时翻译并写回界面，实现无需等待官方汉化的即时双语体验。

**适用场景**
适用于希望深度使用英文社区插件但缺乏中文界面的 Obsidian 用户，特别是需要频繁操作命令面板、设置页及各类弹窗的场景。

**核心特色**
1. **多引擎支持**：兼容 OpenAI、DeepL、Google、Azure 及本地模型（Ollama/LM Studio），灵活选择翻译源。
2. **高效合批**：v1.2 引入合批翻译，大幅减少请求次数与 Token 消耗，提升首译速度。
3. **持久缓存**：升级不清空缓存，结合内存与磁盘 LRU 机制，二次打开零 API 调用。
4. **费用透明**：实时统计 Token 用量与预估费用，提供详细图表监控。

**使用建议**
建议配置稳定的翻译 API 并设置合理的缓存上限（默认5万条）。若使用本地模型可零成本运行。遇到异常请附带版本与控制台报错联系开发者。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


