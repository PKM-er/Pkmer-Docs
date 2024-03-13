---
uid: 2023080322143774
title: Obsidian 插件：Autocomplete
tags: ['编辑工具', '自动化', 'obsidian插件', 'readme']
description: 提供文本自动完成功能，以提高输入速度。此插件已经长期不维护了。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Autocomplete

> [!Note] 插件名片
> - 插件名称：Autocomplete
> - 插件作者：Yeboster
> - 插件说明：提供文本自动完成功能，以提高输入速度。此插件已经长期不维护了。
> - 插件分类：[' 编辑工具 ', ' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Yeboster/autocomplete-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-autocomplete-plugin)

## 概述

提供文本自动完成功能，以提高输入速度。此插件已经长期不维护了。

![Autocomplete](https://cdn.pkmer.cn/covers/obsidian-autocomplete-plugin.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Yeboster/autocomplete-obsidian/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-autocomplete-plugin]] 插件的自述翻译

# Obsidian 自动完成插件

该插件提供了一个文本自动完成功能，以提高打字速度。

> ⚠️ 由于我不再使用 Obsidian，因此不再维护此插件。
>
> 我可能会在将来更新它，但在那之前，请使用其他插件，如 [Obsidian completr](https://github.com/tth05/obsidian-completr)。

![预览](https://media.giphy.com/media/CFbhjfTLDPnUm45vje/giphy.gif)

> 该插件仍在开发中，如果遇到错误，请在 [GitHub问题](https://github.com/Yeboster/autocomplete-obsidian/issues/new/choose) 中提供重现步骤。

## 特性

以下是当前和计划中的特性。

- 默认自动完成特性：
  - 触发自动完成：
    - 手动使用 `ctrl+space` 或 `Toggle Autocomplete` 命令
    - 在写作时自动触发自动完成，以实现无缝的写作体验
      - 在设置中自定义从第 n 个字符开始触发
  - 使用 `Ctrl-n/p` 或 `上/下箭头` 更改建议，并使用 `enter/tab` 进行选择
  - 与 vim 模式无缝集成
- 多语言的分词器（目前支持阿拉伯语、日语和默认语言）：
  - 在设置中更改默认分词器或在状态栏上点击（`strategy: ...`）
  - 自定义每种语言的单词分隔符
- 使用文本提供程序提供建议完成：
  - LaTex
  - Flow（建议已在当前会话中编写的单词）
    - 当前文件（在 `change-file` 和 `load` 事件上触发）
      - 使用命令 `Autocomplete: Scan current file (language)` 手动扫描不同语言
  - [ ] 自定义文件
- LaTeX 函数的光标定位：
  - 单个函数参数
  - [ ] 多个函数参数
- [ ] 片段支持（h3 -> ###）
- [ ] 适当的布局管理（改进自动完成弹出位置）
- [ ] 上下文感知（仅在 `$$` 块内触发 LaTeX）
- [ ] 改进自动完成滚动

> 你有什么好的特性要添加或者想要改变优先级（特性的顺序）吗？请在 [Github issue](https://github.com/Yeboster/autocomplete-obsidian/issues/new/choose) 上提出。

## 贡献

如果您想改进这个插件，欢迎您 ❤️

在 `develop` 分支上发起一个拉取请求（因为我们使用 [git-flow](https://github.com/nvie/gitflow)）
