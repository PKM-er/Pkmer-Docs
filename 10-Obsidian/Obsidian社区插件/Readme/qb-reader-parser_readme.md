---
uid: 2023102611082294
title: Obsidian 插件：【Readme】QB Reader Parser
tags: ['obsidian插件', 'readme']
description: 自动将QB Reader中的抛硬币问题解析为Obsidian_to_Anki插件可读的格式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】QB Reader Parser

> [!Note] 插件名片
> - 插件名称：QB Reader Parser
> - 插件作者：Jacob Barta
> - 插件说明：自动将 QB Reader 中的抛硬币问题解析为 Obsidian_to_Anki 插件可读的格式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/J-Barta/qb-reader-parser)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?qb-reader-parser)

## 概述

自动将 QB Reader 中的抛硬币问题解析为 Obsidian_to_Anki 插件可读的格式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/J-Barta/qb-reader-parser/master/README.md)
>

---

## Readme(翻译）

下面是 [[qb-reader-parser]] 插件的自述翻译

# Obsidian QB Reader 插件

自动将 QB Reader 中的抢答题解析为 Obsidian_to_Anki 插件可读的格式。

## 安装

- 下载并安装 [Obsidian](https://obsidian.md)
- 在 Anki 中下载 [AnkiConnect](https://ankiweb.net/shared/info/2055492159) 插件（id 为 `2055492159`）
- 在 Obsidian 中启用社区插件并安装 Obsidian_to_Anki 插件
  - 启用插件并进入其设置
  - 设置 Obsidian 卡片所属的牌组
    - 在插件选项的“Defaults”部分下找到
    - 复制牌组名称和路径（点击牌组旁边的设置图标 --> 重命名，复制）
  - 启用填空段落样式 - 请参阅使用部分
- 从最新的 [Release](https://github.com/J-Barta/obsidian-qb-reader/releases/latest) 中下载 `obsidian-qb-reader.zip`。
  - 解压文件夹并找到其内部文件夹（也称为 `obsidian-qb-reader.zip`）
  - 将此文件夹移动到 `{Your Obsidian Vault}/.obsidian/plugins/` 中
  - 重新启动 Obsidian（可能需要）
  - 转到社区插件选项卡并启用 Obsidian QB Reader
  - 在插件的设置菜单中设置您的分类。这些分类将在打开 Obsidian QB Reader 窗口时默认选择。

## 使用方法

运行“QB Reader”命令（Ctrl + P）打开一个对话框，允许您查询 QB Reader API。句子将自动通过高亮分隔。点击句子将自动解析它们，以便准备用于 Anki。

将线索转换为卡片的默认解析方法是使用高亮，因为在 Obsidian 中阅读最容易。这需要您在 Obsidian_to_Anki 插件中使用 [Cloze段落样式](https://github.com/Pseudonium/Obsidian_to_Anki/wiki/Cloze-Paragraph-style) 功能，并使用以下正则表达式：

```
((?:\n)*(?:.*(?:{|={2}).*)(?:(\^.{1,3}$|^.{4}(?<!<!--).*))*)
```

## 注意事项

- 当检索抛物线时，QB Reader 的子类别行为很奇怪。我不完全确定为什么会这样，但是目前启用任何主要类别（文学、历史、科学、美术）都会阻止所有次要类别返回抛物线。只选择次要类别才能获得次要类别的结果。
- 目前，该插件不支持奖励题。这可能会在将来添加。
手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。



