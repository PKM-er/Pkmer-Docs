---
uid: 2023120719251819
title: Obsidian 插件：【Readme】Completr
tags: ['obsidian插件', 'readme']
description: 这个插件提供了针对LaTeX、Frontmatter和标准写作的高级自动完成功能。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Completr

> [!Note] 插件名片
> - 插件名称：Completr
> - 插件作者：tth05
> - 插件说明：这个插件提供了针对 LaTeX、Frontmatter 和标准写作的高级自动完成功能。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tth05/obsidian-completr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-completr)

## 概述

这个插件提供了针对 LaTeX、Frontmatter 和标准写作的高级自动完成功能。

![Completr](https://cdn.pkmer.cn/covers/obsidian-completr.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tth05/obsidian-completr/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-completr]] 插件的自述翻译

# Completr

[![](https://img.shields.io/github/v/release/tth05/obsidian-completr?style=flat-square)](https://github.com/tth05/obsidian-completr/releases)

![](https://img.shields.io/github/downloads/tth05/obsidian-completr/total?style=flat-square)

该插件为 Obsidian 提供了高级的自动补全功能。不支持旧版编辑器。

## 特点

- 支持 Latex
    - 无需以 `\` 开头
    - 包含所有 MathJax 命令
    - 允许为所有环境补全 `\begin...`
    - 支持插入带有占位符的片段
- 支持 YAML Front Matter
    - 学习任何键和任何值，并为其提供补全
- 支持单词列表
    - 加载每行为一个单词的文件
    - 即使对于非常大的 [列表](#寻找单词列表)，也具有高性能
- 扫描您的存储库以查找单词
    - 扫描当前文件或整个存储库以查找新单词，然后可以提供建议

安装

### 社区插件列表

浏览社区插件列表并搜索 `Completr`。

### 手动安装

- 从您选择的版本中下载 `main.js, styles.css` 和 `manifest.json` 文件
- 将这三个文件复制到您的保险库 `VaultFolder/.obsidian/plugins/obsidian-completr/` 目录下

### 安装完成后

1. 重新启动 Obsidian 以确保内部钩子能够正确注册
2. 查看 [快捷键](#hotkeys) 部分以进一步配置插件

配置

### 黑名单

- 您可以将任何建议添加到 `.obsidian/plugins/obsidian-completr/blacklisted_suggestions.txt` 文件中进行黑名单处理
- 或者，您可以使用热键将当前选定的建议加入黑名单（默认为 `Shift+D`）

### LaTeX 命令

- 所有默认的 LaTeX 命令可以在 `.obsidian/plugins/obsidian-completr/latex_commands.json` 文件中找到
- 您可以通过编辑此文件来添加、删除或修改命令
- 替换语法
    - `#` 是片段的占位符
    - `~` 标记光标要跳转到的位置。这不能与占位符在同一行上
    - `\n` 是换行符
- 如果文件包含错误的语法，将弹出一个通知，并且控制台将包含更详细的错误消息

### 快捷键

- 所有的快捷键都可以在快捷键设置页面中进行更改。
- “绕过”快捷键非常有用，可以运行操作，假装弹出窗口没有打开。
    - 例如，如果你的插入键是 `Enter`，在弹出窗口打开时，你无法按下 `Enter` 键换行。这时你可以使用绕过键。
    - 这还允许使用其他修饰键，例如按下 `Tab` 可能需要按住 `Shift` 键向后移动。只有在绕过键绑定中未使用的修饰键才会被转发。
    - 注意：默认的绕过快捷键可能会被内置命令覆盖。如果它们不起作用，请检查你的按键绑定。
- 如果你想要更改一个没有使用任何修饰键的快捷键，你需要使用一个可以在 [这里](https://forum.obsidian.md/t/be-able-of-using-the-function-keys-f1-f12-to-perform-functions/15748/7) 或 [这里](https://forum.obsidian.md/t/function-keys-cant-be-bound-as-hotkeys-without-modifiers/26956/4) 找到的解决方法，因为 Obsidian 目前不支持这个功能。

## 示例用法

#### Latex 片段

![Latex](https://cdn.pkmer.cn/covers/obsidian-completr_1_2.gif)

#### YAML 前置内容

![前置内容](https://cdn.pkmer.cn/covers/obsidian-completr_1_3.gif)

#### 文件扫描

![文件扫描器](https://cdn.pkmer.cn/covers/obsidian-completr_1_4.gif)

两百万个德语单词已加载

寻找词汇列表？

- <https://sourceforge.net/projects/germandict/>
- <https://github.com/kpym/FrequencyDictionaries>

## 开发

- 将仓库克隆到 Obsidian Vault 的 `plugins` 文件夹中
- 运行 `npm i` 和 `npm run dev`
- 在 Obsidian 中启用插件



