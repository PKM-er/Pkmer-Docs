---
uid: 1793625621058000
title: "Obsidian 插件：Selection AI Button"
tags: ["自动化与AI", "编辑工具", "界面优化", "obsidian插件"]
description: "Open Copilot Quick Ask from a floating selection button, with optional selected-text prefill. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Selection AI Button

> [!Note] 插件名片
> - 插件名称：Selection AI Button
> - 插件作者：LIngfengDu
> - 插件说明：Open Copilot Quick Ask from a floating selection button, with optional selected-text prefill. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dlf2001/selection-ai-button-for-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?selection-ai-button)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dlf2001/selection-ai-button-for-obsidian/master/README.md)



## 概述

Selection AI Button 旨在简化 Obsidian 中调用 AI 问答的操作流程。它通过在选区旁显示浮动按钮，让用户无需依赖右键菜单即可直接打开 Copilot 的 Quick Ask 界面。插件支持可选的“自动填入选中文字”功能，能将划词内容直接预填至提问框，方便用户在此基础上修改或补充问题，从而快速发起针对特定文本的 AI 咨询。

典型场景如阅读技术文档时，选中一段晦涩的公式或术语，点击按钮即可让 AI 解释其含义；或者在整理笔记时，选中一段长文，让 AI 协助总结或润色。若处于阅读模式，插件会提供切换至实时预览的入口，切换后重新选词即可继续提问，避免了在不同视图间反复切换的繁琐。

相比其他集成方案，该插件强调交互的即时性与安全性。它不修改系统剪贴板，也不会覆盖用户已手动输入的问题内容。自动填入机制具备容错能力，若输入框未就绪会有限重试，且在用户手动输入或关闭弹窗时立即停止旧任务，防止旧词句错误地出现在新问题中。此外，插件界面支持中英文即时切换，并严格遵循 Obsidian 主题配色，确保视觉体验的统一。

使用前需确保已安装并配置好 Copilot 插件及其 Quick Ask 模型，且当前处于实时预览或阅读模式。该插件不支持手机端、源码模式或 PDF 选词，也不提供模型服务。若 Copilot 版本更新导致内部结构变化，自动填入功能可能失效，需等待插件适配。对于仅需简单划词翻译或希望完全自动化发送请求的用户，此插件可能不够直接，因为它始终保留手动发送的环节。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


