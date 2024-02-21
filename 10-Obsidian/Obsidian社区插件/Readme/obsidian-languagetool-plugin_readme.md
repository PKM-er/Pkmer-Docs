---
uid: 2023120719320752
title: Obsidian 插件：【Readme】LanguageTool Integration
tags: ['第三方工具集成', '搜索/排序', '翻译', 'obsidian插件', 'readme']
description: 借助语言工具进行高级拼写/语法检查
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】LanguageTool Integration

> [!Note] 插件名片
> - 插件名称：LanguageTool Integration
> - 插件作者：Clemens Ertle
> - 插件说明：借助语言工具进行高级拼写/语法检查
> - 插件分类：[' 第三方工具集成 ', ' 搜索/排序 ', ' 翻译 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Clemens-E/obsidian-languagetool-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-languagetool-plugin)

## 概述

借助语言工具进行高级拼写/语法检查

![LanguageTool Integration](https://cdn.pkmer.cn/covers/obsidian-languagetool-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Clemens-E/obsidian-languagetool-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-languagetool-plugin]] 插件的自述翻译

# Obsidian LanguageTool 插件

这是一个为 [Obsidian.md](https://obsidian.md) 设计的插件，集成了 [LanguageTool](https://languagetool.org/)，提供高级语法和拼写检查功能。

> ***⚠️ 此插件处于维护模式***
> 它已经满足了我所有的需求，除非出现问题，否则我没有更新的意图。
> 欢迎提出问题/建议，但请理解我将我的空闲时间用于其他事情。
> 但是，您可以随时创建 Pull Request，我会进行审查/合并，并相应发布新版本。

注意：如果您担心笔记的隐私问题，您应该自己托管 LanguageTool，无论是在本地计算机上还是在服务器上

[Docker 镜像](https://hub.docker.com/r/erikvl87/languagetool)

如果您决定自己托管服务，您需要相应地更改配置中的链接。

## 安装

1. 在 Obsidian 中，打开设置 / 社区插件，禁用 " 安全模式 "（阅读安全警告）。
2. 点击社区插件的浏览按钮。
3. 在左上角的搜索框中搜索 "LanguageTool Integration"。点击安装按钮。
4. 安装成功后，点击启用以启用插件。

## 设置和使用案例

安装并启用插件后，您可以设置三个热键（在设置/热键下），通过过滤搜索字段找到描述为“LanguageTool Integration”的热键功能，以更快地找到特定的热键功能。确保没有与现有热键和 Obsidian 中的拼写检查功能冲突（如果启用的话，设置/编辑器/拼写检查开/关）。

* **“检查文本”**在查看整个文档时进行检查，如果没有选择文本。如果您只想检查一个单词、句子或段落，请选择所需的文本，然后按下之前设置的键盘快捷键。单击 LanguageTool 标识为可能的拼写错误的红色下划线单词，以在弹出窗口中获得纠正建议，并有将该单词添加到个人词典的选项。
* **“清除建议”**清除文档或所选文本中未更正或更改的所有红色下划线的单词或段落。
* **“切换自动检查”**在您编写或更改文档内容时切换自动拼写检查功能的开/关状态。

**LanguageTool 尝试自动检测所使用的语言。**通常不需要选择特定语言（在设置/插件选项/ LanguageTool Integration / Static language 下）。**此功能使用户能够在同一文档中检查不同语言的拼写**（例如，用英语撰写的论文中包含外语引用），这通常是 Obsidian 内置拼写检查功能无法实现的。

高级账户

我们终于支持 LanguageTool 高级版。

⚠️ 请将与此插件相关的任何错误、问题或建议直接报告给我们（此 GitHub 存储库），而不是报告给 LanguageTool 支持，因为这是一个非官方的社区插件。

要使用高级功能，您（显然）需要一个高级账户和一个 API 密钥。

您可以在<<https://languagetool.org/editor/settings/access-tokens> 上生成您的 API 密钥。>

在插件设置中配置您的电子邮件、API 密钥和新的 URL（<https://api.languagetoolplus.com）。>

## 手动安装插件

- 将最新版本的 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 Vault 文件夹下的 `VaultFolder/.obsidian/plugins/obsidian-languagetool-plugin/` 目录中。

# 演示

![demo-02022022](https://cdn.pkmer.cn/covers/obsidian-languagetool-plugin_1_0.png!pkmer)
