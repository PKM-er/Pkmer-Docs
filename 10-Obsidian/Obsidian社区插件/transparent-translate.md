---
uid: 1793625623746000
title: "Obsidian 插件：Transparent Translate"
tags: ["自动化与AI", "文字处理", "第三方工具集成", "obsidian插件"]
description: "Switch a note's display between the original text, English and German using any OpenAI-compatible LLM. The file on disk never changes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Transparent Translate

> [!Note] 插件名片
> - 插件名称：Transparent Translate
> - 插件作者：Jay Leimer
> - 插件说明：Switch a note's display between the original text, English and German using any OpenAI-compatible LLM. The file on disk never changes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/codingjinxx/transparent-translate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?transparent-translate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/codingjinxx/transparent-translate/master/README.md)



## 概述

Transparent Translate 专为德英双语笔记设计，提供一键切换原文、英文和德文显示的功能。它利用任意兼容 OpenAI 接口的 LLM 进行实时翻译，核心优势在于“仅显示不修改”：无论你在阅读视图还是实时预览中切换语言，磁盘上的 Markdown 文件始终保持原样，确保搜索、反向链接及同步工具始终基于你实际书写的内容工作。

想象你正在整理一份混合了德语术语和英语句子的课程笔记，只需点击状态栏的语言按钮，整篇笔记即可瞬间变为全英文或全德文阅读，而公式、链接和标签等格式元素保持原样。若需修改内容，你可以直接在翻译视图中点击句子进行编辑，插件会智能提示是替换原文还是编辑原始语言，所有更改均支持常规撤销操作，极大提升了跨语言笔记的维护效率。

相比传统翻译插件，它具备独特的“学习型术语表”功能。当你通过右键菜单修正某个翻译（如将 Schein 固定译为 course credit）后，该规则会自动应用于包含该词根的所有句子，并支持按笔记、文件夹或标签范围生效。此外，它支持在文件资源管理器中显示翻译后的文件名，且移动端仅展示桌面端生成并同步的缓存，无需额外配置 API 密钥，兼顾了隐私与便捷性。

使用前需确保 Obsidian 版本不低于 1.11.4，并自行配置 LLM 提供商（如 LM Studio 或 OpenAI）。该插件仅支持德英互译，不适用于其他语言对。若你的笔记完全单一语言，或不需要在文件列表中查看翻译名称，此插件可能显得多余。建议先通过设置中的“测试”功能验证模型连接，并合理配置排除项以优化搜索性能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


