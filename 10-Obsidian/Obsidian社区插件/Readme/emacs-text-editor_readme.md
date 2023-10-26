---
uid: 2023102611074362
title: Obsidian 插件：【Readme】Emacs text editor
tags: ['obsidian插件', 'readme']
description: 部分模拟 Emacs 文本编辑器以用于 Obsidian。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Emacs text editor

> [!Note] 插件名片
> - 插件名称：Emacs text editor
> - 插件作者：Klojer
> - 插件说明：部分模拟 Emacs 文本编辑器以用于 Obsidian。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Klojer/obsidian-emacs-text-editor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?emacs-text-editor)

## 概述

部分模拟 Emacs 文本编辑器以用于 Obsidian。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Klojer/obsidian-emacs-text-editor/main/README.md)
> 

---

## Readme(翻译）

下面是 [[emacs-text-editor]] 插件的自述翻译


# Emacs文本编辑器适用于Obsidian

该插件添加了一些命令，以使用具有类似Emacs键绑定的Obsidian。
## 项目目的

这个插件的目的是：
1. 基本模仿 Emacs 命令，使 Emacs 用户的文本编辑更加流畅

这个插件**不是**以下内容：
1. 实现完整的 GNU Emacs 功能并将 elisp 集成到 Obsidian 中
2. 精确复制 GNU Emacs 命令的行为
如何安装

运行：

```
export OBSIDIAN_PLUGINS_DIR=/path/to/obsidian/vault/.obsidian/plugins
make install
```
## 如何卸载

```
export OBSIDIAN_PLUGINS_DIR=/path/to/obsidian/vault/.obsidian/plugins
make uninstall
```
## 键绑定配置示例

| 快捷键                  | Obsidian命令           | 描述               |
| ----------------------- | -------------------------- | ------------------------- |
| Ctrl + b                | 向后移动一个字符              | 将光标向后移动一个字符 |
| Alt + Backspace         | 向后删除一个单词         | 向后删除一个单词 |
| Alt + b                 | 向后移动一个单词              | 将光标向后移动一个单词 |
| Alt + Shift + ,         | 移动到缓冲区开头        | 移动到缓冲区的开头 |
| Ctrl + d                | 删除字符                | 删除下一个字符 |
| Alt + Shift + .         | 移动到缓冲区结尾              | 移动到缓冲区的结尾 |
| Ctrl + f                | 向前移动一个字符               | 将光标向前移动一个字符 |
| Alt + f                 | 向前移动一个单词               | 将光标向前移动一个单词 |
| Ctrl + g                | 键盘退出              | 发出“退出”信号（仅适用于选择） |
| Ctrl + k                | 删除行                  | 删除当前行的剩余部分 |
| Ctrl + w                | 删除区域                | 剪切选定的区域 |
| Alt + w                 | 保存到剪贴板             | 复制选定的区域    |
| Alt + d                 | 删除单词                  | 删除直到单词的末尾 |
| Ctrl + a                | 移动到行的开头     | 将光标移动到行的开头 |
| Ctrl + e                | 移动到行的结尾           | 将光标移动到行的结尾 |
| Ctrl + n                | 下一行                  | 将光标移动到下一行 |
| Ctrl + p                | 上一行              | 将光标移动到上一行 |
| Ctrl + l                | 重新居中                   | 滚动窗口以使当前行居中 |
| Ctrl + Shift + -        | 重做                       | 重做 |
| Ctrl + Space            | 设置标记命令           | 标记选择的开始位置 |
| Ctrl + /                | 撤销                       | 撤销 |
| Ctrl + y                | 粘贴                       | 粘贴（粘贴）剪切或复制的区域 |
| Alt + x                 | 打开命令面板       | 打开命令面板 |
## 已知问题

1. 移动到行首的快捷键 (Ctrl + a) 与全选操作冲突。解决方案：使用 Home/End + Shift。
2. 与现有热键冲突。解决方案：使用额外的插件来自定义绑定，例如 https://github.com/tgrosinger/leader-hotkeys-obsidian。



