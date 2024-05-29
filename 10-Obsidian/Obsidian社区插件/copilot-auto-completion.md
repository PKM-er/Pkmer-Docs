---
uid: 2024052908473635
title: Obsidian 插件：Copilot auto completion
tags: ['编辑工具', '数据处理', '自动化与AI', 'obsidian插件']
description: 使用ChatGPT API，为Obsidian添加一个高度可配置的类似副驾驶的自动补全功能。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Copilot auto completion

> [!Note] 插件名片
> - 插件名称：Copilot auto completion
> - 插件作者：Jordi Smit
> - 插件说明：使用 ChatGPT API，为 Obsidian 添加一个高度可配置的类似副驾驶的自动补全功能。
> - 插件分类：[' 编辑工具 ', ' 数据处理 ', ' 自动化与 AI', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/j0rd1smit/obsidian-copilot-auto-completion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copilot-auto-completion)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/j0rd1smit/obsidian-copilot-auto-completion/master/README.md)

![Copilot auto completion](https://cdn.pkmer.cn/covers/copilot-auto-completion.gif!pkmer)

## 概述

这是一个为 Obsidian 添加类似 Copilot 的自动完成功能的插件。它使用 OpenAI API 或 Azure OpenAi API 根据光标前后的 n 个字符生成文本，并在光标旁边以透明文本显示建议的完成。您可以按 Tab 键插入建议。此外，您还可以按 Escape 键或移动光标以忽略建议。插件会检测光标前的文本是否与触发词或正则表达式匹配，如果匹配，将排队进行预测请求。插件会根据一定时间排队预测请求，以防止过多的 API 调用。一旦进行了预测请求，插件将显示透明文本中的建议。您可以通过按 Tab 键或使用“Obsidian Copilot: Accept”快速操作来接受建议。如果您按 escape 键，移动光标或更改文档，建议将被取消。插件还提供了其他功能，如强制在文档中的特定位置进行预测请求、禁用插件以保护隐私等。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



