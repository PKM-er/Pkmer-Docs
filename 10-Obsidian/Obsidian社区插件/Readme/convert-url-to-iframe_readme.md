---
uid: 2023120719252541
title: Obsidian 插件：【Readme】Convert url to preview (iframe)
tags: ['转换工具', '链接处理', 'obsidian插件', 'readme']
description: 将一个url（例如youtube）转换为一个iframe（预览）
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Convert url to preview (iframe)

> [!Note] 插件名片
> - 插件名称：Convert url to preview (iframe)
> - 插件作者：FHachez
> - 插件说明：将一个 url（例如 youtube）转换为一个 iframe（预览）
> - 插件分类：[' 转换工具 ', ' 链接处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/FHachez/obsidian-convert-url-to-iframe)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?convert-url-to-iframe)

## 概述

将一个 url（例如 youtube）转换为一个 iframe（预览）

![Convert url to preview (iframe)](https://cdn.pkmer.cn/covers/convert-url-to-iframe_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/FHachez/obsidian-convert-url-to-iframe/master/README.md)
>

---

## Readme(翻译）

下面是 [[convert-url-to-iframe]] 插件的自述翻译

# Obsidian 插件：将 URL（例如 YouTube）转换为 iframe（预览）[![GitHub标签（按日期最新）](https://img.shields.io/github/v/tag/FHachez/obsidian-convert-url-to-iframe)](https://github.com/FHachez/obsidian-convert-url-to-iframe/releases) ![GitHub所有版本](https://img.shields.io/github/downloads/FHachez/obsidian-convert-url-to-iframe/total)

**将任何 URL 转换为预览。**

![演示](https://cdn.pkmer.cn/covers/convert-url-to-iframe_2_0.gif)

1. 选择一个 URL
2. 右键单击它（或使用命令“转换为 URL 预览”）
3. 点击“Url to Preview/Iframe”。
![上下文菜单](https://cdn.pkmer.cn/covers/convert-url-to-iframe_2_1.png!pkmer)

默认快捷键是 `cmd + alt + i`。

# 安装

在设置中启用对第三方插件的支持（Obsidian > 设置 > 第三方插件 > 安全模式 - 关闭）

要安装此插件，请从 GitHub 发布页面下载 zip 压缩包。将压缩包解压到<vault>/.obsidian/plugins 目录中。

# 更新日志

## 0.5.0

- 始终允许 iframe 全屏。将来将成为一个选项
- 启用移动模式。

## 0.4.0

- 现在我们不再使用自定义映射来嵌入 YouTube，而是依赖于 OEmbed 标准。感谢<https://www.npmjs.com/package/oembed-parser>
    - 这样可以保留 YouTube 上的时间戳，并为许多网站获取默认大小。
- 添加上下文菜单（右键单击链接）![contextual menu](https://cdn.pkmer.cn/covers/convert-url-to-iframe_2_1.png!pkmer)

## 0.3.0

- 通过利用 `aspect-ratio` css，简化在使用最新 Obsidian 下载时的输出。

## 0.2.0

- 更新：将快捷键从 `Mode + Shift + I` 更改为 `Alt + I`（[Issue 4](https://github.com/FHachez/obsidian-convert-url-to-iframe/issues/4)）
- 仅在控制台中输出应用程序名称（[Issue 3](https://github.com/FHachez/obsidian-convert-url-to-iframe/issues/3)）
- 添加一个纵横比（默认为 16:9 纵横比）（Kankaristo）。
- 确保 iframe 可以在没有 CSS 类的情况下工作（Kankaristo）
- 修复使用滑动窗格插件时的错误调整大小问题（[Issue 1](<https://github.com/FHachez/obsidian-convert-url-to-iframe/issues/1）（Kankaristo）>
- 更好的用户消息和 README.md（Kankaristo）
- 保留 Youtube 的时间戳 [Issue 14](https://github.com/FHachez/obsidian-convert-url-to-iframe/issues/14)
- 允许全屏 iframe [Issue 8](https://github.com/FHachez/obsidian-convert-url-to-iframe/issues/8)

## 0.1.0

首次发布

# 谢谢

- [Sami Kankaristo](https://github.com/kankaristo)



