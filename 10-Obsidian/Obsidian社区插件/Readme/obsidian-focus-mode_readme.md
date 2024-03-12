---
uid: 20231220115812
title: Obsidian 插件：【Readme】Focus Mode
tags: ['界面相关', 'obsidian插件', 'readme']
description: 在 Obsidian 中添加专注模式，快速关闭各种panel，让你专注在当前笔记上。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Focus Mode

> [!Note] 插件名片
> - 插件名称：Focus Mode
> - 插件作者：ryanpcmcquen
> - 插件说明：在 Obsidian 中添加专注模式，快速关闭各种 panel，让你专注在当前笔记上。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ryanpcmcquen/obsidian-focus-mode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-focus-mode)

## 概述

在 Obsidian 中添加专注模式，快速关闭各种 panel，让你专注在当前笔记上。

![Focus Mode](https://cdn.pkmer.cn/covers/obsidian-focus-mode.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ryanpcmcquen/obsidian-focus-mode/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-focus-mode]] 插件的自述翻译

Obsidian 专注模式

为 Obsidian 添加专注模式。

![专注模式演示](https://cdn.pkmer.cn/covers/obsidian-focus-mode_1_0.gif)

现在还有“超级专注”模式（<kbd>Shift</kbd> + `左键单击`），它只会专注于活动窗格。在普通的 `左键单击` 上仍然存在原始行为。

![超级专注模式和命令/热键演示](https://cdn.pkmer.cn/covers/obsidian-focus-mode_1_1.gif)

### 快捷键

| 快捷键                                                                | 动作                                     |
| ---------------------------------------------------------------------- | ------------------------------------------ |
| <kbd>Cmd/Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Z</kbd>                    | 切换焦点模式                          |
| <kbd>Cmd/Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | 切换超级焦点模式（仅活动窗格） |

### 自定义插件的外观

根据状态，将类添加到 `document.body` 中。`focus-mode` 存在于普通模式和超级专注模式中，而 `super-focus-mode` 仅存在于超级专注模式中（惊喜！）。

以下 CSS 代码片段添加到 vault 中将去除非活动行的不透明度：

```css
.focus-mode .cm-s-obsidian .cm-line:not(.cm-active),
.focus-mode .cm-s-obsidian div:not(.CodeMirror-activeline) > .CodeMirror-line {
    opacity: 1 !important;
    filter: saturate(1) !important;
}
```

---

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/obsidian-focus-mode/` 目录下。



