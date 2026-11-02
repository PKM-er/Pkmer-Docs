---
uid: 1793625613297000
title: "Obsidian 插件：Gentle Speller"
tags: ["文字处理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Correct Russian, English and Ukrainian spelling with Yandex Speller, optional automatic checks and a manual command. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Gentle Speller

> [!Note] 插件名片
> - 插件名称：Gentle Speller
> - 插件作者：Dmitry
> - 插件说明：Correct Russian, English and Ukrainian spelling with Yandex Speller, optional automatic checks and a manual command. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bathert/obsidian-gentle-speller)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gentle-speller)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bathert/obsidian-gentle-speller/master/README.md)



## 概述

Gentle Speller 是一款专为桌面版 Obsidian 设计的保守型拼写检查插件，核心功能是利用 Yandex Speller 服务纠正俄语、英语和乌克兰语的拼写错误。它支持混合语言笔记，无需安装 Python、本地模型或配置 API 密钥，开箱即用。插件通过 HTTPS 请求将文本发送至 Yandex 进行校验，仅针对小写单词中唯一且改动微小的建议进行自动修正，旨在提供低干扰的拼写辅助。

典型使用场景包括撰写多语言技术文档或学术笔记时，需要快速排查非母语部分的拼写失误。例如，在一份包含俄语术语的英文报告中，你可以手动触发检查命令，插件会识别并修正明显的拼写错误，同时保留专业术语和专有名词不变。此外，如果你习惯边写边查，可以启用自动检查功能，在停止编辑 45 秒后自动扫描当前笔记，无需频繁手动操作。

相比其他拼写插件，Gentle Speller 的最大特色在于其“保守”策略和隐私透明性。它明确区分了拼写与语法，不纠正标点、语法或风格问题，避免过度修改。在隐私方面，插件在首次检查前会明确提示用户授权，且仅在用户允许后才发送数据。此外，它在每次编辑前会在本地创建备份文件，确保即使出现意外情况，原始内容也可恢复，且这些备份不会上传至外部服务。

使用前需注意，该插件仅支持桌面端，且依赖外部网络服务，若 Yandex 服务不可用则无法工作。它不适合对隐私极度敏感、无法接受文本发送至第三方服务器的用户，也不适合需要全面语法校对或翻译功能的场景。由于插件仅处理拼写，且会跳过代码块、标题及长行，复杂格式或长文本中的错误可能无法被检测。建议用户定期清理本地备份文件夹，并在使用前确认已阅读 Yandex 的隐私政策。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


