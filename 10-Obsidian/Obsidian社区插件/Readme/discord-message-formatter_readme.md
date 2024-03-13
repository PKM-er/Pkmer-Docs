---
uid: 2023120522244600
title: Obsidian 插件：【Readme】Discord Message Formatter
tags: ['obsidian插件', 'readme']
description: 将Discord客户端中的消息复制粘贴到Obsidian中，即可完美格式化。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Discord Message Formatter

> [!Note] 插件名片
> - 插件名称：Discord Message Formatter
> - 插件作者：Emile Durkheim
> - 插件说明：将 Discord 客户端中的消息复制粘贴到 Obsidian 中，即可完美格式化。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Emile-Durkheim/obsidian_discord_formatter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?discord-message-formatter)

## 概述

将 Discord 客户端中的消息复制粘贴到 Obsidian 中，即可完美格式化。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Emile-Durkheim/obsidian_discord_formatter/main/README.md)

---

## Readme(翻译）

下面是 [[discord-message-formatter]] 插件的自述翻译

# Obsidian.md 的 Discord 消息格式化插件

曾经将 Discord 消息粘贴到 Obsidian 中，结果变得一团糟吗？别担心了！这个插件就是为你而设计的！

### 使用方法

只需从桌面版的 Discord 客户端中按下 CTRL+C，然后粘贴到 Obsidian 中！所有的格式都会自动完成，让您无需费心添加/删除字符，有更多时间专注于笔记 :)

### 特点

- 直接将用户名、消息时间和消息文本粘贴到您的笔记中
- 粘贴整个对话而不仅仅是单个消息
- 只需使用 CTRL+C 和 CTRL+V 即可轻松使用
- 将所有 Discord 标记转换为 Obsidian 标记（下划线、粗体、引用、删除线等）
- 在 Obsidian 中嵌入附件/网站

### 限制

该插件依赖于当你从桌面客户端复制消息时 Discord 通常提供的 HTML。然而，Discord 并不总是可靠地这样做。在 10% 的情况下，你的剪贴板只包含原始文本，插件无法解析。

**解决方法：**以稍微不同的方式选择消息；尝试选择*整个*消息，将光标放在消息/一行消息的开头上方，然后将光标放在最后一条消息的下方。这样应该可以工作。

**仅适用于桌面版，仅适用于 CTRL+C 快捷键**：如果你尝试从除桌面客户端以外的任何地方复制文本，使用 CTRL+C 快捷键，你的剪贴板将只包含插件无法解析的原始文本。

### 安装

- 在/yourVault/.obsidian/plugins 中运行 `git clone https://github.com/Emile-Durkheim/obsidian_discord_formatter`
- 在/yourVault/.obsidian/plugins/obsidian_discord_formatter 中运行 `npm install`
- 在 Vault 的设置中打开 "Community Plugins" 选项卡，并在那里启用插件。



