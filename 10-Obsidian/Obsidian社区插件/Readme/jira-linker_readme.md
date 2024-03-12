---
uid: 20231220115812
title: Obsidian 插件：【Readme】Jira Linker
tags: ['obsidian插件', 'readme']
description: 快速将Jira问题标签格式化为指向您的Jira实例的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Jira Linker

> [!Note] 插件名片
> - 插件名称：Jira Linker
> - 插件作者：Steven Zilberberg
> - 插件说明：快速将 Jira 问题标签格式化为指向您的 Jira 实例的链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/srz2/obsidian-jira-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jira-linker)

## 概述

快速将 Jira 问题标签格式化为指向您的 Jira 实例的链接。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/srz2/obsidian-jira-linker/master/README.md)

---

## Readme(翻译）

下面是 [[jira-linker]] 插件的自述翻译

# Jira 链接器

这是一个 [Obsidian](https://obsidian.md) 插件，可以快速添加以下内容：

 - Jira 问题的基于 Web 的 URL
 - 问题的本地文件夹的基于 URI 的 URL

## 可用命令

1. **链接 Jira 问题**

这将链接到给定 Jira 问题的 Jira 实例

注意：必须设置 *Jira 实例 URL*

1. **链接 Jira 问题到信息**

这将链接到给定 Jira 问题的本地文件。如果路径不存在，将会创建它

注意：必须设置 *本地问题路径*

注意：您可以选择更改 "main" 文件。默认为 "_Info"

## 演示

![演示动画](https://cdn.pkmer.cn/covers/jira-linker_2_0.gif)

## 如何使用

- 配置所需的设置：
  - 你的 Jira 实例 URL
  - 你的本地目录，即问题的根目录
  - 可选地配置默认的 "main" 文件
- 在编辑器中突出显示你的 Jira 问题，并调用 **Link Jira issue** 或 **Link Jira issue to info** 命令
  - 此外，你也可以没有选择任何内容，而是让一个模态框询问你的 Jira 问题
- 文本将被适当链接到 Jira 问题。



