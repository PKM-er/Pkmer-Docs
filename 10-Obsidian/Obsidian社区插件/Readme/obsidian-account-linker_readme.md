---
uid: 2023120719215210
title: Obsidian 插件：【Readme】Account Linker
tags: ['obsidian插件', 'readme']
description: 用于在前台描述外部服务账户的插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Account Linker

> [!Note] 插件名片
> - 插件名称：Account Linker
> - 插件作者：qwegat
> - 插件说明：用于在前台描述外部服务账户的插件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/qwegat/Obsidian-Account-Linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-account-linker)

## 概述

用于在前台描述外部服务账户的插件

![Account Linker](https://cdn.pkmer.cn/covers/obsidian-account-linker.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/qwegat/Obsidian-Account-Linker/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-account-linker]] 插件的自述翻译

# Obsidian 账户链接器

这是一个 Obsidian 插件，用于在正文中系统地列出外部网站的账户。

- 输入：

![](https://cdn.pkmer.cn/covers/obsidian-account-linker_2_0.png!pkmer)

- 预览：

![](https://cdn.pkmer.cn/covers/obsidian-account-linker_2_1.png!pkmer)

- 设置：

![](https://cdn.pkmer.cn/covers/obsidian-account-linker_2_2.png!pkmer)

## 特点

- 根据 frontmatter 的描述生成配置服务的链接按钮
- 可用的设置如下：
  - 服务的名称
  - 服务的基本颜色
  - URI 替换规则（目前仅支持 `{{NAME}}`）
  - 账户名称替换规则（目前仅支持 `{{NAME}}`）
- 通过使用 URI schemes（如 `mailto:` 或 `obsidian://`）进行更高级的配置

## 待办事项

- 从 URI 中反向生成账户名称
- 在链接上设置网站图标

## 许可证

MIT
