---
uid: 1793625612878000
title: "Obsidian 插件：File to Code Block"
tags: ["编程与脚本", "文件管理", "编辑工具", "obsidian插件"]
description: "Insert text files (such as dotfiles or scripts) from your computer into the current note as fenced code blocks, with the language detected from the file name. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：File to Code Block

> [!Note] 插件名片
> - 插件名称：File to Code Block
> - 插件作者：medusero
> - 插件说明：Insert text files (such as dotfiles or scripts) from your computer into the current note as fenced code blocks, with the language detected from the file name. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/medusero/file-to-code-block-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-to-code-block)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/medusero/file-to-code-block-obsidian-plugin/master/README.md)



## 概述

File to Code Block 旨在解决将电脑本地文本文件快速嵌入 Obsidian 笔记的痛点。它允许用户通过命令面板输入文件绝对路径，将指定文件内容以围栏代码块的形式插入到当前笔记的光标位置。插件会自动根据文件名识别编程语言，例如将 `.zshrc` 识别为 `bash`，将 `.gitconfig` 识别为 `ini`，从而省去手动标注语言类型的麻烦，让笔记中的代码片段具备正确的语法高亮效果。

典型的使用场景包括备份个人配置文件或记录脚本代码。例如，当你需要整理开发环境时，可以直接将本地的 `.zshrc` 或 `.gitconfig` 文件插入笔记，方便日后查阅或迁移。同样，如果你编写了一个简短的 Shell 或 Python 脚本，也可以直接将其内容嵌入笔记中，作为文档的一部分进行归档，无需手动复制粘贴并调整格式。

相比其他文件导入插件，该工具专注于“代码块”这一特定形式，并内置了常见的文件名与语言映射表，支持用户自定义扩展名到语言的映射规则。此外，插件具备安全保护机制，拒绝导入超过 2 MB 或行数超过 1000 行的文件，防止误选大型日志或二进制文件导致笔记崩溃。错误提示也不会泄露系统路径，且插件仅执行读取操作，不会修改 Vault 以外的任何文件。

需要注意的是，该插件仅支持桌面端，因为移动端 Obsidian 无法使用 Node.js 读取本地文件系统。因此，如果你主要在手机端使用 Obsidian，此插件无法发挥作用。此外，它不适合导入图片、PDF 等非文本文件，也不适合处理超大文件。如果 Obsidian 的高亮器不支持你指定的语言，插件会给出提示，但代码块仍会插入，只是阅读视图中可能缺少高亮效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


